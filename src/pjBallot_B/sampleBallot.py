from __pyjamas__ import JS
from fysom import Fysom
from ballotTree import Race
from pyjamas.ui import KeyboardListener
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.HTML import HTML

#from audioControls_buzz import playAudio, pauseAudio, isPlayingAudio, playAudioList
from audioControls import playAudio, pauseAudio, isPlayingAudio, playAudioList

import buzz.js

JS('''
var mySound1 = new buzz.sound("http://10.0.22.220/media/finish.wav");
var mySound2 = new buzz.sound("http://10.0.22.220/media/race.wav");
''')

contestPosition = 0
candidatePosition = 0
confirm = 0
currObj = ""
review_path = []

contest = HorizontalPanel()
contest.setStyleName('words')
candidate = HorizontalPanel()
candidate.setStyleName('words')
selection = HorizontalPanel()
selection.setStyleName('words')
status = HorizontalPanel()
status.add(HTML('STATUS'))
status.setStyleName('words')

title = HorizontalPanel()
instructions = HorizontalPanel()

race = Race('', [], '', '')
  
          
def sendRace(srace):
    global race
    race = srace
    
def getInstruction():
    return race.name

def setContest():
    global candidatePosition
    curcontest = race.selectionList[contestPosition]
    contest.clear()
    contest.add(HTML('<b /> Contest: %s' % curcontest.name))
    candidateList = curcontest.selectionList
    if not curcontest.userSelection:
        candidatePosition = 0
        selection.clear()
        selection.add(HTML('<b /> Selection: -'))
    else:
        candidatePosition = candidateList.index(curcontest.userSelection[-1]) 
        selection.clear()
        selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))
    playAudio(currObj.audioPath)
    print currObj.audioPath #TODO
    
def setConfirm(num):
    confirm += num;
    status.clear()
    if confirm % 2 == 0:
        status.add(HTML('YES'))
        if fsm.current == "review_ballot":
            playAudio("/media/ballot.wav", confirm=True)
        else:
            playAudio(currObj.audioPath, confirm=True)
        return True
    else:
        status.add(HTML('NO'))
        playAudio(currObj.audioPath, confirm=False)
        return False
    
def setCandidate():
    curcontest = race.selectionList[contestPosition]
    candidateName = curcontest.selectionList[candidatePosition].name
    candidate.clear()
    candidate.add(HTML('<b /> Candidate: %s' % candidateName))
    playAudio(currObj.audioPath)
    
def makeSelection():
    curcontest = race.selectionList[contestPosition]
    curcandidate = curcontest.selectionList[candidatePosition]
    curcontest.userSelection[:] = []
    curcontest.userSelection.append(curcandidate)
    selection.clear()
    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))
    
def onKeyPress(sender, keycode, modifiers):
    global contestPosition, candidatePosition, fsm, currObj, confirm
    
    contestList = race.selectionList
    candidateList = race.selectionList[contestPosition].selectionList
    
    if keycode == KeyboardListener.KEY_SHIFT:
#        audioPath = ['media/contest1.wav', 'media/contest1_candidate1.wav', 'media/contest2.wav', 'media/contest2_candidate1.wav', 'media/contest3.wav', 'media/contest3_candidate1.wav']
#        playAudioList(audioPath)
#        JS('''
#        mainSnd.playbackRate = 2.0;
#        ''')
        JS('''
        mySound1.fadeOut(2000);
        ''')
    
    if keycode == KeyboardListener.KEY_CTRL:
        JS('''
        mySound1.setVolume(80);
        mySound1.play();
        ''')

    # Contests, only keys allowed are Up/Down to cycle contests, and Enter to select
    if keycode == KeyboardListener.KEY_UP:
        if fsm.current == 'contests' or fsm.current == 'candidates':
            contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0
            currObj = race.selectionList[contestPosition]
            setContest()
            candidate.clear()
            if fsm.current == 'candidates': fsm.reselectContest()
    
    elif keycode == KeyboardListener.KEY_DOWN:
        if fsm.current == 'contests' or fsm.current == 'candidates':
            contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1
            currObj = race.selectionList[contestPosition]
            setContest()
            candidate.clear()
            if fsm.current == 'candidates': fsm.reselectContest()
            
    elif keycode == KeyboardListener.KEY_RIGHT:
        print fsm.current
        if fsm.current == 'candidates' or fsm.current == 'change_candidates': 
            candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0
            currObj = race.selectionList[contestPosition].selectionList[candidatePosition]
            setCandidate()
#        elif fsm.current == 'review_candidates' or fsm.current == 'review_ballot':
#            setConfirm(1)
        elif fsm.current == 'review_candidates':
            pauseAudio()
            fsm.reselectCandidates()
            playAudio('', False) 
        elif fsm.current == 'review_ballot':
            fsm.inReviewChangeCandidates()

               
    
    elif keycode == KeyboardListener.KEY_LEFT:
        if fsm.current == 'candidates':
            candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1
            currObj = race.selectionList[contestPosition].selectionList[candidatePosition]
            setCandidate()
