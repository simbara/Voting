/* start module: pyjamas.ui.InnerText */
$pyjs.loaded_modules['pyjamas.ui.InnerText'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.InnerText'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.InnerText'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.InnerText"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.InnerText>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InnerText';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['InnerText'] = $pyjs.loaded_modules['pyjamas.ui.InnerText'];
	$m.__track_lines__[1] = 'pyjamas.ui.InnerText.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[16] = 'pyjamas.ui.InnerText.py, line 16:\n    from pyjamas import DOM';
	$m.__track_lines__[18] = 'pyjamas.ui.InnerText.py, line 18:\n    class InnerText(object):';
	$m.__track_lines__[20] = 'pyjamas.ui.InnerText.py, line 20:\n    _props = [("label", "Text", "Text", None),';
	$m.__track_lines__[24] = 'pyjamas.ui.InnerText.py, line 23:\n    @classmethod ... def _getProps(self):';
	$m.__track_lines__[25] = 'pyjamas.ui.InnerText.py, line 25:\n    return self._props';
	$m.__track_lines__[27] = 'pyjamas.ui.InnerText.py, line 27:\n    def setText(self, text):';
	$m.__track_lines__[28] = 'pyjamas.ui.InnerText.py, line 28:\n    DOM.setInnerText(self.getElement(), text)';
	$m.__track_lines__[30] = 'pyjamas.ui.InnerText.py, line 30:\n    def getText(self):';
	$m.__track_lines__[31] = 'pyjamas.ui.InnerText.py, line 31:\n    return DOM.getInnerText(self.getElement())';


	$pyjs.track.module='pyjamas.ui.InnerText';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=18;
	$m['InnerText'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.InnerText';
		$pyjs.track.lineno=20;
		$cls_definition['_props'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple'](['label', 'Text', 'Text', null]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs.track.lineno=24;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;

			$pyjs.track={module:'pyjamas.ui.InnerText', lineno:24};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.InnerText';
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=25;
			$pyjs.track.lineno=25;
			var $pyjs__ret = $p['getattr'](self, '_props');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$pyjs.track.lineno=27;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.InnerText', lineno:27};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.InnerText';
			$pyjs.track.lineno=27;
			$pyjs.track.lineno=28;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['setInnerText']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})(), text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$pyjs.track.lineno=30;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.InnerText', lineno:30};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.InnerText';
			$pyjs.track.lineno=30;
			$pyjs.track.lineno=31;
			$pyjs.track.lineno=31;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['getInnerText']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$pyjs.track.lineno=18;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InnerText', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.InnerText */


/* end module: pyjamas.ui.InnerText */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
