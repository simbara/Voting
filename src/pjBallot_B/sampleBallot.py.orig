#import pyprintx
from fysom import Fysom
import ParseModule

#engine = pyprintx.init()
race = ParseModule.initTree()
    
#def print(text):
#    engine.stop()
#    print text
#    engine.say(text)
#    engine.runAndWait()

def goToNextState(obj, pos, okToAdvance=True, contestPos=None):
    if fsm.current == 'contests':
        #print 'LOOK: current is contests, obj is ', obj, 'pos is ', pos, 'contestPos is ', contestPos
        fsm.selectContest(race=obj, contestPos=pos)
    elif fsm.current == 'candidates':
        #print 'LOOK: current is candidates, obj is ', obj, 'pos is ', pos, 'contestPos is ', contestPos
        fsm.reviewCandidates(choice=obj, pos=pos, contestPos=contestPos)
    elif fsm.current == 'review_candidates':
        if not okToAdvance:
            #print 'LOOK: current is review_candidates, obj is ', obj, 'pos is ', pos, 'contestPos is', contestPos
            fsm.reselectCandidates(race=obj, contestPos=contestPos)
        else:
            fsm.doneReview()
    elif fsm.current == 'check_done':
        if obj is not None:
            fsm.nextContest(race=obj, pos=pos)
        else:
            fsm.reviewBallot(race=obj, pos=pos)
    elif fsm.current == 'review_ballot':
        if okToAdvance:
            fsm.doneBallot()
        else:
            fsm.reselectContest() #TODO
        
        
'''
Traverse the list as provided by the 'obj', which can be either of type Race or Contest
If the 'store' argument is true, we are not only traversing a Contest's Candidates, we want to store
whatever selection the user made in the 'Contest.userSelection' list
'''
def traverselist(obj, contestPos=None):
    alist = obj.selectionList
    pos = 0
    print('* ' + alist[pos].name + ' highlighted *')
    while 1:
        kb = raw_input('\'y\' up, \'n\' down, \'h\' selects: ')
        #if fsm.current == 'contests':
        #    if kb.strip() == 'g':
        #else:
        if kb.strip() == 'y':
            pos = (pos+1) if (pos+1<len(alist)) else 0
        elif kb.strip() == 'n':
            pos = len(alist)-1 if (pos-1<0) else pos-1
        elif kb.strip() == 'h':
            break;    
        print('* ' + alist[pos].name + ' highlighted *')

    if fsm.current == 'candidates':
        #print 'CANDIDATES LOOK: obj is', obj.name, 'pos is ', pos, 'contestPos is ', contestPos
        goToNextState(obj, pos, contestPos=contestPos)
    else:
        #print 'DEFAULT GOTO, obj is', alist[pos], 'pos is ', pos, 'contestPos is ', contestPos
        goToNextState(alist[pos], pos, contestPos=contestPos)

'''
Define State Behaviors
'''
def printstatechange(e):
    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)

def onintro(e): 
    print 'hello!'
    
def oncontests(e): 
    print('\nThe contests are:')
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        print('\t' + str(i+1) + ') ' + contest.name) 
    traverselist(race)

# e.pos: the current Contest, which is the position in the race.selectionList
def oncandidates(e): 
    print('\nCurrent race is: ' + e.race.name)
    print('Candidates are:')
    currContest = race.selectionList[e.contestPos]
    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):
        print("\t" + str(i+1) + ') ' + person.name)
    traverselist(currContest, contestPos=e.contestPos)

# e.pos: the user's selection in the position of the list
def onreviewcandidates(e):
    print('\nReview Your Choice for ' + e.choice.name + ':')
    candidate = e.choice.selectionList[e.pos]
    print('\t' + candidate.name)
    
    currChoice = 0
    print('* <YES> highlighted *')
    while 1:
        kb = raw_input('\'y\' up, \'n\' down, \'h\' selects: ')
        if kb.strip() == 'y':
            currChoice += 1
        elif kb.strip() == 'n':
            currChoice -= 1
        elif kb.strip() == 'h':
            print("\t* CONFIRMED")
            break;
        if currChoice % 2 == 0:
            print('\t* <YES> highlighted *')
        else:
            print('\t* <NO> highlighted *')
        
    if currChoice % 2 == 0:
        e.choice.userSelection[:] = []
        e.choice.userSelection.append(e.pos)
        goToNextState(None, None, okToAdvance=True)
    else:
        goToNextState(e.choice, e.pos, contestPos=e.contestPos, okToAdvance=False)

def oncheckdone(e):
    for i, contest in zip(range(len(race.selectionList)), race.selectionList):
        if len(contest.userSelection) == 0:
            goToNextState(contest, i)
            return
    goToNextState(None, None)

# fsm.reviewBallot(race=obj, pos=pos)
def onreviewballot(e):
    print('\nReview your selections:')
    for contest in race.selectionList:
        print(contest.name + ':' + contest.selectionList[contest.userSelection[0]].name)
        
    currChoice = 0
    print('* <YES> highlighted *')
    while 1:
        kb = raw_input('\'y\' up, \'n\' down, \'h\' selects: ')
        if kb.strip() == 'y':
            currChoice += 1
        elif kb.strip() == 'n':
            currChoice -= 1
        elif kb.strip() == 'h':
            print("\t* CONFIRMED")
            break;
        if currChoice % 2 == 0:
            print('\t* <YES> highlighted *')
        else:
            print('\t* <NO> highlighted *')
        
    if currChoice % 2 == 0:
        goToNextState(None, None)
    else:
        goToNextState(e.race, e.pos, okToAdvance=False) # TODO
    
    
def ondoneballot(e):
    print('\nVoting complete! Thanks for using this system!')

'''
States and Events
'''
fsm = Fysom({
  'initial': 'intro',
  'events': [
    {'name': 'startVoting',  'src': 'intro',  'dst': 'contests'},
    {'name': 'selectContest', 'src': 'contests',   'dst': 'candidates'},
    {'name': 'reviewCandidates',  'src': 'candidates',   'dst': 'review_candidates'},
    {'name': 'reselectCandidates', 'src': 'review_candidates', 'dst': 'candidates'},
    {'name': 'doneReview',  'src': 'review_candidates',   'dst': 'check_done'},
    {'name': 'nextContest', 'src': 'check_done',  'dst': 'contests'},
    {'name': 'otherContest', 'src': 'contests',  'dst': 'contests'}, # TODO
    {'name': 'reviewBallot', 'src': 'check_done', 'dst': 'review_ballot'},
    {'name': 'reselectContest', 'src': 'review_ballot', 'dst': 'contests'}, # TODO
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

fsm.startVoting()