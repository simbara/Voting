/* start module: pyjamas.log */
$pyjs.loaded_modules['pyjamas.log'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.log'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.log'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.log"];
	$m.__repr__ = function() { return "<module: pyjamas.log>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.log';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['log'] = $pyjs.loaded_modules['pyjamas.log'];
	$m.__track_lines__[1] = 'pyjamas.log.py, line 1:\n    # Use this to output (cumulatively) text at the bottom of the HTML page';
	$m.__track_lines__[3] = 'pyjamas.log.py, line 3:\n    from pyjamas import DOM';
	$m.__track_lines__[4] = 'pyjamas.log.py, line 4:\n    from __pyjamas__ import doc';
	$m.__track_lines__[6] = 'pyjamas.log.py, line 6:\n    def getBodyElement():';
	$m.__track_lines__[7] = 'pyjamas.log.py, line 7:\n    return doc().body';
	$m.__track_lines__[9] = 'pyjamas.log.py, line 9:\n    def write(text):';
	$m.__track_lines__[10] = 'pyjamas.log.py, line 10:\n    add_elem()';
	$m.__track_lines__[11] = 'pyjamas.log.py, line 11:\n    global data';
	$m.__track_lines__[12] = 'pyjamas.log.py, line 12:\n    text = text.replace("\\n", "<br />\\n")';
	$m.__track_lines__[13] = 'pyjamas.log.py, line 13:\n    data += text';
	$m.__track_lines__[14] = 'pyjamas.log.py, line 14:\n    DOM.setInnerHTML(element, data)';
	$m.__track_lines__[16] = 'pyjamas.log.py, line 16:\n    def writebr(text):';
	$m.__track_lines__[17] = 'pyjamas.log.py, line 17:\n    write(text + "\\n")';
	$m.__track_lines__[19] = 'pyjamas.log.py, line 19:\n    data = ""';
	$m.__track_lines__[20] = 'pyjamas.log.py, line 20:\n    element = None';
	$m.__track_lines__[22] = 'pyjamas.log.py, line 22:\n    def add_elem():';
	$m.__track_lines__[23] = 'pyjamas.log.py, line 23:\n    global element';
	$m.__track_lines__[24] = 'pyjamas.log.py, line 24:\n    if element is not None:';
	$m.__track_lines__[25] = 'pyjamas.log.py, line 25:\n    return';
	$m.__track_lines__[26] = 'pyjamas.log.py, line 26:\n    element = DOM.createDiv()';
	$m.__track_lines__[27] = 'pyjamas.log.py, line 27:\n    DOM.appendChild(getBodyElement(), element)';


	$pyjs.track.module='pyjamas.log';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=3;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$pyjs.track.lineno=6;
	$m['getBodyElement'] = function() {

		$pyjs.track={module:'pyjamas.log',lineno:6};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.log';
		$pyjs.track.lineno=6;
		$pyjs.track.lineno=7;
		$pyjs.track.lineno=7;
		var $pyjs__ret = $p['getattr']($doc, 'body');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getBodyElement'].__name__ = 'getBodyElement';

	$m['getBodyElement'].__bind_type__ = 0;
	$m['getBodyElement'].__args__ = [null,null];
	$pyjs.track.lineno=9;
	$m['write'] = function(text) {
		var $add2,$add1;
		$pyjs.track={module:'pyjamas.log',lineno:9};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.log';
		$pyjs.track.lineno=9;
		$pyjs.track.lineno=10;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof add_elem == "undefined"?$m.add_elem:add_elem)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=11;
		$pyjs.track.lineno=12;
		text = (function(){try{try{$pyjs.in_try_except += 1;
		return text['$$replace']('\n', '<br />\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs.track.lineno=13;
		$m['data'] = $p['__op_add']($add1=$m['data'],$add2=text);
		$pyjs.track.lineno=14;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['DOM']['setInnerHTML']((typeof element == "undefined"?$m.element:element), $m['data']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['write'].__name__ = 'write';

	$m['write'].__bind_type__ = 0;
	$m['write'].__args__ = [null,null,['text']];
	$pyjs.track.lineno=16;
	$m['writebr'] = function(text) {
		var $add4,$add3;
		$pyjs.track={module:'pyjamas.log',lineno:16};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.log';
		$pyjs.track.lineno=16;
		$pyjs.track.lineno=17;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['write']($p['__op_add']($add3=text,$add4='\n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['writebr'].__name__ = 'writebr';

	$m['writebr'].__bind_type__ = 0;
	$m['writebr'].__args__ = [null,null,['text']];
	$pyjs.track.lineno=19;
	$m['data'] = '';
	$pyjs.track.lineno=20;
	$m['element'] = null;
	$pyjs.track.lineno=22;
	$m['add_elem'] = function() {

		$pyjs.track={module:'pyjamas.log',lineno:22};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.log';
		$pyjs.track.lineno=22;
		$pyjs.track.lineno=23;
		$pyjs.track.lineno=24;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($m['element'] !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
			$pyjs.track.lineno=25;
			$pyjs.track.lineno=25;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=26;
		$m['element'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
		$pyjs.track.lineno=27;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['DOM']['appendChild']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['getBodyElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), $m['element']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['add_elem'].__name__ = 'add_elem';

	$m['add_elem'].__bind_type__ = 0;
	$m['add_elem'].__args__ = [null,null];
	return this;
}; /* end pyjamas.log */


/* end module: pyjamas.log */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
