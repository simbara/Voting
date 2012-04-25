#!/usr/bin/python
import re
from ballotTree import Contest, Race, Candidate
from subprocess import call

site_root = '/Users/Voter/.virtualenvs/django/tutorial/mysite/media/'

class Parser:
	def __init__(self, fileLoc):
		self.inFile = fileLoc
		self.pCandidate = re.compile('Candidate:\s*(.+)', re.IGNORECASE)
		self.pRace = re.compile('Race:\s*(.+):(.+)', re.IGNORECASE)
		self.pContest = re.compile('Contest:\s*(.+)', re.IGNORECASE)
		self.races = []
    
	def parse(self):
		f = open(self.inFile, 'r')
		for line in f:
			mCandidate = self.pCandidate.match(line)
			mRace = self.pRace.match(line)
			mContest = self.pContest.match(line)
			if mRace:
				race = Race(mRace.group(1), mRace.group(2), "")
				self.races.append(race)
			elif mContest:
				contest = Contest(mContest.group(1), "")
				race.selectionList.append(contest)
			elif mCandidate:
				c = Candidate(mCandidate.group(1), "")
				contest.selectionList.append(c)
		return race

	def export(self, race):
		# Export Race audio
		print "Exporting .wav files for Race '" + race.name + "'"
		path = site_root + "race.wav"
		call(["say", "-o", path, "--data-format=LEF32@16000", race.instructions])
		race.audioPath = "media/race.wav"

		#Export Contests
		for i, contest in zip(range(len(race.selectionList)), race.selectionList):
			print "Exporting .wav files for Contest '" + contest.name + "'"
			path = site_root + "contest" + str(i+1) + ".wav"
			call(["say", "-o", path, "--data-format=LEF32@16000", contest.name])
			contest.audioPath = "media/contest" + str(i+1) + ".wav" 

			# Export Candidates
			for j, candidate in zip(range(len(contest.selectionList)), contest.selectionList):
				print "Exporting .wav files for Candidate '" + candidate.name + "'"
				path = site_root + "contest" + str(i+1) + "_candidate" + str(j+1) + ".wav"
				call(["say", "-o", path, "--data-format=LEF32@16000", candidate.name])
				candidate.audioPath = "media/contest" + str(i+1) + "_candidate" + str(j+1) + ".wav" 
		print "Export done!"
	
		# Export static speech
		f = open('speeches')
		for line in f.readlines():
			#import pdb; pdb.set_trace();
			matchStr = re.search(r'(.*)\t(.*)', line, re.IGNORECASE)
			if matchStr:
				print matchStr.groups()
				path = site_root + matchStr.group(1) + ".wav"
				call(["say", "-o", path, "--data-format=LEF32@16000", matchStr.group(2)])
		print "SpeechToText Done!"
			

def initTree():
	p = Parser("/Users/Voter/.virtualenvs/django/tutorial/mysite/pjBallot/ballot.txt")
	race = p.parse()
	p.export(race)
	return race

def testTree():   
	p = Parser("/Users/Voter/.virtualenvs/django/tutorial/mysite/pjBallot/ballot.txt")
	race = p.parse()
	print "Race:", race.name, ", Instructions:", race.instructions
	for contest in race.selectionList:
		print "\tContest:", contest.name
		for person in contest.selectionList:
			print "\t\tCandidate:", person.name
    
    
#Main stuff
initTree()

