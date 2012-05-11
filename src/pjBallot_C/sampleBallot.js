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
	$m.__track_lines__[8] = 'sampleBallot.py, line 8:\n    import buzz.js';
	$m.__track_lines__[10] = 'sampleBallot.py, line 10:\n    root_path = "http://10.0.1.6/"';
	$m.__track_lines__[12] = 'sampleBallot.py, line 12:\n    contestPosition = 0';
	$m.__track_lines__[13] = 'sampleBallot.py, line 13:\n    candidatePosition = 0';
	$m.__track_lines__[14] = 'sampleBallot.py, line 14:\n    confirm = 0';
	$m.__track_lines__[15] = 'sampleBallot.py, line 15:\n    currObj = ""';
	$m.__track_lines__[16] = 'sampleBallot.py, line 16:\n    review_path = []';
	$m.__track_lines__[19] = 'sampleBallot.py, line 19:\n    contest = HorizontalPanel()';
	$m.__track_lines__[20] = "sampleBallot.py, line 20:\n    contest.setStyleName('words')";
	$m.__track_lines__[21] = 'sampleBallot.py, line 21:\n    candidate = HorizontalPanel()';
	$m.__track_lines__[22] = "sampleBallot.py, line 22:\n    candidate.setStyleName('words')";
	$m.__track_lines__[23] = 'sampleBallot.py, line 23:\n    selection = HorizontalPanel()';
	$m.__track_lines__[24] = "sampleBallot.py, line 24:\n    selection.setStyleName('words')";
	$m.__track_lines__[25] = 'sampleBallot.py, line 25:\n    status = HorizontalPanel()';
	$m.__track_lines__[26] = "sampleBallot.py, line 26:\n    status.add(HTML('STATUS'))";
	$m.__track_lines__[27] = "sampleBallot.py, line 27:\n    status.setStyleName('words')";
	$m.__track_lines__[29] = 'sampleBallot.py, line 29:\n    title = HorizontalPanel()';
	$m.__track_lines__[30] = 'sampleBallot.py, line 30:\n    instructions = HorizontalPanel()';
	$m.__track_lines__[34] = 'sampleBallot.py, line 34:\n    JS("""';
	$m.__track_lines__[43] = "sampleBallot.py, line 43:\n    race = Race('', [], '', '')";
	$m.__track_lines__[46] = 'sampleBallot.py, line 46:\n    def isPlayingAudio():';
	$m.__track_lines__[47] = "sampleBallot.py, line 47:\n    JS('''";
	$m.__track_lines__[51] = 'sampleBallot.py, line 51:\n    def pauseAudio():';
	$m.__track_lines__[52] = "sampleBallot.py, line 52:\n    JS('''";
	$m.__track_lines__[63] = 'sampleBallot.py, line 63:\n    def playAudio(arg_audioPath, confirm=None):';
	$m.__track_lines__[64] = 'sampleBallot.py, line 64:\n    global currObj';
	$m.__track_lines__[65] = 'sampleBallot.py, line 65:\n    path = root_path + currObj.audioPath';
	$m.__track_lines__[67] = "sampleBallot.py, line 67:\n    if confirm == 'play':";
	$m.__track_lines__[68] = 'sampleBallot.py, line 68:\n    path = root_path + arg_audioPath';
	$m.__track_lines__[74] = 'sampleBallot.py, line 74:\n    if confirm == True:';
	$m.__track_lines__[75] = 'sampleBallot.py, line 75:\n    confirmPath = root_path + "media/confirm.wav"';
	$m.__track_lines__[76] = 'sampleBallot.py, line 76:\n    confirmPath2 = root_path + "media/confirm2.wav"';
	$m.__track_lines__[78] = "sampleBallot.py, line 78:\n    JS('''";
	$m.__track_lines__[105] = 'sampleBallot.py, line 105:\n    confirmPath = root_path + "media/reselectCandidate.wav"';
	$m.__track_lines__[107] = "sampleBallot.py, line 107:\n    JS('''";
	$m.__track_lines__[116] = "sampleBallot.py, line 116:\n    JS('''";
	$m.__track_lines__[127] = 'sampleBallot.py, line 127:\n    def playAudioList(audioList):';
	$m.__track_lines__[128] = 'sampleBallot.py, line 128:\n    if audioList == []:';
	$m.__track_lines__[129] = 'sampleBallot.py, line 129:\n    return';
	$m.__track_lines__[130] = 'sampleBallot.py, line 130:\n    path = root_path + audioList.pop(0)';
	$m.__track_lines__[131] = "sampleBallot.py, line 131:\n    JS('''";
	$m.__track_lines__[169] = 'sampleBallot.py, line 169:\n    def sendRace(srace):';
	$m.__track_lines__[170] = 'sampleBallot.py, line 170:\n    global race';
	$m.__track_lines__[171] = 'sampleBallot.py, line 171:\n    race = srace';
	$m.__track_lines__[173] = 'sampleBallot.py, line 173:\n    def getInstruction():';
	$m.__track_lines__[174] = 'sampleBallot.py, line 174:\n    return race.name';
	$m.__track_lines__[176] = 'sampleBallot.py, line 176:\n    def setContest():';
	$m.__track_lines__[177] = 'sampleBallot.py, line 177:\n    global candidatePosition';
	$m.__track_lines__[178] = 'sampleBallot.py, line 178:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[179] = 'sampleBallot.py, line 179:\n    contest.clear()';
	$m.__track_lines__[180] = "sampleBallot.py, line 180:\n    contest.add(HTML('<b /> Contest: %s' % curcontest.name))";
	$m.__track_lines__[181] = 'sampleBallot.py, line 181:\n    candidateList = curcontest.selectionList';
	$m.__track_lines__[182] = 'sampleBallot.py, line 182:\n    if not curcontest.userSelection:';
	$m.__track_lines__[183] = 'sampleBallot.py, line 183:\n    candidatePosition = 0';
	$m.__track_lines__[184] = 'sampleBallot.py, line 184:\n    selection.clear()';
	$m.__track_lines__[185] = "sampleBallot.py, line 185:\n    selection.add(HTML('<b /> Selection: -'))";
	$m.__track_lines__[187] = 'sampleBallot.py, line 187:\n    candidatePosition = candidateList.index(curcontest.userSelection[-1])';
	$m.__track_lines__[188] = 'sampleBallot.py, line 188:\n    selection.clear()';
	$m.__track_lines__[189] = "sampleBallot.py, line 189:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[190] = 'sampleBallot.py, line 190:\n    playAudio(currObj.audioPath)';
	$m.__track_lines__[191] = 'sampleBallot.py, line 191:\n    print currObj.audioPath #TODO';
	$m.__track_lines__[193] = 'sampleBallot.py, line 193:\n    def setConfirm(num):';
	$m.__track_lines__[194] = 'sampleBallot.py, line 194:\n    confirm += num;';
	$m.__track_lines__[195] = 'sampleBallot.py, line 195:\n    status.clear()';
	$m.__track_lines__[196] = 'sampleBallot.py, line 196:\n    if confirm % 2 == 0:';
	$m.__track_lines__[197] = "sampleBallot.py, line 197:\n    status.add(HTML('YES'))";
	$m.__track_lines__[198] = 'sampleBallot.py, line 198:\n    if fsm.current == "review_ballot":';
	$m.__track_lines__[199] = 'sampleBallot.py, line 199:\n    playAudio("/media/ballot.wav", confirm=True)';
	$m.__track_lines__[201] = 'sampleBallot.py, line 201:\n    playAudio(currObj.audioPath, confirm=True)';
	$m.__track_lines__[202] = 'sampleBallot.py, line 202:\n    return True';
	$m.__track_lines__[204] = "sampleBallot.py, line 204:\n    status.add(HTML('NO'))";
	$m.__track_lines__[205] = 'sampleBallot.py, line 205:\n    playAudio(currObj.audioPath, confirm=False)';
	$m.__track_lines__[206] = 'sampleBallot.py, line 206:\n    return False';
	$m.__track_lines__[208] = 'sampleBallot.py, line 208:\n    def setCandidate():';
	$m.__track_lines__[209] = 'sampleBallot.py, line 209:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[210] = 'sampleBallot.py, line 210:\n    candidateName = curcontest.selectionList[candidatePosition].name';
	$m.__track_lines__[211] = 'sampleBallot.py, line 211:\n    candidate.clear()';
	$m.__track_lines__[212] = "sampleBallot.py, line 212:\n    candidate.add(HTML('<b /> Candidate: %s' % candidateName))";
	$m.__track_lines__[213] = 'sampleBallot.py, line 213:\n    playAudio(currObj.audioPath)';
	$m.__track_lines__[215] = 'sampleBallot.py, line 215:\n    def makeSelection():';
	$m.__track_lines__[216] = 'sampleBallot.py, line 216:\n    curcontest = race.selectionList[contestPosition]';
	$m.__track_lines__[217] = 'sampleBallot.py, line 217:\n    curcandidate = curcontest.selectionList[candidatePosition]';
	$m.__track_lines__[218] = 'sampleBallot.py, line 218:\n    curcontest.userSelection[:] = []';
	$m.__track_lines__[219] = 'sampleBallot.py, line 219:\n    curcontest.userSelection.append(curcandidate)';
	$m.__track_lines__[220] = 'sampleBallot.py, line 220:\n    selection.clear()';
	$m.__track_lines__[221] = "sampleBallot.py, line 221:\n    selection.add(HTML('<b /> Selection: %s' % curcontest.userSelection[-1].name))";
	$m.__track_lines__[223] = 'sampleBallot.py, line 223:\n    def onKeyPress(sender, keycode, modifiers):';
	$m.__track_lines__[224] = 'sampleBallot.py, line 224:\n    global contestPosition, candidatePosition, fsm, currObj, confirm';
	$m.__track_lines__[226] = 'sampleBallot.py, line 226:\n    contestList = race.selectionList';
	$m.__track_lines__[227] = 'sampleBallot.py, line 227:\n    candidateList = race.selectionList[contestPosition].selectionList';
	$m.__track_lines__[229] = 'sampleBallot.py, line 229:\n    if keycode == KeyboardListener.KEY_SHIFT:';
	$m.__track_lines__[235] = "sampleBallot.py, line 235:\n    JS('''";
	$m.__track_lines__[252] = 'sampleBallot.py, line 252:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[253] = "sampleBallot.py, line 253:\n    if fsm.current == 'contests' or fsm.current == 'candidates':";
	$m.__track_lines__[254] = 'sampleBallot.py, line 254:\n    contestPosition = (contestPosition+1) if (contestPosition+1<len(contestList)) else 0';
	$m.__track_lines__[255] = 'sampleBallot.py, line 255:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[256] = 'sampleBallot.py, line 256:\n    setContest()';
	$m.__track_lines__[257] = 'sampleBallot.py, line 257:\n    candidate.clear()';
	$m.__track_lines__[258] = "sampleBallot.py, line 258:\n    if fsm.current == 'candidates': fsm.reselectContest()";
	$m.__track_lines__[261] = "sampleBallot.py, line 261:\n    if fsm.current == 'contests' or fsm.current == 'candidates':";
	$m.__track_lines__[262] = 'sampleBallot.py, line 262:\n    contestPosition = len(contestList)-1 if (contestPosition==0) else contestPosition-1';
	$m.__track_lines__[263] = 'sampleBallot.py, line 263:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[264] = 'sampleBallot.py, line 264:\n    setContest()';
	$m.__track_lines__[265] = 'sampleBallot.py, line 265:\n    candidate.clear()';
	$m.__track_lines__[266] = "sampleBallot.py, line 266:\n    if fsm.current == 'candidates': fsm.reselectContest()";
	$m.__track_lines__[269] = 'sampleBallot.py, line 269:\n    print fsm.current';
	$m.__track_lines__[270] = "sampleBallot.py, line 270:\n    if fsm.current == 'candidates' or fsm.current == 'change_candidates':";
	$m.__track_lines__[271] = 'sampleBallot.py, line 271:\n    candidatePosition = (candidatePosition+1) if (candidatePosition+1<len(candidateList)) else 0';
	$m.__track_lines__[272] = 'sampleBallot.py, line 272:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[273] = 'sampleBallot.py, line 273:\n    setCandidate()';
	$m.__track_lines__[277] = 'sampleBallot.py, line 277:\n    pauseAudio()';
	$m.__track_lines__[278] = 'sampleBallot.py, line 278:\n    fsm.reselectCandidates()';
	$m.__track_lines__[279] = "sampleBallot.py, line 279:\n    playAudio('', False)";
	$m.__track_lines__[281] = 'sampleBallot.py, line 281:\n    fsm.inReviewChangeCandidates()';
	$m.__track_lines__[286] = "sampleBallot.py, line 286:\n    if fsm.current == 'candidates':";
	$m.__track_lines__[287] = 'sampleBallot.py, line 287:\n    candidatePosition = len(candidateList)-1 if (candidatePosition==0) else candidatePosition-1';
	$m.__track_lines__[288] = 'sampleBallot.py, line 288:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[289] = 'sampleBallot.py, line 289:\n    setCandidate()';
	$m.__track_lines__[294] = 'sampleBallot.py, line 294:\n    pauseAudio();';
	$m.__track_lines__[295] = "sampleBallot.py, line 295:\n    if fsm.current == 'contests':";
	$m.__track_lines__[296] = 'sampleBallot.py, line 296:\n    currObj = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[297] = 'sampleBallot.py, line 297:\n    fsm.selectCandidate()';
	$m.__track_lines__[298] = 'sampleBallot.py, line 298:\n    setCandidate()';
	$m.__track_lines__[299] = 'sampleBallot.py, line 299:\n    return';
	$m.__track_lines__[301] = 'sampleBallot.py, line 301:\n    fsm.reviewCandidates()';
	$m.__track_lines__[302] = 'sampleBallot.py, line 302:\n    setConfirm(0)';
	$m.__track_lines__[303] = 'sampleBallot.py, line 303:\n    return';
	$m.__track_lines__[305] = 'sampleBallot.py, line 305:\n    if confirm % 2 == 0:';
	$m.__track_lines__[307] = 'sampleBallot.py, line 307:\n    makeSelection()';
	$m.__track_lines__[308] = 'sampleBallot.py, line 308:\n    playAudio(currObj.audioPath)';
	$m.__track_lines__[309] = 'sampleBallot.py, line 309:\n    fsm.doneReview()';
	$m.__track_lines__[312] = 'sampleBallot.py, line 312:\n    fsm.reselectCandidates()';
	$m.__track_lines__[313] = 'sampleBallot.py, line 313:\n    confirm = 0     #hack to make the count work. not happy with the whole count thing :(';
	$m.__track_lines__[315] = 'sampleBallot.py, line 315:\n    if len(review_path) != 0:';
	$m.__track_lines__[316] = 'sampleBallot.py, line 316:\n    contestPosition = contestPosition + 1';
	$m.__track_lines__[317] = 'sampleBallot.py, line 317:\n    review_contest = review_path.pop(0)';
	$m.__track_lines__[318] = 'sampleBallot.py, line 318:\n    review_selection = review_path.pop(0)';
	$m.__track_lines__[319] = 'sampleBallot.py, line 319:\n    audioList = [review_contest, review_selection]';
	$m.__track_lines__[320] = 'sampleBallot.py, line 320:\n    print audioList';
	$m.__track_lines__[321] = 'sampleBallot.py, line 321:\n    playAudioList(audioList)';
	$m.__track_lines__[323] = "sampleBallot.py, line 323:\n    playAudio('media/finish.wav', 'play')";
	$m.__track_lines__[330] = 'sampleBallot.py, line 330:\n    return';
	$m.__track_lines__[333] = "sampleBallot.py, line 333:\n    '''";
	$m.__track_lines__[336] = 'sampleBallot.py, line 336:\n    def traverselist(obj):';
	$m.__track_lines__[337] = 'sampleBallot.py, line 337:\n    alist = obj.selectionList';
	$m.__track_lines__[338] = "sampleBallot.py, line 338:\n    print('* ' + alist[contestPosition].name + ' highlighted *')";
	$m.__track_lines__[340] = "sampleBallot.py, line 340:\n    '''";
	$m.__track_lines__[343] = 'sampleBallot.py, line 343:\n    def printstatechange(e):';
	$m.__track_lines__[344] = "sampleBallot.py, line 344:\n    print 'event: %s, src: %s, dst: %s' % (e.event, e.src, e.dst)";
	$m.__track_lines__[346] = 'sampleBallot.py, line 346:\n    def onintro(e):';
	$m.__track_lines__[347] = "sampleBallot.py, line 347:\n    print 'hello!'";
	$m.__track_lines__[349] = 'sampleBallot.py, line 349:\n    def oncontests(e):';
	$m.__track_lines__[350] = 'sampleBallot.py, line 350:\n    candidate.clear()';
	$m.__track_lines__[351] = 'sampleBallot.py, line 351:\n    status.clear()';
	$m.__track_lines__[352] = "sampleBallot.py, line 352:\n    print('\\nThe contests are:')";
	$m.__track_lines__[353] = 'sampleBallot.py, line 353:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[354] = "sampleBallot.py, line 354:\n    print('\\t' + str(i + 1) + ') ' + contest.name)";
	$m.__track_lines__[355] = 'sampleBallot.py, line 355:\n    traverselist(race)';
	$m.__track_lines__[357] = 'sampleBallot.py, line 357:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[361] = 'sampleBallot.py, line 361:\n    def oncandidates(e):';
	$m.__track_lines__[362] = 'sampleBallot.py, line 362:\n    status.clear()';
	$m.__track_lines__[363] = 'sampleBallot.py, line 363:\n    currContest = race.selectionList[contestPosition]';
	$m.__track_lines__[364] = "sampleBallot.py, line 364:\n    print('\\nCurrent race is: ' + currContest.name)";
	$m.__track_lines__[365] = "sampleBallot.py, line 365:\n    print('Candidates are:')";
	$m.__track_lines__[366] = 'sampleBallot.py, line 366:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[367] = 'sampleBallot.py, line 367:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[368] = 'sampleBallot.py, line 368:\n    traverselist(currContest)';
	$m.__track_lines__[370] = 'sampleBallot.py, line 370:\n    currObj = currContest.selectionList[contestPosition]';
	$m.__track_lines__[371] = 'sampleBallot.py, line 371:\n    print "current candidate is " + currObj.name';
	$m.__track_lines__[373] = 'sampleBallot.py, line 373:\n    def onchangecandidates(e):';
	$m.__track_lines__[374] = 'sampleBallot.py, line 374:\n    global contestPosition, currObj';
	$m.__track_lines__[375] = 'sampleBallot.py, line 375:\n    status.clear()';
	$m.__track_lines__[376] = 'sampleBallot.py, line 376:\n    currObj = race.selectionList[contestPosition]';
	$m.__track_lines__[377] = 'sampleBallot.py, line 377:\n    setContest()';
	$m.__track_lines__[378] = 'sampleBallot.py, line 378:\n    candidate.clear()';
	$m.__track_lines__[379] = 'sampleBallot.py, line 379:\n    currContest = race.selectionList[contestPosition]';
	$m.__track_lines__[380] = "sampleBallot.py, line 380:\n    print('\\nCurrent race is: ' + currContest.name)";
	$m.__track_lines__[381] = "sampleBallot.py, line 381:\n    print('Candidates are:')";
	$m.__track_lines__[382] = 'sampleBallot.py, line 382:\n    for i, person in zip(range(len(currContest.selectionList)), currContest.selectionList):';
	$m.__track_lines__[383] = 'sampleBallot.py, line 383:\n    print("\\t" + str(i + 1) + \') \' + person.name)';
	$m.__track_lines__[384] = 'sampleBallot.py, line 384:\n    traverselist(currContest)';
	$m.__track_lines__[386] = 'sampleBallot.py, line 386:\n    currObj = currContest.selectionList[contestPosition]';
	$m.__track_lines__[387] = 'sampleBallot.py, line 387:\n    print "current candidate is " + currObj.name';
	$m.__track_lines__[389] = 'sampleBallot.py, line 389:\n    def onreviewcandidates(e):';
	$m.__track_lines__[390] = "sampleBallot.py, line 390:\n    print('\\nReview Your Choice for ' + race.selectionList[contestPosition].name + ':')";
	$m.__track_lines__[391] = 'sampleBallot.py, line 391:\n    candidate = race.selectionList[contestPosition].selectionList[candidatePosition]';
	$m.__track_lines__[392] = "sampleBallot.py, line 392:\n    print('\\t' + candidate.name)";
	$m.__track_lines__[394] = 'sampleBallot.py, line 394:\n    def oncheckdone(e):';
	$m.__track_lines__[395] = 'sampleBallot.py, line 395:\n    for i, contest in zip(range(len(race.selectionList)), race.selectionList):';
	$m.__track_lines__[396] = 'sampleBallot.py, line 396:\n    if len(contest.userSelection) == 0:';
	$m.__track_lines__[397] = 'sampleBallot.py, line 397:\n    fsm.nextContest()';
	$m.__track_lines__[398] = 'sampleBallot.py, line 398:\n    return';
	$m.__track_lines__[400] = "sampleBallot.py, line 400:\n    JS('''";
	$m.__track_lines__[411] = 'sampleBallot.py, line 411:\n    def onreviewballot(e):';
	$m.__track_lines__[412] = 'sampleBallot.py, line 412:\n    global contestPosition';
	$m.__track_lines__[413] = 'sampleBallot.py, line 413:\n    contestPosition = -1';
	$m.__track_lines__[414] = 'sampleBallot.py, line 414:\n    text = "Review your selections: "';
	$m.__track_lines__[415] = "sampleBallot.py, line 415:\n    print('\\n'+text)";
	$m.__track_lines__[416] = 'sampleBallot.py, line 416:\n    playAudio("media/reviewBallot.wav", \'play\')';
	$m.__track_lines__[417] = 'sampleBallot.py, line 417:\n    for contest in race.selectionList:';
	$m.__track_lines__[418] = "sampleBallot.py, line 418:\n    print(contest.name + ': ' + contest.userSelection[0].name)";
	$m.__track_lines__[419] = 'sampleBallot.py, line 419:\n    review_path.append(contest.audioPath)';
	$m.__track_lines__[420] = 'sampleBallot.py, line 420:\n    review_path.append(contest.userSelection[0].audioPath)';
	$m.__track_lines__[422] = 'sampleBallot.py, line 422:\n    print review_path';
	$m.__track_lines__[425] = 'sampleBallot.py, line 425:\n    def ondoneballot(e):';
	$m.__track_lines__[426] = "sampleBallot.py, line 426:\n    print('\\nVoting complete! Thanks for using this system!')";
	$m.__track_lines__[427] = 'sampleBallot.py, line 427:\n    playAudio("media/finish.wav")';
	$m.__track_lines__[430] = "sampleBallot.py, line 430:\n    '''";
	$m.__track_lines__[433] = 'sampleBallot.py, line 433:\n    fsm = Fysom({';
	$m.__track_lines__[462] = "sampleBallot.py, line 462:\n    '''";


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
	$pyjs.track.lineno=10;
	$m['root_path'] = 'http://10.0.1.6/';
	$pyjs.track.lineno=12;
	$m['contestPosition'] = 0;
	$pyjs.track.lineno=13;
	$m['candidatePosition'] = 0;
	$pyjs.track.lineno=14;
	$m['confirm'] = 0;
	$pyjs.track.lineno=15;
	$m['currObj'] = '';
	$pyjs.track.lineno=16;
	$m['review_path'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=19;
	$m['contest'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=20;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs.track.lineno=21;
	$m['candidate'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
	$pyjs.track.lineno=22;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['candidate']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
	$pyjs.track.lineno=23;
	$m['selection'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs.track.lineno=24;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
	$pyjs.track.lineno=25;
	$m['status'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
	$pyjs.track.lineno=26;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
	return $m['HTML']('STATUS');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
	$pyjs.track.lineno=27;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['status']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
	$pyjs.track.lineno=29;
	$m['title'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
	$pyjs.track.lineno=30;
	$m['instructions'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
	$pyjs.track.lineno=34;

var mainSnd = new Audio();
var snd1 = new Audio();
var snd2 = new Audio();
var varSnd = new Audio();
var loopSnd1 = new Audio();
var loopSnd2 = new Audio();

	$pyjs.track.lineno=43;
	$m['race'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), '', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
	$pyjs.track.lineno=46;
	$m['isPlayingAudio'] = function() {


    return !((mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    
	};
	$m['isPlayingAudio'].__name__ = 'isPlayingAudio';

	$m['isPlayingAudio'].__bind_type__ = 0;
	$m['isPlayingAudio'].__args__ = [null,null];
	$pyjs.track.lineno=51;
	$m['pauseAudio'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:51};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=51;
		$pyjs.track.lineno=52;

    snd1.pause();
    snd2.pause();
    mainSnd.pause();
    varSnd.pause();
    loopSnd1.pause();
    loopSnd2.pause();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['pauseAudio'].__name__ = 'pauseAudio';

	$m['pauseAudio'].__bind_type__ = 0;
	$m['pauseAudio'].__args__ = [null,null];
	$pyjs.track.lineno=63;
	$m['playAudio'] = function(arg_audioPath, confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[3][1];
		var confirmPath,confirmPath2,$add2,$add3,$add1,$add6,$add7,$add4,$add5,path,$add8,$add9,$add10;
		$pyjs.track={module:'sampleBallot',lineno:63};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=63;
		$pyjs.track.lineno=64;
		$pyjs.track.lineno=65;
		path = $p['__op_add']($add1=$m['root_path'],$add2=$p['getattr']($m['currObj'], 'audioPath'));
		$pyjs.track.lineno=67;
		if ($p['bool']($p['op_eq'](confirm, 'play'))) {
			$pyjs.track.lineno=68;
			path = $p['__op_add']($add3=$m['root_path'],$add4=arg_audioPath);
		}
		$pyjs.track.lineno=74;
		if ($p['bool']($p['op_eq'](confirm, true))) {
			$pyjs.track.lineno=75;
			confirmPath = $p['__op_add']($add5=$m['root_path'],$add6='media/confirm.wav');
			$pyjs.track.lineno=76;
			confirmPath2 = $p['__op_add']($add7=$m['root_path'],$add8='media/confirm2.wav');
			$pyjs.track.lineno=78;

        mainSnd.pause();
        
        snd1.src = confirmPath;
        snd1.load();
        snd2.src = confirmPath2;
        snd2.load();

        snd1.addEventListener('ended', function() {
            snd1.currentTime = 0;
            snd1.pause();
            varSnd.src = path;
            varSnd.load();
            varSnd.play();
        }, false);
        
        varSnd.addEventListener('ended', function() {
            varSnd.currentTime = 0;
            varSnd.pause();
            snd2.play();
        }, false);
        
        snd1.play();
        
		}
		else if ($p['bool']($p['op_eq'](confirm, false))) {
			$pyjs.track.lineno=105;
			confirmPath = $p['__op_add']($add9=$m['root_path'],$add10='media/reselectCandidate.wav');
			$pyjs.track.lineno=107;

        snd1.pause();
        snd2.pause();
        mainSnd.src = confirmPath;
        mainSnd.load();
        mainSnd.play();
        
		}
		else {
			$pyjs.track.lineno=116;

        console.log(mainSnd.playbackRate)
        mainSnd.src = path;
        mainSnd.load();
        mainSnd.play();
        
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['arg_audioPath'],['confirm', null]];
	$pyjs.track.lineno=127;
	$m['playAudioList'] = function(audioList) {
		var $add14,$add11,$add12,$add13,path;
		if ($p['bool']($p['op_eq'](audioList, $p['list']([])))) {
			return null;
		}
		path = $p['__op_add']($add13=$m['root_path'],$add14=(function(){try{try{$pyjs.in_try_except += 1;
		return audioList['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());

    loopSnd1 = new Audio();
    loopSnd2 = new Audio();
    
    console.log(audioList.__array)
    
    loopSnd1.addEventListener('ended', function(){
        if (audioList.__array.length == 0) {
            return
        } 
        loopSnd1.currentTime = 0;
        loopSnd1.pause();        
        path = $m['root_path']+audioList.__array.shift();
        console.log(path)
        loopSnd2.src = path
        loopSnd2.load();
        loopSnd2.play();
    }, false);
    loopSnd1.src = path
    loopSnd1.load();
    loopSnd1.play();
    
    loopSnd2.addEventListener('ended', function(){
        if (audioList.__array.length == 0) {
            return
        } 
        loopSnd2.currentTime = 0;
        loopSnd2.pause();        
        path = $m['root_path']+audioList.__array.shift();
        console.log(path)
        loopSnd1.src = path
        loopSnd1.load();
        loopSnd1.play();
    }, false);

    
	};
	$m['playAudioList'].__name__ = 'playAudioList';

	$m['playAudioList'].__bind_type__ = 0;
	$m['playAudioList'].__args__ = [null,null,['audioList']];
	$pyjs.track.lineno=169;
	$m['sendRace'] = function(srace) {

		$pyjs.track={module:'sampleBallot',lineno:169};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=169;
		$pyjs.track.lineno=170;
		$pyjs.track.lineno=171;
		$m['race'] = srace;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$pyjs.track.lineno=173;
	$m['getInstruction'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:173};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=173;
		$pyjs.track.lineno=174;
		$pyjs.track.lineno=174;
		var $pyjs__ret = $p['getattr']($m['race'], '$$name');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	$pyjs.track.lineno=176;
	$m['setContest'] = function() {
		var curcontest,candidateList;
		$pyjs.track={module:'sampleBallot',lineno:176};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=176;
		$pyjs.track.lineno=177;
		$pyjs.track.lineno=178;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=179;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
		$pyjs.track.lineno=180;
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
		$pyjs.track.lineno=181;
		candidateList = $p['getattr'](curcontest, 'selectionList');
		$pyjs.track.lineno=182;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($p['getattr'](curcontest, 'userSelection')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
			$pyjs.track.lineno=183;
			$m['candidatePosition'] = 0;
			$pyjs.track.lineno=184;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=185;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b /> Selection: -');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
		}
		else {
			$pyjs.track.lineno=187;
			$m['candidatePosition'] = (function(){try{try{$pyjs.in_try_except += 1;
			return candidateList['index']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs.track.lineno=188;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs.track.lineno=189;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		}
		$pyjs.track.lineno=190;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs.track.lineno=191;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['getattr']($m['currObj'], 'audioPath')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setContest'].__name__ = 'setContest';

	$m['setContest'].__bind_type__ = 0;
	$m['setContest'].__args__ = [null,null];
	$pyjs.track.lineno=193;
	$m['setConfirm'] = function(num) {
		var $add15,$add16,$mod1,$mod2;
		$pyjs.track={module:'sampleBallot',lineno:193};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=193;
		$pyjs.track.lineno=194;
		$m['confirm'] = $p['__op_add']($add15=$m['confirm'],$add16=num);
		$pyjs.track.lineno=195;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
		$pyjs.track.lineno=196;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof ($mod1=$m['confirm'])==typeof ($mod2=2) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
			$pyjs.track.lineno=197;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('YES');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs.track.lineno=198;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs.track.lineno=199;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}, '/media/ballot.wav']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			}
			else {
				$pyjs.track.lineno=201;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}, $p['getattr']($m['currObj'], 'audioPath')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
			$pyjs.track.lineno=202;
			$pyjs.track.lineno=202;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else {
			$pyjs.track.lineno=204;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['status']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('NO');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs.track.lineno=205;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:false}, $p['getattr']($m['currObj'], 'audioPath')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs.track.lineno=206;
			$pyjs.track.lineno=206;
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
	$pyjs.track.lineno=208;
	$m['setCandidate'] = function() {
		var curcontest,candidateName;
		$pyjs.track={module:'sampleBallot',lineno:208};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=208;
		$pyjs.track.lineno=209;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=210;
		candidateName = $p['getattr']($p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']), '$$name');
		$pyjs.track.lineno=211;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
		$pyjs.track.lineno=212;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Candidate: %s', candidateName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		$pyjs.track.lineno=213;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCandidate'].__name__ = 'setCandidate';

	$m['setCandidate'].__bind_type__ = 0;
	$m['setCandidate'].__args__ = [null,null];
	$pyjs.track.lineno=215;
	$m['makeSelection'] = function() {
		var curcontest,curcandidate;
		$pyjs.track={module:'sampleBallot',lineno:215};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=215;
		$pyjs.track.lineno=216;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=217;
		curcandidate = $p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=218;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['__setslice']($p['getattr'](curcontest, 'userSelection'), 0, null, (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
		$pyjs.track.lineno=219;
		(function(){try{try{$pyjs.in_try_except += 1;
		return curcontest['userSelection']['append'](curcandidate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
		$pyjs.track.lineno=220;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
		$pyjs.track.lineno=221;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['makeSelection'].__name__ = 'makeSelection';

	$m['makeSelection'].__bind_type__ = 0;
	$m['makeSelection'].__args__ = [null,null];
	$pyjs.track.lineno=223;
	$m['onKeyPress'] = function(sender, keycode, modifiers) {
		var $or5,audioList,$mod4,review_selection,$mod3,review_contest,$add26,candidateList,contestList,$add21,$add20,$add23,$add22,$add25,$add24,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub4,$or4,$or7,$or6,$or1,$or3,$or2,$or8,$add17,$add18,$add19,$sub5;
		$pyjs.track={module:'sampleBallot',lineno:223};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=223;
		$pyjs.track.lineno=224;
		$pyjs.track.lineno=226;
		contestList = $p['getattr']($m['race'], 'selectionList');
		$pyjs.track.lineno=227;
		candidateList = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList');
		$pyjs.track.lineno=229;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_SHIFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
			$pyjs.track.lineno=235;

        var meme = new buzz.sound();
        var mySound = new buzz.sound( "http://10.0.1.6/media/contest2.wav", {
            formats: [ "wav" ]
        });
        
        mySound.play()
            .fadeIn()
            .loop()
            .bind( "timeupdate", function() {
               var timer = buzz.toTimer( this.getTime() );
               document.getElementById( "timer" ).innerHTML = timer;
            });
        
		}
		$pyjs.track.lineno=252;
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')))) {
			$pyjs.track.lineno=253;
			if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))?$or1:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates')))) {
				$pyjs.track.lineno=254;
				$m['contestPosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add17=$m['contestPosition'],$add18=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) == -1))? ($p['__op_add']($add19=$m['contestPosition'],$add20=1)) : (0));
				$pyjs.track.lineno=255;
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
				$pyjs.track.lineno=256;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs.track.lineno=257;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs.track.lineno=258;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
					$pyjs.track.lineno=258;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				}
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
			$pyjs.track.lineno=261;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))?$or3:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs.track.lineno=262;
				$m['contestPosition'] = ($p['bool']($p['op_eq']($m['contestPosition'], 0))? ($p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](contestList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})(),$sub2=1)) : ($p['__op_sub']($sub3=$m['contestPosition'],$sub4=1)));
				$pyjs.track.lineno=263;
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
				$pyjs.track.lineno=264;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs.track.lineno=265;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs.track.lineno=266;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
					$pyjs.track.lineno=266;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				}
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
			$pyjs.track.lineno=269;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['getattr']($m['fsm'], 'current')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$pyjs.track.lineno=270;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))?$or5:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'change_candidates')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs.track.lineno=271;
				$m['candidatePosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add21=$m['candidatePosition'],$add22=1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) == -1))? ($p['__op_add']($add23=$m['candidatePosition'],$add24=1)) : (0));
				$pyjs.track.lineno=272;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=273;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs.track.lineno=277;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pauseAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs.track.lineno=278;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['reselectCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				$pyjs.track.lineno=279;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['playAudio']('', false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
				$pyjs.track.lineno=281;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['inReviewChangeCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
			$pyjs.track.lineno=286;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs.track.lineno=287;
				$m['candidatePosition'] = ($p['bool']($p['op_eq']($m['candidatePosition'], 0))? ($p['__op_sub']($sub5=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](candidateList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})(),$sub6=1)) : ($p['__op_sub']($sub7=$m['candidatePosition'],$sub8=1)));
				$pyjs.track.lineno=288;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=289;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			}
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
			$pyjs.track.lineno=294;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['pauseAudio']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs.track.lineno=295;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs.track.lineno=296;
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$pyjs.track.lineno=297;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['selectCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				$pyjs.track.lineno=298;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setCandidate']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs.track.lineno=299;
				$pyjs.track.lineno=299;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))?$or7:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'change_candidates')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
				$pyjs.track.lineno=301;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fsm']['reviewCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$pyjs.track.lineno=302;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['setConfirm'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs.track.lineno=303;
				$pyjs.track.lineno=303;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
				$pyjs.track.lineno=305;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']((typeof ($mod3=$m['confirm'])==typeof ($mod4=2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
					$pyjs.track.lineno=307;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['makeSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
					$pyjs.track.lineno=308;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
					$pyjs.track.lineno=309;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['doneReview']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				}
				else {
					$pyjs.track.lineno=312;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['fsm']['reselectCandidates']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
					$pyjs.track.lineno=313;
					$m['confirm'] = 0;
				}
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
				$pyjs.track.lineno=315;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($m['review_path']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
					$pyjs.track.lineno=316;
					$m['contestPosition'] = $p['__op_add']($add25=$m['contestPosition'],$add26=1);
					$pyjs.track.lineno=317;
					review_contest = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['review_path']['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
					$pyjs.track.lineno=318;
					review_selection = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['review_path']['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
					$pyjs.track.lineno=319;
					audioList = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']([review_contest, review_selection]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
					$pyjs.track.lineno=320;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['printFunc']([audioList], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
					$pyjs.track.lineno=321;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['playAudioList'](audioList);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				}
				else {
					$pyjs.track.lineno=323;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['playAudio']('media/finish.wav', 'play');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				}
			}
		}
		else {
			$pyjs.track.lineno=330;
			$pyjs.track.lineno=330;
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
	$pyjs.track.lineno=333;
	$pyjs.track.lineno=336;
	$m['traverselist'] = function(obj) {
		var $add29,$add28,$add30,alist,$add27;
		$pyjs.track={module:'sampleBallot',lineno:336};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=336;
		$pyjs.track.lineno=337;
		alist = $p['getattr'](obj, 'selectionList');
		$pyjs.track.lineno=338;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add29=$p['__op_add']($add27='* ',$add28=$p['getattr'](alist.__getitem__($m['contestPosition']), '$$name')),$add30=' highlighted *')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['traverselist'].__name__ = 'traverselist';

	$m['traverselist'].__bind_type__ = 0;
	$m['traverselist'].__args__ = [null,null,['obj']];
	$pyjs.track.lineno=340;
	$pyjs.track.lineno=343;
	$m['printstatechange'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:343};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=343;
		$pyjs.track.lineno=344;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('event: %s, src: %s, dst: %s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$p['getattr'](e, 'event'), $p['getattr'](e, 'src'), $p['getattr'](e, 'dst')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['printstatechange'].__name__ = 'printstatechange';

	$m['printstatechange'].__bind_type__ = 0;
	$m['printstatechange'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=346;
	$m['onintro'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:346};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=346;
		$pyjs.track.lineno=347;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['hello!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onintro'].__name__ = 'onintro';

	$m['onintro'].__bind_type__ = 0;
	$m['onintro'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=349;
	$m['oncontests'] = function(e) {
		var currObj,$add38,$iter1_nextval,$iter1_type,contest,i,$add33,$add31,$add36,$add37,$add34,$iter1_iter,$add32,$iter1_array,$pyjs__trackstack_size_1,$add35,$iter1_idx;
		$pyjs.track={module:'sampleBallot',lineno:349};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=349;
		$pyjs.track.lineno=350;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
		$pyjs.track.lineno=351;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
		$pyjs.track.lineno=352;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nThe contests are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
		$pyjs.track.lineno=353;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			i = $tupleassign1[0];
			contest = $tupleassign1[1];
			$pyjs.track.lineno=354;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33='\t',$add34=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add31=i,$add32=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()),$add36=') '),$add38=$p['getattr'](contest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=355;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist']($m['race']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
		$pyjs.track.lineno=357;
		currObj = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncontests'].__name__ = 'oncontests';

	$m['oncontests'].__bind_type__ = 0;
	$m['oncontests'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=361;
	$m['oncandidates'] = function(e) {
		var currContest,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,currObj,$iter2_type,$iter2_idx,$iter2_nextval,$add50,$add39,$iter2_iter,i,person,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs.track={module:'sampleBallot',lineno:361};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=361;
		$pyjs.track.lineno=362;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
		$pyjs.track.lineno=363;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=364;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add39='\nCurrent race is: ',$add40=$p['getattr'](currContest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
		$pyjs.track.lineno=365;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
		$pyjs.track.lineno=366;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
			i = $tupleassign2[0];
			person = $tupleassign2[1];
			$pyjs.track.lineno=367;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add47=$p['__op_add']($add45=$p['__op_add']($add43='\t',$add44=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add41=i,$add42=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()),$add46=') '),$add48=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=368;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist'](currContest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
		$pyjs.track.lineno=370;
		currObj = $p['getattr'](currContest, 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=371;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add49='current candidate is ',$add50=$p['getattr'](currObj, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['oncandidates'].__name__ = 'oncandidates';

	$m['oncandidates'].__bind_type__ = 0;
	$m['oncandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=373;
	$m['onchangecandidates'] = function(e) {
		var $iter3_type,currContest,$iter3_idx,$add61,$add60,person,$iter3_nextval,$iter3_iter,$iter3_array,$add54,$add51,$add52,$add53,$add55,$add56,$add57,i,$add59,$add62,$add58,$pyjs__trackstack_size_1;
		$pyjs.track={module:'sampleBallot',lineno:373};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=373;
		$pyjs.track.lineno=374;
		$pyjs.track.lineno=375;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['status']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
		$pyjs.track.lineno=376;
		$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=377;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
		$pyjs.track.lineno=378;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['candidate']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
		$pyjs.track.lineno=379;
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=380;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add51='\nCurrent race is: ',$add52=$p['getattr'](currContest, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
		$pyjs.track.lineno=381;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Candidates are:'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
		$pyjs.track.lineno=382;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})(), $p['getattr'](currContest, 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			i = $tupleassign3[0];
			person = $tupleassign3[1];
			$pyjs.track.lineno=383;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add59=$p['__op_add']($add57=$p['__op_add']($add55='\t',$add56=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($p['__op_add']($add53=i,$add54=1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()),$add58=') '),$add60=$p['getattr'](person, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=384;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['traverselist'](currContest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
		$pyjs.track.lineno=386;
		$m['currObj'] = $p['getattr'](currContest, 'selectionList').__getitem__($m['contestPosition']);
		$pyjs.track.lineno=387;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add61='current candidate is ',$add62=$p['getattr']($m['currObj'], '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onchangecandidates'].__name__ = 'onchangecandidates';

	$m['onchangecandidates'].__bind_type__ = 0;
	$m['onchangecandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=389;
	$m['onreviewcandidates'] = function(e) {
		var $add65,$add64,$add67,$add66,$add63,candidate,$add68;
		$pyjs.track={module:'sampleBallot',lineno:389};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=389;
		$pyjs.track.lineno=390;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add65=$p['__op_add']($add63='\nReview Your Choice for ',$add64=$p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), '$$name')),$add66=':')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
		$pyjs.track.lineno=391;
		candidate = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
		$pyjs.track.lineno=392;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$p['__op_add']($add67='\t',$add68=$p['getattr'](candidate, '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewcandidates'].__name__ = 'onreviewcandidates';

	$m['onreviewcandidates'].__bind_type__ = 0;
	$m['onreviewcandidates'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=394;
	$m['oncheckdone'] = function(e) {
		var contest,i,$iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
		$pyjs.track={module:'sampleBallot',lineno:394};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=394;
		$pyjs.track.lineno=395;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $p['zip']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})(), $p['getattr']($m['race'], 'selectionList'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			var $tupleassign4 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter4_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			i = $tupleassign4[0];
			contest = $tupleassign4[1];
			$pyjs.track.lineno=396;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr'](contest, 'userSelection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()) {
				$pyjs.track.lineno=397;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m.fsm['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
				$pyjs.track.lineno=398;
				$pyjs.track.lineno=398;
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
		$pyjs.track.lineno=400;

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
	$pyjs.track.lineno=411;
	$m['onreviewballot'] = function(e) {
		var $iter5_nextval,$iter5_idx,$add73,$add70,contest,text,$pyjs__trackstack_size_1,$add69,$add74,$add72,$iter5_iter,$add71,$iter5_array,$iter5_type;
		$pyjs.track={module:'sampleBallot',lineno:411};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=411;
		$pyjs.track.lineno=412;
		$pyjs.track.lineno=413;
		$m['contestPosition'] = (typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4));
		$pyjs.track.lineno=414;
		text = 'Review your selections: ';
		$pyjs.track.lineno=415;
		$p['printFunc']([$p['__op_add']($add69='\n',$add70=text)], 1);
		$pyjs.track.lineno=416;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']('media/reviewBallot.wav', 'play');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
		$pyjs.track.lineno=417;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr']($m['race'], 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
			contest = $iter5_nextval.$nextval;
			$pyjs.track.lineno=418;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([$p['__op_add']($add73=$p['__op_add']($add71=$p['getattr'](contest, '$$name'),$add72=': '),$add74=$p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), '$$name'))], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			$pyjs.track.lineno=419;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['review_path']['append']($p['getattr'](contest, 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
			$pyjs.track.lineno=420;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['review_path']['append']($p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), 'audioPath'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=422;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc']([$m['review_path']], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onreviewballot'].__name__ = 'onreviewballot';

	$m['onreviewballot'].__bind_type__ = 0;
	$m['onreviewballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=425;
	$m['ondoneballot'] = function(e) {

		$pyjs.track={module:'sampleBallot',lineno:425};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=425;
		$pyjs.track.lineno=426;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['\nVoting complete! Thanks for using this system!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
		$pyjs.track.lineno=427;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['playAudio']('media/finish.wav');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['ondoneballot'].__name__ = 'ondoneballot';

	$m['ondoneballot'].__bind_type__ = 0;
	$m['ondoneballot'].__args__ = [null,null,['e']];
	$pyjs.track.lineno=430;
	$pyjs.track.lineno=433;
	$m['fsm'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Fysom']((function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['initial', 'intro'], ['events', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'startVoting'], ['src', 'intro'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'selectCandidate'], ['src', 'contests'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectContest'], ['src', 'candidates'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewCandidates'], ['src', 'change_candidates'], ['dst', 'review_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reselectCandidates'], ['src', 'review_candidates'], ['dst', 'candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneReview'], ['src', 'review_candidates'], ['dst', 'check_done']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'nextContest'], ['src', 'check_done'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'otherContest'], ['src', 'contests'], ['dst', 'contests']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'reviewBallot'], ['src', 'check_done'], ['dst', 'review_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'inReviewChangeCandidates'], ['src', 'review_ballot'], ['dst', 'change_candidates']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['name', 'doneBallot'], ['src', 'review_ballot'], ['dst', 'done_ballot']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()], ['callbacks', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([['onintro', $m['onintro']], ['oncontests', $m['oncontests']], ['oncandidates', $m['oncandidates']], ['onreview_candidates', $m['onreviewcandidates']], ['oncheck_done', $m['oncheckdone']], ['onreview_ballot', $m['onreviewballot']], ['onchange_candidates', $m['onchangecandidates']], ['ondone_ballot', $m['ondoneballot']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
	$pyjs.track.lineno=462;
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree', 'pyjamas.ui.KeyboardListener', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'buzz.js']
*/
