/* start module: sampleBallot */
$pyjs.loaded_modules['sampleBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sampleBallot'].__was_initialized__) return $pyjs.loaded_modules['sampleBallot'];
	var $m = $pyjs.loaded_modules["sampleBallot"];
	$m.__repr__ = function() { return "<module: sampleBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sampleBallot';
	$m.__name__ = __mod_name__;


	$m['Fysom'] = $p['___import___']('fysom.Fysom', null, null, false);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['time'] = $p['___import___']('time', null);
	$m['contestPosition'] = 0;
	$m['candidatePosition'] = 0;
	$m['confirm'] = 0;
	$m['currObj'] = '';
	$m['contest'] = $m['HorizontalPanel']();
	$m['contest']['setStyleName']('words');
	$m['candidate'] = $m['HorizontalPanel']();
	$m['candidate']['setStyleName']('words');
	$m['selection'] = $m['HorizontalPanel']();
	$m['selection']['setStyleName']('words');
	$m['status'] = $m['HorizontalPanel']();
	$m['status']['add']($m['HTML']('STATUS'));
	$m['status']['setStyleName']('words');
	$m['title'] = $m['HorizontalPanel']();
	$m['instructions'] = $m['HorizontalPanel']();

var mainSnd = new Audio();
var snd1 = new Audio();

	$m['race'] = $m['Race']('', $p['list']([]), '', '');
	$m['playAudio'] = function(audioPath, confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[3][1];
		var confirmPath,root_path,$add2,$add3,$add1,$add6,$add4,$add5,path;
		root_path = 'http://209.129.244.15/';
		path = $p['__op_add']($add1=root_path,$add2=$p['getattr']($m['currObj'], 'audioPath'));
		if ($p['bool']($p['op_eq'](confirm, true))) {
			confirmPath = $p['__op_add']($add3=root_path,$add4='media/confirm.wav');

        mainSnd.pause();
        snd1.src = confirmPath;
        snd1.addEventListener('ended', function() {
            snd1.currentTime = 0;
            snd1.pause();
            mainSnd.src = path;
            mainSnd.play();
        }, false);
        snd1.play();
        
		}
		else if ($p['bool']($p['op_eq'](confirm, false))) {
			confirmPath = $p['__op_add']($add5=root_path,$add6='media/reselectCandidate.wav');

        snd1.pause();
        mainSnd.src = confirmPath;
        mainSnd.play();
        
		}
		else {

        mainSnd.src = path;
        mainSnd.play();
        
		}
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['audioPath'],['confirm', null]];
	$m['sendRace'] = function(srace) {

		$m['race'] = srace;
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$m['getInstruction'] = function() {

		return $p['getattr']($m['race'], '$$name');
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	$m['setContest'] = function() {
		var curcontest,candidateList;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$m['contest']['clear']();
		$m['contest']['add']($m['HTML']($p['sprintf']('<b /> Contest: %s', $p['getattr'](curcontest, '$$name'))));
		candidateList = $p['getattr'](curcontest, 'selectionList');
		if ($p['bool'](!$p['bool']($p['getattr'](curcontest, 'userSelection')))) {
			$m['candidatePosition'] = 0;
			$m['selection']['clear']();
			$m['selection']['add']($m['HTML']('<b /> Selection: -'));
		}
		else {
			$m['candidatePosition'] = candidateList['index']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
			$m['selection']['clear']();
			$m['selection']['add']($m['HTML']($p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), '$$name'))));
		}
		$m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
		return null;
	};
	$m['setContest'].__name__ = 'setContest';

	$m['setContest'].__bind_type__ = 0;
	$m['setContest'].__args__ = [null,null];
	$m['setConfirm'] = function(num) {
		var $mod1,$add7,$mod2,$add8;
		$m['confirm'] = $p['__op_add']($add7=$m['confirm'],$add8=num);
		$m['status']['clear']();
		if ($p['bool']($p['op_eq']((typeof ($mod1=$m['confirm'])==typeof ($mod2=2) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2)), 0))) {
			$m['status']['add']($m['HTML']('YES'));
			if ($p['bool']($p['op_eq']($p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), 'review_ballot'))) {
				$pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}, '/media/ballot.wav']);
			}
			else {
				$pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:true}, $p['getattr']($m['currObj'], 'audioPath')]);
			}
			return true;
		}
		else {
			$m['status']['add']($m['HTML']('NO'));
			$pyjs_kwargs_call(null, $m['playAudio'], null, null, [{confirm:false}, $p['getattr']($m['currObj'], 'audioPath')]);
			return false;
		}
		return null;
	};
	$m['setConfirm'].__name__ = 'setConfirm';

	$m['setConfirm'].__bind_type__ = 0;
	$m['setConfirm'].__args__ = [null,null,['num']];
	$m['setCandidate'] = function() {
		var curcontest,candidateName;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		candidateName = $p['getattr']($p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']), '$$name');
		$m['candidate']['clear']();
		$m['candidate']['add']($m['HTML']($p['sprintf']('<b /> Candidate: %s', candidateName)));
		$m['playAudio']($p['getattr']($m['currObj'], 'audioPath'));
		return null;
	};
	$m['setCandidate'].__name__ = 'setCandidate';

	$m['setCandidate'].__bind_type__ = 0;
	$m['setCandidate'].__args__ = [null,null];
	$m['makeSelection'] = function() {
		var curcontest,curcandidate;
		curcontest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		curcandidate = $p['getattr'](curcontest, 'selectionList').__getitem__($m['candidatePosition']);
		$p['__setslice']($p['getattr'](curcontest, 'userSelection'), 0, null, $p['list']([]));
		curcontest['userSelection']['append'](curcandidate);
		$m['selection']['clear']();
		$m['selection']['add']($m['HTML']($p['sprintf']('<b /> Selection: %s', $p['getattr']($p['getattr'](curcontest, 'userSelection').__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))), '$$name'))));
		return null;
	};
	$m['makeSelection'].__name__ = 'makeSelection';

	$m['makeSelection'].__bind_type__ = 0;
	$m['makeSelection'].__args__ = [null,null];
	$m['onKeyPress'] = function(sender, keycode, modifiers) {
		var $mod5,$mod4,$mod6,$mod3,candidateList,contestList,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub4,$or4,$or1,$or3,$or2,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$sub5,$add9;
		$p['printFunc']([$p['getattr']((typeof fsm == "undefined"?$m.fsm:fsm), 'current'), $m['confirm']], 1);
		contestList = $p['getattr']($m['race'], 'selectionList');
		candidateList = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList');
		if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')))) {
			if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))) {
				$m['contestPosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add9=$m['contestPosition'],$add10=1), $p['len'](contestList)) == -1))? ($p['__op_add']($add11=$m['contestPosition'],$add12=1)) : (0));
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
				$m['setContest']();
				$m['candidate']['clear']();
			}
		}
		else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')))) {
			if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))) {
				$m['contestPosition'] = ($p['bool']($p['op_eq']($m['contestPosition'], 0))? ($p['__op_sub']($sub1=$p['len'](contestList),$sub2=1)) : ($p['__op_sub']($sub3=$m['contestPosition'],$sub4=1)));
				$m['currObj'] = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
				$m['setContest']();
				$m['candidate']['clear']();
			}
		}
		else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_ENTER')))) {
			if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'contests'))) {
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$m['fsm']['selectCandidate']();
				$m['setCandidate']();
				return null;
			}
			else if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))) {
				$m['fsm']['reviewCandidates']();
				$m['setConfirm'](0);
				return null;
			}
			else if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'))) {
				if ($p['bool']($p['op_eq']((typeof ($mod3=$m['confirm'])==typeof ($mod4=2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0))) {
					$m['makeSelection']();
					$m['fsm']['doneReview']();
				}
				else {
					$m['fsm']['reselectCandidates']();
					$m['confirm'] = 0;
				}
			}
			else if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot'))) {
				if ($p['bool']($p['op_eq']((typeof ($mod5=$m['confirm'])==typeof ($mod6=2) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)), 0))) {
					$m['fsm']['doneBallot']();
				}
				else {
					$m['fsm']['reselectContest']();
				}
			}
		}
		else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')))) {
			if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))) {
				$m['candidatePosition'] = ($p['bool'](($p['cmp']($p['__op_add']($add13=$m['candidatePosition'],$add14=1), $p['len'](candidateList)) == -1))? ($p['__op_add']($add15=$m['candidatePosition'],$add16=1)) : (0));
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$m['setCandidate']();
			}
			else if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'))?$or1:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot')))) {
				$m['setConfirm'](1);
			}
		}
		else if ($p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')))) {
			if ($p['bool']($p['op_eq']($p['getattr']($m['fsm'], 'current'), 'candidates'))) {
				$m['candidatePosition'] = ($p['bool']($p['op_eq']($m['candidatePosition'], 0))? ($p['__op_sub']($sub5=$p['len'](candidateList),$sub6=1)) : ($p['__op_sub']($sub7=$m['candidatePosition'],$sub8=1)));
				$m['currObj'] = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
				$m['setCandidate']();
			}
			else if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_candidates'))?$or3:$p['op_eq']($p['getattr']($m['fsm'], 'current'), 'review_ballot')))) {
				$m['setConfirm']((typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
			}
		}
		else {
			return null;
		}
		return null;
	};
	$m['onKeyPress'].__name__ = 'onKeyPress';

	$m['onKeyPress'].__bind_type__ = 0;
	$m['onKeyPress'].__args__ = [null,null,['sender'],['keycode'],['modifiers']];
	$m['traverselist'] = function(obj) {
		var $add20,alist,$add17,$add18,$add19;
		alist = $p['getattr'](obj, 'selectionList');
		$p['printFunc']([$p['__op_add']($add19=$p['__op_add']($add17='* ',$add18=$p['getattr'](alist.__getitem__($m['contestPosition']), '$$name')),$add20=' highlighted *')], 1);
		return null;
	};
	$m['traverselist'].__name__ = 'traverselist';

	$m['traverselist'].__bind_type__ = 0;
	$m['traverselist'].__args__ = [null,null,['obj']];
	$m['printstatechange'] = function(e) {

		$p['printFunc']([$p['sprintf']('event: %s, src: %s, dst: %s', $p['tuple']([$p['getattr'](e, 'event'), $p['getattr'](e, 'src'), $p['getattr'](e, 'dst')]))], 1);
		return null;
	};
	$m['printstatechange'].__name__ = 'printstatechange';

	$m['printstatechange'].__bind_type__ = 0;
	$m['printstatechange'].__args__ = [null,null,['e']];
	$m['onintro'] = function(e) {

		$p['printFunc'](['hello!'], 1);
		return null;
	};
	$m['onintro'].__name__ = 'onintro';

	$m['onintro'].__bind_type__ = 0;
	$m['onintro'].__args__ = [null,null,['e']];
	$m['oncontests'] = function(e) {
		var currObj,$add28,$iter1_nextval,$iter1_type,contest,i,$add23,$add22,$add25,$add24,$add27,$iter1_iter,$add21,$iter1_array,$add26,$iter1_idx;
		$m['candidate']['clear']();
		$m['status']['clear']();
		$p['printFunc'](['\nThe contests are:'], 1);
		$iter1_iter = $p['zip']($p['range']($p['len']($p['getattr']($m['race'], 'selectionList'))), $p['getattr']($m['race'], 'selectionList'));
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
			i = $tupleassign1[0];
			contest = $tupleassign1[1];
			$p['printFunc']([$p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23='\t',$add24=$p['str']($p['__op_add']($add21=i,$add22=1))),$add26=') '),$add28=$p['getattr'](contest, '$$name'))], 1);
		}
		$m['traverselist']($m['race']);
		currObj = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		return null;
	};
	$m['oncontests'].__name__ = 'oncontests';

	$m['oncontests'].__bind_type__ = 0;
	$m['oncontests'].__args__ = [null,null,['e']];
	$m['oncandidates'] = function(e) {
		var currContest,$add29,$iter2_iter,$add40,currObj,$iter2_type,$add32,$iter2_idx,$add39,$add38,$iter2_nextval,i,$add33,$add30,$add31,$add36,$add37,$add34,$add35,person,$iter2_array;
		$m['status']['clear']();
		currContest = $p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']);
		$p['printFunc']([$p['__op_add']($add29='\nCurrent race is: ',$add30=$p['getattr'](currContest, '$$name'))], 1);
		$p['printFunc'](['Candidates are:'], 1);
		$iter2_iter = $p['zip']($p['range']($p['len']($p['getattr'](currContest, 'selectionList'))), $p['getattr'](currContest, 'selectionList'));
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
			i = $tupleassign2[0];
			person = $tupleassign2[1];
			$p['printFunc']([$p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33='\t',$add34=$p['str']($p['__op_add']($add31=i,$add32=1))),$add36=') '),$add38=$p['getattr'](person, '$$name'))], 1);
		}
		$m['traverselist'](currContest);
		currObj = $p['getattr'](currContest, 'selectionList').__getitem__($m['contestPosition']);
		$p['printFunc']([$p['__op_add']($add39='current candidate is ',$add40=$p['getattr'](currObj, '$$name'))], 1);
		return null;
	};
	$m['oncandidates'].__name__ = 'oncandidates';

	$m['oncandidates'].__bind_type__ = 0;
	$m['oncandidates'].__args__ = [null,null,['e']];
	$m['onreviewcandidates'] = function(e) {
		var candidate,$add46,$add45,$add44,$add43,$add42,$add41;
		$p['printFunc']([$p['__op_add']($add43=$p['__op_add']($add41='\nReview Your Choice for ',$add42=$p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), '$$name')),$add44=':')], 1);
		candidate = $p['getattr']($p['getattr']($m['race'], 'selectionList').__getitem__($m['contestPosition']), 'selectionList').__getitem__($m['candidatePosition']);
		$p['printFunc']([$p['__op_add']($add45='\t',$add46=$p['getattr'](candidate, '$$name'))], 1);
		return null;
	};
	$m['onreviewcandidates'].__name__ = 'onreviewcandidates';

	$m['onreviewcandidates'].__bind_type__ = 0;
	$m['onreviewcandidates'].__args__ = [null,null,['e']];
	$m['oncheckdone'] = function(e) {
		var $iter3_idx,contest,i,$iter3_nextval,$iter3_type,$iter3_iter,$iter3_array;
		$iter3_iter = $p['zip']($p['range']($p['len']($p['getattr']($m['race'], 'selectionList'))), $p['getattr']($m['race'], 'selectionList'));
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			var $tupleassign3 = $p['__ass_unpack']($iter3_nextval.$nextval, 2, null);
			i = $tupleassign3[0];
			contest = $tupleassign3[1];
			if ($p['bool']($p['op_eq']($p['len']($p['getattr'](contest, 'userSelection')), 0))) {
				$m.fsm['nextContest']();
				return null;
			}
		}
		$m.fsm['reviewBallot']();
		return null;
	};
	$m['oncheckdone'].__name__ = 'oncheckdone';

	$m['oncheckdone'].__bind_type__ = 0;
	$m['oncheckdone'].__args__ = [null,null,['e']];
	$m['onreviewballot'] = function(e) {
		var $add50,paths,$add52,$add49,$add48,$add47,text,contest,$iter4_idx,$iter4_type,$iter4_nextval,$iter4_array,$add51,$iter4_iter;
		text = 'Review your selections: ';
		$p['printFunc']([$p['__op_add']($add47='\n',$add48=text)], 1);
		$m['playAudio']('/media/reviewBallot.wav');
		paths = $p['list']([]);
		$iter4_iter = $p['getattr']($m['race'], 'selectionList');
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			contest = $iter4_nextval.$nextval;
			$p['printFunc']([$p['__op_add']($add51=$p['__op_add']($add49=$p['getattr'](contest, '$$name'),$add50=': '),$add52=$p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), '$$name'))], 1);
			paths['append']($p['getattr'](contest, 'audioPath'));
			paths['append']($p['getattr']($p['getattr'](contest, 'userSelection').__getitem__(0), 'audioPath'));
		}
		$p['printFunc']([paths], 1);
		return null;
	};
	$m['onreviewballot'].__name__ = 'onreviewballot';

	$m['onreviewballot'].__bind_type__ = 0;
	$m['onreviewballot'].__args__ = [null,null,['e']];
	$m['ondoneballot'] = function(e) {

		$p['printFunc'](['\nVoting complete! Thanks for using this system!'], 1);
		$m['playAudio']('/media/finish.wav');
		return null;
	};
	$m['ondoneballot'].__name__ = 'ondoneballot';

	$m['ondoneballot'].__bind_type__ = 0;
	$m['ondoneballot'].__args__ = [null,null,['e']];
	$m['fsm'] = $m['Fysom']($p['dict']([['initial', 'intro'], ['events', $p['list']([$p['dict']([['name', 'startVoting'], ['src', 'intro'], ['dst', 'contests']]), $p['dict']([['name', 'selectCandidate'], ['src', 'contests'], ['dst', 'candidates']]), $p['dict']([['name', 'reviewCandidates'], ['src', 'candidates'], ['dst', 'review_candidates']]), $p['dict']([['name', 'reselectCandidates'], ['src', 'review_candidates'], ['dst', 'candidates']]), $p['dict']([['name', 'doneReview'], ['src', 'review_candidates'], ['dst', 'check_done']]), $p['dict']([['name', 'nextContest'], ['src', 'check_done'], ['dst', 'contests']]), $p['dict']([['name', 'otherContest'], ['src', 'contests'], ['dst', 'contests']]), $p['dict']([['name', 'reviewBallot'], ['src', 'check_done'], ['dst', 'review_ballot']]), $p['dict']([['name', 'reselectContest'], ['src', 'review_ballot'], ['dst', 'contests']]), $p['dict']([['name', 'doneBallot'], ['src', 'review_ballot'], ['dst', 'done_ballot']])])], ['callbacks', $p['dict']([['onintro', $m['onintro']], ['oncontests', $m['oncontests']], ['oncandidates', $m['oncandidates']], ['onreview_candidates', $m['onreviewcandidates']], ['oncheck_done', $m['oncheckdone']], ['onreview_ballot', $m['onreviewballot']], ['ondone_ballot', $m['ondoneballot']]])]]));
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree', 'pyjamas.ui.KeyboardListener', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'time']
*/
