/* start module: ParseModule */
$pyjs.loaded_modules['ParseModule'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ParseModule'].__was_initialized__) return $pyjs.loaded_modules['ParseModule'];
	var $m = $pyjs.loaded_modules["ParseModule"];
	$m.__repr__ = function() { return "<module: ParseModule>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ParseModule';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'ParseModule.py, line 1:\n    import re';
	$m.__track_lines__[2] = 'ParseModule.py, line 2:\n    from ballotTree import Contest, Race, Candidate';
	$m.__track_lines__[4] = 'ParseModule.py, line 4:\n    class Parser:';
	$m.__track_lines__[5] = 'ParseModule.py, line 5:\n    def __init__(self, fileLoc):';
	$m.__track_lines__[6] = 'ParseModule.py, line 6:\n    self.inFile = fileLoc';
	$m.__track_lines__[7] = "ParseModule.py, line 7:\n    self.pCandidate = re.compile('Candidate:\\s*(.+)', re.IGNORECASE)";
	$m.__track_lines__[8] = "ParseModule.py, line 8:\n    self.pRace = re.compile('Race:\\s*(.+):(.+)', re.IGNORECASE)";
	$m.__track_lines__[9] = "ParseModule.py, line 9:\n    self.pContest = re.compile('Contest:\\s*(.+)', re.IGNORECASE)";
	$m.__track_lines__[10] = 'ParseModule.py, line 10:\n    self.races = []';
	$m.__track_lines__[12] = 'ParseModule.py, line 12:\n    def parse(self):';
	$m.__track_lines__[13] = "ParseModule.py, line 13:\n    f = open(self.inFile, 'r')";
	$m.__track_lines__[14] = 'ParseModule.py, line 14:\n    for line in f:';
	$m.__track_lines__[15] = 'ParseModule.py, line 15:\n    mCandidate = self.pCandidate.match(line)';
	$m.__track_lines__[16] = 'ParseModule.py, line 16:\n    mRace = self.pRace.match(line)';
	$m.__track_lines__[17] = 'ParseModule.py, line 17:\n    mContest = self.pContest.match(line)';
	$m.__track_lines__[18] = 'ParseModule.py, line 18:\n    if mRace:';
	$m.__track_lines__[19] = 'ParseModule.py, line 19:\n    race = Race(mRace.group(1), [], mRace.group(2))';
	$m.__track_lines__[20] = 'ParseModule.py, line 20:\n    self.races.append(race)';
	$m.__track_lines__[22] = 'ParseModule.py, line 22:\n    contest = Contest(mContest.group(1), [])';
	$m.__track_lines__[23] = 'ParseModule.py, line 23:\n    race.selectionList.append(contest)';
	$m.__track_lines__[25] = 'ParseModule.py, line 25:\n    c = Candidate(mCandidate.group(1))';
	$m.__track_lines__[26] = 'ParseModule.py, line 26:\n    contest.selectionList.append(c)';
	$m.__track_lines__[27] = 'ParseModule.py, line 27:\n    return race';
	$m.__track_lines__[30] = 'ParseModule.py, line 30:\n    def initTree():';
	$m.__track_lines__[31] = "ParseModule.py, line 31:\n    p = Parser('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt')";
	$m.__track_lines__[32] = 'ParseModule.py, line 32:\n    race = p.parse()';
	$m.__track_lines__[33] = 'ParseModule.py, line 33:\n    return race';
	$m.__track_lines__[35] = 'ParseModule.py, line 35:\n    def testTree():';
	$m.__track_lines__[36] = 'ParseModule.py, line 36:\n    p = Parser("/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt")';
	$m.__track_lines__[37] = 'ParseModule.py, line 37:\n    race = p.parse()';
	$m.__track_lines__[38] = 'ParseModule.py, line 38:\n    print "Race:", race.name, ", Instructions:", race.instructions';
	$m.__track_lines__[39] = 'ParseModule.py, line 39:\n    for contest in race.selectionList:';
	$m.__track_lines__[40] = 'ParseModule.py, line 40:\n    print "\\tContest:", contest.name';
	$m.__track_lines__[41] = 'ParseModule.py, line 41:\n    for person in contest.selectionList:';
	$m.__track_lines__[42] = 'ParseModule.py, line 42:\n    print "\\t\\tCandidate:", person.name';


	$pyjs.track.module='ParseModule';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['re'] = $p['___import___']('re', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=2;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Contest'] = $p['___import___']('ballotTree.Contest', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Candidate'] = $p['___import___']('ballotTree.Candidate', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$m['Parser'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ParseModule';
		$pyjs.track.lineno=5;
		$method = $pyjs__bind_method2('__init__', function(fileLoc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fileLoc = arguments[1];
			}

			$pyjs.track={module:'ParseModule', lineno:5};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ParseModule';
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=6;
			self.inFile = fileLoc;
			$pyjs.track.lineno=7;
			self.pCandidate = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['re']['compile']('Candidate:\\s*(.+)', $p['getattr']($m['re'], 'IGNORECASE'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=8;
			self.pRace = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['re']['compile']('Race:\\s*(.+):(.+)', $p['getattr']($m['re'], 'IGNORECASE'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=9;
			self.pContest = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['re']['compile']('Contest:\\s*(.+)', $p['getattr']($m['re'], 'IGNORECASE'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=10;
			self.races = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['fileLoc']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=12;
		$method = $pyjs__bind_method2('parse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var mCandidate,$iter1_nextval,$iter1_type,f,mRace,c,$iter1_iter,race,$iter1_array,$pyjs__trackstack_size_1,contest,line,mContest,$iter1_idx;
			$pyjs.track={module:'ParseModule', lineno:12};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ParseModule';
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=13;
			f = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['open']($p['getattr'](self, 'inFile'), 'r');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=14;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return f;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				line = $iter1_nextval.$nextval;
				$pyjs.track.lineno=15;
				mCandidate = (function(){try{try{$pyjs.in_try_except += 1;
				return self['pCandidate']['match'](line);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.track.lineno=16;
				mRace = (function(){try{try{$pyjs.in_try_except += 1;
				return self['pRace']['match'](line);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=17;
				mContest = (function(){try{try{$pyjs.in_try_except += 1;
				return self['pContest']['match'](line);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.track.lineno=18;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](mRace);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
					$pyjs.track.lineno=19;
					race = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['Race']((function(){try{try{$pyjs.in_try_except += 1;
					return mRace['group'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return mRace['group'](2);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
					$pyjs.track.lineno=20;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['races']['append'](race);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](mContest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs.track.lineno=22;
					contest = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['Contest']((function(){try{try{$pyjs.in_try_except += 1;
					return mContest['group'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					$pyjs.track.lineno=23;
					(function(){try{try{$pyjs.in_try_except += 1;
					return race['selectionList']['append'](contest);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](mCandidate);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs.track.lineno=25;
					c = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['Candidate']((function(){try{try{$pyjs.in_try_except += 1;
					return mCandidate['group'](1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs.track.lineno=26;
					(function(){try{try{$pyjs.in_try_except += 1;
					return contest['selectionList']['append'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='ParseModule';
			$pyjs.track.lineno=27;
			$pyjs.track.lineno=27;
			var $pyjs__ret = race;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['parse'] = $method;
		$pyjs.track.lineno=4;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Parser', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=30;
	$m['initTree'] = function() {
		var p,race;
		$pyjs.track={module:'ParseModule',lineno:30};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='ParseModule';
		$pyjs.track.lineno=30;
		$pyjs.track.lineno=31;
		p = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['Parser']('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
		$pyjs.track.lineno=32;
		race = (function(){try{try{$pyjs.in_try_except += 1;
		return p['parse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		$pyjs.track.lineno=33;
		$pyjs.track.lineno=33;
		var $pyjs__ret = race;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['initTree'].__name__ = 'initTree';

	$m['initTree'].__bind_type__ = 0;
	$m['initTree'].__args__ = [null,null];
	$pyjs.track.lineno=35;
	$m['testTree'] = function() {
		var $iter3_array,$iter2_nextval,$iter2_type,person,$iter2_iter,contest,$iter3_nextval,$iter3_type,$iter3_idx,p,$iter2_idx,race,$pyjs__trackstack_size_2,$iter3_iter,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs.track={module:'ParseModule',lineno:35};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='ParseModule';
		$pyjs.track.lineno=35;
		$pyjs.track.lineno=36;
		p = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['Parser']('/Users/Rahul/Documents/eclipse/Python/Voting/src/pjBallot/ballot.txt');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
		$pyjs.track.lineno=37;
		race = (function(){try{try{$pyjs.in_try_except += 1;
		return p['parse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
		$pyjs.track.lineno=38;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['printFunc'](['Race:', $p['getattr'](race, '$$name'), ', Instructions:', $p['getattr'](race, 'instructions')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		$pyjs.track.lineno=39;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr'](race, 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			contest = $iter2_nextval.$nextval;
			$pyjs.track.lineno=40;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc'](['\tContest:', $p['getattr'](contest, '$$name')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs.track.lineno=41;
			$pyjs__trackstack_size_2=$pyjs.trackstack.length;
			$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['getattr'](contest, 'selectionList');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				person = $iter3_nextval.$nextval;
				$pyjs.track.lineno=42;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['\t\tCandidate:', $p['getattr'](person, '$$name')], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='ParseModule';
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='ParseModule';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['testTree'].__name__ = 'testTree';

	$m['testTree'].__bind_type__ = 0;
	$m['testTree'].__args__ = [null,null];
	return this;
}; /* end ParseModule */


/* end module: ParseModule */


/*
PYJS_DEPS: ['re', 'ballotTree.Contest', 'ballotTree', 'ballotTree.Race', 'ballotTree.Candidate']
*/
