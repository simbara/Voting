/* start module: sampleBallot */
$pyjs.loaded_modules['sampleBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sampleBallot'].__was_initialized__) return $pyjs.loaded_modules['sampleBallot'];
	var $m = $pyjs.loaded_modules["sampleBallot"];
	$m.__repr__ = function() { return "<module: sampleBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sampleBallot';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'sampleBallot.py, line 1:\n    from fysom import Fysom';
	$m.__track_lines__[2] = 'sampleBallot.py, line 2:\n    from ballotTree import Race';
	$m.__track_lines__[3] = 'sampleBallot.py, line 3:\n    from pyjamas.ui import KeyboardListener';
	$m.__track_lines__[4] = 'sampleBallot.py, line 4:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
	$m.__track_lines__[5] = 'sampleBallot.py, line 5:\n    from pyjamas.ui.HTML import HTML';
	$m.__track_lines__[7] = 'sampleBallot.py, line 7:\n    x = 0';
	$m.__track_lines__[8] = 'sampleBallot.py, line 8:\n    contestPosition = 0';
	$m.__track_lines__[9] = 'sampleBallot.py, line 9:\n    candidatePosition = 0';
	$m.__track_lines__[11] = 'sampleBallot.py, line 11:\n    contest = HorizontalPanel()';
	$m.__track_lines__[12] = "sampleBallot.py, line 12:\n    contest.setStyleName('words')";
	$m.__track_lines__[13] = 'sampleBallot.py, line 13:\n    candidate = HorizontalPanel()';
	$m.__track_lines__[14] = "sampleBallot.py, line 14:\n    candidate.setStyleName('words')";
	$m.__track_lines__[15] = 'sampleBallot.py, line 15:\n    selection = HorizontalPanel()';
	$m.__track_lines__[16] = "sampleBallot.py, line 16:\n    selection.setStyleName('words')";
	$m.__track_lines__[21] = "sampleBallot.py, line 21:\n    race = Race('', [], '')";
	$m.__track_lines__[24] = 'sampleBallot.py, line 24:\n    def sendRace(srace):';
	$m.__track_lines__[25] = 'sampleBallot.py, line 25:\n    global race';
	$m.__track_lines__[26] = 'sampleBallot.py, line 26:\n    race = srace';
	$m.__track_lines__[28] = 'sampleBallot.py, line 28:\n    def getInstruction():';
	$m.__track_lines__[29] = 'sampleBallot.py, line 29:\n    return race.name';
	$m.__track_lines__[31] = 'sampleBallot.py, line 31:\n    def setContest():';
	$m.__track_lines__[32] = 'sampleBallot.py, line 32:\n    global candidatePosition';
	$m.__track_lines__[33] = 'sampleBallot.py, line 33:\n    myrace = race';
	$m.__track_lines__[34] = 'sampleBallot.py, line 34:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[35] = 'sampleBallot.py, line 35:\n    contest.clear()';
	$m.__track_lines__[36] = "sampleBallot.py, line 36:\n    contest.add(HTML('<b /> Contest: %s' % curcontest.name))";
	$m.__track_lines__[37] = 'sampleBallot.py, line 37:\n    candidateList = curcontest.selectionList';
	$m.__track_lines__[38] = 'sampleBallot.py, line 38:\n    if not curcontest.userSelection:';
	$m.__track_lines__[39] = 'sampleBallot.py, line 39:\n    candidatePosition = 0';
	$m.__track_lines__[40] = 'sampleBallot.py, line 40:\n    selection.clear()';
	$m.__track_lines__[41] = "sampleBallot.py, line 41:\n    selection.add(HTML('<b /> Selection: None Made Yet'))";
	$m.__track_lines__[43] = 'sampleBallot.py, line 43:\n    candidatePosition = candidateList.index(curcontest.userSelection[-1])';
	$m.__track_lines__[44] = 'sampleBallot.py, line 44:\n    selection.clear()';
	$m.__track_lines__[45] = "sampleBallot.py, line 45:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[47] = 'sampleBallot.py, line 47:\n    setCandidate()';
	$m.__track_lines__[49] = 'sampleBallot.py, line 49:\n    def setCandidate():';
	$m.__track_lines__[50] = 'sampleBallot.py, line 50:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[51] = 'sampleBallot.py, line 51:\n    candidateName = curcontest.selectionList[candidatePosition].name';
	$m.__track_lines__[52] = 'sampleBallot.py, line 52:\n    candidate.clear()';
	$m.__track_lines__[53] = "sampleBallot.py, line 53:\n    candidate.add(HTML('<b /> Candidate: %s' % candidateName))";
	$m.__track_lines__[55] = 'sampleBallot.py, line 55:\n    def makeSelection():';
	$m.__track_lines__[56] = 'sampleBallot.py, line 56:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[57] = 'sampleBallot.py, line 57:\n    curcandidate = curcontest.selectionList[candidatePosition]';
	$m.__track_lines__[58] = 'sampleBallot.py, line 58:\n    curcontest.userSelection.append(curcandidate)';
	$m.__track_lines__[59] = 'sampleBallot.py, line 59:\n    selection.clear()';
	$m.__track_lines__[60] = "sampleBallot.py, line 60:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[63] = 'sampleBallot.py, line 63:\n    def onKeyPress(sender, keycode, modifiers):';
	$m.__track_lines__[66] = 'sampleBallot.py, line 66:\n    global contestPosition, candidatePosition';
	$m.__track_lines__[67] = 'sampleBallot.py, line 67:\n    contestList = race.selectionList';
	$m.__track_lines__[68] = 'sampleBallot.py, line 68:\n    candidateList = race.selectionList[contestPosition].selectionList';
	$m.__track_lines__[69] = 'sampleBallot.py, line 69:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[70] = 'sampleBallot.py, line 70:\n    if fsm.current == "contests":';
	$m.__track_lines__[71] = 'sampleBallot.py, line 71:\n    contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0';
	$m.__track_lines__[72] = 'sampleBallot.py, line 72:\n    setContest()';
	$m.__track_lines__[74] = 'sampleBallot.py, line 74:\n    if keycode == KeyboardListener.KEY_DOWN:';
	$m.__track_lines__[75] = 'sampleBallot.py, line 75:\n    if fsm.current == "contests":';
	$m.__track_lines__[76] = 'sampleBallot.py, line 76:\n    contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1';
	$m.__track_lines__[77] = 'sampleBallot.py, line 77:\n    setContest()';
	$m.__track_lines__[79] = 'sampleBallot.py, line 79:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[80] = 'sampleBallot.py, line 80:\n    if fsm.current == "contests":';
	$m.__track_lines__[81] = 'sampleBallot.py, line 81:\n    candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0';
	$m.__track_lines__[82] = 'sampleBallot.py, line 82:\n    setCandidate()';
	$m.__track_lines__[84] = 'sampleBallot.py, line 84:\n    if keycode == KeyboardListener.KEY_LEFT:';
	$m.__track_lines__[85] = "sampleBallot.py, line 85:\n    if fsm.current == 'contests':";
	$m.__track_lines__[86] = 'sampleBallot.py, line 86:\n    candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1';
	$m.__track_lines__[87] = 'sampleBallot.py, line 87:\n    setCandidate()';
	$m.__track_lines__[89] = 'sampleBallot.py, line 89:\n    if keycode == KeyboardListener.KEY_ENTER:';
	$m.__track_lines__[90] = "sampleBallot.py, line 90:\n    if fsm.current == 'contests':";
	$m.__track_lines__[91] = 'sampleBallot.py, line 91:\n    makeSelection()';
	$m.__track_lines__[103] = 'sampleBallot.py, line 103:\n    def goToNextState(obj, pos, okToAdvance=True, contestPos=None):';
	$m.__track_lines__[104] = "sampleBallot.py, line 104:\n    if fsm.current == 'contests':";
	$m.__track_lines__[106] = 'sampleBallot.py, line 106:\n    fsm.selectContest(race=obj, contestPos=pos)';
	$m.__track_lines__[109] = 'sampleBallot.py, line 109:\n    fsm.reviewCandidates(choice=obj, pos=pos, contestPos=contestPos)';
	$m.__track_lines__[111] = 'sampleBallot.py, line 111:\n    if not okToAdvance:';
	$m.__track_lines__[113] = 'sampleBallot.py, line 113:\n    fsm.reselectCandidates(race=obj, contestPos=contestPos)';
	$m.__track_lines__[115] = 'sampleBallot.py, line 115:\n    fsm.doneReview()';
	$m.__track_lines__[117] = 'sampleBallot.py, line 117:\n    if obj is not None:';
	$m.__track_lines__[118] = 'sampleBallot.py, line 118:\n    fsm.nextContest(race=obj, pos=pos)';
	$m.__track_lines__[120] = 'sampleBallot.py, line 120:\n    fsm.reviewBallot(race=obj, pos=pos)';
	$m.__track_lines__[122] = 'sampleBallot.py, line 122:\n    if okToAdvance:';
	$m.__track_lines__[123] = 'sampleBallot.py, line 123:\n    fsm.doneBallot()';
	$m.__track_lines__[125] = 'sampleBallot.py, line 125:\n    fsm.reselectContest() #TODO';
	$m.__track_lines__[128] = "sampleBallot.py, line 128:\n    '''";
	$m.__track_lines__[133] = 'sampleBallot.py, line 133:\n    def traverselist(obj, contestPos=None):';
	$m.__track_lines__[134] = 'sampleBallot.py, line 134:\n    alist = obj.selectionList';
	$m.__track_lines__[135] = "sampleBallot.py, line 135:\n    print('* ' + alist[contestPosition].name + ' highlighted *')";
	$m.__track_lines__[144] = "sampleBallot.py, line 144:\n    '''";
	$m.__track_lines__[147] = 'sampleBallot.py, line 147:\n    def printstatechange(e):';
	$m.__track_lines__[148] = "sampleBallot.py, line 148:\n    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)";
	$m.__track_lines__[150] = 'sampleBallot.py, line 150:\n    def onintro(e):';
	$m.__track_lines__[151] = "sampleBallot.py, line 151:\n    print 'hello!'";
	$m.__track_lines__[153] = 'sampleBallot.py, line 153:\n    def oncontests(e):';
	$m.__track_lines__[154] = "sampleBallot.py, line 154:\n    print('\\nThe contests are:')";
	$m.__track_lines__[155] = 'sampleBallot.py, line 155:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[156] = "sampleBallot.py, line 156:\n    print('\\t' + str(i + 1) + ') ' + contest.name)";
	$m.__track_lines__[157] = 'sampleBallot.py, line 157:\n    traverselist(race)';
	$m.__track_lines__[160] = 'sampleBallot.py, line 160:\n    def oncandidates(e):';
	$m.__track_lines__[161] = "sampleBallot.py, line 161:\n    print('\\nCurrent race is: ' + e.race.name)";
	$m.__track_lines__[162] = "sampleBallot.py, line 162:\n    print('Candidates are:')";
	$m.__track_lines__[163] = 'sampleBallot.py, line 163:\n    currContest = race.selectionList[e.contestPos]';
	$m.__track_lines__[164] = 'sampleBallot.py, line 164:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[165] = 'sampleBallot.py, line 165:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[166] = 'sampleBallot.py, line 166:\n    traverselist(currContest, contestPos=e.contestPos)';
	$m.__track_lines__[169] = 'sampleBallot.py, line 169:\n    def onreviewcandidates(e):';
	$m.__track_lines__[170] = "sampleBallot.py, line 170:\n    print('\\nReview Your Choice for ' + e.choice.name + ':')";
	$m.__track_lines__[171] = 'sampleBallot.py, line 171:\n    candidate = e.choice.selectionList[e.pos]';
	$m.__track_lines__[172] = "sampleBallot.py, line 172:\n    print('\\t' + candidate.name)";
	$m.__track_lines__[174] = 'sampleBallot.py, line 174:\n    currChoice = 0';
	$m.__track_lines__[175] = "sampleBallot.py, line 175:\n    print('* <YES> highlighted *')";
	$m.__track_lines__[176] = 'sampleBallot.py, line 176:\n    while 1:';
	$m.__track_lines__[177] = "sampleBallot.py, line 177:\n    kb = raw_input('\\'y\\' up, \\'n\\' down, \\'h\\' selects: ')";
	$m.__track_lines__[178] = "sampleBallot.py, line 178:\n    if kb.strip() == 'y':";
	$m.__track_lines__[179] = 'sampleBallot.py, line 179:\n    currChoice += 1';
	$m.__track_lines__[181] = 'sampleBallot.py, line 181:\n    currChoice -= 1';
	$m.__track_lines__[183] = 'sampleBallot.py, line 183:\n    print("\\t* CONFIRMED")';
	$m.__track_lines__[184] = 'sampleBallot.py, line 184:\n    break;';
	$m.__track_lines__[185] = 'sampleBallot.py, line 185:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[186] = "sampleBallot.py, line 186:\n    print('\\t* <YES> highlighted *')";
	$m.__track_lines__[188] = "sampleBallot.py, line 188:\n    print('\\t* <NO> highlighted *')";
	$m.__track_lines__[190] = 'sampleBallot.py, line 190:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[191] = 'sampleBallot.py, line 191:\n    e.choice.userSelection[:] = []';
	$m.__track_lines__[192] = 'sampleBallot.py, line 192:\n    e.choice.userSelection.append(e.pos)';
	$m.__track_lines__[193] = 'sampleBallot.py, line 193:\n    goToNextState(None, None, okToAdvance=True)';
	$m.__track_lines__[195] = 'sampleBallot.py, line 195:\n    goToNextState(e.choice, e.pos, contestPos=e.contestPos, okToAdvance=False)';
	$m.__track_lines__[197] = 'sampleBallot.py, line 197:\n    def oncheckdone(e):';
	$m.__track_lines__[198] = 'sampleBallot.py, line 198:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[199] = 'sampleBallot.py, line 199:\n    if len(contest.userSelection) == 0:';
	$m.__track_lines__[200] = 'sampleBallot.py, line 200:\n    goToNextState(contest, i)';
	$m.__track_lines__[201] = 'sampleBallot.py, line 201:\n    return';
	$m.__track_lines__[202] = 'sampleBallot.py, line 202:\n    goToNextState(None, None)';
	$m.__track_lines__[205] = 'sampleBallot.py, line 205:\n    def onreviewballot(e):';
	$m.__track_lines__[206] = "sampleBallot.py, line 206:\n    print('\\nReview your selections:')";
	$m.__track_lines__[207] = 'sampleBallot.py, line 207:\n    for contest in race.selectionList:';
	$m.__track_lines__[208] = "sampleBallot.py, line 208:\n    print(contest.name + ':' + contest.selectionList[contest.userSelection[0]].name)";
	$m.__track_lines__[210] = 'sampleBallot.py, line 210:\n    currChoice = 0';
	$m.__track_lines__[211] = "sampleBallot.py, line 211:\n    print('* <YES> highlighted *')";
	$m.__track_lines__[212] = 'sampleBallot.py, line 212:\n    while 1:';
	$m.__track_lines__[213] = "sampleBallot.py, line 213:\n    kb = raw_input('\\'y\\' up, \\'n\\' down, \\'h\\' selects: ')";
	$m.__track_lines__[214] = "sampleBallot.py, line 214:\n    if kb.strip() == 'y':";
	$m.__track_lines__[215] = 'sampleBallot.py, line 215:\n    currChoice += 1';
	$m.__track_lines__[217] = 'sampleBallot.py, line 217:\n    currChoice -= 1';
	$m.__track_lines__[219] = 'sampleBallot.py, line 219:\n    print("\\t* CONFIRMED")';
	$m.__track_lines__[220] = 'sampleBallot.py, line 220:\n    break;';
	$m.__track_lines__[221] = 'sampleBallot.py, line 221:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[222] = "sampleBallot.py, line 222:\n    print('\\t* <YES> highlighted *')";
	$m.__track_lines__[224] = "sampleBallot.py, line 224:\n    print('\\t* <NO> highlighted *')";
	$m.__track_lines__[226] = 'sampleBallot.py, line 226:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[227] = 'sampleBallot.py, line 227:\n    goToNextState(None, None)';
	$m.__track_lines__[229] = 'sampleBallot.py, line 229:\n    goToNextState(e.race, e.pos, okToAdvance=False) # TODO';
	$m.__track_lines__[232] = 'sampleBallot.py, line 232:\n    def ondoneballot(e):';
	$m.__track_lines__[233] = "sampleBallot.py, line 233:\n    print('\\nVoting complete! Thanks for using this system!')";
	$m.__track_lines__[235] = "sampleBallot.py, line 235:\n    '''";
	$m.__track_lines__[239] = 'sampleBallot.py, line 239:\n    fsm = Fysom({';
	$m.__track_lines__[265] = "sampleBallot.py, line 265:\n    '''";


	$pyjs.track.module='sampleBallot';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Fysom'] = $p['___import___']('fysom.Fysom', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=2;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=3;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=5;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=7;
	$m['x'] = 0;
	$pyjs.track.lineno=8;
	$m['contestPosition'] = 0;
	$pyjs.track.lineno=9;
	$m['candidatePosition'] = 0;
	$pyjs.track.lineno=11;
	$m['contest'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=12;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=13;
	$m['candidate'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs.track.lineno=14;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['candidate']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs.track.lineno=15;
	$m['selection'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
	$pyjs.track.lineno=16;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs.track.lineno=21;
	$m['race'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
	$pyjs.track.lineno=24;
	$m['sendRace'] = function(srace) {

		$pyjs.track={module:'sampleBallot',lineno:24};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=24;
		$pyjs.track.lineno=25;
		$pyjs.track.lineno=26;
		$m['race'] = srace;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$pyjs.track.lineno=28;
	$m['getInstruction'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:28};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=28;
		$pyjs.track.lineno=29;
		$pyjs.track.lineno=29;
		var $pyjs__ret = $p['getattr']($m['race'], '$$name');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	$pyjs.track.lineno=31;
	$m['setContest'] = function() {
		var curcontest,myrace,candidateList;
		$pyjs.track={module:'sampleBallot',lineno:31};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=31;
		$pyjs.track.lineno=32;
		$pyjs.track.lineno=33;
		myrace = $m['race'];
		$pyjs.track.lineno=34;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=35;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		$pyjs.track.lineno=36;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Contest: %s', $p['getattr'](curcontest, '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
		$pyjs.track.lineno=37;
		candidateList = $p['getattr'](curcontest, 'selectionList');
		$pyjs.track.lineno=38;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($p['getattr'](curcontest, 'userSelection')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
			$pyjs.track.lineno=39;
			$m['candidatePosition'] = 0;
			$pyjs.track.lineno=40;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs.track.lineno=41;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b /> Selection: None Made Yet');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		}
		else {
			$pyjs.track.lineno=43;
			$m['candidatePosition'] = (function(){try{try{$pyjs.in_try_except += 1;
			return candidateList['index']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs.track.lineno=44;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs.track.lineno=45;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		}
		$pyjs.track.lineno=47;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof setCandidate == "undefined"?$m.setCandidate:setCandidate)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setContest'].__name__ = 'setContest';

	$m['setContest'].__bind_type__ = 0;
	$m['setContest'].__args__ = [null,null];
	$pyjs.track.lineno=49;
	$m['setCandidate'] = function() {
		var curcontest,candidateName;
		$pyjs.track={module:'sampleBallot',lineno:49};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=49;
		$pyjs.track.lineno=50;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=51;
		candidateName = $p['getattr']($p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']), '$$name');
		$pyjs.track.lineno=52;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		$pyjs.track.lineno=53;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Candidate: %s', candidateName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCandidate'].__name__ = 'setCandidate';

	$m['setCandidate'].__bind_type__ = 0;
	$m['setCandidate'].__args__ = [null,null];
	$pyjs.track.lineno=55;
	$m['makeSelection'] = function() {
		var curcontest,curcandidate;
		$pyjs.track={module:'sampleBallot',lineno:55};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=55;
		$pyjs.track.lineno=56;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=57;
		curcandidate = $p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=58;
		(function(){try{try{$pyjs.in_try_except += 1;
		return curcontest['userSelection']['append'](curcandidate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
		$pyjs.track.lineno=59;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
		$pyjs.track.lineno=60;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['makeSelection'].__name__ = 'makeSelection';

	$m['makeSelection'].__bind_type__ = 0;
	$m['makeSelection'].__args__ = [null,null];
	$pyjs.track.lineno=63;
	$m['onKeyPress'] = function(sender, keycode, modifiers) {
		var candidateList,contestList,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
		$pyjs.track={module:'sampleBallot',lineno:63};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=63;
		$pyjs.track.lineno=66;
		$pyjs.track.lineno=67;
		contestList = $p['getattr']($m['race'], 'selectionList');
		$pyjs.track.lineno=68;
		candidateList = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList');
		$pyjs.track.lineno=69;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
				$pyjs.track.lineno=71;
				$m['contestPosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add1=$m['contestPosition'],$add2=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) == -1))? ($p['__op_add']($add3=$m['contestPosition'],$add4=1)) : (0));
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			}
		}
		$pyjs.track.lineno=74;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
			$pyjs.track.lineno=75;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs.track.lineno=76;
				$m['contestPosition'] = ($p['bool']($p['op_eq']($m['contestPosition'], 0))? ($p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})(),$sub2=1)) : ($p['__op_sub']($sub3=$m['contestPosition'],$sub4=1)));
				$pyjs.track.lineno=77;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
		}
		$pyjs.track.lineno=79;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
			$pyjs.track.lineno=80;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
				$pyjs.track.lineno=81;
				$m['candidatePosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add5=$m['candidatePosition'],$add6=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) == -1))? ($p['__op_add']($add7=$m['candidatePosition'],$add8=1)) : (0));
				$pyjs.track.lineno=82;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			}
		}
		$pyjs.track.lineno=84;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
			$pyjs.track.lineno=85;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
				$pyjs.track.lineno=86;
				$m['candidatePosition'] = ($p['bool']($p['op_eq']($m['candidatePosition'], 0))? ($p['__op_sub']($sub5=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(),$sub6=1)) : ($p['__op_sub']($sub7=$m['candidatePosition'],$sub8=1)));
				$pyjs.track.lineno=87;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
		}
		$pyjs.track.lineno=89;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
			$pyjs.track.lineno=90;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
				$pyjs.track.lineno=91;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['makeSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onKeyPress'].__name__ = 'onKeyPress';

	$m['onKeyPress'].__bind_type__ = 0;
	$m['onKeyPress'].__args__ = [null,null,['sender'],['keycode'],['modifiers']];
	$pyjs.track.lineno=103;
	$m['goToNextState'] = function(obj, pos, okToAdvance, contestPos) {
		if (typeof okToAdvance == 'undefined') okToAdvance=arguments.callee.__args__[4][1];
		if (typeof contestPos == 'undefined') contestPos=arguments.callee.__args__[5][1];

		$pyjs.track={module:'sampleBallot',lineno:103};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=103;
		$pyjs.track.lineno=104;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
			$pyjs.track.lineno=106;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m.fsm, 'selectContest', null, null, [{race:obj, contestPos:pos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
			$pyjs.track.lineno=109;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m.fsm, 'reviewCandidates', null, null, [{choice:obj, pos:pos, contestPos:contestPos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
			$pyjs.track.lineno=111;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](okToAdvance));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs.track.lineno=113;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m.fsm, 'reselectCandidates', null, null, [{race:obj, contestPos:contestPos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			}
			else {
				$pyjs.track.lineno=115;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['doneReview']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'check_done'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
			$pyjs.track.lineno=117;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((obj !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
				$pyjs.track.lineno=118;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m.fsm, 'nextContest', null, null, [{race:obj, pos:pos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			}
			else {
				$pyjs.track.lineno=120;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m.fsm, 'reviewBallot', null, null, [{race:obj, pos:pos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
			$pyjs.track.lineno=122;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](okToAdvance);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
				$pyjs.track.lineno=123;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['doneBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			}
			else {
				$pyjs.track.lineno=125;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['goToNextState'].__name__ = 'goToNextState';

	$m['goToNextState'].__bind_type__ = 0;
	$m['goToNextState'].__args__ = [null,null,['obj'],['pos'],['okToAdvance', true],['contestPos', null]];
	$pyjs.track.lineno=128;
	$pyjs.track.lineno=133;
	$m['traverselist'] = function(obj, contestPos) {
		if (typeof contestPos == 'undefined') contestPos=arguments.callee.__args__[3][1];
		var alist,$add10,$add11,$add12,$add9;
		$pyjs.track={module:'sampleBallot',lineno:133};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=133;
		$pyjs.track.lineno=134;
		alist = $p['getattr'](obj, 'selectionList');
		$pyjs.track.lineno=135;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add11=$p['__op_add']($add9='* ',$add10=$p['getattr'](alist.__getitem__($m['contestPosition']), '$$name')),$add12=' highlighted *')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['traverselist'].__name__ = 'traverselist';

	$m['traverselist'].__bind_type__ = 0;
	$m['traverselist'].__args__ = [null,null,['obj'],['contestPos', null]];
	$pyjs.track.lineno=144;
	$pyjs.track.lineno=147;
	$m['printstatechange'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:147};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=147;
		$pyjs.track.lineno=148;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('event: %s, src: %s, dst: %s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$p['getattr'](e, 'event'), $p['getattr'](e, 'src'), $p['getattr'](e, 'dst')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['printstatechange'].__name__ = 'printstatechange';

	$m['printstatechange'].__bind_type__ = 0;
	$m['printstatechange'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=150;
	$m['onintro'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:150};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=150;
		$pyjs.track.lineno=151;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['hello!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onintro'].__name__ = 'onintro';

	$m['onintro'].__bind_type__ = 0;
	$m['onintro'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=153;
	$m['oncontests'] = function(e) {
		var $iter1_nextval,$iter1_type,contest,i,$add20,$add13,$iter1_iter,$add14,$add15,$add16,$add17,$iter1_array,$pyjs__trackstack_size_1,$add18,$add19,$iter1_idx;
		$pyjs.track={module:'sampleBallot',lineno:153};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=153;
		$pyjs.track.lineno=154;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nThe contests are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
		$pyjs.track.lineno=155;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			i = $tupleassign1[0];
			contest = $tupleassign1[1];
			$pyjs.track.lineno=156;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add19=$p['__op_add']($add17=$p['__op_add']($add15='\t',$add16=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add13=i,$add14=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()),$add18=') '),$add20=$p['getattr'](contest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=157;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist']($m['race']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncontests'].__name__ = 'oncontests';

	$m['oncontests'].__bind_type__ = 0;
	$m['oncontests'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=160;
	$m['oncandidates'] = function(e) {
		var $add29,$add28,$add30,$iter2_nextval,$iter2_iter,person,$add21,$add23,currContest,$add25,$add24,$add27,$add26,i,$iter2_idx,$pyjs__trackstack_size_1,$iter2_type,$add22,$iter2_array;
		$pyjs.track={module:'sampleBallot',lineno:160};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=160;
		$pyjs.track.lineno=161;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add21='\nCurrent race is: ',$add22=$p['getattr']($p['getattr'](e, 'race'), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
		$pyjs.track.lineno=162;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
		$pyjs.track.lineno=163;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($p['getattr'](e, 'contestPos'));
		$pyjs.track.lineno=164;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			i = $tupleassign2[0];
			person = $tupleassign2[1];
			$pyjs.track.lineno=165;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add29=$p['__op_add']($add27=$p['__op_add']($add25='\t',$add26=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add23=i,$add24=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()),$add28=') '),$add30=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=166;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $pyjs_kwargs_call(null, $m['traverselist'], null, null, [{contestPos:$p['getattr'](e, 'contestPos')}, currContest]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncandidates'].__name__ = 'oncandidates';

	$m['oncandidates'].__bind_type__ = 0;
	$m['oncandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=169;
	$m['onreviewcandidates'] = function(e) {
		var kb,$add38,currChoice,$mod3,candidate,$add32,$add33,$add31,$add36,$add37,$add34,$add35,$mod4,$sub9,$mod1,$sub10,$mod2;
		$pyjs.track={module:'sampleBallot',lineno:169};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=169;
		$pyjs.track.lineno=170;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add33=$p['__op_add']($add31='\nReview Your Choice for ',$add32=$p['getattr']($p['getattr'](e, 'choice'), '$$name')),$add34=':')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
		$pyjs.track.lineno=171;
		candidate = $p['getattr']($p['getattr'](e, 'choice'), 'selectionList').__getitem__($p['getattr'](e, 'pos'));
		$pyjs.track.lineno=172;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add35='\t',$add36=$p['getattr'](candidate, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
		$pyjs.track.lineno=174;
		currChoice = 0;
		$pyjs.track.lineno=175;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
		$pyjs.track.lineno=176;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
			$pyjs.track.lineno=177;
			kb = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof raw_input == "undefined"?$m.raw_input:raw_input)("'y' up, 'n' down, 'h' selects: ");
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs.track.lineno=178;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})(), 'y'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
				$pyjs.track.lineno=179;
				currChoice = $p['__op_add']($add37=currChoice,$add38=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), 'n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
				$pyjs.track.lineno=181;
				currChoice = $p['__op_sub']($sub9=currChoice,$sub10=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})(), 'h'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
				$pyjs.track.lineno=183;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* CONFIRMED'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				$pyjs.track.lineno=184;
				break;
			}
			$pyjs.track.lineno=185;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((typeof ($mod1=currChoice)==typeof ($mod2=2) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
				$pyjs.track.lineno=186;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			}
			else {
				$pyjs.track.lineno=188;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <NO> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			}
		}
		$pyjs.track.lineno=190;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod3=currChoice)==typeof ($mod4=2) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) {
			$pyjs.track.lineno=191;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['__setslice']($p['getattr']($p['getattr'](e, 'choice'), 'userSelection'), 0, null, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs.track.lineno=192;
			(function(){try{try{$pyjs.in_try_except += 1;
			return e['choice']['userSelection']['append']($p['getattr'](e, 'pos'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs.track.lineno=193;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['goToNextState'], null, null, [{okToAdvance:true}, null, null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
		}
		else {
			$pyjs.track.lineno=195;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['goToNextState'], null, null, [{contestPos:$p['getattr'](e, 'contestPos'), okToAdvance:false}, $p['getattr'](e, 'choice'), $p['getattr'](e, 'pos')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewcandidates'].__name__ = 'onreviewcandidates';

	$m['onreviewcandidates'].__bind_type__ = 0;
	$m['onreviewcandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=197;
	$m['oncheckdone'] = function(e) {
		var $iter3_idx,contest,i,$iter3_nextval,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1;
		$pyjs.track={module:'sampleBallot',lineno:197};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=197;
		$pyjs.track.lineno=198;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			i = $tupleassign3[0];
			contest = $tupleassign3[1];
			$pyjs.track.lineno=199;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr'](contest, 'userSelection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
				$pyjs.track.lineno=200;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['goToNextState'](contest, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
				$pyjs.track.lineno=201;
				$pyjs.track.lineno=201;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=202;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['goToNextState'](null, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncheckdone'].__name__ = 'oncheckdone';

	$m['oncheckdone'].__bind_type__ = 0;
	$m['oncheckdone'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=205;
	$m['onreviewballot'] = function(e) {
		var $mod5,$mod7,$mod6,$iter4_type,$iter4_iter,$mod8,currChoice,contest,$add44,$add43,$add42,$add41,$add40,$sub12,$sub11,kb,$add39,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array;
		$pyjs.track={module:'sampleBallot',lineno:205};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=205;
		$pyjs.track.lineno=206;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nReview your selections:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
		$pyjs.track.lineno=207;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr']($m['race'], 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			contest = $iter4_nextval.$nextval;
			$pyjs.track.lineno=208;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add41=$p['__op_add']($add39=$p['getattr'](contest, '$$name'),$add40=':'),$add42=$p['getattr']($p['getattr'](contest, 'selectionList').__getitem__($p['getattr'](contest, 'userSelection').__getitem__(0)), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=210;
		currChoice = 0;
		$pyjs.track.lineno=211;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
		$pyjs.track.lineno=212;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
			$pyjs.track.lineno=213;
			kb = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof raw_input == "undefined"?$m.raw_input:raw_input)("'y' up, 'n' down, 'h' selects: ");
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$pyjs.track.lineno=214;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})(), 'y'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
				$pyjs.track.lineno=215;
				currChoice = $p['__op_add']($add43=currChoice,$add44=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})(), 'n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
				$pyjs.track.lineno=217;
				currChoice = $p['__op_sub']($sub11=currChoice,$sub12=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})(), 'h'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
				$pyjs.track.lineno=219;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* CONFIRMED'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				$pyjs.track.lineno=220;
				break;
			}
			$pyjs.track.lineno=221;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((typeof ($mod5=currChoice)==typeof ($mod6=2) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
				$pyjs.track.lineno=222;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			}
			else {
				$pyjs.track.lineno=224;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <NO> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			}
		}
		$pyjs.track.lineno=226;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod7=currChoice)==typeof ($mod8=2) && typeof $mod7=='number'?
			(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
			$p['op_mod']($mod7,$mod8)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
			$pyjs.track.lineno=227;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['goToNextState'](null, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
		}
		else {
			$pyjs.track.lineno=229;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['goToNextState'], null, null, [{okToAdvance:false}, $p['getattr'](e, 'race'), $p['getattr'](e, 'pos')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewballot'].__name__ = 'onreviewballot';

	$m['onreviewballot'].__bind_type__ = 0;
	$m['onreviewballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=232;
	$m['ondoneballot'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:232};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=232;
		$pyjs.track.lineno=233;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nVoting complete! Thanks for using this system!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['ondoneballot'].__name__ = 'ondoneballot';

	$m['ondoneballot'].__bind_type__ = 0;
	$m['ondoneballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=235;
	$pyjs.track.lineno=239;
	$m['fsm'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Fysom']((function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['initial', 'intro'], ['events', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'startVoting'], ['src', 'intro'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'selectContest'], ['src', 'contests'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectCandidates'], ['src', 'review_candidates'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneReview'], ['src', 'review_candidates'], ['dst', 'check_done']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'nextContest'], ['src', 'check_done'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'otherContest'], ['src', 'contests'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewBallot'], ['src', 'check_done'], ['dst', 'review_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectContest'], ['src', 'review_ballot'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneBallot'], ['src', 'review_ballot'], ['dst', 'done_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()], ['callbacks', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['onintro', $m['onintro']], ['oncontests', $m['oncontests']], ['oncandidates', $m['oncandidates']], ['onreview_candidates', $m['onreviewcandidates']], ['oncheck_done', $m['oncheckdone']], ['onreview_ballot', $m['onreviewballot']], ['ondone_ballot', $m['ondoneballot']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
	$pyjs.track.lineno=265;
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree', 'pyjamas.ui.KeyboardListener', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML']
*/
