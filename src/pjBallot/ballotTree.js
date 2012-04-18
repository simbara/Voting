/* start module: ballotTree */
$pyjs.loaded_modules['ballotTree'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ballotTree'].__was_initialized__) return $pyjs.loaded_modules['ballotTree'];
	var $m = $pyjs.loaded_modules["ballotTree"];
	$m.__repr__ = function() { return "<module: ballotTree>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ballotTree';
	$m.__name__ = __mod_name__;


	$m['Race'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ballotTree';
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

			self.$$name = name;
			self.audioPath = audioPath;
			self.selectionList = selectionList;
			self.instructions = instructions;
			self.works = 'worker';
			return null;
		}
	, 1, [null,null,['self'],['name'],['selectionList'],['instructions'],['audioPath']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '<pjBallotObj>';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Race', $p['tuple']($bases), $data);
	})();
	$m['Contest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ballotTree';
		$method = $pyjs__bind_method2('__init__', function(name, audioPath, selectionList, userSelection) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				audioPath = arguments[2];
				selectionList = arguments[3];
				userSelection = arguments[4];
			}
			if (typeof selectionList == 'undefined') selectionList=arguments.callee.__args__[5][1];
			if (typeof userSelection == 'undefined') userSelection=arguments.callee.__args__[6][1];

			self.$$name = name;
			self.audioPath = audioPath;
			self.confirm = false;
			if ($p['bool']((selectionList === null))) {
				self.selectionList = $p['list']([]);
			}
			else {
				self.selectionList = selectionList;
			}
			if ($p['bool']((userSelection === null))) {
				self.userSelection = $p['list']([]);
			}
			else {
				self.userSelection = userSelection;
			}
			return null;
		}
	, 1, [null,null,['self'],['name'],['audioPath'],['selectionList', null],['userSelection', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Contest', $p['tuple']($bases), $data);
	})();
	$m['Candidate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ballotTree';
		$method = $pyjs__bind_method2('__init__', function(name, audioPath) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				audioPath = arguments[2];
			}

			self.$$name = name;
			self.audioPath = audioPath;
			return null;
		}
	, 1, [null,null,['self'],['name'],['audioPath']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Candidate', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ballotTree */


/* end module: ballotTree */


