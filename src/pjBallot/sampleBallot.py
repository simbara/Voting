from __pyjamas__ import JS
from fysom import Fysom
from ballotTree import Race
from pyjamas.ui import KeyboardListener
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.HTML import HTML
import time

contestPosition = 0
candidatePosition = 0
confirm = 0
currObj = ""

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

#

JS("""
var mainSnd = new Audio();
var snd1 = new Audio();
""")

race = Race('', [], '', '')

# TODO: make a version to play multiple audio files sequentially if provided a list
def playAudio(audioPath, confirm=None):
    global currObj
    
    #path = "http://10.0.22.220/" + currObj.audioPath
    path = "/Users/kurifuc4/Projects/mysite/" + audioPath#+ currObj.audioPath
    
    # Say the word "Confirm" before the provided audio path
    if confirm == True:
        confirmPath = "/Users/kurifuc4/Projects/mysite/media/confirm.wav"
        #confirmPath = "http://10.0.22.220/media/confirm.wav"
        JS('''
        snd1.src = confirmPath;
        snd1.addEventListener('ended', function() {
            mainSnd.src = path;
            mainSnd.play();
        }, false);
        snd1.play();
        ''')
    # Say the word "Reselect"
    elif confirm == False:
        confirmPath = "/Users/kurifuc4/Projects/mysite/media/reselectCandidate.wav"
        #confirmPath = "http://10.0.22.220/" + "media/reselectCandidate.wav"
        JS('''
        mainSnd.src = confirmPath;
        mainSnd.play();
        ''')
    # All other audio
    else:
        JS('''
        mainSnd.src = path;
        mainSnd.play();
        ''')
    
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
    global contestPosition, candidatePosition, fsm, currObj
    
    contestList = race.selectionList
    candidateList = race.selectionList[contestPosition].selectionList
    
    # Contests, only keys allowed are Up/Down to cycle contests, and Enter to select
    if fsm.current == 'contests':
        if keycode == KeyboardListener.KEY_UP:
            contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0
            currObj = race.selectionList[contestPosition]
        elif keycode == KeyboardListener.KEY_DOWN:
            contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1
            currObj = race.selectionList[contestPosition]
        elif keycode == KeyboardListener.KEY_ENTER:
            currObj = race.selectionList[contestPosition].selectionList[candidatePosition]
            fsm.selectCandidate()
            setCandidate()
            return
        else:
            return
        setContest()
        
    # Candidates; only keys allowed are Left/Right to cycle candidates, and Enter to select
    elif fsm.current == 'candidates':
        if keycode == KeyboardListener.KEY_RIGHT:
            candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0
            currObj = race.selectionList[contestPosition].selectionList[candidatePosition]
        elif keycode == KeyboardListener.KEY_LEFT:
            candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1
            currObj = race.selectionList[contestPosition].selectionList[candidatePosition]
        elif keycode == KeyboardListener.KEY_ENTER:
            fsm.reviewCandidates()
            setConfirm(0)
            return
        else:
            return
        setCandidate()
        
    # Review Candidate Selection: Yes or No, then proceed to end or back up to Candidates
    elif fsm.current == 'review_candidates':
        if keycode == KeyboardListener.KEY_RIGHT:
            setConfirm(1)
        elif keycode == KeyboardListener.KEY_LEFT:
            setConfirm(-1)
        elif keycode == KeyboardListener.KEY_ENTER:
            if confirm % 2 == 0:
                #race.selectionList[contestPosition].userSelection.append(candidatePosition)
                makeSelection() # TODO
                fsm.doneReview()
            else:
                fsm.reselectCandidates()
    
    # Review Ballot: Yes or No, then proceed to end or back up to Contests
    elif fsm.current == 'review_ballot':
        if keycode == KeyboardListener.KEY_RIGHT:
            setConfirm(1)
        elif keycode == KeyboardListener.KEY_LEFT:
            setConfirm(-1)
        elif keycode == KeyboardListener.KEY_ENTER:
            if confirm % 2 == 0:
                fsm.doneBallot()
            else:
                fsm.reselectContest()

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
    fsm.reviewBallot()

def onreviewballot(e):
    text = "Review your selections:"
    print('\n'+text)
    playAudio("/media/reviewBallot.wav")
    paths = []
    for contest in race.selectionList:
        print(contest.name + ':' + contest.userSelection[0].name)
        paths.append(contest.audioPath)
        paths.append(contest.userSelection[0].audioPath)
        #playAudio(contest.audioPath)
    print paths
    # TODO: play each audio file in this paths var
    
def ondoneballot(e):
    print('\nVoting complete! Thanks for using this system!')
    playAudio("/media/finish.wav")


'''
States and Events
'''
fsm = Fysom({
  'initial': 'intro',
  'events': [
    {'name': 'startVoting', 'src': 'intro', 'dst': 'contests'},
    {'name': 'selectCandidate', 'src': 'contests', 'dst': 'candidates'},
    {'name': 'reviewCandidates', 'src': 'candidates', 'dst': 'review_candidates'},
    {'name': 'reselectCandidates', 'src': 'review_candidates', 'dst': 'candidates'},
    {'name': 'doneReview', 'src': 'review_candidates', 'dst': 'check_done'},
    {'name': 'nextContest', 'src': 'check_done', 'dst': 'contests'},
    {'name': 'otherContest', 'src': 'contests', 'dst': 'contests'}, 
    {'name': 'reviewBallot', 'src': 'check_done', 'dst': 'review_ballot'},
    {'name': 'reselectContest', 'src': 'review_ballot', 'dst': 'contests'}, 
    {'name': 'doneBallot', 'src': 'review_ballot', 'dst': 'done_ballot'},
  ],
    'callbacks': {
     'onintro': onintro,
     'oncontests': oncontests,
     'oncandidates': oncandidates,
     'onreview_candidates': onreviewcandidates,
     'oncheck_done': oncheckdone,
     'onreview_ballot': onreviewballot,
     'ondone_ballot': ondoneballot
    }
})


'''
Assign State Behaviors
'''

#fsm.onchangestate = printstatechange
#fsm.startVoting()
    
