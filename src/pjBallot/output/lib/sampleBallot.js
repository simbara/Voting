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
	$m.__track_lines__[9] = 'sampleBallot.py, line 9:\n    from audioControls import playAudio, pauseAudio, isPlayingAudio, playAudioList, fadeAudio';
	$m.__track_lines__[11] = 'sampleBallot.py, line 11:\n    import buzz.js';
	$m.__track_lines__[13] = "sampleBallot.py, line 13:\n    JS('''";
	$m.__track_lines__[18] = 'sampleBallot.py, line 18:\n    contestPosition = 0';
	$m.__track_lines__[19] = 'sampleBallot.py, line 19:\n    candidatePosition = 0';
	$m.__track_lines__[20] = 'sampleBallot.py, line 20:\n    confirm = 0';
	$m.__track_lines__[21] = 'sampleBallot.py, line 21:\n    currObj = ""';
	$m.__track_lines__[22] = 'sampleBallot.py, line 22:\n    review_path = []';
	$m.__track_lines__[24] = 'sampleBallot.py, line 24:\n    contest = HorizontalPanel()';
	$m.__track_lines__[25] = "sampleBallot.py, line 25:\n    contest.setStyleName('words')";
	$m.__track_lines__[26] = 'sampleBallot.py, line 26:\n    candidate = HorizontalPanel()';
	$m.__track_lines__[27] = "sampleBallot.py, line 27:\n    candidate.setStyleName('words')";
	$m.__track_lines__[28] = 'sampleBallot.py, line 28:\n    selection = HorizontalPanel()';
	$m.__track_lines__[29] = "sampleBallot.py, line 29:\n    selection.setStyleName('words')";
	$m.__track_lines__[30] = 'sampleBallot.py, line 30:\n    status = HorizontalPanel()';
	$m.__track_lines__[31] = "sampleBallot.py, line 31:\n    status.add(HTML('STATUS'))";
	$m.__track_lines__[32] = "sampleBallot.py, line 32:\n    status.setStyleName('words')";
	$m.__track_lines__[34] = 'sampleBallot.py, line 34:\n    title = HorizontalPanel()';
	$m.__track_lines__[35] = 'sampleBallot.py, line 35:\n    instructions = HorizontalPanel()';
	$m.__track_lines__[37] = "sampleBallot.py, line 37:\n    race = Race('', [], '', '')";
	$m.__track_lines__[40] = 'sampleBallot.py, line 40:\n    def sendRace(srace):';
	$m.__track_lines__[41] = 'sampleBallot.py, line 41:\n    global race';
	$m.__track_lines__[42] = 'sampleBallot.py, line 42:\n    race = srace';
	$m.__track_lines__[44] = 'sampleBallot.py, line 44:\n    def getInstruction():';
	$m.__track_lines__[45] = 'sampleBallot.py, line 45:\n    return race.name';
	$m.__track_lines__[47] = 'sampleBallot.py, line 47:\n    def setContest():';
	$m.__track_lines__[48] = 'sampleBallot.py, line 48:\n    global candidatePosition';
	$m.__track_lines__[49] = 'sampleBallot.py, line 49:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[50] = 'sampleBallot.py, line 50:\n    contest.clear()';
	$m.__track_lines__[51] = "sampleBallot.py, line 51:\n    contest.add(HTML('<b /> Contest: %s' % curcontest.name))";
	$m.__track_lines__[52] = 'sampleBallot.py, line 52:\n    candidateList = curcontest.selectionList';
	$m.__track_lines__[53] = 'sampleBallot.py, line 53:\n    if not curcontest.userSelection:';
	$m.__track_lines__[54] = 'sampleBallot.py, line 54:\n    candidatePosition = 0';
	$m.__track_lines__[55] = 'sampleBallot.py, line 55:\n    selection.clear()';
	$m.__track_lines__[56] = "sampleBallot.py, line 56:\n    selection.add(HTML('<b /> Selection: -'))";
	$m.__track_lines__[58] = 'sampleBallot.py, line 58:\n    candidatePosition = candidateList.index(curcontest.userSelection[-1])';
	$m.__track_lines__[59] = 'sampleBallot.py, line 59:\n    selection.clear()';
	$m.__track_lines__[60] = "sampleBallot.py, line 60:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[61] = 'sampleBallot.py, line 61:\n    playAudio(currObj.audioPath)';
	$m.__track_lines__[62] = 'sampleBallot.py, line 62:\n    print currObj.audioPath #TODO';
	$m.__track_lines__[64] = 'sampleBallot.py, line 64:\n    def setConfirm(num):';
	$m.__track_lines__[65] = 'sampleBallot.py, line 65:\n    confirm += num;';
	$m.__track_lines__[66] = 'sampleBallot.py, line 66:\n    status.clear()';
	$m.__track_lines__[67] = 'sampleBallot.py, line 67:\n    if confirm % 2 == 0:';
	$m.__track_lines__[68] = "sampleBallot.py, line 68:\n    status.add(HTML('YES'))";
	$m.__track_lines__[69] = 'sampleBallot.py, line 69:\n    if fsm.current == "review_ballot":';
	$m.__track_lines__[70] = 'sampleBallot.py, line 70:\n    playAudio("/media/ballot.wav", confirm=True)';
	$m.__track_lines__[72] = 'sampleBallot.py, line 72:\n    playAudio(currObj.audioPath, confirm=True)';
	$m.__track_lines__[73] = 'sampleBallot.py, line 73:\n    return True';
	$m.__track_lines__[75] = "sampleBallot.py, line 75:\n    status.add(HTML('NO'))";
	$m.__track_lines__[76] = 'sampleBallot.py, line 76:\n    playAudio(currObj.audioPath, confirm=False)';
	$m.__track_lines__[77] = 'sampleBallot.py, line 77:\n    return False';
	$m.__track_lines__[79] = 'sampleBallot.py, line 79:\n    def setCandidate():';
	$m.__track_lines__[80] = 'sampleBallot.py, line 80:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[81] = 'sampleBallot.py, line 81:\n    candidateName = curcontest.selectionList[candidatePosition].name';
	$m.__track_lines__[82] = 'sampleBallot.py, line 82:\n    candidate.clear()';
	$m.__track_lines__[83] = "sampleBallot.py, line 83:\n    candidate.add(HTML('<b /> Candidate: %s' % candidateName))";
	$m.__track_lines__[84] = 'sampleBallot.py, line 84:\n    playAudio(currObj.audioPath)';
	$m.__track_lines__[86] = 'sampleBallot.py, line 86:\n    def makeSelection():';
	$m.__track_lines__[87] = 'sampleBallot.py, line 87:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[88] = 'sampleBallot.py, line 88:\n    curcandidate = curcontest.selectionList[candidatePosition]';
	$m.__track_lines__[89] = 'sampleBallot.py, line 89:\n    curcontest.userSelection[:] = []';
	$m.__track_lines__[90] = 'sampleBallot.py, line 90:\n    curcontest.userSelection.append(curcandidate)';
	$m.__track_lines__[91] = 'sampleBallot.py, line 91:\n    selection.clear()';
	$m.__track_lines__[92] = "sampleBallot.py, line 92:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[94] = 'sampleBallot.py, line 94:\n    def onKeyPress(sender, keycode, modifiers):';
	$m.__track_lines__[95] = 'sampleBallot.py, line 95:\n    global contestPosition, candidatePosition, fsm, currObj, confirm';
	$m.__track_lines__[97] = 'sampleBallot.py, line 97:\n    contestList = race.selectionList';
	$m.__track_lines__[98] = 'sampleBallot.py, line 98:\n    candidateList = race.selectionList[contestPosition].selectionList';
	$m.__track_lines__[100] = 'sampleBallot.py, line 100:\n    if keycode == KeyboardListener.KEY_SHIFT:';
	$m.__track_lines__[106] = 'sampleBallot.py, line 106:\n    print fsm.current';
	$m.__track_lines__[107] = "sampleBallot.py, line 107:\n    JS('''";
	$m.__track_lines__[111] = 'sampleBallot.py, line 111:\n    if keycode == KeyboardListener.KEY_CTRL:';
	$m.__track_lines__[112] = "sampleBallot.py, line 112:\n    JS('''";
	$m.__track_lines__[118] = 'sampleBallot.py, line 118:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[119] = "sampleBallot.py, line 119:\n    if fsm.current == 'contests' or fsm.current == 'candidates':";
	$m.__track_lines__[120] = 'sampleBallot.py, line 120:\n    contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0';
	$m.__track_lines__[121] = 'sampleBallot.py, line 121:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[122] = 'sampleBallot.py, line 122:\n    setContest()';
	$m.__track_lines__[123] = 'sampleBallot.py, line 123:\n    candidate.clear()';
	$m.__track_lines__[124] = "sampleBallot.py, line 124:\n    if fsm.current == 'candidates': fsm.reselectContest()";
	$m.__track_lines__[126] = "sampleBallot.py, line 126:\n    if fsm.current == 'review_candidates':";
	$m.__track_lines__[127] = 'sampleBallot.py, line 127:\n    print "i\'m here"';
	$m.__track_lines__[128] = 'sampleBallot.py, line 128:\n    fadeAudio()';
	$m.__track_lines__[129] = 'sampleBallot.py, line 129:\n    if confirm % 2 == 0:';
	$m.__track_lines__[131] = 'sampleBallot.py, line 131:\n    fsm.doneReview()';
	$m.__track_lines__[132] = "sampleBallot.py, line 132:\n    onKeyPress('', KeyboardListener.KEY_UP, '')";
	$m.__track_lines__[134] = 'sampleBallot.py, line 134:\n    fsm.reselectCandidates()';
	$m.__track_lines__[135] = 'sampleBallot.py, line 135:\n    confirm = 0     #hack to make the count work. not happy with the whole count thing :(';
	$m.__track_lines__[138] = "sampleBallot.py, line 138:\n    if fsm.current == 'contests' or fsm.current == 'candidates':";
	$m.__track_lines__[139] = 'sampleBallot.py, line 139:\n    contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1';
	$m.__track_lines__[140] = 'sampleBallot.py, line 140:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[141] = 'sampleBallot.py, line 141:\n    setContest()';
	$m.__track_lines__[142] = 'sampleBallot.py, line 142:\n    candidate.clear()';
	$m.__track_lines__[143] = "sampleBallot.py, line 143:\n    if fsm.current == 'candidates': fsm.reselectContest()";
	$m.__track_lines__[146] = 'sampleBallot.py, line 146:\n    print fsm.current';
	$m.__track_lines__[147] = "sampleBallot.py, line 147:\n    if fsm.current == 'candidates' or fsm.current == 'change_candidates':";
	$m.__track_lines__[148] = 'sampleBallot.py, line 148:\n    candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0';
	$m.__track_lines__[149] = 'sampleBallot.py, line 149:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[150] = 'sampleBallot.py, line 150:\n    setCandidate()';
	$m.__track_lines__[154] = 'sampleBallot.py, line 154:\n    pauseAudio()';
	$m.__track_lines__[155] = 'sampleBallot.py, line 155:\n    fsm.reselectCandidates()';
	$m.__track_lines__[156] = "sampleBallot.py, line 156:\n    playAudio('', False)";
	$m.__track_lines__[158] = 'sampleBallot.py, line 158:\n    fsm.inReviewChangeCandidates()';
	$m.__track_lines__[162] = "sampleBallot.py, line 162:\n    if fsm.current == 'candidates':";
	$m.__track_lines__[163] = 'sampleBallot.py, line 163:\n    candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1';
	$m.__track_lines__[164] = 'sampleBallot.py, line 164:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[165] = 'sampleBallot.py, line 165:\n    setCandidate()';
	$m.__track_lines__[171] = "sampleBallot.py, line 171:\n    if fsm.current == 'contests':";
	$m.__track_lines__[172] = 'sampleBallot.py, line 172:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[173] = 'sampleBallot.py, line 173:\n    fsm.selectCandidate()';
	$m.__track_lines__[174] = 'sampleBallot.py, line 174:\n    setCandidate()';
	$m.__track_lines__[175] = 'sampleBallot.py, line 175:\n    return';
	$m.__track_lines__[178] = 'sampleBallot.py, line 178:\n    pauseAudio();';
	$m.__track_lines__[179] = 'sampleBallot.py, line 179:\n    makeSelection()';
	$m.__track_lines__[180] = 'sampleBallot.py, line 180:\n    fsm.reviewCandidates()';
	$m.__track_lines__[181] = 'sampleBallot.py, line 181:\n    setConfirm(0)';
	$m.__track_lines__[182] = 'sampleBallot.py, line 182:\n    return';
	$m.__track_lines__[195] = 'sampleBallot.py, line 195:\n    if len(review_path) != 0:';
	$m.__track_lines__[196] = 'sampleBallot.py, line 196:\n    contestPosition = contestPosition + 1';
	$m.__track_lines__[197] = 'sampleBallot.py, line 197:\n    review_contest = review_path.pop(0)';
	$m.__track_lines__[198] = 'sampleBallot.py, line 198:\n    review_selection = review_path.pop(0)';
	$m.__track_lines__[199] = 'sampleBallot.py, line 199:\n    audioList = [review_contest, review_selection]';
	$m.__track_lines__[200] = 'sampleBallot.py, line 200:\n    print audioList';
	$m.__track_lines__[201] = 'sampleBallot.py, line 201:\n    playAudioList(audioList)';
	$m.__track_lines__[203] = "sampleBallot.py, line 203:\n    playAudio('media/finish.wav', 'play')";
	$m.__track_lines__[211] = 'sampleBallot.py, line 211:\n    return';
	$m.__track_lines__[214] = "sampleBallot.py, line 214:\n    '''";
	$m.__track_lines__[217] = 'sampleBallot.py, line 217:\n    def traverselist(obj):';
	$m.__track_lines__[218] = 'sampleBallot.py, line 218:\n    alist = obj.selectionList';
	$m.__track_lines__[219] = "sampleBallot.py, line 219:\n    if fsm.current == 'contests':";
	$m.__track_lines__[220] = "sampleBallot.py, line 220:\n    print('* ' + alist[contestPosition].name + ' highlighted *')";
	$m.__track_lines__[221] = "sampleBallot.py, line 221:\n    if fsm.current == 'candidates':";
	$m.__track_lines__[222] = "sampleBallot.py, line 222:\n    print('* ' + alist[candidatePosition].name + ' highlighted *')";
	$m.__track_lines__[224] = "sampleBallot.py, line 224:\n    '''";
	$m.__track_lines__[227] = 'sampleBallot.py, line 227:\n    def printstatechange(e):';
	$m.__track_lines__[228] = "sampleBallot.py, line 228:\n    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)";
	$m.__track_lines__[230] = 'sampleBallot.py, line 230:\n    def onintro(e):';
	$m.__track_lines__[231] = "sampleBallot.py, line 231:\n    print 'hello!'";
	$m.__track_lines__[233] = 'sampleBallot.py, line 233:\n    def oncontests(e):';
	$m.__track_lines__[234] = 'sampleBallot.py, line 234:\n    candidate.clear()';
	$m.__track_lines__[235] = 'sampleBallot.py, line 235:\n    status.clear()';
	$m.__track_lines__[236] = "sampleBallot.py, line 236:\n    print('\\nThe contests are:')";
	$m.__track_lines__[237] = 'sampleBallot.py, line 237:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[238] = "sampleBallot.py, line 238:\n    print('\\t' + str(i + 1) + ') ' + contest.name)";
	$m.__track_lines__[239] = 'sampleBallot.py, line 239:\n    traverselist(race)';
	$m.__track_lines__[241] = 'sampleBallot.py, line 241:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[245] = 'sampleBallot.py, line 245:\n    def oncandidates(e):';
	$m.__track_lines__[246] = 'sampleBallot.py, line 246:\n    status.clear()';
	$m.__track_lines__[247] = 'sampleBallot.py, line 247:\n    currContest = race.selectionList[contestPosition]';
	$m.__track_lines__[248] = "sampleBallot.py, line 248:\n    print('\\nCurrent race is: ' + currContest.name)";
	$m.__track_lines__[249] = "sampleBallot.py, line 249:\n    print('Candidates are:')";
	$m.__track_lines__[250] = 'sampleBallot.py, line 250:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[251] = 'sampleBallot.py, line 251:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[252] = 'sampleBallot.py, line 252:\n    traverselist(currContest)';
	$m.__track_lines__[254] = 'sampleBallot.py, line 254:\n    currObj = currContest.selectionList[candidatePosition]';
	$m.__track_lines__[255] = 'sampleBallot.py, line 255:\n    print "current candidate is " + currObj.name';
	$m.__track_lines__[257] = 'sampleBallot.py, line 257:\n    def onchangecandidates(e):';
	$m.__track_lines__[258] = 'sampleBallot.py, line 258:\n    global contestPosition, currObj';
	$m.__track_lines__[259] = 'sampleBallot.py, line 259:\n    status.clear()';
	$m.__track_lines__[260] = 'sampleBallot.py, line 260:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[261] = 'sampleBallot.py, line 261:\n    setContest()';
	$m.__track_lines__[262] = 'sampleBallot.py, line 262:\n    candidate.clear()';
	$m.__track_lines__[263] = 'sampleBallot.py, line 263:\n    currContest = race.selectionList[contestPosition]';
	$m.__track_lines__[264] = "sampleBallot.py, line 264:\n    print('\\nCurrent race is: ' + currContest.name)";
	$m.__track_lines__[265] = "sampleBallot.py, line 265:\n    print('Candidates are:')";
	$m.__track_lines__[266] = 'sampleBallot.py, line 266:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[267] = 'sampleBallot.py, line 267:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[268] = 'sampleBallot.py, line 268:\n    traverselist(currContest)';
	$m.__track_lines__[270] = 'sampleBallot.py, line 270:\n    currObj = currContest.selectionList[contestPosition]';
	$m.__track_lines__[271] = 'sampleBallot.py, line 271:\n    print "current candidate is " + currObj.name';
	$m.__track_lines__[273] = 'sampleBallot.py, line 273:\n    def onreviewcandidates(e):';
	$m.__track_lines__[274] = "sampleBallot.py, line 274:\n    print('\\nReview Your Choice for ' + race.selectionList[contestPosition].name + ':')";
	$m.__track_lines__[275] = 'sampleBallot.py, line 275:\n    candidate = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[276] = "sampleBallot.py, line 276:\n    print('\\t' + candidate.name)";
	$m.__track_lines__[278] = 'sampleBallot.py, line 278:\n    def oncheckdone(e):';
	$m.__track_lines__[279] = 'sampleBallot.py, line 279:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[280] = 'sampleBallot.py, line 280:\n    if len(contest.userSelection) == 0:';
	$m.__track_lines__[281] = 'sampleBallot.py, line 281:\n    fsm.nextContest()';
	$m.__track_lines__[282] = 'sampleBallot.py, line 282:\n    return';
	$m.__track_lines__[284] = "sampleBallot.py, line 284:\n    JS('''";
	$m.__track_lines__[295] = 'sampleBallot.py, line 295:\n    def onreviewballot(e):';
	$m.__track_lines__[296] = 'sampleBallot.py, line 296:\n    global contestPosition';
	$m.__track_lines__[297] = 'sampleBallot.py, line 297:\n    contestPosition = -1';
	$m.__track_lines__[298] = 'sampleBallot.py, line 298:\n    text = "Review your selections: "';
	$m.__track_lines__[299] = "sampleBallot.py, line 299:\n    print('\\n'+text)";
	$m.__track_lines__[300] = 'sampleBallot.py, line 300:\n    playAudio("media/reviewBallot.wav", \'play\')';
	$m.__track_lines__[301] = 'sampleBallot.py, line 301:\n    for contest in race.selectionList:';
	$m.__track_lines__[302] = "sampleBallot.py, line 302:\n    print(contest.name + ': ' + contest.userSelection[0].name)";
	$m.__track_lines__[303] = 'sampleBallot.py, line 303:\n    review_path.append(contest.audioPath)';
	$m.__track_lines__[304] = 'sampleBallot.py, line 304:\n    review_path.append(contest.userSelection[0].audioPath)';
	$m.__track_lines__[306] = 'sampleBallot.py, line 306:\n    print review_path';
	$m.__track_lines__[309] = 'sampleBallot.py, line 309:\n    def ondoneballot(e):';
	$m.__track_lines__[310] = "sampleBallot.py, line 310:\n    print('\\nVoting complete! Thanks for using this system!')";
	$m.__track_lines__[311] = 'sampleBallot.py, line 311:\n    playAudio("media/finish.wav")';
	$m.__track_lines__[314] = "sampleBallot.py, line 314:\n    '''";
	$m.__track_lines__[317] = 'sampleBallot.py, line 317:\n    fsm = Fysom({';
	$m.__track_lines__[346] = "sampleBallot.py, line 346:\n    '''";


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
	$pyjs.track.lineno=9;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['playAudio'] = $p['___import___']('audioControls.playAudio', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pauseAudio'] = $p['___import___']('audioControls.pauseAudio', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['isPlayingAudio'] = $p['___import___']('audioControls.isPlayingAudio', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['playAudioList'] = $p['___import___']('audioControls.playAudioList', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['fadeAudio'] = $p['___import___']('audioControls.fadeAudio', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=11;
	$pyjs.track.lineno=13;

var mySound1 = new buzz.sound("http://10.0.22.220/media/finish.wav");
var mySound2 = new buzz.sound("http://10.0.22.220/media/race.wav");

	$pyjs.track.lineno=18;
	$m['contestPosition'] = 0;
	$pyjs.track.lineno=19;
	$m['candidatePosition'] = 0;
	$pyjs.track.lineno=20;
	$m['confirm'] = 0;
	$pyjs.track.lineno=21;
	$m['currObj'] = '';
	$pyjs.track.lineno=22;
	$m['review_path'] = $p['list']([]);
	$pyjs.track.lineno=24;
	$m['contest'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=25;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=26;
	$m['candidate'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs.track.lineno=27;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['candidate']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs.track.lineno=28;
	$m['selection'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
	$pyjs.track.lineno=29;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs.track.lineno=30;
	$m['status'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
	$pyjs.track.lineno=31;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
	return $m['HTML']('STATUS');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
	$pyjs.track.lineno=32;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['status']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
	$pyjs.track.lineno=34;
	$m['title'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
	$pyjs.track.lineno=35;
	$m['instructions'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
	$pyjs.track.lineno=37;
	$m['race'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), '', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
	$pyjs.track.lineno=40;
	$m['sendRace'] = function(srace) {

		$pyjs.track={module:'sampleBallot',lineno:40};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=40;
		$pyjs.track.lineno=41;
		$pyjs.track.lineno=42;
		$m['race'] = srace;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$pyjs.track.lineno=44;
	$m['getInstruction'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:44};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=44;
		$pyjs.track.lineno=45;
		$pyjs.track.lineno=45;
		var $pyjs__ret = $p['getattr']($m['race'], '$$name');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	$pyjs.track.lineno=47;
	$m['setContest'] = function() {
		var curcontest,candidateList;
		$pyjs.track={module:'sampleBallot',lineno:47};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=47;
		$pyjs.track.lineno=48;
		$pyjs.track.lineno=49;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=50;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
		$pyjs.track.lineno=51;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Contest: %s', $p['getattr'](curcontest, '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
		$pyjs.track.lineno=52;
		candidateList = $p['getattr'](curcontest, 'selectionList');
		$pyjs.track.lineno=53;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($p['getattr'](curcontest, 'userSelection')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
			$pyjs.track.lineno=54;
			$m['candidatePosition'] = 0;
			$pyjs.track.lineno=55;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs.track.lineno=56;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b /> Selection: -');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		}
		else {
			$pyjs.track.lineno=58;
			$m['candidatePosition'] = (function(){try{try{$pyjs.in_try_except += 1;
			return candidateList['index']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=59;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=60;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
		}
		$pyjs.track.lineno=61;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
		$pyjs.track.lineno=62;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['getattr']($m['currObj'], 'audioPath')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setContest'].__name__ = 'setContest';

	$m['setContest'].__bind_type__ = 0;
	$m['setContest'].__args__ = [null,null];
	$pyjs.track.lineno=64;
	$m['setConfirm'] = function(num) {
		var $add2,$add1,$mod1,$mod2;
		$pyjs.track={module:'sampleBallot',lineno:64};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=64;
		$pyjs.track.lineno=65;
		$m['confirm'] = $p['__op_add']($add1=$m['confirm'],$add2=num);
		$pyjs.track.lineno=66;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		$pyjs.track.lineno=67;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod1=$m['confirm'])==typeof ($mod2=2) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
			$pyjs.track.lineno=68;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('YES');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=69;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
				$pyjs.track.lineno=70;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}, '/media/ballot.wav']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			}
			else {
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}, $p['getattr']($m['currObj'], 'audioPath')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			}
			$pyjs.track.lineno=73;
			$pyjs.track.lineno=73;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else {
			$pyjs.track.lineno=75;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('NO');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs.track.lineno=76;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:false}, $p['getattr']($m['currObj'], 'audioPath')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs.track.lineno=77;
			$pyjs.track.lineno=77;
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
	$pyjs.track.lineno=79;
	$m['setCandidate'] = function() {
		var curcontest,candidateName;
		$pyjs.track={module:'sampleBallot',lineno:79};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=79;
		$pyjs.track.lineno=80;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=81;
		candidateName = $p['getattr']($p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']), '$$name');
		$pyjs.track.lineno=82;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
		$pyjs.track.lineno=83;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Candidate: %s', candidateName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
		$pyjs.track.lineno=84;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCandidate'].__name__ = 'setCandidate';

	$m['setCandidate'].__bind_type__ = 0;
	$m['setCandidate'].__args__ = [null,null];
	$pyjs.track.lineno=86;
	$m['makeSelection'] = function() {
		var curcontest,curcandidate;
		$pyjs.track={module:'sampleBallot',lineno:86};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=86;
		$pyjs.track.lineno=87;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=88;
		curcandidate = $p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=89;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['__setslice']($p['getattr'](curcontest, 'userSelection'), 0, null, (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		$pyjs.track.lineno=90;
		(function(){try{try{$pyjs.in_try_except += 1;
		return curcontest['userSelection']['append'](curcandidate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
		$pyjs.track.lineno=91;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
		$pyjs.track.lineno=92;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['makeSelection'].__name__ = 'makeSelection';

	$m['makeSelection'].__bind_type__ = 0;
	$m['makeSelection'].__args__ = [null,null];
	$pyjs.track.lineno=94;
	$m['onKeyPress'] = function(sender, keycode, modifiers) {
		var $or5,audioList,$mod4,review_selection,$mod3,review_contest,candidateList,contestList,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub4,$or4,$or7,$or6,$or1,$or3,$or2,$or8,$add10,$add11,$add12,$sub5,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
		$pyjs.track={module:'sampleBallot',lineno:94};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=94;
		$pyjs.track.lineno=95;
		$pyjs.track.lineno=97;
		contestList = $p['getattr']($m['race'], 'selectionList');
		$pyjs.track.lineno=98;
		candidateList = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList');
		$pyjs.track.lineno=100;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_SHIFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
			$pyjs.track.lineno=106;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['getattr']($m['fsm'], 'current')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs.track.lineno=107;

        
        
		}
		$pyjs.track.lineno=111;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_CTRL')))) {
			$pyjs.track.lineno=112;

        mySound1.setVolume(80);
        mySound1.play();
        
		}
		$pyjs.track.lineno=118;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')))) {
			$pyjs.track.lineno=119;
			if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))?$or1:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates')))) {
				$pyjs.track.lineno=120;
				$m['contestPosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add3=$m['contestPosition'],$add4=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) == -1))? ($p['__op_add']($add5=$m['contestPosition'],$add6=1)) : (0));
				$pyjs.track.lineno=121;
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
				$pyjs.track.lineno=122;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				$pyjs.track.lineno=123;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs.track.lineno=124;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs.track.lineno=124;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				}
			}
			$pyjs.track.lineno=126;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
				$pyjs.track.lineno=127;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](["i'm here"], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$pyjs.track.lineno=128;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fadeAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs.track.lineno=129;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((typeof ($mod3=$m['confirm'])==typeof ($mod4=2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
					$pyjs.track.lineno=131;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['doneReview']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
					$pyjs.track.lineno=132;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['onKeyPress']('', $p['getattr']($m['KeyboardListener'], 'KEY_UP'), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				}
				else {
					$pyjs.track.lineno=134;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
					$pyjs.track.lineno=135;
					$m['confirm'] = 0;
				}
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
			$pyjs.track.lineno=138;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))?$or3:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
				$pyjs.track.lineno=139;
				$m['contestPosition'] = ($p['bool']($p['op_eq']($m['contestPosition'], 0))? ($p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})(),$sub2=1)) : ($p['__op_sub']($sub3=$m['contestPosition'],$sub4=1)));
				$pyjs.track.lineno=140;
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
				$pyjs.track.lineno=141;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$pyjs.track.lineno=142;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs.track.lineno=143;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
					$pyjs.track.lineno=143;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				}
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
			$pyjs.track.lineno=146;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['getattr']($m['fsm'], 'current')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs.track.lineno=147;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))?$or5:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'change_candidates')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
				$pyjs.track.lineno=148;
				$m['candidatePosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add7=$m['candidatePosition'],$add8=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) == -1))? ($p['__op_add']($add9=$m['candidatePosition'],$add10=1)) : (0));
				$pyjs.track.lineno=149;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=150;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
				$pyjs.track.lineno=154;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pauseAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs.track.lineno=155;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['reselectCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs.track.lineno=156;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['playAudio']('', false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
				$pyjs.track.lineno=158;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['inReviewChangeCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
			$pyjs.track.lineno=162;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs.track.lineno=163;
				$m['candidatePosition'] = ($p['bool']($p['op_eq']($m['candidatePosition'], 0))? ($p['__op_sub']($sub5=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})(),$sub6=1)) : ($p['__op_sub']($sub7=$m['candidatePosition'],$sub8=1)));
				$pyjs.track.lineno=164;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=165;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
			$pyjs.track.lineno=171;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
				$pyjs.track.lineno=172;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=173;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['selectCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs.track.lineno=174;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs.track.lineno=175;
				$pyjs.track.lineno=175;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))?$or7:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'change_candidates')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
				$pyjs.track.lineno=178;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pauseAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs.track.lineno=179;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['makeSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs.track.lineno=180;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['reviewCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs.track.lineno=181;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$pyjs.track.lineno=182;
				$pyjs.track.lineno=182;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
				$pyjs.track.lineno=195;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($m['review_path']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
					$pyjs.track.lineno=196;
					$m['contestPosition'] = $p['__op_add']($add11=$m['contestPosition'],$add12=1);
					$pyjs.track.lineno=197;
					review_contest = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['review_path']['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
					$pyjs.track.lineno=198;
					review_selection = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['review_path']['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
					$pyjs.track.lineno=199;
					audioList = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']([review_contest, review_selection]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
					$pyjs.track.lineno=200;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['printFunc']([audioList], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
					$pyjs.track.lineno=201;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['playAudioList'](audioList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				}
				else {
					$pyjs.track.lineno=203;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['playAudio']('media/finish.wav', 'play');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				}
			}
		}
		else {
			$pyjs.track.lineno=211;
			$pyjs.track.lineno=211;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onKeyPress'].__name__ = 'onKeyPress';

	$m['onKeyPress'].__bind_type__ = 0;
	$m['onKeyPress'].__args__ = [null,null,['sender'],['keycode'],['modifiers']];
	$pyjs.track.lineno=214;
	$pyjs.track.lineno=217;
	$m['traverselist'] = function(obj) {
		var $add20,alist,$add14,$add15,$add16,$add17,$add13,$add18,$add19;
		$pyjs.track={module:'sampleBallot',lineno:217};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=217;
		$pyjs.track.lineno=218;
		alist = $p['getattr'](obj, 'selectionList');
		$pyjs.track.lineno=219;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) {
			$pyjs.track.lineno=220;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add15=$p['__op_add']($add13='* ',$add14=$p['getattr'](alist.__getitem__($m['contestPosition']), '$$name')),$add16=' highlighted *')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
		}
		$pyjs.track.lineno=221;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
			$pyjs.track.lineno=222;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add19=$p['__op_add']($add17='* ',$add18=$p['getattr'](alist.__getitem__($m['candidatePosition']), '$$name')),$add20=' highlighted *')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['traverselist'].__name__ = 'traverselist';

	$m['traverselist'].__bind_type__ = 0;
	$m['traverselist'].__args__ = [null,null,['obj']];
	$pyjs.track.lineno=224;
	$pyjs.track.lineno=227;
	$m['printstatechange'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:227};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=227;
		$pyjs.track.lineno=228;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('event: %s, src: %s, dst: %s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$p['getattr'](e, 'event'), $p['getattr'](e, 'src'), $p['getattr'](e, 'dst')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['printstatechange'].__name__ = 'printstatechange';

	$m['printstatechange'].__bind_type__ = 0;
	$m['printstatechange'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=230;
	$m['onintro'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:230};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=230;
		$pyjs.track.lineno=231;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['hello!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onintro'].__name__ = 'onintro';

	$m['onintro'].__bind_type__ = 0;
	$m['onintro'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=233;
	$m['oncontests'] = function(e) {
		var currObj,$add28,$iter1_nextval,$iter1_type,contest,i,$add23,$add22,$add25,$add24,$add27,$iter1_iter,$add21,$iter1_array,$pyjs__trackstack_size_1,$add26,$iter1_idx;
		$pyjs.track={module:'sampleBallot',lineno:233};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=233;
		$pyjs.track.lineno=234;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
		$pyjs.track.lineno=235;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
		$pyjs.track.lineno=236;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nThe contests are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
		$pyjs.track.lineno=237;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			i = $tupleassign1[0];
			contest = $tupleassign1[1];
			$pyjs.track.lineno=238;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23='\t',$add24=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add21=i,$add22=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()),$add26=') '),$add28=$p['getattr'](contest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=239;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist']($m['race']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
		$pyjs.track.lineno=241;
		currObj = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncontests'].__name__ = 'oncontests';

	$m['oncontests'].__bind_type__ = 0;
	$m['oncontests'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=245;
	$m['oncandidates'] = function(e) {
		var currContest,$add29,$iter2_iter,$add40,currObj,$iter2_type,$add32,$iter2_idx,$add39,$add38,$iter2_nextval,i,$add33,$add30,$add31,$add36,$add37,$add34,$add35,person,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs.track={module:'sampleBallot',lineno:245};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=245;
		$pyjs.track.lineno=246;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
		$pyjs.track.lineno=247;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=248;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add29='\nCurrent race is: ',$add30=$p['getattr'](currContest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
		$pyjs.track.lineno=249;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
		$pyjs.track.lineno=250;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
			i = $tupleassign2[0];
			person = $tupleassign2[1];
			$pyjs.track.lineno=251;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33='\t',$add34=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add31=i,$add32=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()),$add36=') '),$add38=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=252;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist'](currContest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
		$pyjs.track.lineno=254;
		currObj = $p['getattr'](currContest, 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=255;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add39='current candidate is ',$add40=$p['getattr'](currObj, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncandidates'].__name__ = 'oncandidates';

	$m['oncandidates'].__bind_type__ = 0;
	$m['oncandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=257;
	$m['onchangecandidates'] = function(e) {
		var $iter3_type,currContest,$iter3_idx,$add49,$add48,$add47,$add46,$iter3_nextval,$add44,$add43,$add42,$add41,$iter3_iter,$iter3_array,$add50,$add51,$add52,i,person,$pyjs__trackstack_size_1,$add45;
		$pyjs.track={module:'sampleBallot',lineno:257};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=257;
		$pyjs.track.lineno=258;
		$pyjs.track.lineno=259;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
		$pyjs.track.lineno=260;
		$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=261;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
		$pyjs.track.lineno=262;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
		$pyjs.track.lineno=263;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=264;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add41='\nCurrent race is: ',$add42=$p['getattr'](currContest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
		$pyjs.track.lineno=265;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
		$pyjs.track.lineno=266;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			i = $tupleassign3[0];
			person = $tupleassign3[1];
			$pyjs.track.lineno=267;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add49=$p['__op_add']($add47=$p['__op_add']($add45='\t',$add46=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add43=i,$add44=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()),$add48=') '),$add50=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=268;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist'](currContest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
		$pyjs.track.lineno=270;
		$m['currObj'] = $p['getattr'](currContest, 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=271;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add51='current candidate is ',$add52=$p['getattr']($m['currObj'], '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onchangecandidates'].__name__ = 'onchangecandidates';

	$m['onchangecandidates'].__bind_type__ = 0;
	$m['onchangecandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=273;
	$m['onreviewcandidates'] = function(e) {
		var $add53,$add54,$add55,$add56,$add57,$add58,candidate;
		$pyjs.track={module:'sampleBallot',lineno:273};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=273;
		$pyjs.track.lineno=274;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add55=$p['__op_add']($add53='\nReview Your Choice for ',$add54=$p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), '$$name')),$add56=':')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
		$pyjs.track.lineno=275;
		candidate = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=276;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add57='\t',$add58=$p['getattr'](candidate, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewcandidates'].__name__ = 'onreviewcandidates';

	$m['onreviewcandidates'].__bind_type__ = 0;
	$m['onreviewcandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=278;
	$m['oncheckdone'] = function(e) {
		var contest,i,$iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
		$pyjs.track={module:'sampleBallot',lineno:278};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=278;
		$pyjs.track.lineno=279;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			var $tupleassign4 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter4_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			i = $tupleassign4[0];
			contest = $tupleassign4[1];
			$pyjs.track.lineno=280;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr'](contest, 'userSelection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()) {
				$pyjs.track.lineno=281;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				$pyjs.track.lineno=282;
				$pyjs.track.lineno=282;
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
		$pyjs.track.lineno=284;

    (function() {
    if ($m['isPlayingAudio']() == false) {
        $m.fsm['reviewBallot']();
    } else {
        setTimeout(arguments.callee,1500);
    }
    })();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['oncheckdone'].__name__ = 'oncheckdone';

	$m['oncheckdone'].__bind_type__ = 0;
	$m['oncheckdone'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=295;
	$m['onreviewballot'] = function(e) {
		var $iter5_nextval,$add64,$iter5_idx,$add61,$add60,$add63,contest,$iter5_array,text,$pyjs__trackstack_size_1,$iter5_iter,$add59,$iter5_type,$add62;
		$pyjs.track={module:'sampleBallot',lineno:295};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=295;
		$pyjs.track.lineno=296;
		$pyjs.track.lineno=297;
		$m['contestPosition'] = (typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4));
		$pyjs.track.lineno=298;
		text = 'Review your selections: ';
		$pyjs.track.lineno=299;
		$p['printFunc']([$p['__op_add']($add59='\n',$add60=text)], 1);
		$pyjs.track.lineno=300;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']('media/reviewBallot.wav', 'play');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
		$pyjs.track.lineno=301;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr']($m['race'], 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
			contest = $iter5_nextval.$nextval;
			$pyjs.track.lineno=302;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add63=$p['__op_add']($add61=$p['getattr'](contest, '$$name'),$add62=': '),$add64=$p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs.track.lineno=303;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['review_path']['append']($p['getattr'](contest, 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			$pyjs.track.lineno=304;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['review_path']['append']($p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=306;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$m['review_path']], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewballot'].__name__ = 'onreviewballot';

	$m['onreviewballot'].__bind_type__ = 0;
	$m['onreviewballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=309;
	$m['ondoneballot'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:309};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=309;
		$pyjs.track.lineno=310;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nVoting complete! Thanks for using this system!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
		$pyjs.track.lineno=311;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']('media/finish.wav');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['ondoneballot'].__name__ = 'ondoneballot';

	$m['ondoneballot'].__bind_type__ = 0;
	$m['ondoneballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=314;
	$pyjs.track.lineno=317;
	$m['fsm'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Fysom']((function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['initial', 'intro'], ['events', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'startVoting'], ['src', 'intro'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'selectCandidate'], ['src', 'contests'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectContest'], ['src', 'candidates'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'change_candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectCandidates'], ['src', 'review_candidates'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneReview'], ['src', 'review_candidates'], ['dst', 'check_done']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'nextContest'], ['src', 'check_done'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'otherContest'], ['src', 'contests'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewBallot'], ['src', 'check_done'], ['dst', 'review_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'inReviewChangeCandidates'], ['src', 'review_ballot'], ['dst', 'change_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneBallot'], ['src', 'review_ballot'], ['dst', 'done_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})()], ['callbacks', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['onintro', $m['onintro']], ['oncontests', $m['oncontests']], ['oncandidates', $m['oncandidates']], ['onreview_candidates', $m['onreviewcandidates']], ['oncheck_done', $m['oncheckdone']], ['onreview_ballot', $m['onreviewballot']], ['onchange_candidates', $m['onchangecandidates']], ['ondone_ballot', $m['ondoneballot']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
	$pyjs.track.lineno=346;
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree', 'pyjamas.ui.KeyboardListener', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'audioControls.playAudio', 'audioControls', 'audioControls.pauseAudio', 'audioControls.isPlayingAudio', 'audioControls.playAudioList', 'audioControls.fadeAudio', 'buzz.js']
*/
