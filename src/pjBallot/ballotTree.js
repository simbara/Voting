/* start module: ballotTree */
$pyjs.loaded_modules['ballotTree'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ballotTree'].__was_initialized__) return $pyjs.loaded_modules['ballotTree'];
	var $m = $pyjs.loaded_modules["ballotTree"];
	$m.__repr__ = function() { return "<module: ballotTree>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ballotTree';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'ballotTree.py, line 1:\n    class Race(object):';
	$m.__track_lines__[2] = 'ballotTree.py, line 2:\n    def __init__(self, name, selectionList, instructions, audioPath):';
	$m.__track_lines__[3] = 'ballotTree.py, line 3:\n    self.name = name';
	$m.__track_lines__[4] = 'ballotTree.py, line 4:\n    self.selectionList = selectionList';
	$m.__track_lines__[5] = 'ballotTree.py, line 5:\n    self.instructions = instructions';
	$m.__track_lines__[6] = 'ballotTree.py, line 6:\n    self.works = "worker"';
	$m.__track_lines__[7] = 'ballotTree.py, line 7:\n    self.audioPath = audioPath';
	$m.__track_lines__[9] = 'ballotTree.py, line 9:\n    def __repr__(self):';
	$m.__track_lines__[10] = "ballotTree.py, line 10:\n    return '<pjBallotObj>'";
	$m.__track_lines__[12] = 'ballotTree.py, line 12:\n    class Contest(object):';
	$m.__track_lines__[13] = 'ballotTree.py, line 13:\n    def __init__(self, name, selectionList=None, userSelection=None, audioPath=None):';
	$m.__track_lines__[14] = 'ballotTree.py, line 14:\n    self.name = name';
	$m.__track_lines__[15] = 'ballotTree.py, line 15:\n    if audioPath is None:';
	$m.__track_lines__[16] = 'ballotTree.py, line 16:\n    self.audioPath = ""';
	$m.__track_lines__[17] = 'ballotTree.py, line 17:\n    if selectionList is None:';
	$m.__track_lines__[18] = 'ballotTree.py, line 18:\n    self.selectionList = []';
	$m.__track_lines__[19] = 'ballotTree.py, line 19:\n    else: self.selectionList = selectionList #candidates';
	$m.__track_lines__[20] = 'ballotTree.py, line 20:\n    if userSelection is None:';
	$m.__track_lines__[21] = 'ballotTree.py, line 21:\n    self.userSelection = []';
	$m.__track_lines__[22] = 'ballotTree.py, line 22:\n    else: self.userSelection = userSelection';
	$m.__track_lines__[24] = 'ballotTree.py, line 24:\n    class Candidate(object):';
	$m.__track_lines__[25] = 'ballotTree.py, line 25:\n    def __init__(self, name, audioPath):';
	$m.__track_lines__[26] = 'ballotTree.py, line 26:\n    self.name = name';
	$m.__track_lines__[27] = 'ballotTree.py, line 27:\n    self.audioPath = audioPath';


	$pyjs.track.module='ballotTree';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$m['Race'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ballotTree';
		$pyjs.track.lineno=2;
		$method = $pyjs__bind_method2('__init__', function(name, selectionList, instructions, audioPath) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				selectionList = arguments[2];
				instructions = arguments[3];
				audioPath = arguments[4];
			}

			$pyjs.track={module:'ballotTree', lineno:2};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ballotTree';
			$pyjs.track.lineno=2;
			$pyjs.track.lineno=3;
			self.$$name = name;
			$pyjs.track.lineno=4;
			self.selectionList = selectionList;
			$pyjs.track.lineno=5;
			self.instructions = instructions;
			$pyjs.track.lineno=6;
			self.works = 'worker';
			$pyjs.track.lineno=7;
			self.audioPath = audioPath;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['name'],['selectionList'],['instructions'],['audioPath']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=9;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'ballotTree', lineno:9};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ballotTree';
			$pyjs.track.lineno=9;
			$pyjs.track.lineno=10;
			$pyjs.track.lineno=10;
			var $pyjs__ret = '<pjBallotObj>';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$pyjs.track.lineno=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Race', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=12;
	$m['Contest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ballotTree';
		$pyjs.track.lineno=13;
		$method = $pyjs__bind_method2('__init__', function(name, selectionList, userSelection, audioPath) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				selectionList = arguments[2];
				userSelection = arguments[3];
				audioPath = arguments[4];
			}
			if (typeof selectionList == 'undefined') selectionList=arguments.callee.__args__[4][1];
			if (typeof userSelection == 'undefined') userSelection=arguments.callee.__args__[5][1];
			if (typeof audioPath == 'undefined') audioPath=arguments.callee.__args__[6][1];

			$pyjs.track={module:'ballotTree', lineno:13};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ballotTree';
			$pyjs.track.lineno=13;
			$pyjs.track.lineno=14;
			self.$$name = name;
			$pyjs.track.lineno=15;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((audioPath === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
				$pyjs.track.lineno=16;
				self.audioPath = '';
			}
			$pyjs.track.lineno=17;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((selectionList === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs.track.lineno=18;
				self.selectionList = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			else {
				$pyjs.track.lineno=19;
				self.selectionList = selectionList;
			}
			$pyjs.track.lineno=20;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((userSelection === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs.track.lineno=21;
				self.userSelection = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			else {
				$pyjs.track.lineno=22;
				self.userSelection = userSelection;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['name'],['selectionList', null],['userSelection', null],['audioPath', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=12;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Contest', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=24;
	$m['Candidate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ballotTree';
		$pyjs.track.lineno=25;
		$method = $pyjs__bind_method2('__init__', function(name, audioPath) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				audioPath = arguments[2];
			}

			$pyjs.track={module:'ballotTree', lineno:25};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ballotTree';
			$pyjs.track.lineno=25;
			$pyjs.track.lineno=26;
			self.$$name = name;
			$pyjs.track.lineno=27;
			self.audioPath = audioPath;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['name'],['audioPath']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=24;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Candidate', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ballotTree */


/* end module: ballotTree */


