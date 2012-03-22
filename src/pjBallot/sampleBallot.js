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
	$m.__track_lines__[8] = 'sampleBallot.py, line 8:\n    contestPosition = 0';
	$m.__track_lines__[9] = 'sampleBallot.py, line 9:\n    candidatePosition = 0';
	$m.__track_lines__[10] = 'sampleBallot.py, line 10:\n    confirm = 0';
	$m.__track_lines__[11] = 'sampleBallot.py, line 11:\n    currObj = ""';
	$m.__track_lines__[13] = 'sampleBallot.py, line 13:\n    contest = HorizontalPanel()';
	$m.__track_lines__[14] = "sampleBallot.py, line 14:\n    contest.setStyleName('words')";
	$m.__track_lines__[15] = 'sampleBallot.py, line 15:\n    candidate = HorizontalPanel()';
	$m.__track_lines__[16] = "sampleBallot.py, line 16:\n    candidate.setStyleName('words')";
	$m.__track_lines__[17] = 'sampleBallot.py, line 17:\n    selection = HorizontalPanel()';
	$m.__track_lines__[18] = "sampleBallot.py, line 18:\n    selection.setStyleName('words')";
	$m.__track_lines__[19] = 'sampleBallot.py, line 19:\n    status = HorizontalPanel()';
	$m.__track_lines__[20] = "sampleBallot.py, line 20:\n    status.add(HTML('STATUS'))";
	$m.__track_lines__[21] = "sampleBallot.py, line 21:\n    status.setStyleName('words')";
	$m.__track_lines__[23] = 'sampleBallot.py, line 23:\n    title = HorizontalPanel()';
	$m.__track_lines__[24] = 'sampleBallot.py, line 24:\n    instructions = HorizontalPanel()';
	$m.__track_lines__[28] = 'sampleBallot.py, line 28:\n    JS("""';
	$m.__track_lines__[33] = "sampleBallot.py, line 33:\n    race = Race('', [], '', '')";
	$m.__track_lines__[35] = 'sampleBallot.py, line 35:\n    def playAudio(confirm=None):';
	$m.__track_lines__[36] = 'sampleBallot.py, line 36:\n    global currObj';
	$m.__track_lines__[37] = 'sampleBallot.py, line 37:\n    path = "http://10.0.22.220/" + currObj.audioPath';
	$m.__track_lines__[41] = 'sampleBallot.py, line 41:\n    if confirm == True:';
	$m.__track_lines__[42] = 'sampleBallot.py, line 42:\n    confirmPath = "http://10.0.22.220/media/confirm.wav"';
	$m.__track_lines__[43] = "sampleBallot.py, line 43:\n    JS('''";
	$m.__track_lines__[57] = 'sampleBallot.py, line 57:\n    confirmPath = "http://10.0.22.220/media/reselectCandidate.wav"';
	$m.__track_lines__[58] = "sampleBallot.py, line 58:\n    JS('''";
	$m.__track_lines__[64] = "sampleBallot.py, line 64:\n    JS('''";
	$m.__track_lines__[69] = 'sampleBallot.py, line 69:\n    def sendRace(srace):';
	$m.__track_lines__[70] = 'sampleBallot.py, line 70:\n    global race';
	$m.__track_lines__[71] = 'sampleBallot.py, line 71:\n    race = srace';
	$m.__track_lines__[73] = 'sampleBallot.py, line 73:\n    def getInstruction():';
	$m.__track_lines__[74] = 'sampleBallot.py, line 74:\n    return race.name';
	$m.__track_lines__[76] = 'sampleBallot.py, line 76:\n    def setContest():';
	$m.__track_lines__[77] = 'sampleBallot.py, line 77:\n    global candidatePosition';
	$m.__track_lines__[78] = 'sampleBallot.py, line 78:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[79] = 'sampleBallot.py, line 79:\n    contest.clear()';
	$m.__track_lines__[80] = "sampleBallot.py, line 80:\n    contest.add(HTML('<b /> Contest: %s' % curcontest.name))";
	$m.__track_lines__[81] = 'sampleBallot.py, line 81:\n    candidateList = curcontest.selectionList';
	$m.__track_lines__[82] = 'sampleBallot.py, line 82:\n    if not curcontest.userSelection:';
	$m.__track_lines__[83] = 'sampleBallot.py, line 83:\n    candidatePosition = 0';
	$m.__track_lines__[84] = 'sampleBallot.py, line 84:\n    selection.clear()';
	$m.__track_lines__[85] = "sampleBallot.py, line 85:\n    selection.add(HTML('<b /> Selection: -'))";
	$m.__track_lines__[87] = 'sampleBallot.py, line 87:\n    candidatePosition = candidateList.index(curcontest.userSelection[-1])';
	$m.__track_lines__[88] = 'sampleBallot.py, line 88:\n    selection.clear()';
	$m.__track_lines__[89] = "sampleBallot.py, line 89:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[90] = 'sampleBallot.py, line 90:\n    playAudio()';
	$m.__track_lines__[92] = 'sampleBallot.py, line 92:\n    def setConfirm(num):';
	$m.__track_lines__[93] = 'sampleBallot.py, line 93:\n    confirm += num;';
	$m.__track_lines__[94] = 'sampleBallot.py, line 94:\n    status.clear()';
	$m.__track_lines__[95] = 'sampleBallot.py, line 95:\n    if confirm % 2 == 0:';
	$m.__track_lines__[96] = "sampleBallot.py, line 96:\n    status.add(HTML('YES'))";
	$m.__track_lines__[97] = 'sampleBallot.py, line 97:\n    playAudio(confirm=True)';
	$m.__track_lines__[98] = 'sampleBallot.py, line 98:\n    return True';
	$m.__track_lines__[100] = "sampleBallot.py, line 100:\n    status.add(HTML('NO'))";
	$m.__track_lines__[101] = 'sampleBallot.py, line 101:\n    playAudio(confirm=False)';
	$m.__track_lines__[102] = 'sampleBallot.py, line 102:\n    return False';
	$m.__track_lines__[104] = 'sampleBallot.py, line 104:\n    def setCandidate():';
	$m.__track_lines__[105] = 'sampleBallot.py, line 105:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[106] = 'sampleBallot.py, line 106:\n    candidateName = curcontest.selectionList[candidatePosition].name';
	$m.__track_lines__[107] = 'sampleBallot.py, line 107:\n    candidate.clear()';
	$m.__track_lines__[108] = "sampleBallot.py, line 108:\n    candidate.add(HTML('<b /> Candidate: %s' % candidateName))";
	$m.__track_lines__[109] = 'sampleBallot.py, line 109:\n    playAudio()';
	$m.__track_lines__[111] = 'sampleBallot.py, line 111:\n    def makeSelection():';
	$m.__track_lines__[112] = 'sampleBallot.py, line 112:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[113] = 'sampleBallot.py, line 113:\n    curcandidate = curcontest.selectionList[candidatePosition]';
	$m.__track_lines__[114] = 'sampleBallot.py, line 114:\n    curcontest.userSelection[:] = []';
	$m.__track_lines__[115] = 'sampleBallot.py, line 115:\n    curcontest.userSelection.append(curcandidate)';
	$m.__track_lines__[116] = 'sampleBallot.py, line 116:\n    selection.clear()';
	$m.__track_lines__[117] = "sampleBallot.py, line 117:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[119] = 'sampleBallot.py, line 119:\n    def onKeyPress(sender, keycode, modifiers):';
	$m.__track_lines__[120] = 'sampleBallot.py, line 120:\n    global contestPosition, candidatePosition, fsm, currObj';
	$m.__track_lines__[122] = 'sampleBallot.py, line 122:\n    contestList = race.selectionList';
	$m.__track_lines__[123] = 'sampleBallot.py, line 123:\n    candidateList = race.selectionList[contestPosition].selectionList';
	$m.__track_lines__[126] = "sampleBallot.py, line 126:\n    if fsm.current == 'contests':";
	$m.__track_lines__[127] = 'sampleBallot.py, line 127:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[128] = 'sampleBallot.py, line 128:\n    contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0';
	$m.__track_lines__[129] = 'sampleBallot.py, line 129:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[131] = 'sampleBallot.py, line 131:\n    contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1';
	$m.__track_lines__[132] = 'sampleBallot.py, line 132:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[134] = 'sampleBallot.py, line 134:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[135] = 'sampleBallot.py, line 135:\n    fsm.selectCandidate()';
	$m.__track_lines__[136] = 'sampleBallot.py, line 136:\n    setCandidate()';
	$m.__track_lines__[137] = 'sampleBallot.py, line 137:\n    return';
	$m.__track_lines__[139] = 'sampleBallot.py, line 139:\n    return';
	$m.__track_lines__[140] = 'sampleBallot.py, line 140:\n    setContest()';
	$m.__track_lines__[144] = 'sampleBallot.py, line 144:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[145] = 'sampleBallot.py, line 145:\n    candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0';
	$m.__track_lines__[146] = 'sampleBallot.py, line 146:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[148] = 'sampleBallot.py, line 148:\n    candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1';
	$m.__track_lines__[149] = 'sampleBallot.py, line 149:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[151] = 'sampleBallot.py, line 151:\n    fsm.reviewCandidates()';
	$m.__track_lines__[152] = 'sampleBallot.py, line 152:\n    setConfirm(0)';
	$m.__track_lines__[153] = 'sampleBallot.py, line 153:\n    return';
	$m.__track_lines__[155] = 'sampleBallot.py, line 155:\n    return';
	$m.__track_lines__[156] = 'sampleBallot.py, line 156:\n    setCandidate()';
	$m.__track_lines__[160] = 'sampleBallot.py, line 160:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[161] = 'sampleBallot.py, line 161:\n    setConfirm(1)';
	$m.__track_lines__[163] = 'sampleBallot.py, line 163:\n    setConfirm(-1)';
	$m.__track_lines__[165] = 'sampleBallot.py, line 165:\n    if confirm % 2 == 0:';
	$m.__track_lines__[166] = 'sampleBallot.py, line 166:\n    race.selectionList[contestPosition].userSelection.append(candidatePosition)';
	$m.__track_lines__[167] = 'sampleBallot.py, line 167:\n    makeSelection()';
	$m.__track_lines__[168] = 'sampleBallot.py, line 168:\n    fsm.doneReview()';
	$m.__track_lines__[170] = 'sampleBallot.py, line 170:\n    fsm.reselectCandidates()';
	$m.__track_lines__[174] = 'sampleBallot.py, line 174:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[175] = 'sampleBallot.py, line 175:\n    setConfirm(1)';
	$m.__track_lines__[177] = 'sampleBallot.py, line 177:\n    setConfirm(-1)';
	$m.__track_lines__[179] = 'sampleBallot.py, line 179:\n    if confirm % 2 == 0:';
	$m.__track_lines__[180] = 'sampleBallot.py, line 180:\n    fsm.doneBallot()';
	$m.__track_lines__[182] = 'sampleBallot.py, line 182:\n    fsm.reselectContest()';
	$m.__track_lines__[184] = "sampleBallot.py, line 184:\n    '''";
	$m.__track_lines__[187] = 'sampleBallot.py, line 187:\n    def traverselist(obj):';
	$m.__track_lines__[188] = 'sampleBallot.py, line 188:\n    alist = obj.selectionList';
	$m.__track_lines__[189] = "sampleBallot.py, line 189:\n    print('* ' + alist[contestPosition].name + ' highlighted *')";
	$m.__track_lines__[191] = "sampleBallot.py, line 191:\n    '''";
	$m.__track_lines__[194] = 'sampleBallot.py, line 194:\n    def printstatechange(e):';
	$m.__track_lines__[195] = "sampleBallot.py, line 195:\n    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)";
	$m.__track_lines__[197] = 'sampleBallot.py, line 197:\n    def onintro(e):';
	$m.__track_lines__[198] = "sampleBallot.py, line 198:\n    print 'hello!'";
	$m.__track_lines__[200] = 'sampleBallot.py, line 200:\n    def oncontests(e):';
	$m.__track_lines__[201] = 'sampleBallot.py, line 201:\n    candidate.clear()';
	$m.__track_lines__[202] = 'sampleBallot.py, line 202:\n    status.clear()';
	$m.__track_lines__[203] = "sampleBallot.py, line 203:\n    print('\\nThe contests are:')";
	$m.__track_lines__[204] = 'sampleBallot.py, line 204:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[205] = "sampleBallot.py, line 205:\n    print('\\t' + str(i + 1) + ') ' + contest.name)";
	$m.__track_lines__[206] = 'sampleBallot.py, line 206:\n    traverselist(race)';
	$m.__track_lines__[208] = 'sampleBallot.py, line 208:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[209] = 'sampleBallot.py, line 209:\n    print "current contest is " + currObj.name';
	$m.__track_lines__[212] = 'sampleBallot.py, line 212:\n    def oncandidates(e):';
	$m.__track_lines__[213] = 'sampleBallot.py, line 213:\n    currContest = race.selectionList[contestPosition]';
	$m.__track_lines__[214] = "sampleBallot.py, line 214:\n    print('\\nCurrent race is: ' + currContest.name)";
	$m.__track_lines__[215] = "sampleBallot.py, line 215:\n    print('Candidates are:')";
	$m.__track_lines__[216] = 'sampleBallot.py, line 216:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[217] = 'sampleBallot.py, line 217:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[218] = 'sampleBallot.py, line 218:\n    traverselist(currContest)';
	$m.__track_lines__[220] = 'sampleBallot.py, line 220:\n    currObj = currContest.selectionList[contestPosition]';
	$m.__track_lines__[221] = 'sampleBallot.py, line 221:\n    print "current candidate is " + currObj.name';
	$m.__track_lines__[223] = 'sampleBallot.py, line 223:\n    def onreviewcandidates(e):';
	$m.__track_lines__[224] = "sampleBallot.py, line 224:\n    print('\\nReview Your Choice for ' + race.selectionList[contestPosition].name + ':')";
	$m.__track_lines__[225] = 'sampleBallot.py, line 225:\n    candidate = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[226] = "sampleBallot.py, line 226:\n    print('\\t' + candidate.name)";
	$m.__track_lines__[228] = 'sampleBallot.py, line 228:\n    def oncheckdone(e):';
	$m.__track_lines__[229] = 'sampleBallot.py, line 229:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[230] = 'sampleBallot.py, line 230:\n    if len(contest.userSelection) == 0:';
	$m.__track_lines__[231] = 'sampleBallot.py, line 231:\n    fsm.nextContest()';
	$m.__track_lines__[232] = 'sampleBallot.py, line 232:\n    return';
	$m.__track_lines__[233] = 'sampleBallot.py, line 233:\n    fsm.reviewBallot()';
	$m.__track_lines__[235] = 'sampleBallot.py, line 235:\n    def onreviewballot(e):';
	$m.__track_lines__[236] = "sampleBallot.py, line 236:\n    print('\\nReview your selections:')";
	$m.__track_lines__[237] = 'sampleBallot.py, line 237:\n    for contest in race.selectionList:';
	$m.__track_lines__[238] = "sampleBallot.py, line 238:\n    print(contest.name + ':' + contest.userSelection[0].name)";
	$m.__track_lines__[239] = 'sampleBallot.py, line 239:\n    setConfirm(0)';
	$m.__track_lines__[241] = 'sampleBallot.py, line 241:\n    def ondoneballot(e):';
	$m.__track_lines__[242] = "sampleBallot.py, line 242:\n    print('\\nVoting complete! Thanks for using this system!')";
	$m.__track_lines__[245] = "sampleBallot.py, line 245:\n    '''";
	$m.__track_lines__[248] = 'sampleBallot.py, line 248:\n    fsm = Fysom({';
	$m.__track_lines__[274] = "sampleBallot.py, line 274:\n    '''";


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
	$m['contestPosition'] = 0;
	$pyjs.track.lineno=9;
	$m['candidatePosition'] = 0;
	$pyjs.track.lineno=10;
	$m['confirm'] = 0;
	$pyjs.track.lineno=11;
	$m['currObj'] = '';
	$pyjs.track.lineno=13;
	$m['contest'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=14;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=15;
	$m['candidate'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs.track.lineno=16;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['candidate']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs.track.lineno=17;
	$m['selection'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
	$pyjs.track.lineno=18;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs.track.lineno=19;
	$m['status'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
	$pyjs.track.lineno=20;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
	return $m['HTML']('STATUS');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
	$pyjs.track.lineno=21;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['status']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
	$pyjs.track.lineno=23;
	$m['title'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
	$pyjs.track.lineno=24;
	$m['instructions'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
	$pyjs.track.lineno=28;

var mainSnd = new Audio();
var snd1 = new Audio();

	$pyjs.track.lineno=33;
	$m['race'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), '', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
	$pyjs.track.lineno=35;
	$m['playAudio'] = function(confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[2][1];
		var $add2,$add1,confirmPath,path;
		$pyjs.track={module:'sampleBallot',lineno:35};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=35;
		$pyjs.track.lineno=36;
		$pyjs.track.lineno=37;
		path = $p['__op_add']($add1='http://10.0.22.220/',$add2=$p['getattr']($m['currObj'], 'audioPath'));
		$pyjs.track.lineno=41;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](confirm, true));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
			$pyjs.track.lineno=42;
			confirmPath = 'http://10.0.22.220/media/confirm.wav';
			$pyjs.track.lineno=43;

        mainSnd.pause();
        snd1.src = confirmPath;  
        snd1.addEventListener('ended', function(){
            snd1.currentTime = 0;
            snd1.pause();
            mainSnd.src = path;
            mainSnd.play();        
        }, false);     
        snd1.play();
        
		}
		else if ($p['bool']($p['op_eq'](confirm, false))) {
			$pyjs.track.lineno=57;
			confirmPath = 'http://10.0.22.220/media/reselectCandidate.wav';
			$pyjs.track.lineno=58;

        mainSnd.src = confirmPath;
        mainSnd.play();
        
		}
		else {
			$pyjs.track.lineno=64;

        mainSnd.src = path;
        mainSnd.play();
        
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['confirm', null]];
	$pyjs.track.lineno=69;
	$m['sendRace'] = function(srace) {

		$pyjs.track={module:'sampleBallot',lineno:69};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=69;
		$pyjs.track.lineno=70;
		$pyjs.track.lineno=71;
		$m['race'] = srace;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$pyjs.track.lineno=73;
	$m['getInstruction'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:73};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=73;
		$pyjs.track.lineno=74;
		$pyjs.track.lineno=74;
		var $pyjs__ret = $p['getattr']($m['race'], '$$name');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	$pyjs.track.lineno=76;
	$m['setContest'] = function() {
		var curcontest,candidateList;
		$pyjs.track={module:'sampleBallot',lineno:76};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=76;
		$pyjs.track.lineno=77;
		$pyjs.track.lineno=78;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=79;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		$pyjs.track.lineno=80;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Contest: %s', $p['getattr'](curcontest, '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
		$pyjs.track.lineno=81;
		candidateList = $p['getattr'](curcontest, 'selectionList');
		$pyjs.track.lineno=82;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($p['getattr'](curcontest, 'userSelection')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
			$pyjs.track.lineno=83;
			$m['candidatePosition'] = 0;
			$pyjs.track.lineno=84;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=85;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b /> Selection: -');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		}
		else {
			$pyjs.track.lineno=87;
			$m['candidatePosition'] = (function(){try{try{$pyjs.in_try_except += 1;
			return candidateList['index']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=88;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs.track.lineno=89;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
		}
		$pyjs.track.lineno=90;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setContest'].__name__ = 'setContest';

	$m['setContest'].__bind_type__ = 0;
	$m['setContest'].__args__ = [null,null];
	$pyjs.track.lineno=92;
	$m['setConfirm'] = function(num) {
		var $add3,$mod1,$add4,$mod2;
		$pyjs.track={module:'sampleBallot',lineno:92};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=92;
		$pyjs.track.lineno=93;
		$m['confirm'] = $p['__op_add']($add3=$m['confirm'],$add4=num);
		$pyjs.track.lineno=94;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		$pyjs.track.lineno=95;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod1=$m['confirm'])==typeof ($mod2=2) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
			$pyjs.track.lineno=96;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('YES');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=97;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=98;
			$pyjs.track.lineno=98;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else {
			$pyjs.track.lineno=100;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('NO');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs.track.lineno=101;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:false}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs.track.lineno=102;
			$pyjs.track.lineno=102;
			var $pyjs__ret = false;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setConfirm'].__name__ = 'setConfirm';

	$m['setConfirm'].__bind_type__ = 0;
	$m['setConfirm'].__args__ = [null,null,['num']];
	$pyjs.track.lineno=104;
	$m['setCandidate'] = function() {
		var curcontest,candidateName;
		$pyjs.track={module:'sampleBallot',lineno:104};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=104;
		$pyjs.track.lineno=105;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=106;
		candidateName = $p['getattr']($p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']), '$$name');
		$pyjs.track.lineno=107;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
		$pyjs.track.lineno=108;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Candidate: %s', candidateName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
		$pyjs.track.lineno=109;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCandidate'].__name__ = 'setCandidate';

	$m['setCandidate'].__bind_type__ = 0;
	$m['setCandidate'].__args__ = [null,null];
	$pyjs.track.lineno=111;
	$m['makeSelection'] = function() {
		var curcontest,curcandidate;
		$pyjs.track={module:'sampleBallot',lineno:111};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=111;
		$pyjs.track.lineno=112;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=113;
		curcandidate = $p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=114;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['__setslice']($p['getattr'](curcontest, 'userSelection'), 0, null, (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs.track.lineno=115;
		(function(){try{try{$pyjs.in_try_except += 1;
		return curcontest['userSelection']['append'](curcandidate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
		$pyjs.track.lineno=116;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		$pyjs.track.lineno=117;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['makeSelection'].__name__ = 'makeSelection';

	$m['makeSelection'].__bind_type__ = 0;
	$m['makeSelection'].__args__ = [null,null];
	$pyjs.track.lineno=119;
	$m['onKeyPress'] = function(sender, keycode, modifiers) {
		var $mod5,$mod4,$mod6,$mod3,candidateList,contestList,$sub8,$add7,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add10,$add11,$add12,$add6,$add5,$add8,$add9;
		$pyjs.track={module:'sampleBallot',lineno:119};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=119;
		$pyjs.track.lineno=120;
		$pyjs.track.lineno=122;
		contestList = $p['getattr']($m['race'], 'selectionList');
		$pyjs.track.lineno=123;
		candidateList = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList');
		$pyjs.track.lineno=126;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
			$pyjs.track.lineno=127;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs.track.lineno=128;
				$m['contestPosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add5=$m['contestPosition'],$add6=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) == -1))? ($p['__op_add']($add7=$m['contestPosition'],$add8=1)) : (0));
				$pyjs.track.lineno=129;
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
				$pyjs.track.lineno=131;
				$m['contestPosition'] = ($p['bool']($p['op_eq']($m['contestPosition'], 0))? ($p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})(),$sub2=1)) : ($p['__op_sub']($sub3=$m['contestPosition'],$sub4=1)));
				$pyjs.track.lineno=132;
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
				$pyjs.track.lineno=134;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=135;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['selectCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs.track.lineno=136;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs.track.lineno=137;
				$pyjs.track.lineno=137;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=139;
				$pyjs.track.lineno=139;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=140;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
			$pyjs.track.lineno=144;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
				$pyjs.track.lineno=145;
				$m['candidatePosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add9=$m['candidatePosition'],$add10=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) == -1))? ($p['__op_add']($add11=$m['candidatePosition'],$add12=1)) : (0));
				$pyjs.track.lineno=146;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs.track.lineno=148;
				$m['candidatePosition'] = ($p['bool']($p['op_eq']($m['candidatePosition'], 0))? ($p['__op_sub']($sub5=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})(),$sub6=1)) : ($p['__op_sub']($sub7=$m['candidatePosition'],$sub8=1)));
				$pyjs.track.lineno=149;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
				$pyjs.track.lineno=151;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['reviewCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs.track.lineno=152;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				$pyjs.track.lineno=153;
				$pyjs.track.lineno=153;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=155;
				$pyjs.track.lineno=155;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=156;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
			$pyjs.track.lineno=160;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
				$pyjs.track.lineno=161;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
				$pyjs.track.lineno=163;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm']((typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs.track.lineno=165;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((typeof ($mod3=$m['confirm'])==typeof ($mod4=2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
					$pyjs.track.lineno=166;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition'])['userSelection']['append']($m['candidatePosition']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
					$pyjs.track.lineno=167;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['makeSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
					$pyjs.track.lineno=168;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['doneReview']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				}
				else {
					$pyjs.track.lineno=170;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				}
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
			$pyjs.track.lineno=174;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs.track.lineno=175;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
				$pyjs.track.lineno=177;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm']((typeof ($usub5=1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
				$pyjs.track.lineno=179;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((typeof ($mod5=$m['confirm'])==typeof ($mod6=2) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
					$pyjs.track.lineno=180;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['doneBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				}
				else {
					$pyjs.track.lineno=182;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				}
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onKeyPress'].__name__ = 'onKeyPress';

	$m['onKeyPress'].__bind_type__ = 0;
	$m['onKeyPress'].__args__ = [null,null,['sender'],['keycode'],['modifiers']];
	$pyjs.track.lineno=184;
	$pyjs.track.lineno=187;
	$m['traverselist'] = function(obj) {
		var alist,$add14,$add15,$add16,$add13;
		$pyjs.track={module:'sampleBallot',lineno:187};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=187;
		$pyjs.track.lineno=188;
		alist = $p['getattr'](obj, 'selectionList');
		$pyjs.track.lineno=189;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add15=$p['__op_add']($add13='* ',$add14=$p['getattr'](alist.__getitem__($m['contestPosition']), '$$name')),$add16=' highlighted *')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['traverselist'].__name__ = 'traverselist';

	$m['traverselist'].__bind_type__ = 0;
	$m['traverselist'].__args__ = [null,null,['obj']];
	$pyjs.track.lineno=191;
	$pyjs.track.lineno=194;
	$m['printstatechange'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:194};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=194;
		$pyjs.track.lineno=195;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('event: %s, src: %s, dst: %s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$p['getattr'](e, 'event'), $p['getattr'](e, 'src'), $p['getattr'](e, 'dst')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['printstatechange'].__name__ = 'printstatechange';

	$m['printstatechange'].__bind_type__ = 0;
	$m['printstatechange'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=197;
	$m['onintro'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:197};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=197;
		$pyjs.track.lineno=198;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['hello!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onintro'].__name__ = 'onintro';

	$m['onintro'].__bind_type__ = 0;
	$m['onintro'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=200;
	$m['oncontests'] = function(e) {
		var currObj,$iter1_nextval,$iter1_type,contest,i,$add20,$add23,$add22,$add25,$add24,$iter1_iter,$add21,$add17,$iter1_array,$pyjs__trackstack_size_1,$add26,$add18,$add19,$iter1_idx;
		$pyjs.track={module:'sampleBallot',lineno:200};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=200;
		$pyjs.track.lineno=201;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
		$pyjs.track.lineno=202;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
		$pyjs.track.lineno=203;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nThe contests are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
		$pyjs.track.lineno=204;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			i = $tupleassign1[0];
			contest = $tupleassign1[1];
			$pyjs.track.lineno=205;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add19='\t',$add20=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add17=i,$add18=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()),$add22=') '),$add24=$p['getattr'](contest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=206;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist']($m['race']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
		$pyjs.track.lineno=208;
		currObj = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=209;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add25='current contest is ',$add26=$p['getattr'](currObj, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncontests'].__name__ = 'oncontests';

	$m['oncontests'].__bind_type__ = 0;
	$m['oncontests'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=212;
	$m['oncandidates'] = function(e) {
		var currContest,$add29,$add28,$iter2_iter,$add27,currObj,$iter2_type,$add32,$iter2_idx,$add38,$iter2_nextval,i,$add33,$add30,$add31,$add36,$add37,$add34,$add35,person,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs.track={module:'sampleBallot',lineno:212};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=212;
		$pyjs.track.lineno=213;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=214;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add27='\nCurrent race is: ',$add28=$p['getattr'](currContest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
		$pyjs.track.lineno=215;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
		$pyjs.track.lineno=216;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			i = $tupleassign2[0];
			person = $tupleassign2[1];
			$pyjs.track.lineno=217;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add35=$p['__op_add']($add33=$p['__op_add']($add31='\t',$add32=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add29=i,$add30=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()),$add34=') '),$add36=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=218;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist'](currContest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
		$pyjs.track.lineno=220;
		currObj = $p['getattr'](currContest, 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=221;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add37='current candidate is ',$add38=$p['getattr'](currObj, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncandidates'].__name__ = 'oncandidates';

	$m['oncandidates'].__bind_type__ = 0;
	$m['oncandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=223;
	$m['onreviewcandidates'] = function(e) {
		var $add39,candidate,$add44,$add43,$add42,$add41,$add40;
		$pyjs.track={module:'sampleBallot',lineno:223};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=223;
		$pyjs.track.lineno=224;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add41=$p['__op_add']($add39='\nReview Your Choice for ',$add40=$p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), '$$name')),$add42=':')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
		$pyjs.track.lineno=225;
		candidate = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=226;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add43='\t',$add44=$p['getattr'](candidate, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewcandidates'].__name__ = 'onreviewcandidates';

	$m['onreviewcandidates'].__bind_type__ = 0;
	$m['onreviewcandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=228;
	$m['oncheckdone'] = function(e) {
		var $iter3_idx,contest,i,$iter3_nextval,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1;
		$pyjs.track={module:'sampleBallot',lineno:228};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=228;
		$pyjs.track.lineno=229;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			i = $tupleassign3[0];
			contest = $tupleassign3[1];
			$pyjs.track.lineno=230;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr'](contest, 'userSelection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
				$pyjs.track.lineno=231;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				$pyjs.track.lineno=232;
				$pyjs.track.lineno=232;
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
		$pyjs.track.lineno=233;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.fsm['reviewBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncheckdone'].__name__ = 'oncheckdone';

	$m['oncheckdone'].__bind_type__ = 0;
	$m['oncheckdone'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=235;
	$m['onreviewballot'] = function(e) {
		var contest,$add47,$iter4_nextval,$add45,$add48,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,$add46;
		$pyjs.track={module:'sampleBallot',lineno:235};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=235;
		$pyjs.track.lineno=236;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nReview your selections:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
		$pyjs.track.lineno=237;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr']($m['race'], 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			contest = $iter4_nextval.$nextval;
			$pyjs.track.lineno=238;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add47=$p['__op_add']($add45=$p['getattr'](contest, '$$name'),$add46=':'),$add48=$p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=239;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['setConfirm'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewballot'].__name__ = 'onreviewballot';

	$m['onreviewballot'].__bind_type__ = 0;
	$m['onreviewballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=241;
	$m['ondoneballot'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:241};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=241;
		$pyjs.track.lineno=242;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nVoting complete! Thanks for using this system!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['ondoneballot'].__name__ = 'ondoneballot';

	$m['ondoneballot'].__bind_type__ = 0;
	$m['ondoneballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=245;
	$pyjs.track.lineno=248;
	$m['fsm'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Fysom']((function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['initial', 'intro'], ['events', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'startVoting'], ['src', 'intro'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'selectCandidate'], ['src', 'contests'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectCandidates'], ['src', 'review_candidates'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneReview'], ['src', 'review_candidates'], ['dst', 'check_done']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'nextContest'], ['src', 'check_done'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'otherContest'], ['src', 'contests'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewBallot'], ['src', 'check_done'], ['dst', 'review_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectContest'], ['src', 'review_ballot'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneBallot'], ['src', 'review_ballot'], ['dst', 'done_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()], ['callbacks', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['onintro', $m['onintro']], ['oncontests', $m['oncontests']], ['oncandidates', $m['oncandidates']], ['onreview_candidates', $m['onreviewcandidates']], ['oncheck_done', $m['oncheckdone']], ['onreview_ballot', $m['onreviewballot']], ['ondone_ballot', $m['ondoneballot']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
	$pyjs.track.lineno=274;
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree', 'pyjamas.ui.KeyboardListener', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML']
*/
