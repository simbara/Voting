/* start module: pyjamas.ui.ButtonBase */
$pyjs.loaded_modules['pyjamas.ui.ButtonBase'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ButtonBase'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ButtonBase'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ButtonBase"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ButtonBase>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ButtonBase';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['ButtonBase'] = $pyjs.loaded_modules['pyjamas.ui.ButtonBase'];
	$m.__track_lines__[32] = 'pyjamas.ui.ButtonBase.py, line 32:\n    txt = props["text"]';
	$m.__track_lines__[1] = 'pyjamas.ui.ButtonBase.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[34] = 'pyjamas.ui.ButtonBase.py, line 34:\n    self.setHTML(txt)';
	$m.__track_lines__[36] = 'pyjamas.ui.ButtonBase.py, line 36:\n    self.setText(txt)';
	$m.__track_lines__[38] = "pyjamas.ui.ButtonBase.py, line 38:\n    Factory.registerClass('pyjamas.ui.ButtonBase', 'ButtonBase', ButtonBase)";
	$m.__track_lines__[33] = 'pyjamas.ui.ButtonBase.py, line 33:\n    if props.get("html", False):';
	$m.__track_lines__[15] = 'pyjamas.ui.ButtonBase.py, line 15:\n    from pyjamas import DOM';
	$m.__track_lines__[16] = 'pyjamas.ui.ButtonBase.py, line 16:\n    from pyjamas import Factory';
	$m.__track_lines__[17] = 'pyjamas.ui.ButtonBase.py, line 17:\n    from pyjamas.ui.FocusWidget import FocusWidget';
	$m.__track_lines__[18] = 'pyjamas.ui.ButtonBase.py, line 18:\n    from pyjamas.ui.InnerHTML import InnerHTML';
	$m.__track_lines__[19] = 'pyjamas.ui.ButtonBase.py, line 19:\n    from pyjamas.ui.InnerText import InnerText';
	$m.__track_lines__[21] = 'pyjamas.ui.ButtonBase.py, line 21:\n    class ButtonBase(FocusWidget, InnerHTML, InnerText):';
	$m.__track_lines__[23] = 'pyjamas.ui.ButtonBase.py, line 23:\n    def __init__(self, element, **kwargs):';
	$m.__track_lines__[24] = 'pyjamas.ui.ButtonBase.py, line 24:\n    FocusWidget.__init__(self, element, **kwargs)';
	$m.__track_lines__[26] = 'pyjamas.ui.ButtonBase.py, line 26:\n    def _setWeirdProps(self, props, builderstate):';
	$m.__track_lines__[27] = 'pyjamas.ui.ButtonBase.py, line 27:\n    if props.has_key("label"):';
	$m.__track_lines__[28] = "pyjamas.ui.ButtonBase.py, line 28:\n    props['text'] = props['label']";
	$m.__track_lines__[29] = "pyjamas.ui.ButtonBase.py, line 29:\n    del props['label']";
	$m.__track_lines__[30] = 'pyjamas.ui.ButtonBase.py, line 30:\n    if not props.has_key("text"):';
	$m.__track_lines__[31] = 'pyjamas.ui.ButtonBase.py, line 31:\n    return';


	$pyjs.track.module='pyjamas.ui.ButtonBase';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=15;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=17;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=18;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=19;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['InnerText'] = $p['___import___']('pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	$m['ButtonBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.ButtonBase';
		$pyjs.track.lineno=23;
		$method = $pyjs__bind_method2('__init__', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs.track={module:'pyjamas.ui.ButtonBase', lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.ButtonBase';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=26;
		$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				props = arguments[1];
				builderstate = arguments[2];
			}
			var txt;
			$pyjs.track={module:'pyjamas.ui.ButtonBase', lineno:26};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.ButtonBase';
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=27;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return props['has_key']('label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
				$pyjs.track.lineno=28;
				(function(){try{try{$pyjs.in_try_except += 1;
				return props.__setitem__('text', props.__getitem__('label'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=29;
				(function(){try{try{$pyjs.in_try_except += 1;
				return props.__delitem__('label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			$pyjs.track.lineno=30;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return props['has_key']('text');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs.track.lineno=31;
				$pyjs.track.lineno=31;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=32;
			txt = props.__getitem__('text');
			$pyjs.track.lineno=33;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return props['get']('html', false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs.track.lineno=34;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setHTML'](txt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			}
			else {
				$pyjs.track.lineno=36;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setText'](txt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['props'],['builderstate']]);
		$cls_definition['_setWeirdProps'] = $method;
		$pyjs.track.lineno=21;
		var $bases = new Array($m['FocusWidget'],$m['InnerHTML'],$m['InnerText']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ButtonBase', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=38;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['Factory']['registerClass']('pyjamas.ui.ButtonBase', 'ButtonBase', $m['ButtonBase']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
	return this;
}; /* end pyjamas.ui.ButtonBase */


/* end module: pyjamas.ui.ButtonBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.InnerText.InnerText', 'pyjamas.ui.InnerText']
*/
