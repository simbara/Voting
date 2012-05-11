class Race(object):
    def __init__(self, name, instr, audioPath):
        self.selectionList = []
        self.name = name
        self.instructions = instr
        self.audioPath = audioPath
        
class Contest(object):
    def __init__(self, name, audioPath):
        self.name = name 
        self.audioPath = audioPath
        self.selectionList = [] #candidates
        self.userSelection = []

class Candidate(object):
    def __init__(self, name, audioPath):
        self.name = name
        self.audioPath = audioPath

def test(): print 'polls'