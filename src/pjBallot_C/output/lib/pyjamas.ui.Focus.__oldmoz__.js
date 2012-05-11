/* start module: pyjamas.ui.Focus */
$pyjs.loaded_modules['pyjamas.ui.Focus'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Focus'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Focus'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Focus"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Focus>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Focus';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Focus'] = $pyjs.loaded_modules['pyjamas.ui.Focus'];
	$m.__track_lines__[1] = 'pyjamas.ui.Focus.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[4] = 'pyjamas.ui.Focus.py, line 4:\n    # Licensed under the Apache License, Version 2.0 (the "License");';
	$m.__track_lines__[9] = 'pyjamas.ui.Focus.py, line 9:\n    #';
	$m.__track_lines__[15] = 'pyjamas.ui.Focus.py, line 15:\n    from pyjamas import DOM';
	$m.__track_lines__[16] = 'pyjamas.ui.Focus.py, line 16:\n    from __pyjamas__ import JS';
	$m.__track_lines__[18] = 'pyjamas.ui.Focus.py, line 4:\n    # Licensed under the Apache License, Version 2.0 (the "License"); ... def blur(elem):';
	$m.__track_lines__[21] = 'pyjamas.ui.Focus.py, line 9:\n    # ... def createFocusable():';
	$m.__track_lines__[26] = 'pyjamas.ui.Focus.py, line 26:\n    def focus(elem):';
	$m.__track_lines__[29] = 'pyjamas.ui.Focus.py, line 29:\n    def getTabIndex(elem):';
	$m.__track_lines__[32] = 'pyjamas.ui.Focus.py, line 32:\n    def setAccessKey(elem, key):';
	$m.__track_lines__[35] = 'pyjamas.ui.Focus.py, line 35:\n    def setTabIndex(elem, index):';
	$m.__track_lines__[37] = 'pyjamas.ui.Focus.py, line 37:\n    ';
	$m.__track_lines__[39] = 'pyjamas.ui.Focus.py, line 39:\n    class FocusMixin:';
	$m.__track_lines__[41] = 'pyjamas.ui.Focus.py, line 41:\n    def getTabIndex(self):';
	$m.__track_lines__[42] = 'pyjamas.ui.Focus.py, line 42:\n    return getTabIndex(self.getElement())';
	$m.__track_lines__[44] = 'pyjamas.ui.Focus.py, line 44:\n    def setAccessKey(self, key):';
	$m.__track_lines__[45] = 'pyjamas.ui.Focus.py, line 45:\n    setAccessKey(self.getElement(), key)';
	$m.__track_lines__[47] = 'pyjamas.ui.Focus.py, line 47:\n    def setFocus(self, focused):';
	$m.__track_lines__[48] = 'pyjamas.ui.Focus.py, line 48:\n    if (focused):';
	$m.__track_lines__[49] = 'pyjamas.ui.Focus.py, line 49:\n    focus(self.getElement())';
	$m.__track_lines__[51] = 'pyjamas.ui.Focus.py, line 51:\n    blur(self.getElement())';
	$m.__track_lines__[52] = 'pyjamas.ui.Focus.py, line 52:\n    ';
	$m.__track_lines__[53] = 'pyjamas.ui.Focus.py, line 53:\n    def setTabIndex(self, index):';
	$m.__track_lines__[54] = 'pyjamas.ui.Focus.py, line 54:\n    setTabIndex(self.getElement(), index)';
	$m.__track_lines__[56] = 'pyjamas.ui.Focus.py, line 56:\n    def isEnabled(self):';
	$m.__track_lines__[57] = 'pyjamas.ui.Focus.py, line 57:\n    try:';
	$m.__track_lines__[58] = 'pyjamas.ui.Focus.py, line 58:\n    return not DOM.getBooleanAttribute(self.getElement(), "disabled")';
	$m.__track_lines__[60] = 'pyjamas.ui.Focus.py, line 60:\n    return True';
	$m.__track_lines__[62] = 'pyjamas.ui.Focus.py, line 62:\n    return True';
	$m.__track_lines__[64] = 'pyjamas.ui.Focus.py, line 64:\n    def setEnabled(self, enabled):';
	$m.__track_lines__[65] = 'pyjamas.ui.Focus.py, line 65:\n    DOM.setBooleanAttribute(self.getElement(), "disabled", not enabled)';
	$m.__track_lines__[67] = 'pyjamas.ui.Focus.py, line 67:\n    def isReadonly(self):';
	$m.__track_lines__[68] = 'pyjamas.ui.Focus.py, line 68:\n    try:';
	$m.__track_lines__[69] = 'pyjamas.ui.Focus.py, line 69:\n    return not DOM.getBooleanAttribute(self.getElement(), "readOnly")';
	$m.__track_lines__[71] = 'pyjamas.ui.Focus.py, line 71:\n    return True';
	$m.__track_lines__[73] = 'pyjamas.ui.Focus.py, line 73:\n    return True';
	$m.__track_lines__[75] = 'pyjamas.ui.Focus.py, line 75:\n    def setReadonly(self, readonly):';
	$m.__track_lines__[76] = 'pyjamas.ui.Focus.py, line 76:\n    DOM.setBooleanAttribute(self.getElement(), "readOnly", readonly)';


	$pyjs.track.module='pyjamas.ui.Focus';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=15;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=16;
	$pyjs.track.lineno=18;
	$m['blur'] = function(elem) {

		$pyjs.track={module:'pyjamas.ui.Focus',lineno:18};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.ui.Focus';
		$pyjs.track.lineno=18;
		$pyjs.track.lineno=4;

    elem.firstChild.blur();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['blur'].__name__ = 'blur';

	$m['blur'].__bind_type__ = 0;
	$m['blur'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=21;
	$m['createFocusable'] = function() {


    var div = $doc.createElement('div');
    var input = $doc.createElement('input');
    input.type = 'text';
    input.style.width = input.style.height = 0;
    input.style.zIndex = -1;
    input.style.position = 'absolute';

    input.addEventListener(
        'blur',
        function(evt) { if (this.parentNode.onblur) this.parentNode.onblur(evt); },
        false);

    input.addEventListener(
        'focus',
        function(evt) { if (this.parentNode.onfocus) this.parentNode.onfocus(evt); },
        false);

    div.addEventListener(
        'mousedown',
        function(evt) { this.firstChild.focus(); },
        false);
    
    div.appendChild(input);
    return div;
    
	};
	$m['createFocusable'].__name__ = 'createFocusable';

	$m['createFocusable'].__bind_type__ = 0;
	$m['createFocusable'].__args__ = [null,null];
	$pyjs.track.lineno=26;
	$m['focus'] = function(elem) {

		$pyjs.track={module:'pyjamas.ui.Focus',lineno:26};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.ui.Focus';
		$pyjs.track.lineno=26;
		$pyjs.track.lineno=37;

    elem.firstChild.focus();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['focus'].__name__ = 'focus';

	$m['focus'].__bind_type__ = 0;
	$m['focus'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=29;
	$m['getTabIndex'] = function(elem) {


    return elem.firstChild.tabIndex;
    
	};
	$m['getTabIndex'].__name__ = 'getTabIndex';

	$m['getTabIndex'].__bind_type__ = 0;
	$m['getTabIndex'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=32;
	$m['setAccessKey'] = function(elem, key) {

		$pyjs.track={module:'pyjamas.ui.Focus',lineno:32};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.ui.Focus';
		$pyjs.track.lineno=32;
		$pyjs.track.lineno=47;

    if (elem.firstChild != null) elem.firstChild.accessKey = key;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['setAccessKey'].__name__ = 'setAccessKey';

	$m['setAccessKey'].__bind_type__ = 0;
	$m['setAccessKey'].__args__ = [null,null,['elem'],['key']];
	$pyjs.track.lineno=35;
	$m['setTabIndex'] = function(elem, index) {

		$pyjs.track={module:'pyjamas.ui.Focus',lineno:35};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.ui.Focus';
		$pyjs.track.lineno=35;
		$pyjs.track.lineno=52;

    if (elem.firstChild != null) elem.firstChild.tabIndex = index;
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['setTabIndex'].__name__ = 'setTabIndex';

	$m['setTabIndex'].__bind_type__ = 0;
	$m['setTabIndex'].__args__ = [null,null,['elem'],['index']];
	$pyjs.track.lineno=39;
	$m['FocusMixin'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Focus';
		$pyjs.track.lineno=41;
		$method = $pyjs__bind_method2('getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Focus', lineno:41};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=41;
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=42;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getTabIndex']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$pyjs.track.lineno=44;
		$method = $pyjs__bind_method2('setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Focus', lineno:44};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=45;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setAccessKey']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})(), key);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$pyjs.track.lineno=47;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Focus', lineno:47};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=48;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](focused);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['focus']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			else {
				$pyjs.track.lineno=51;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['blur']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$pyjs.track.lineno=53;
		$method = $pyjs__bind_method2('setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Focus', lineno:53};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=54;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setTabIndex']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$pyjs.track.lineno=56;
		$method = $pyjs__bind_method2('isEnabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.ui.Focus', lineno:56};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=56;
			$pyjs.track.lineno=57;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=58;
					$pyjs.track.lineno=58;
					var $pyjs__ret = !$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getBooleanAttribute']((function(){try{try{$pyjs.in_try_except += 1;
					return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), 'disabled');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} finally { $pyjs.in_try_except -= 1; }
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.Focus';
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					$pyjs.track.lineno=60;
					$pyjs.track.lineno=60;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					$pyjs.track.lineno=62;
					$pyjs.track.lineno=62;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEnabled'] = $method;
		$pyjs.track.lineno=64;
		$method = $pyjs__bind_method2('setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Focus', lineno:64};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=65;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['setBooleanAttribute']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), 'disabled', !$p['bool'](enabled));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$pyjs.track.lineno=67;
		$method = $pyjs__bind_method2('isReadonly', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.ui.Focus', lineno:67};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=67;
			$pyjs.track.lineno=68;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=69;
					$pyjs.track.lineno=69;
					var $pyjs__ret = !$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getBooleanAttribute']((function(){try{try{$pyjs.in_try_except += 1;
					return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), 'readOnly');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} finally { $pyjs.in_try_except -= 1; }
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.Focus';
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					$pyjs.track.lineno=71;
					$pyjs.track.lineno=71;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					$pyjs.track.lineno=73;
					$pyjs.track.lineno=73;
					var $pyjs__ret = true;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isReadonly'] = $method;
		$pyjs.track.lineno=75;
		$method = $pyjs__bind_method2('setReadonly', function(readonly) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				readonly = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Focus', lineno:75};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Focus';
			$pyjs.track.lineno=75;
			$pyjs.track.lineno=76;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['setBooleanAttribute']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), 'readOnly', readonly);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['readonly']]);
		$cls_definition['setReadonly'] = $method;
		$pyjs.track.lineno=39;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FocusMixin', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.Focus */


/* end module: pyjamas.ui.Focus */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
