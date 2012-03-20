/* start module: sampleBallot */
$pyjs.loaded_modules['sampleBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sampleBallot'].__was_initialized__) return $pyjs.loaded_modules['sampleBallot'];
	var $m = $pyjs.loaded_modules["sampleBallot"];
	$m.__repr__ = function() { return "<module: sampleBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sampleBallot';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'sampleBallot.py, line 1:\n    from __pyjamas__ import JS';
	$m.__track_lines__[2] = 'sampleBallot.py, line 2:\n    from fysom import Fysom';
	$m.__track_lines__[3] = 'sampleBallot.py, line 3:\n    from ballotTree import Race';
	$m.__track_lines__[4] = 'sampleBallot.py, line 4:\n    from pyjamas.ui import KeyboardListener';
	$m.__track_lines__[5] = 'sampleBallot.py, line 5:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
	$m.__track_lines__[6] = 'sampleBallot.py, line 6:\n    from pyjamas.ui.HTML import HTML';
	$m.__track_lines__[8] = 'sampleBallot.py, line 8:\n    x = 0';
	$m.__track_lines__[9] = 'sampleBallot.py, line 9:\n    contestPosition = 0';
	$m.__track_lines__[10] = 'sampleBallot.py, line 10:\n    candidatePosition = 0';
	$m.__track_lines__[12] = 'sampleBallot.py, line 12:\n    name = HorizontalPanel()';
	$m.__track_lines__[14] = 'sampleBallot.py, line 14:\n    instructions = HorizontalPanel()';
	$m.__track_lines__[16] = 'sampleBallot.py, line 16:\n    contest = HorizontalPanel()';
	$m.__track_lines__[17] = "sampleBallot.py, line 17:\n    contest.setStyleName('words')";
	$m.__track_lines__[18] = 'sampleBallot.py, line 18:\n    candidate = HorizontalPanel()';
	$m.__track_lines__[19] = "sampleBallot.py, line 19:\n    candidate.setStyleName('words')";
	$m.__track_lines__[20] = 'sampleBallot.py, line 20:\n    selection = HorizontalPanel()';
	$m.__track_lines__[21] = "sampleBallot.py, line 21:\n    selection.setStyleName('words')";
	$m.__track_lines__[22] = 'sampleBallot.py, line 22:\n    audioTest = HorizontalPanel()';
	$m.__track_lines__[31] = "sampleBallot.py, line 31:\n    JS('''";
	$m.__track_lines__[34] = "sampleBallot.py, line 34:\n    race = Race('', [], '')";
	$m.__track_lines__[37] = 'sampleBallot.py, line 37:\n    def sendRace(srace):';
	$m.__track_lines__[38] = 'sampleBallot.py, line 38:\n    global race';
	$m.__track_lines__[39] = 'sampleBallot.py, line 39:\n    race = srace';
	$m.__track_lines__[40] = "sampleBallot.py, line 40:\n    name.add(HTML('<b /> Name: %s' %race.name))";
	$m.__track_lines__[41] = "sampleBallot.py, line 41:\n    instructions.add(HTML('<b> Instructions: </b>%s' %race.instructions))";
	$m.__track_lines__[43] = 'sampleBallot.py, line 43:\n    def getInstruction():';
	$m.__track_lines__[44] = 'sampleBallot.py, line 44:\n    return race.name';
	$m.__track_lines__[46] = 'sampleBallot.py, line 46:\n    def setContest():';
	$m.__track_lines__[47] = 'sampleBallot.py, line 47:\n    global candidatePosition';
	$m.__track_lines__[48] = 'sampleBallot.py, line 48:\n    myrace = race';
	$m.__track_lines__[49] = 'sampleBallot.py, line 49:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[50] = 'sampleBallot.py, line 50:\n    contest.clear()';
	$m.__track_lines__[51] = "sampleBallot.py, line 51:\n    contest.add(HTML('<b /> Contest: %s' % curcontest.name))";
	$m.__track_lines__[52] = 'sampleBallot.py, line 52:\n    candidateList = curcontest.selectionList';
	$m.__track_lines__[53] = 'sampleBallot.py, line 53:\n    if not curcontest.userSelection:';
	$m.__track_lines__[54] = 'sampleBallot.py, line 54:\n    candidatePosition = 0';
	$m.__track_lines__[55] = 'sampleBallot.py, line 55:\n    selection.clear()';
	$m.__track_lines__[56] = "sampleBallot.py, line 56:\n    selection.add(HTML('<b> Selection:</b> None Made Yet'))";
	$m.__track_lines__[58] = 'sampleBallot.py, line 58:\n    candidatePosition = candidateList.index(curcontest.userSelection[-1])';
	$m.__track_lines__[59] = 'sampleBallot.py, line 59:\n    selection.clear()';
	$m.__track_lines__[60] = "sampleBallot.py, line 60:\n    selection.add(HTML('<b /> Selection:</b> %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[62] = 'sampleBallot.py, line 62:\n    setCandidate()';
	$m.__track_lines__[65] = 'sampleBallot.py, line 65:\n    def setCandidate():';
	$m.__track_lines__[66] = 'sampleBallot.py, line 66:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[67] = 'sampleBallot.py, line 67:\n    candidateName = curcontest.selectionList[candidatePosition].name';
	$m.__track_lines__[68] = 'sampleBallot.py, line 68:\n    candidate.clear()';
	$m.__track_lines__[69] = "sampleBallot.py, line 69:\n    candidate.add(HTML('<b> Candidate:</b> %s' % candidateName))";
	$m.__track_lines__[71] = 'sampleBallot.py, line 71:\n    def makeSelection():';
	$m.__track_lines__[72] = 'sampleBallot.py, line 72:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[73] = 'sampleBallot.py, line 73:\n    curcandidate = curcontest.selectionList[candidatePosition]';
	$m.__track_lines__[74] = 'sampleBallot.py, line 74:\n    curcontest.userSelection.append(curcandidate)';
	$m.__track_lines__[75] = 'sampleBallot.py, line 75:\n    selection.clear()';
	$m.__track_lines__[76] = "sampleBallot.py, line 76:\n    selection.add(HTML('<b /> Selection:</b> %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[79] = 'sampleBallot.py, line 79:\n    def onKeyPress(sender, keycode, modifiers):';
	$m.__track_lines__[82] = 'sampleBallot.py, line 82:\n    global contestPosition, candidatePosition';
	$m.__track_lines__[83] = 'sampleBallot.py, line 83:\n    contestList = race.selectionList';
	$m.__track_lines__[84] = 'sampleBallot.py, line 84:\n    candidateList = race.selectionList[contestPosition].selectionList';
	$m.__track_lines__[85] = 'sampleBallot.py, line 85:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[86] = 'sampleBallot.py, line 86:\n    if fsm.current == "contests":';
	$m.__track_lines__[87] = 'sampleBallot.py, line 87:\n    contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0';
	$m.__track_lines__[88] = 'sampleBallot.py, line 88:\n    setContest()';
	$m.__track_lines__[89] = "sampleBallot.py, line 89:\n    JS('''";
	$m.__track_lines__[93] = 'sampleBallot.py, line 93:\n    if keycode == KeyboardListener.KEY_DOWN:';
	$m.__track_lines__[94] = 'sampleBallot.py, line 94:\n    if fsm.current == "contests":';
	$m.__track_lines__[95] = 'sampleBallot.py, line 95:\n    contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1';
	$m.__track_lines__[96] = 'sampleBallot.py, line 96:\n    setContest()';
	$m.__track_lines__[97] = "sampleBallot.py, line 97:\n    JS('''";
	$m.__track_lines__[101] = 'sampleBallot.py, line 101:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[102] = 'sampleBallot.py, line 102:\n    if fsm.current == "contests":';
	$m.__track_lines__[103] = 'sampleBallot.py, line 103:\n    candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0';
	$m.__track_lines__[104] = 'sampleBallot.py, line 104:\n    setCandidate()';
	$m.__track_lines__[105] = "sampleBallot.py, line 105:\n    path = 'http://10.0.22.220/media/' + race.audioPath";
	$m.__track_lines__[106] = "sampleBallot.py, line 106:\n    JS('''";
	$m.__track_lines__[112] = 'sampleBallot.py, line 112:\n    if keycode == KeyboardListener.KEY_LEFT:';
	$m.__track_lines__[113] = "sampleBallot.py, line 113:\n    if fsm.current == 'contests':";
	$m.__track_lines__[114] = 'sampleBallot.py, line 114:\n    candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1';
	$m.__track_lines__[115] = 'sampleBallot.py, line 115:\n    setCandidate()';
	$m.__track_lines__[116] = "sampleBallot.py, line 116:\n    JS('''";
	$m.__track_lines__[121] = 'sampleBallot.py, line 121:\n    if keycode == KeyboardListener.KEY_ENTER:';
	$m.__track_lines__[122] = "sampleBallot.py, line 122:\n    if fsm.current == 'contests':";
	$m.__track_lines__[123] = 'sampleBallot.py, line 123:\n    makeSelection()';
	$m.__track_lines__[135] = 'sampleBallot.py, line 135:\n    def goToNextState(obj, pos, okToAdvance=True, contestPos=None):';
	$m.__track_lines__[136] = "sampleBallot.py, line 136:\n    if fsm.current == 'contests':";
	$m.__track_lines__[138] = 'sampleBallot.py, line 138:\n    fsm.selectContest(race=obj, contestPos=pos)';
	$m.__track_lines__[141] = 'sampleBallot.py, line 141:\n    fsm.reviewCandidates(choice=obj, pos=pos, contestPos=contestPos)';
	$m.__track_lines__[143] = 'sampleBallot.py, line 143:\n    if not okToAdvance:';
	$m.__track_lines__[145] = 'sampleBallot.py, line 145:\n    fsm.reselectCandidates(race=obj, contestPos=contestPos)';
	$m.__track_lines__[147] = 'sampleBallot.py, line 147:\n    fsm.doneReview()';
	$m.__track_lines__[149] = 'sampleBallot.py, line 149:\n    if obj is not None:';
	$m.__track_lines__[150] = 'sampleBallot.py, line 150:\n    fsm.nextContest(race=obj, pos=pos)';
	$m.__track_lines__[152] = 'sampleBallot.py, line 152:\n    fsm.reviewBallot(race=obj, pos=pos)';
	$m.__track_lines__[154] = 'sampleBallot.py, line 154:\n    if okToAdvance:';
	$m.__track_lines__[155] = 'sampleBallot.py, line 155:\n    fsm.doneBallot()';
	$m.__track_lines__[157] = 'sampleBallot.py, line 157:\n    fsm.reselectContest() #TODO';
	$m.__track_lines__[160] = "sampleBallot.py, line 160:\n    '''";
	$m.__track_lines__[165] = 'sampleBallot.py, line 165:\n    def traverselist(obj, contestPos=None):';
	$m.__track_lines__[166] = 'sampleBallot.py, line 166:\n    alist = obj.selectionList';
	$m.__track_lines__[167] = "sampleBallot.py, line 167:\n    print('* ' + alist[contestPosition].name + ' highlighted *')";
	$m.__track_lines__[176] = "sampleBallot.py, line 176:\n    '''";
	$m.__track_lines__[179] = 'sampleBallot.py, line 179:\n    def printstatechange(e):';
	$m.__track_lines__[180] = "sampleBallot.py, line 180:\n    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)";
	$m.__track_lines__[182] = 'sampleBallot.py, line 182:\n    def onintro(e):';
	$m.__track_lines__[183] = "sampleBallot.py, line 183:\n    print 'hello!'";
	$m.__track_lines__[185] = 'sampleBallot.py, line 185:\n    def oncontests(e):';
	$m.__track_lines__[186] = "sampleBallot.py, line 186:\n    print('\\nThe contests are:')";
	$m.__track_lines__[187] = 'sampleBallot.py, line 187:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[188] = "sampleBallot.py, line 188:\n    print('\\t' + str(i + 1) + ') ' + contest.name)";
	$m.__track_lines__[189] = 'sampleBallot.py, line 189:\n    traverselist(race)';
	$m.__track_lines__[192] = 'sampleBallot.py, line 192:\n    def oncandidates(e):';
	$m.__track_lines__[193] = "sampleBallot.py, line 193:\n    print('\\nCurrent race is: ' + e.race.name)";
	$m.__track_lines__[194] = "sampleBallot.py, line 194:\n    print('Candidates are:')";
	$m.__track_lines__[195] = 'sampleBallot.py, line 195:\n    currContest = race.selectionList[e.contestPos]';
	$m.__track_lines__[196] = 'sampleBallot.py, line 196:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[197] = 'sampleBallot.py, line 197:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[198] = 'sampleBallot.py, line 198:\n    traverselist(currContest, contestPos=e.contestPos)';
	$m.__track_lines__[201] = 'sampleBallot.py, line 201:\n    def onreviewcandidates(e):';
	$m.__track_lines__[202] = "sampleBallot.py, line 202:\n    print('\\nReview Your Choice for ' + e.choice.name + ':')";
	$m.__track_lines__[203] = 'sampleBallot.py, line 203:\n    candidate = e.choice.selectionList[e.pos]';
	$m.__track_lines__[204] = "sampleBallot.py, line 204:\n    print('\\t' + candidate.name)";
	$m.__track_lines__[206] = 'sampleBallot.py, line 206:\n    currChoice = 0';
	$m.__track_lines__[207] = "sampleBallot.py, line 207:\n    print('* <YES> highlighted *')";
	$m.__track_lines__[208] = 'sampleBallot.py, line 208:\n    while 1:';
	$m.__track_lines__[209] = "sampleBallot.py, line 209:\n    kb = raw_input('\\'y\\' up, \\'n\\' down, \\'h\\' selects: ')";
	$m.__track_lines__[210] = "sampleBallot.py, line 210:\n    if kb.strip() == 'y':";
	$m.__track_lines__[211] = 'sampleBallot.py, line 211:\n    currChoice += 1';
	$m.__track_lines__[213] = 'sampleBallot.py, line 213:\n    currChoice -= 1';
	$m.__track_lines__[215] = 'sampleBallot.py, line 215:\n    print("\\t* CONFIRMED")';
	$m.__track_lines__[216] = 'sampleBallot.py, line 216:\n    break;';
	$m.__track_lines__[217] = 'sampleBallot.py, line 217:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[218] = "sampleBallot.py, line 218:\n    print('\\t* <YES> highlighted *')";
	$m.__track_lines__[220] = "sampleBallot.py, line 220:\n    print('\\t* <NO> highlighted *')";
	$m.__track_lines__[222] = 'sampleBallot.py, line 222:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[223] = 'sampleBallot.py, line 223:\n    e.choice.userSelection[:] = []';
	$m.__track_lines__[224] = 'sampleBallot.py, line 224:\n    e.choice.userSelection.append(e.pos)';
	$m.__track_lines__[225] = 'sampleBallot.py, line 225:\n    goToNextState(None, None, okToAdvance=True)';
	$m.__track_lines__[227] = 'sampleBallot.py, line 227:\n    goToNextState(e.choice, e.pos, contestPos=e.contestPos, okToAdvance=False)';
	$m.__track_lines__[229] = 'sampleBallot.py, line 229:\n    def oncheckdone(e):';
	$m.__track_lines__[230] = 'sampleBallot.py, line 230:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[231] = 'sampleBallot.py, line 231:\n    if len(contest.userSelection) == 0:';
	$m.__track_lines__[232] = 'sampleBallot.py, line 232:\n    goToNextState(contest, i)';
	$m.__track_lines__[233] = 'sampleBallot.py, line 233:\n    return';
	$m.__track_lines__[234] = 'sampleBallot.py, line 234:\n    goToNextState(None, None)';
	$m.__track_lines__[237] = 'sampleBallot.py, line 237:\n    def onreviewballot(e):';
	$m.__track_lines__[238] = "sampleBallot.py, line 238:\n    print('\\nReview your selections:')";
	$m.__track_lines__[239] = 'sampleBallot.py, line 239:\n    for contest in race.selectionList:';
	$m.__track_lines__[240] = "sampleBallot.py, line 240:\n    print(contest.name + ':' + contest.selectionList[contest.userSelection[0]].name)";
	$m.__track_lines__[242] = 'sampleBallot.py, line 242:\n    currChoice = 0';
	$m.__track_lines__[243] = "sampleBallot.py, line 243:\n    print('* <YES> highlighted *')";
	$m.__track_lines__[244] = 'sampleBallot.py, line 244:\n    while 1:';
	$m.__track_lines__[245] = "sampleBallot.py, line 245:\n    kb = raw_input('\\'y\\' up, \\'n\\' down, \\'h\\' selects: ')";
	$m.__track_lines__[246] = "sampleBallot.py, line 246:\n    if kb.strip() == 'y':";
	$m.__track_lines__[247] = 'sampleBallot.py, line 247:\n    currChoice += 1';
	$m.__track_lines__[249] = 'sampleBallot.py, line 249:\n    currChoice -= 1';
	$m.__track_lines__[251] = 'sampleBallot.py, line 251:\n    print("\\t* CONFIRMED")';
	$m.__track_lines__[252] = 'sampleBallot.py, line 252:\n    break;';
	$m.__track_lines__[253] = 'sampleBallot.py, line 253:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[254] = "sampleBallot.py, line 254:\n    print('\\t* <YES> highlighted *')";
	$m.__track_lines__[256] = "sampleBallot.py, line 256:\n    print('\\t* <NO> highlighted *')";
	$m.__track_lines__[258] = 'sampleBallot.py, line 258:\n    if currChoice % 2 == 0:';
	$m.__track_lines__[259] = 'sampleBallot.py, line 259:\n    goToNextState(None, None)';
	$m.__track_lines__[261] = 'sampleBallot.py, line 261:\n    goToNextState(e.race, e.pos, okToAdvance=False) # TODO';
	$m.__track_lines__[264] = 'sampleBallot.py, line 264:\n    def ondoneballot(e):';
	$m.__track_lines__[265] = "sampleBallot.py, line 265:\n    print('\\nVoting complete! Thanks for using this system!')";
	$m.__track_lines__[267] = "sampleBallot.py, line 267:\n    '''";
	$m.__track_lines__[271] = 'sampleBallot.py, line 271:\n    fsm = Fysom({';
	$m.__track_lines__[297] = "sampleBallot.py, line 297:\n    '''";


	$pyjs.track.module='sampleBallot';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=2;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Fysom'] = $p['___import___']('fysom.Fysom', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=3;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=5;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=6;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=8;
	$m['x'] = 0;
	$pyjs.track.lineno=9;
	$m['contestPosition'] = 0;
	$pyjs.track.lineno=10;
	$m['candidatePosition'] = 0;
	$pyjs.track.lineno=12;
	$m['$$name'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=14;
	$m['instructions'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=16;
	$m['contest'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs.track.lineno=17;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs.track.lineno=18;
	$m['candidate'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
	$pyjs.track.lineno=19;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['candidate']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs.track.lineno=20;
	$m['selection'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
	$pyjs.track.lineno=21;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
	$pyjs.track.lineno=22;
	$m['audioTest'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
	$pyjs.track.lineno=31;

var snd = new Audio();

	$pyjs.track.lineno=34;
	$m['race'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
	$pyjs.track.lineno=37;
	$m['sendRace'] = function(srace) {

		$pyjs.track={module:'sampleBallot',lineno:37};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=37;
		$pyjs.track.lineno=38;
		$pyjs.track.lineno=39;
		$m['race'] = srace;
		$pyjs.track.lineno=40;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['$$name']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Name: %s', $p['getattr']($m['race'], '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
		$pyjs.track.lineno=41;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['instructions']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b> Instructions: </b>%s', $p['getattr']($m['race'], 'instructions'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$pyjs.track.lineno=43;
	$m['getInstruction'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:43};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=43;
		$pyjs.track.lineno=44;
		$pyjs.track.lineno=44;
		var $pyjs__ret = $p['getattr']($m['race'], '$$name');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	$pyjs.track.lineno=46;
	$m['setContest'] = function() {
		var curcontest,myrace,candidateList;
		$pyjs.track={module:'sampleBallot',lineno:46};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=46;
		$pyjs.track.lineno=47;
		$pyjs.track.lineno=48;
		myrace = $m['race'];
		$pyjs.track.lineno=49;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=50;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
		$pyjs.track.lineno=51;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Contest: %s', $p['getattr'](curcontest, '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		$pyjs.track.lineno=52;
		candidateList = $p['getattr'](curcontest, 'selectionList');
		$pyjs.track.lineno=53;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($p['getattr'](curcontest, 'userSelection')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
			$pyjs.track.lineno=54;
			$m['candidatePosition'] = 0;
			$pyjs.track.lineno=55;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=56;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b> Selection:</b> None Made Yet');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
		}
		else {
			$pyjs.track.lineno=58;
			$m['candidatePosition'] = (function(){try{try{$pyjs.in_try_except += 1;
			return candidateList['index']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs.track.lineno=59;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs.track.lineno=60;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection:</b> %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		}
		$pyjs.track.lineno=62;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof setCandidate == "undefined"?$m.setCandidate:setCandidate)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setContest'].__name__ = 'setContest';

	$m['setContest'].__bind_type__ = 0;
	$m['setContest'].__args__ = [null,null];
	$pyjs.track.lineno=65;
	$m['setCandidate'] = function() {
		var curcontest,candidateName;
		$pyjs.track={module:'sampleBallot',lineno:65};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=65;
		$pyjs.track.lineno=66;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=67;
		candidateName = $p['getattr']($p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']), '$$name');
		$pyjs.track.lineno=68;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		$pyjs.track.lineno=69;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b> Candidate:</b> %s', candidateName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCandidate'].__name__ = 'setCandidate';

	$m['setCandidate'].__bind_type__ = 0;
	$m['setCandidate'].__args__ = [null,null];
	$pyjs.track.lineno=71;
	$m['makeSelection'] = function() {
		var curcontest,curcandidate;
		$pyjs.track={module:'sampleBallot',lineno:71};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=71;
		$pyjs.track.lineno=72;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=73;
		curcandidate = $p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=74;
		(function(){try{try{$pyjs.in_try_except += 1;
		return curcontest['userSelection']['append'](curcandidate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
		$pyjs.track.lineno=75;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
		$pyjs.track.lineno=76;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Selection:</b> %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['makeSelection'].__name__ = 'makeSelection';

	$m['makeSelection'].__bind_type__ = 0;
	$m['makeSelection'].__args__ = [null,null];
	$pyjs.track.lineno=79;
	$m['onKeyPress'] = function(sender, keycode, modifiers) {
		var candidateList,contestList,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub4,$add10,path,$sub5,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9;
		$pyjs.track={module:'sampleBallot',lineno:79};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=79;
		$pyjs.track.lineno=82;
		$pyjs.track.lineno=83;
		contestList = $p['getattr']($m['race'], 'selectionList');
		$pyjs.track.lineno=84;
		candidateList = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList');
		$pyjs.track.lineno=85;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
			$pyjs.track.lineno=86;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs.track.lineno=87;
				$m['contestPosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add1=$m['contestPosition'],$add2=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) == -1))? ($p['__op_add']($add3=$m['contestPosition'],$add4=1)) : (0));
				$pyjs.track.lineno=88;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$pyjs.track.lineno=89;

            $doc.getElementById('audiotag1').play();
            
			}
		}
		$pyjs.track.lineno=93;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')))) {
			$pyjs.track.lineno=94;
			if ($p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'))) {
				$pyjs.track.lineno=95;
				$m['contestPosition'] = ($p['bool']($p['op_eq']($m['contestPosition'], 0))? ($p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})(),$sub2=1)) : ($p['__op_sub']($sub3=$m['contestPosition'],$sub4=1)));
				$pyjs.track.lineno=96;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs.track.lineno=97;

            $doc.getElementById('audiotag1').pause();
            
			}
		}
		$pyjs.track.lineno=101;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')))) {
			$pyjs.track.lineno=102;
			if ($p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'))) {
				$pyjs.track.lineno=103;
				$m['candidatePosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add5=$m['candidatePosition'],$add6=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) == -1))? ($p['__op_add']($add7=$m['candidatePosition'],$add8=1)) : (0));
				$pyjs.track.lineno=104;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs.track.lineno=105;
				path = $p['__op_add']($add9='http://10.0.22.220/media/',$add10=$p['getattr']($m['race'], 'audioPath'));
				$pyjs.track.lineno=106;

            snd.src = path; 
            snd.play();
            
			}
		}
		$pyjs.track.lineno=112;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')))) {
			$pyjs.track.lineno=113;
			if ($p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'))) {
				$pyjs.track.lineno=114;
				$m['candidatePosition'] = ($p['bool']($p['op_eq']($m['candidatePosition'], 0))? ($p['__op_sub']($sub5=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})(),$sub6=1)) : ($p['__op_sub']($sub7=$m['candidatePosition'],$sub8=1)));
				$pyjs.track.lineno=115;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs.track.lineno=116;

            snd.src = 'http://10.0.22.220/media/1.wav'
            snd.play();
            
			}
		}
		$pyjs.track.lineno=121;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')))) {
			$pyjs.track.lineno=122;
			if ($p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'))) {
				$pyjs.track.lineno=123;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['makeSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onKeyPress'].__name__ = 'onKeyPress';

	$m['onKeyPress'].__bind_type__ = 0;
	$m['onKeyPress'].__args__ = [null,null,['sender'],['keycode'],['modifiers']];
	$pyjs.track.lineno=135;
	$m['goToNextState'] = function(obj, pos, okToAdvance, contestPos) {
		if (typeof okToAdvance == 'undefined') okToAdvance=arguments.callee.__args__[4][1];
		if (typeof contestPos == 'undefined') contestPos=arguments.callee.__args__[5][1];

		$pyjs.track={module:'sampleBallot',lineno:135};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=135;
		$pyjs.track.lineno=136;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
			$pyjs.track.lineno=138;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m.fsm, 'selectContest', null, null, [{race:obj, contestPos:pos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
			$pyjs.track.lineno=141;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m.fsm, 'reviewCandidates', null, null, [{choice:obj, pos:pos, contestPos:contestPos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
			$pyjs.track.lineno=143;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](okToAdvance));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
				$pyjs.track.lineno=145;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m.fsm, 'reselectCandidates', null, null, [{race:obj, contestPos:contestPos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
			else {
				$pyjs.track.lineno=147;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['doneReview']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'check_done'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
			$pyjs.track.lineno=149;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((obj !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs.track.lineno=150;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m.fsm, 'nextContest', null, null, [{race:obj, pos:pos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			}
			else {
				$pyjs.track.lineno=152;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m.fsm, 'reviewBallot', null, null, [{race:obj, pos:pos}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
			$pyjs.track.lineno=154;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](okToAdvance);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs.track.lineno=155;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['doneBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			}
			else {
				$pyjs.track.lineno=157;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['goToNextState'].__name__ = 'goToNextState';

	$m['goToNextState'].__bind_type__ = 0;
	$m['goToNextState'].__args__ = [null,null,['obj'],['pos'],['okToAdvance', true],['contestPos', null]];
	$pyjs.track.lineno=160;
	$pyjs.track.lineno=165;
	$m['traverselist'] = function(obj, contestPos) {
		if (typeof contestPos == 'undefined') contestPos=arguments.callee.__args__[3][1];
		var alist,$add14,$add11,$add12,$add13;
		$pyjs.track={module:'sampleBallot',lineno:165};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=165;
		$pyjs.track.lineno=166;
		alist = $p['getattr'](obj, 'selectionList');
		$pyjs.track.lineno=167;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add13=$p['__op_add']($add11='* ',$add12=$p['getattr'](alist.__getitem__($m['contestPosition']), '$$name')),$add14=' highlighted *')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['traverselist'].__name__ = 'traverselist';

	$m['traverselist'].__bind_type__ = 0;
	$m['traverselist'].__args__ = [null,null,['obj'],['contestPos', null]];
	$pyjs.track.lineno=176;
	$pyjs.track.lineno=179;
	$m['printstatechange'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:179};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=179;
		$pyjs.track.lineno=180;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('event: %s, src: %s, dst: %s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$p['getattr'](e, 'event'), $p['getattr'](e, 'src'), $p['getattr'](e, 'dst')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['printstatechange'].__name__ = 'printstatechange';

	$m['printstatechange'].__bind_type__ = 0;
	$m['printstatechange'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=182;
	$m['onintro'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:182};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=182;
		$pyjs.track.lineno=183;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['hello!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onintro'].__name__ = 'onintro';

	$m['onintro'].__bind_type__ = 0;
	$m['onintro'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=185;
	$m['oncontests'] = function(e) {
		var $add21,$iter1_nextval,$iter1_type,contest,i,$add20,$add22,$iter1_iter,$add15,$add16,$add17,$iter1_array,$pyjs__trackstack_size_1,$add18,$add19,$iter1_idx;
		$pyjs.track={module:'sampleBallot',lineno:185};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=185;
		$pyjs.track.lineno=186;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nThe contests are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
		$pyjs.track.lineno=187;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			i = $tupleassign1[0];
			contest = $tupleassign1[1];
			$pyjs.track.lineno=188;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17='\t',$add18=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add15=i,$add16=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()),$add20=') '),$add22=$p['getattr'](contest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=189;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist']($m['race']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncontests'].__name__ = 'oncontests';

	$m['oncontests'].__bind_type__ = 0;
	$m['oncontests'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=192;
	$m['oncandidates'] = function(e) {
		var $add29,$add28,$iter2_nextval,$iter2_iter,i,$add23,currContest,$add25,$add24,$add27,$add26,person,$iter2_idx,$add32,$pyjs__trackstack_size_1,$add31,$iter2_type,$add30,$iter2_array;
		$pyjs.track={module:'sampleBallot',lineno:192};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=192;
		$pyjs.track.lineno=193;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add23='\nCurrent race is: ',$add24=$p['getattr']($p['getattr'](e, 'race'), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
		$pyjs.track.lineno=194;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
		$pyjs.track.lineno=195;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($p['getattr'](e, 'contestPos'));
		$pyjs.track.lineno=196;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			i = $tupleassign2[0];
			person = $tupleassign2[1];
			$pyjs.track.lineno=197;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add31=$p['__op_add']($add29=$p['__op_add']($add27='\t',$add28=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add25=i,$add26=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()),$add30=') '),$add32=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=198;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $pyjs_kwargs_call(null, $m['traverselist'], null, null, [{contestPos:$p['getattr'](e, 'contestPos')}, currContest]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncandidates'].__name__ = 'oncandidates';

	$m['oncandidates'].__bind_type__ = 0;
	$m['oncandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=201;
	$m['onreviewcandidates'] = function(e) {
		var kb,$add38,currChoice,candidate,$add33,$sub10,$add36,$add37,$add34,$add35,$mod4,$sub9,$add39,$mod1,$mod3,$mod2,$add40;
		$pyjs.track={module:'sampleBallot',lineno:201};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=201;
		$pyjs.track.lineno=202;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add35=$p['__op_add']($add33='\nReview Your Choice for ',$add34=$p['getattr']($p['getattr'](e, 'choice'), '$$name')),$add36=':')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
		$pyjs.track.lineno=203;
		candidate = $p['getattr']($p['getattr'](e, 'choice'), 'selectionList').__getitem__($p['getattr'](e, 'pos'));
		$pyjs.track.lineno=204;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add37='\t',$add38=$p['getattr'](candidate, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
		$pyjs.track.lineno=206;
		currChoice = 0;
		$pyjs.track.lineno=207;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
		$pyjs.track.lineno=208;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
			$pyjs.track.lineno=209;
			kb = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof raw_input == "undefined"?$m.raw_input:raw_input)("'y' up, 'n' down, 'h' selects: ");
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$pyjs.track.lineno=210;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})(), 'y'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs.track.lineno=211;
				currChoice = $p['__op_add']($add39=currChoice,$add40=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})(), 'n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) {
				$pyjs.track.lineno=213;
				currChoice = $p['__op_sub']($sub9=currChoice,$sub10=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})(), 'h'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()) {
				$pyjs.track.lineno=215;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* CONFIRMED'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs.track.lineno=216;
				break;
			}
			$pyjs.track.lineno=217;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((typeof ($mod1=currChoice)==typeof ($mod2=2) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()) {
				$pyjs.track.lineno=218;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			}
			else {
				$pyjs.track.lineno=220;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <NO> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			}
		}
		$pyjs.track.lineno=222;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod3=currChoice)==typeof ($mod4=2) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) {
			$pyjs.track.lineno=223;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['__setslice']($p['getattr']($p['getattr'](e, 'choice'), 'userSelection'), 0, null, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs.track.lineno=224;
			(function(){try{try{$pyjs.in_try_except += 1;
			return e['choice']['userSelection']['append']($p['getattr'](e, 'pos'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
			$pyjs.track.lineno=225;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['goToNextState'], null, null, [{okToAdvance:true}, null, null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
		}
		else {
			$pyjs.track.lineno=227;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['goToNextState'], null, null, [{contestPos:$p['getattr'](e, 'contestPos'), okToAdvance:false}, $p['getattr'](e, 'choice'), $p['getattr'](e, 'pos')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewcandidates'].__name__ = 'onreviewcandidates';

	$m['onreviewcandidates'].__bind_type__ = 0;
	$m['onreviewcandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=229;
	$m['oncheckdone'] = function(e) {
		var $iter3_idx,contest,i,$iter3_nextval,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1;
		$pyjs.track={module:'sampleBallot',lineno:229};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=229;
		$pyjs.track.lineno=230;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			i = $tupleassign3[0];
			contest = $tupleassign3[1];
			$pyjs.track.lineno=231;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr'](contest, 'userSelection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) {
				$pyjs.track.lineno=232;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['goToNextState'](contest, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
				$pyjs.track.lineno=233;
				$pyjs.track.lineno=233;
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
		$pyjs.track.lineno=234;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['goToNextState'](null, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncheckdone'].__name__ = 'oncheckdone';

	$m['oncheckdone'].__bind_type__ = 0;
	$m['oncheckdone'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=237;
	$m['onreviewballot'] = function(e) {
		var $mod5,$mod7,$mod6,$iter4_type,$iter4_iter,$mod8,currChoice,contest,$add46,$add45,$add44,$add43,$add42,$add41,$sub12,$sub11,kb,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array;
		$pyjs.track={module:'sampleBallot',lineno:237};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=237;
		$pyjs.track.lineno=238;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nReview your selections:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
		$pyjs.track.lineno=239;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr']($m['race'], 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			contest = $iter4_nextval.$nextval;
			$pyjs.track.lineno=240;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add43=$p['__op_add']($add41=$p['getattr'](contest, '$$name'),$add42=':'),$add44=$p['getattr']($p['getattr'](contest, 'selectionList').__getitem__($p['getattr'](contest, 'userSelection').__getitem__(0)), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=242;
		currChoice = 0;
		$pyjs.track.lineno=243;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
		$pyjs.track.lineno=244;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
			$pyjs.track.lineno=245;
			kb = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof raw_input == "undefined"?$m.raw_input:raw_input)("'y' up, 'n' down, 'h' selects: ");
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
			$pyjs.track.lineno=246;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})(), 'y'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) {
				$pyjs.track.lineno=247;
				currChoice = $p['__op_add']($add45=currChoice,$add46=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})(), 'n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
				$pyjs.track.lineno=249;
				currChoice = $p['__op_sub']($sub11=currChoice,$sub12=1);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return kb['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})(), 'h'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
				$pyjs.track.lineno=251;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* CONFIRMED'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
				$pyjs.track.lineno=252;
				break;
			}
			$pyjs.track.lineno=253;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((typeof ($mod5=currChoice)==typeof ($mod6=2) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()) {
				$pyjs.track.lineno=254;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <YES> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			}
			else {
				$pyjs.track.lineno=256;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t* <NO> highlighted *'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			}
		}
		$pyjs.track.lineno=258;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod7=currChoice)==typeof ($mod8=2) && typeof $mod7=='number'?
			(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
			$p['op_mod']($mod7,$mod8)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
			$pyjs.track.lineno=259;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['goToNextState'](null, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
		}
		else {
			$pyjs.track.lineno=261;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['goToNextState'], null, null, [{okToAdvance:false}, $p['getattr'](e, 'race'), $p['getattr'](e, 'pos')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewballot'].__name__ = 'onreviewballot';

	$m['onreviewballot'].__bind_type__ = 0;
	$m['onreviewballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=264;
	$m['ondoneballot'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:264};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=264;
		$pyjs.track.lineno=265;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nVoting complete! Thanks for using this system!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['ondoneballot'].__name__ = 'ondoneballot';

	$m['ondoneballot'].__bind_type__ = 0;
	$m['ondoneballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=267;
	$pyjs.track.lineno=271;
	$m['fsm'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Fysom']((function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['initial', 'intro'], ['events', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'startVoting'], ['src', 'intro'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'selectContest'], ['src', 'contests'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectCandidates'], ['src', 'review_candidates'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneReview'], ['src', 'review_candidates'], ['dst', 'check_done']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'nextContest'], ['src', 'check_done'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'otherContest'], ['src', 'contests'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewBallot'], ['src', 'check_done'], ['dst', 'review_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectContest'], ['src', 'review_ballot'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneBallot'], ['src', 'review_ballot'], ['dst', 'done_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()], ['callbacks', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['onintro', $m['onintro']], ['oncontests', $m['oncontests']], ['oncandidates', $m['oncandidates']], ['onreview_candidates', $m['onreviewcandidates']], ['oncheck_done', $m['oncheckdone']], ['onreview_ballot', $m['onreviewballot']], ['ondone_ballot', $m['ondoneballot']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
	$pyjs.track.lineno=297;
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree', 'pyjamas.ui.KeyboardListener', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML']
*/
