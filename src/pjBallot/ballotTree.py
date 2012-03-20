class Race(object):
    def __init__(self, name, selectionList, instructions, audioPath):
        self.name = name
        self.selectionList = selectionList
        self.instructions = instructions
        self.works = "worker"
        self.audioPath = audioPath
    
    def __repr__(self):
        return '<pjBallotObj>'
        
class Contest(object):
    def __init__(self, name, selectionList=None, userSelection=None, audioPath=None):
        self.name = name
        if audioPath is None:
            self.audioPath = "" 
        if selectionList is None: 
            self.selectionList = []
        else: self.selectionList = selectionList #candidates
        if userSelection is None: 
            self.userSelection = []
        else: self.userSelection = userSelection
        
class Candidate(object):
    def __init__(self, name, audioPath):
        self.name = name
        self.audioPath = audioPath

