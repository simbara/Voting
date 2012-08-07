/* start module: pyjamas.Window */
$pyjs.loaded_modules['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Window'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Window'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Window"];
	$m.__repr__ = function() { return "<module: pyjamas.Window>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['Window'] = $pyjs.loaded_modules['pyjamas.Window'];
	$m.__track_lines__[1] = 'pyjamas.Window.py, line 1:\n    # This is the pyjd Window module.';
	$m.__track_lines__[3] = 'pyjamas.Window.py, line 3:\n    ';
	$m.__track_lines__[6] = 'pyjamas.Window.py, line 6:\n    """';
	$m.__track_lines__[8] = 'pyjamas.Window.py, line 8:\n    closingListeners = []';
	$m.__track_lines__[9] = 'pyjamas.Window.py, line 9:\n    resizeListeners = []';
	$m.__track_lines__[11] = 'pyjamas.Window.py, line 11:\n    from __pyjamas__ import JS, doc, wnd, get_main_frame';
	$m.__track_lines__[12] = 'pyjamas.Window.py, line 12:\n    from pyjamas import Location';
	$m.__track_lines__[13] = 'pyjamas.Window.py, line 13:\n    ';
	$m.__track_lines__[14] = 'pyjamas.Window.py, line 14:\n    def init_listeners():';
	$m.__track_lines__[15] = 'pyjamas.Window.py, line 15:\n    pass';
	$m.__track_lines__[17] = 'pyjamas.Window.py, line 3:\n     ... def addWindowCloseListener(listener):';
	$m.__track_lines__[18] = 'pyjamas.Window.py, line 18:\n    closingListeners.append(listener)';
	$m.__track_lines__[19] = 'pyjamas.Window.py, line 19:\n    ';
	$m.__track_lines__[20] = 'pyjamas.Window.py, line 6:\n    """ ... def addWindowResizeListener(listener):';
	$m.__track_lines__[22] = 'pyjamas.Window.py, line 22:\n    ';
	$m.__track_lines__[23] = 'pyjamas.Window.py, line 23:\n    def removeWindowCloseListener(listener):';
	$m.__track_lines__[24] = 'pyjamas.Window.py, line 24:\n    closingListeners.remove(listener)';
	$m.__track_lines__[25] = 'pyjamas.Window.py, line 25:\n    ';
	$m.__track_lines__[26] = 'pyjamas.Window.py, line 26:\n    def removeWindowResizeListener(listener):';
	$m.__track_lines__[27] = 'pyjamas.Window.py, line 27:\n    resizeListeners.remove(listener)';
	$m.__track_lines__[28] = 'pyjamas.Window.py, line 28:\n    ';
	$m.__track_lines__[29] = 'pyjamas.Window.py, line 29:\n    def alert(txt):';
	$m.__track_lines__[30] = 'pyjamas.Window.py, line 30:\n    get_main_frame()._alert(txt)';
	$m.__track_lines__[32] = 'pyjamas.Window.py, line 32:\n    def confirm(msg):';
	$m.__track_lines__[35] = 'pyjamas.Window.py, line 35:\n    def prompt(msg, defaultReply=""):';
	$m.__track_lines__[37] = 'pyjamas.Window.py, line 37:\n    ';
	$m.__track_lines__[38] = 'pyjamas.Window.py, line 38:\n    def enableScrolling(enable):';
	$m.__track_lines__[39] = "pyjamas.Window.py, line 39:\n    doc().body.style.overflow = enable and 'auto' or 'hidden'";
	$m.__track_lines__[40] = 'pyjamas.Window.py, line 40:\n    ';
	$m.__track_lines__[41] = 'pyjamas.Window.py, line 41:\n    def scrollBy(x, y):';
	$m.__track_lines__[42] = 'pyjamas.Window.py, line 42:\n    wnd().scrollBy(x, y)';
	$m.__track_lines__[44] = 'pyjamas.Window.py, line 44:\n    def scroll(x, y):';
	$m.__track_lines__[45] = 'pyjamas.Window.py, line 45:\n    wnd().scroll(x, y)';
	$m.__track_lines__[46] = 'pyjamas.Window.py, line 46:\n    ';
	$m.__track_lines__[47] = 'pyjamas.Window.py, line 22:\n     ... def getClientHeight():';
	$m.__track_lines__[49] = 'pyjamas.Window.py, line 49:\n    return wnd().innerHeight';
	$m.__track_lines__[50] = 'pyjamas.Window.py, line 50:\n    except:';
	$m.__track_lines__[53] = 'pyjamas.Window.py, line 25:\n     ... def getClientWidth():';
	$m.__track_lines__[54] = 'pyjamas.Window.py, line 54:\n    try:';
	$m.__track_lines__[58] = 'pyjamas.Window.py, line 58:\n    ';
	$m.__track_lines__[59] = 'pyjamas.Window.py, line 59:\n    def getScrollLeft():';
	$m.__track_lines__[60] = 'pyjamas.Window.py, line 60:\n    return getDocumentRoot().scrollLeft;';
	$m.__track_lines__[62] = 'pyjamas.Window.py, line 62:\n    def getScrollTop():';
	$m.__track_lines__[63] = 'pyjamas.Window.py, line 63:\n    return getDocumentRoot().scrollTop;';
	$m.__track_lines__[65] = 'pyjamas.Window.py, line 65:\n    def getDocumentRoot():';
	$m.__track_lines__[66] = "pyjamas.Window.py, line 66:\n    if doc().compatMode == 'CSS1Compat':";
	$m.__track_lines__[67] = 'pyjamas.Window.py, line 67:\n    return doc().documentElement';
	$m.__track_lines__[68] = 'pyjamas.Window.py, line 68:\n    return doc().body';
	$m.__track_lines__[69] = 'pyjamas.Window.py, line 69:\n    ';
	$m.__track_lines__[70] = 'pyjamas.Window.py, line 70:\n    def setLocation(url):';
	$m.__track_lines__[74] = 'pyjamas.Window.py, line 74:\n    location = None';
	$m.__track_lines__[76] = 'pyjamas.Window.py, line 12:\n    from pyjamas import Location ... def getLocation():';
	$m.__track_lines__[77] = 'pyjamas.Window.py, line 77:\n    global location';
	$m.__track_lines__[80] = 'pyjamas.Window.py, line 80:\n    return location';
	$m.__track_lines__[81] = 'pyjamas.Window.py, line 81:\n    ';
	$m.__track_lines__[82] = 'pyjamas.Window.py, line 9:\n    resizeListeners = [] ... def getTitle():';
	$m.__track_lines__[84] = 'pyjamas.Window.py, line 84:\n    ';
	$m.__track_lines__[85] = 'pyjamas.Window.py, line 85:\n    def open(url, name, features):';
	$m.__track_lines__[86] = 'pyjamas.Window.py, line 86:\n    return wnd().open(url, name, features)';
	$m.__track_lines__[88] = 'pyjamas.Window.py, line 88:\n    def setMargin(size):';
	$m.__track_lines__[89] = 'pyjamas.Window.py, line 89:\n    doc().body.style.margin = size';
	$m.__track_lines__[91] = 'pyjamas.Window.py, line 91:\n    def setTitle(title):';
	$m.__track_lines__[92] = 'pyjamas.Window.py, line 92:\n    d = doc()';
	$m.__track_lines__[93] = 'pyjamas.Window.py, line 93:\n    d.title = title';
	$m.__track_lines__[95] = 'pyjamas.Window.py, line 28:\n     ... def setOnError(onError):';
	$m.__track_lines__[98] = 'pyjamas.Window.py, line 80:\n    return location ... def onError(msg, url, linenumber):';
	$m.__track_lines__[101] = 'pyjamas.Window.py, line 101:\n    # TODO: call fireClosedAndCatch';
	$m.__track_lines__[102] = 'pyjamas.Window.py, line 54:\n    try: ... def onClosed():';
	$m.__track_lines__[104] = 'pyjamas.Window.py, line 104:\n    ';
	$m.__track_lines__[105] = 'pyjamas.Window.py, line 105:\n    # TODO: call fireClosingAndCatch';
	$m.__track_lines__[106] = 'pyjamas.Window.py, line 58:\n     ... def onClosing():';
	$m.__track_lines__[107] = 'pyjamas.Window.py, line 107:\n    fireClosingImpl()';
	$m.__track_lines__[108] = 'pyjamas.Window.py, line 108:\n    ';
	$m.__track_lines__[109] = 'pyjamas.Window.py, line 109:\n    # TODO: call fireResizedAndCatch';
	$m.__track_lines__[110] = 'pyjamas.Window.py, line 62:\n    def getScrollTop(): ... def onResize():';
	$m.__track_lines__[112] = 'pyjamas.Window.py, line 112:\n    ';
	$m.__track_lines__[113] = 'pyjamas.Window.py, line 113:\n    def fireClosedAndCatch(handler):';
	$m.__track_lines__[115] = 'pyjamas.Window.py, line 115:\n    pass';
	$m.__track_lines__[116] = 'pyjamas.Window.py, line 116:\n    ';
	$m.__track_lines__[117] = 'pyjamas.Window.py, line 69:\n     ... def fireClosedImpl():';
	$m.__track_lines__[121] = 'pyjamas.Window.py, line 74:\n    location = None ... def fireClosingAndCatch(handler):';
	$m.__track_lines__[125] = 'pyjamas.Window.py, line 77:\n    global location ... def resize(width, height):';
	$m.__track_lines__[130] = 'pyjamas.Window.py, line 130:\n    def resizeBy(width, height):';
	$m.__track_lines__[132] = 'pyjamas.Window.py, line 132:\n    """';
	$m.__track_lines__[133] = 'pyjamas.Window.py, line 133:\n    wnd().resizeBy(width, height)';
	$m.__track_lines__[135] = 'pyjamas.Window.py, line 37:\n     ... def fireClosingImpl():';
	$m.__track_lines__[143] = 'pyjamas.Window.py, line 46:\n     ... def fireResizedAndCatch(handler):';
	$m.__track_lines__[147] = 'pyjamas.Window.py, line 49:\n    return wnd().innerHeight ... def fireResizedImpl():';
	$m.__track_lines__[151] = 'pyjamas.Window.py, line 112:\n     ... def init():';
	$m.__track_lines__[154] = 'pyjamas.Window.py, line 154:\n    init()';


	$pyjs.track.module='pyjamas.Window';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=8;
	$m['closingListeners'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=9;
	$m['resizeListeners'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=11;
	$pyjs.track.lineno=12;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Location'] = $p['___import___']('pyjamas.Location', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=14;
	$m['init_listeners'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:14};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=14;
		$pyjs.track.lineno=104;
		$pyjs.track.lineno=105;
		$pyjs.track.lineno=106;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($m['closingListeners']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
			$pyjs.track.lineno=107;
			$m['closingListeners'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		}
		$pyjs.track.lineno=108;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']($m['resizeListeners']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
			$pyjs.track.lineno=109;
			$m['resizeListeners'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['init_listeners'].__name__ = 'init_listeners';

	$m['init_listeners'].__bind_type__ = 0;
	$m['init_listeners'].__args__ = [null,null];
	$pyjs.track.lineno=17;
	$m['addWindowCloseListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:17};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=17;
		$pyjs.track.lineno=3;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['closingListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['addWindowCloseListener'].__name__ = 'addWindowCloseListener';

	$m['addWindowCloseListener'].__bind_type__ = 0;
	$m['addWindowCloseListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=20;
	$m['addWindowResizeListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:20};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=20;
		$pyjs.track.lineno=6;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['resizeListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['addWindowResizeListener'].__name__ = 'addWindowResizeListener';

	$m['addWindowResizeListener'].__bind_type__ = 0;
	$m['addWindowResizeListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=23;
	$m['removeWindowCloseListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:23};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=23;
		$pyjs.track.lineno=24;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['closingListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['removeWindowCloseListener'].__name__ = 'removeWindowCloseListener';

	$m['removeWindowCloseListener'].__bind_type__ = 0;
	$m['removeWindowCloseListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=26;
	$m['removeWindowResizeListener'] = function(listener) {

		$pyjs.track={module:'pyjamas.Window',lineno:26};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=26;
		$pyjs.track.lineno=27;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['resizeListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['removeWindowResizeListener'].__name__ = 'removeWindowResizeListener';

	$m['removeWindowResizeListener'].__bind_type__ = 0;
	$m['removeWindowResizeListener'].__args__ = [null,null,['listener']];
	$pyjs.track.lineno=29;
	$m['alert'] = function(msg) {

		$pyjs.track={module:'pyjamas.Window',lineno:29};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=29;
		$pyjs.track.lineno=95;
		$wnd['alert'](msg);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['alert'].__name__ = 'alert';

	$m['alert'].__bind_type__ = 0;
	$m['alert'].__args__ = [null,null,['msg']];
	$pyjs.track.lineno=32;
	$m['confirm'] = function(msg) {

		$pyjs.track={module:'pyjamas.Window',lineno:32};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=32;
		$pyjs.track.lineno=98;
		$pyjs.track.lineno=98;
		var $pyjs__ret = $wnd['confirm'](msg);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['confirm'].__name__ = 'confirm';

	$m['confirm'].__bind_type__ = 0;
	$m['confirm'].__args__ = [null,null,['msg']];
	$pyjs.track.lineno=35;
	$m['prompt'] = function(msg, defaultReply) {
		if (typeof defaultReply == 'undefined') defaultReply=arguments.callee.__args__[3][1];

		$pyjs.track={module:'pyjamas.Window',lineno:35};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=35;
		$pyjs.track.lineno=101;
		$pyjs.track.lineno=101;
		var $pyjs__ret = $wnd['prompt'](msg, defaultReply);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['prompt'].__name__ = 'prompt';

	$m['prompt'].__bind_type__ = 0;
	$m['prompt'].__args__ = [null,null,['msg'],['defaultReply', '']];
	$pyjs.track.lineno=38;
	$m['enableScrolling'] = function(enable) {
		var $and1,$and2,$or1,$or2;
		$pyjs.track={module:'pyjamas.Window',lineno:38};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=38;
		$pyjs.track.lineno=39;
		$p['getattr']($p['getattr']($doc, 'body'), 'style').overflow = ($p['bool']($or1=($p['bool']($and1=enable)?'auto':$and1))?$or1:'hidden');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['enableScrolling'].__name__ = 'enableScrolling';

	$m['enableScrolling'].__bind_type__ = 0;
	$m['enableScrolling'].__args__ = [null,null,['enable']];
	$pyjs.track.lineno=41;
	$m['scrollBy'] = function(x, y) {

		$pyjs.track={module:'pyjamas.Window',lineno:41};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=41;
		$pyjs.track.lineno=42;
		$wnd['scrollBy'](x, y);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['scrollBy'].__name__ = 'scrollBy';

	$m['scrollBy'].__bind_type__ = 0;
	$m['scrollBy'].__args__ = [null,null,['x'],['y']];
	$pyjs.track.lineno=44;
	$m['scroll'] = function(x, y) {

		$pyjs.track={module:'pyjamas.Window',lineno:44};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=44;
		$pyjs.track.lineno=45;
		$wnd['scroll'](x, y);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['scroll'].__name__ = 'scroll';

	$m['scroll'].__bind_type__ = 0;
	$m['scroll'].__args__ = [null,null,['x'],['y']];
	$pyjs.track.lineno=47;
	$m['getClientHeight'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:47};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=47;
		$pyjs.track.lineno=22;
		$pyjs.track.lineno=22;
		var $pyjs__ret = $wnd.innerHeight;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getClientHeight'].__name__ = 'getClientHeight';

	$m['getClientHeight'].__bind_type__ = 0;
	$m['getClientHeight'].__args__ = [null,null];
	$pyjs.track.lineno=53;
	$m['getClientWidth'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:53};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=53;
		$pyjs.track.lineno=25;
		$pyjs.track.lineno=25;
		var $pyjs__ret = $wnd.innerWidth;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getClientWidth'].__name__ = 'getClientWidth';

	$m['getClientWidth'].__bind_type__ = 0;
	$m['getClientWidth'].__args__ = [null,null];
	$pyjs.track.lineno=59;
	$m['getScrollLeft'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:59};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=59;
		$pyjs.track.lineno=60;
		$pyjs.track.lineno=60;
		var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
		return (typeof getDocumentRoot == "undefined"?$m.getDocumentRoot:getDocumentRoot)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), 'scrollLeft');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['getScrollLeft'].__name__ = 'getScrollLeft';

	$m['getScrollLeft'].__bind_type__ = 0;
	$m['getScrollLeft'].__args__ = [null,null];
	$pyjs.track.lineno=62;
	$m['getScrollTop'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:62};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=62;
		$pyjs.track.lineno=63;
		$pyjs.track.lineno=63;
		var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
		return (typeof getDocumentRoot == "undefined"?$m.getDocumentRoot:getDocumentRoot)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), 'scrollTop');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['getScrollTop'].__name__ = 'getScrollTop';

	$m['getScrollTop'].__bind_type__ = 0;
	$m['getScrollTop'].__args__ = [null,null];
	$pyjs.track.lineno=65;
	$m['getDocumentRoot'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:65};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=65;
		$pyjs.track.lineno=66;
		if ($p['bool']($p['op_eq']($p['getattr']($doc, 'compatMode'), 'CSS1Compat'))) {
			$pyjs.track.lineno=67;
			$pyjs.track.lineno=67;
			var $pyjs__ret = $p['getattr']($doc, 'documentElement');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=68;
		$pyjs.track.lineno=68;
		var $pyjs__ret = $p['getattr']($doc, 'body');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getDocumentRoot'].__name__ = 'getDocumentRoot';

	$m['getDocumentRoot'].__bind_type__ = 0;
	$m['getDocumentRoot'].__args__ = [null,null];
	$pyjs.track.lineno=70;
	$m['setLocation'] = function(url) {
		var w;
		$pyjs.track={module:'pyjamas.Window',lineno:70};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=70;
		$pyjs.track.lineno=18;
		w = $wnd;
		$pyjs.track.lineno=19;
		w.location = url;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setLocation'].__name__ = 'setLocation';

	$m['setLocation'].__bind_type__ = 0;
	$m['setLocation'].__args__ = [null,null,['url']];
	$pyjs.track.lineno=74;
	$m['location'] = null;
	$pyjs.track.lineno=76;
	$m['getLocation'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:76};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=76;
		$pyjs.track.lineno=12;
		$pyjs.track.lineno=13;
		if ($p['bool'](!$p['bool']($m['location']))) {
			$pyjs.track.lineno=14;
			$m['location'] = $m['Location']['Location']($p['getattr']($wnd, 'location'));
		}
		$pyjs.track.lineno=15;
		$pyjs.track.lineno=15;
		var $pyjs__ret = $m['location'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getLocation'].__name__ = 'getLocation';

	$m['getLocation'].__bind_type__ = 0;
	$m['getLocation'].__args__ = [null,null];
	$pyjs.track.lineno=82;
	$m['getTitle'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:82};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=82;
		$pyjs.track.lineno=9;
		$pyjs.track.lineno=9;
		var $pyjs__ret = $doc.title;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getTitle'].__name__ = 'getTitle';

	$m['getTitle'].__bind_type__ = 0;
	$m['getTitle'].__args__ = [null,null];
	$pyjs.track.lineno=85;
	$m['open'] = function(url, name, features) {

		$pyjs.track={module:'pyjamas.Window',lineno:85};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=85;
		$pyjs.track.lineno=86;
		$pyjs.track.lineno=86;
		var $pyjs__ret = $wnd['open'](url, name, features);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['open'].__name__ = 'open';

	$m['open'].__bind_type__ = 0;
	$m['open'].__args__ = [null,null,['url'],['name'],['features']];
	$pyjs.track.lineno=88;
	$m['setMargin'] = function(size) {

		$pyjs.track={module:'pyjamas.Window',lineno:88};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=88;
		$pyjs.track.lineno=89;
		$p['getattr']($p['getattr']($doc, 'body'), 'style').margin = size;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setMargin'].__name__ = 'setMargin';

	$m['setMargin'].__bind_type__ = 0;
	$m['setMargin'].__args__ = [null,null,['size']];
	$pyjs.track.lineno=91;
	$m['setTitle'] = function(title) {
		var d;
		$pyjs.track={module:'pyjamas.Window',lineno:91};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=91;
		$pyjs.track.lineno=92;
		d = $doc;
		$pyjs.track.lineno=93;
		d.title = title;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setTitle'].__name__ = 'setTitle';

	$m['setTitle'].__bind_type__ = 0;
	$m['setTitle'].__args__ = [null,null,['title']];
	$pyjs.track.lineno=95;
	$m['setOnError'] = function(onError) {

		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['callable'](onError);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
			throw ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['TypeError']('object is not callable');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
		}
    $wnd.onerror=function(msg, url, linenumber){
        return onError(msg, url, linenumber);
    }
    
	};
	$m['setOnError'].__name__ = 'setOnError';

	$m['setOnError'].__bind_type__ = 0;
	$m['setOnError'].__args__ = [null,null,['onError']];
	$pyjs.track.lineno=98;
	$m['onError'] = function(msg, url, linenumber) {
		var tracestr,dialog;
		$pyjs.track={module:'pyjamas.Window',lineno:98};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=98;
		$pyjs.track.lineno=80;
		dialog = $doc['createElement']('div');
		$pyjs.track.lineno=81;
		dialog.className = 'errordialog';
		$pyjs.track.lineno=84;
		tracestr = $m.sys['trackstackstr']($pyjs.trackstack.slice(0,-1));
		$pyjs.track.lineno=85;
		tracestr = (function(){try{try{$pyjs.in_try_except += 1;
		return tracestr['$$replace']('\n', '<br />\n&nbsp;&nbsp;&nbsp;');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
		$pyjs.track.lineno=86;
		dialog.innerHTML = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('&nbsp;<b style="color:red">JavaScript Error: </b>\n%s at line number %d. Please inform webmaster.\n<br />&nbsp;&nbsp;&nbsp;%s\n', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([msg, linenumber, tracestr]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		$pyjs.track.lineno=91;
		$doc['body']['appendChild'](dialog);
		$pyjs.track.lineno=92;
		$pyjs.track.lineno=92;
		var $pyjs__ret = true;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['onError'].__name__ = 'onError';

	$m['onError'].__bind_type__ = 0;
	$m['onError'].__args__ = [null,null,['msg'],['url'],['linenumber']];
	$pyjs.track.lineno=102;
	$m['onClosed'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:102};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=102;
		$pyjs.track.lineno=54;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof fireClosedImpl == "undefined"?$m.fireClosedImpl:fireClosedImpl)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onClosed'].__name__ = 'onClosed';

	$m['onClosed'].__bind_type__ = 0;
	$m['onClosed'].__args__ = [null,null];
	$pyjs.track.lineno=106;
	$m['onClosing'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:106};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=106;
		$pyjs.track.lineno=58;
		$pyjs.track.lineno=58;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof fireClosingImpl == "undefined"?$m.fireClosingImpl:fireClosingImpl)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['onClosing'].__name__ = 'onClosing';

	$m['onClosing'].__bind_type__ = 0;
	$m['onClosing'].__args__ = [null,null];
	$pyjs.track.lineno=110;
	$m['onResize'] = function() {

		$pyjs.track={module:'pyjamas.Window',lineno:110};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=110;
		$pyjs.track.lineno=62;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof fireResizedImpl == "undefined"?$m.fireResizedImpl:fireResizedImpl)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['onResize'].__name__ = 'onResize';

	$m['onResize'].__bind_type__ = 0;
	$m['onResize'].__args__ = [null,null];
	$pyjs.track.lineno=113;
	$m['fireClosedAndCatch'] = function(handler) {

		$pyjs.track={module:'pyjamas.Window',lineno:113};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=113;
		$pyjs.track.lineno=66;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['fireClosedAndCatch'].__name__ = 'fireClosedAndCatch';

	$m['fireClosedAndCatch'].__bind_type__ = 0;
	$m['fireClosedAndCatch'].__args__ = [null,null,['handler']];
	$pyjs.track.lineno=117;
	$m['fireClosedImpl'] = function() {
		var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
		$pyjs.track={module:'pyjamas.Window',lineno:117};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=117;
		$pyjs.track.lineno=69;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['closingListeners'];
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			listener = $iter1_nextval.$nextval;
			$pyjs.track.lineno=70;
			(function(){try{try{$pyjs.in_try_except += 1;
			return listener['onWindowClosed']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Window';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['fireClosedImpl'].__name__ = 'fireClosedImpl';

	$m['fireClosedImpl'].__bind_type__ = 0;
	$m['fireClosedImpl'].__args__ = [null,null];
	$pyjs.track.lineno=121;
	$m['fireClosingAndCatch'] = function(handler) {

		$pyjs.track={module:'pyjamas.Window',lineno:121};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=121;
		$pyjs.track.lineno=74;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['fireClosingAndCatch'].__name__ = 'fireClosingAndCatch';

	$m['fireClosingAndCatch'].__bind_type__ = 0;
	$m['fireClosingAndCatch'].__args__ = [null,null,['handler']];
	$pyjs.track.lineno=125;
	$m['resize'] = function(width, height) {

		$pyjs.track={module:'pyjamas.Window',lineno:125};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=125;
		$pyjs.track.lineno=77;
		$wnd['resizeTo'](width, height);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['resize'].__name__ = 'resize';

	$m['resize'].__bind_type__ = 0;
	$m['resize'].__args__ = [null,null,['width'],['height']];
	$pyjs.track.lineno=130;
	$m['resizeBy'] = function(width, height) {

		$pyjs.track={module:'pyjamas.Window',lineno:130};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=130;
		$pyjs.track.lineno=133;
		$wnd['resizeBy'](width, height);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['resizeBy'].__name__ = 'resizeBy';

	$m['resizeBy'].__bind_type__ = 0;
	$m['resizeBy'].__args__ = [null,null,['width'],['height']];
	$pyjs.track.lineno=135;
	$m['fireClosingImpl'] = function() {
		var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,$pyjs__trackstack_size_1,msg,$iter2_array;
		$pyjs.track={module:'pyjamas.Window',lineno:135};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=135;
		$pyjs.track.lineno=37;
		ret = null;
		$pyjs.track.lineno=38;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = $m['closingListeners'];
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			listener = $iter2_nextval.$nextval;
			$pyjs.track.lineno=39;
			msg = (function(){try{try{$pyjs.in_try_except += 1;
			return listener['onWindowClosing']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs.track.lineno=40;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((ret === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs.track.lineno=41;
				ret = msg;
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=42;
		$pyjs.track.lineno=42;
		var $pyjs__ret = ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['fireClosingImpl'].__name__ = 'fireClosingImpl';

	$m['fireClosingImpl'].__bind_type__ = 0;
	$m['fireClosingImpl'].__args__ = [null,null];
	$pyjs.track.lineno=143;
	$m['fireResizedAndCatch'] = function(handler) {

		$pyjs.track={module:'pyjamas.Window',lineno:143};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=143;
		$pyjs.track.lineno=46;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['fireResizedAndCatch'].__name__ = 'fireResizedAndCatch';

	$m['fireResizedAndCatch'].__bind_type__ = 0;
	$m['fireResizedAndCatch'].__args__ = [null,null,['handler']];
	$pyjs.track.lineno=147;
	$m['fireResizedImpl'] = function() {
		var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1;
		$pyjs.track={module:'pyjamas.Window',lineno:147};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=147;
		$pyjs.track.lineno=49;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['resizeListeners'];
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			listener = $iter3_nextval.$nextval;
			$pyjs.track.lineno=50;
			(function(){try{try{$pyjs.in_try_except += 1;
			return listener['onWindowResized']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['getClientWidth']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getClientHeight']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Window';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['fireResizedImpl'].__name__ = 'fireResizedImpl';

	$m['fireResizedImpl'].__bind_type__ = 0;
	$m['fireResizedImpl'].__args__ = [null,null];
	$pyjs.track.lineno=151;
	$m['init'] = function() {

		$m['sys'] = $p['___import___']('sys', 'pyjamas');
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['init_listeners']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();

    $wnd.__pygwt_initHandlers(
        function() {
            $m['onResize']();
        },
        function() {
            return $m['onClosing']();
        },
        function() {
            $m['onClosed']();
            /*$wnd.onresize = null;
            $wnd.onbeforeclose = null;
            $wnd.onclose = null;*/
        }
    );
    
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['setOnError']($m['onError']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
		return null;
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$pyjs.track.lineno=154;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['init']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas', 'sys']
*/