#        elif fsm.current == 'review_candidates' or fsm.current == 'review_ballot':
#            setConfirm(-1) TODO
    
    elif keycode == KeyboardListener.KEY_ENTER:
        pauseAudio();
        if fsm.current == 'contests':   
            currObj = race.selectionList[contestPosition].selectionList[candidatePosition]
            fsm.selectCandidate()
            setCandidate()
            return
        elif fsm.current == 'candidates' or fsm.current == 'change_candidates':
            fsm.reviewCandidates()
            setConfirm(0)
            return
        elif fsm.current == 'review_candidates':
            if confirm % 2 == 0:
                #race.selectionList[contestPosition].userSelection.append(candidatePosition)
                makeSelection() 
                playAudio(currObj.audioPath)
                fsm.doneReview()
                #onKeyPress('', KeyboardListener.KEY_DOWN, '')
            else:
                fsm.reselectCandidates()
                confirm = 0     #hack to make the count work. not happy with the whole count thing :(
        elif fsm.current == 'review_ballot':
            if len(review_path) != 0:
                contestPosition = contestPosition + 1
                review_contest = review_path.pop(0)
                review_selection = review_path.pop(0)
                audioList = [review_contest, review_selection]
                print audioList
                playAudioList(audioList)
            else:
                playAudio('media/finish.wav', 'play')
#            if confirm % 2 == 0:
#                fsm.doneBallot()
#            else:
#                fsm.reselectContest()
    
    else:
        return


'''
Traverse the list as provided by the 'obj', which can be either of type Race or Contest
'''
def traverselist(obj):
    alist = obj.selectionList
    print('* ' + alist[contestPosition].name + ' highlighted *')

'''
Define State Behaviors
'''
def printstatechange(e):
    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)

def onintro(e): 
    print 'hello!'
    
def oncontests(e): 
    candidate.clear()
    status.clear()
    print('\nThe contests are:')
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        print('\t' + str(i + 1) + ') ' + contest.name) 
    traverselist(race)
    # initialize our current object, which is the first contest
    currObj = race.selectionList[contestPosition]
    #print "current contest is " + currObj.name

# e.pos: the current Contest, which is the position in the race.selectionList
def oncandidates(e):
    status.clear()
    currContest = race.selectionList[contestPosition]
    print('\nCurrent race is: ' + currContest.name)
    print('Candidates are:')
    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):
        print("\t" + str(i + 1) + ') ' + person.name)
    traverselist(currContest)
    # initialize our current object, which is the first contest
    currObj = currContest.selectionList[contestPosition]
    print "current candidate is " + currObj.name

def onchangecandidates(e):
    global contestPosition, currObj
    status.clear()
    currObj = race.selectionList[contestPosition]
    setContest()
    candidate.clear()
    currContest = race.selectionList[contestPosition]
    print('\nCurrent race is: ' + currContest.name)
    print('Candidates are:')
    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):
        print("\t" + str(i + 1) + ') ' + person.name)
    traverselist(currContest)
    # initialize our current object, which is the first contest
    currObj = currContest.selectionList[contestPosition]
    print "current candidate is " + currObj.name

def onreviewcandidates(e):
    print('\nReview Your Choice for ' + race.selectionList[contestPosition].name + ':')
    candidate = race.selectionList[contestPosition].selectionList[candidatePosition]
    print('\t' + candidate.name)
    
def oncheckdone(e):
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        if len(contest.userSelection) == 0:
            fsm.nextContest()
            return
    # This is to delay program before review mode. arguments.callee calls the anonymous function again
    JS('''
    (function() {
    if ($m['isPlayingAudio']() == false) {
        $m.fsm['reviewBallot']();
    } else {
        setTimeout(arguments.callee,1500);
    }
    })();
    ''')

        
    
def onreviewballot(e):
    global contestPosition
    contestPosition = -1
    text = "Review your selections: "
    print('\n'+text)
    playAudio("media/reviewBallot.wav", 'play')
    for contest in race.selectionList:
        print(contest.name + ': ' + contest.userSelection[0].name)
        review_path.append(contest.audioPath)
        review_path.append(contest.userSelection[0].audioPath)
        #playAudio(contest.audioPath)
    print review_path
    # TODO: play each audio file in this review_path var
    
def ondoneballot(e):
    print('\nVoting complete! Thanks for using this system!')
    playAudio("media/finish.wav")


'''
States and Events
'''
fsm = Fysom({
  'initial': 'intro',
  'events': [
    {'name': 'startVoting', 'src': 'intro', 'dst': 'contests'},
    {'name': 'selectCandidate', 'src': 'contests', 'dst': 'candidates'},
    {'name': 'reselectContest', 'src': 'candidates', 'dst': 'contests'},
    {'name': 'reviewCandidates', 'src': 'candidates', 'dst': 'review_candidates'},
    {'name': 'reviewCandidates', 'src': 'change_candidates', 'dst': 'review_candidates'},
    {'name': 'reselectCandidates', 'src': 'review_candidates', 'dst': 'candidates'},
    {'name': 'doneReview', 'src': 'review_candidates', 'dst': 'check_done'},
    {'name': 'nextContest', 'src': 'check_done', 'dst': 'contests'},
    {'name': 'otherContest', 'src': 'contests', 'dst': 'contests'}, 
    {'name': 'reviewBallot', 'src': 'check_done', 'dst': 'review_ballot'},
    {'name': 'inReviewChangeCandidates', 'src': 'review_ballot', 'dst': 'change_candidates'}, 
    {'name': 'doneBallot', 'src': 'review_ballot', 'dst': 'done_ballot'},
  ],
    'callbacks': {
     'onintro': onintro,
     'oncontests': oncontests,
     'oncandidates': oncandidates,
     'onreview_candidates': onreviewcandidates,
     'oncheck_done': oncheckdone,
     'onreview_ballot': onreviewballot,
     'onchange_candidates': onchangecandidates,
     'ondone_ballot': ondoneballot
    }
})


'''
Assign State Behaviors
'''

#fsm.onchangestate = printstatechange
#fsm.startVoting()
    