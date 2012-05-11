/* start module: pyjamas.ui.Button */
$pyjs.loaded_modules['pyjamas.ui.Button'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Button'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Button'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Button"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Button>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Button';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Button'] = $pyjs.loaded_modules['pyjamas.ui.Button'];
	$m.__track_lines__[1] = 'pyjamas.ui.Button.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[16] = 'pyjamas.ui.Button.py, line 16:\n    from pyjamas import DOM';
	$m.__track_lines__[17] = 'pyjamas.ui.Button.py, line 17:\n    from pyjamas import Factory';
	$m.__track_lines__[19] = 'pyjamas.ui.Button.py, line 19:\n    from pyjamas.ui.ButtonBase import ButtonBase';
	$m.__track_lines__[21] = 'pyjamas.ui.Button.py, line 21:\n    class Button(ButtonBase):';
	$m.__track_lines__[23] = 'pyjamas.ui.Button.py, line 23:\n    def __init__(self, html=None, listener=None, **kwargs):';
	$m.__track_lines__[31] = 'pyjamas.ui.Button.py, line 31:\n    if not kwargs.has_key(\'StyleName\'): kwargs[\'StyleName\']="gwt-Button"';
	$m.__track_lines__[32] = "pyjamas.ui.Button.py, line 32:\n    if html: kwargs['HTML'] = html";
	$m.__track_lines__[33] = "pyjamas.ui.Button.py, line 33:\n    if kwargs.has_key('Element'):";
	$m.__track_lines__[34] = "pyjamas.ui.Button.py, line 34:\n    element = kwargs.pop('Element')";
	$m.__track_lines__[36] = 'pyjamas.ui.Button.py, line 36:\n    element = DOM.createButton()';
	$m.__track_lines__[37] = 'pyjamas.ui.Button.py, line 37:\n    ButtonBase.__init__(self, element, **kwargs)';
	$m.__track_lines__[38] = 'pyjamas.ui.Button.py, line 38:\n    self.adjustType(self.getElement())';
	$m.__track_lines__[39] = 'pyjamas.ui.Button.py, line 39:\n    if listener is not None:';
	$m.__track_lines__[40] = 'pyjamas.ui.Button.py, line 40:\n    self.addClickListener(listener)';
	$m.__track_lines__[42] = 'pyjamas.ui.Button.py, line 42:\n    def adjustType(self, button):';
	$m.__track_lines__[43] = "pyjamas.ui.Button.py, line 43:\n    if button.type == 'submit':";
	$m.__track_lines__[44] = 'pyjamas.ui.Button.py, line 44:\n    try:';
	$m.__track_lines__[45] = 'pyjamas.ui.Button.py, line 45:\n    DOM.setAttribute(button, "type", "button")';
	$m.__track_lines__[47] = 'pyjamas.ui.Button.py, line 47:\n    pass';
	$m.__track_lines__[49] = 'pyjamas.ui.Button.py, line 49:\n    def click(self):';
	$m.__track_lines__[53] = 'pyjamas.ui.Button.py, line 53:\n    self.getElement().click()';
	$m.__track_lines__[55] = "pyjamas.ui.Button.py, line 55:\n    Factory.registerClass('pyjamas.ui.Button', 'Button', Button)";


	$pyjs.track.module='pyjamas.ui.Button';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=17;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=19;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ButtonBase'] = $p['___import___']('pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	$m['Button'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Button';
		$pyjs.track.lineno=23;
		$method = $pyjs__bind_method2('__init__', function(html, listener) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				listener = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[3];
					}
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[4][1];
			var element;
			$pyjs.track={module:'pyjamas.ui.Button', lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Button';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=31;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return kwargs['has_key']('StyleName');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs.track.lineno=31;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('StyleName', 'gwt-Button');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			$pyjs.track.lineno=32;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs.track.lineno=32;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__('HTML', html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			$pyjs.track.lineno=33;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return kwargs['has_key']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs.track.lineno=34;
				element = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['pop']('Element');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			}
			else {
				$pyjs.track.lineno=36;
				element = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createButton']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			}
			$pyjs.track.lineno=37;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['ButtonBase'], '__init__', null, kwargs, [{}, self, element]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.track.lineno=38;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['adjustType']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs.track.lineno=39;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((listener !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs.track.lineno=40;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['addClickListener'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=42;
		$method = $pyjs__bind_method2('adjustType', function(button) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				button = arguments[1];
			}
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.ui.Button', lineno:42};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Button';
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=43;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](button, 'type'), 'submit'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs.track.lineno=44;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=45;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['setAttribute'](button, 'type', 'button');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
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
					$pyjs.track.module='pyjamas.ui.Button';
					if (true) {
						$pyjs.track.lineno=47;
					}
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['button']]);
		$cls_definition['adjustType'] = $method;
		$pyjs.track.lineno=49;
		$method = $pyjs__bind_method2('click', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Button', lineno:49};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Button';
			$pyjs.track.lineno=49;
			$pyjs.track.lineno=53;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()['click']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['click'] = $method;
		$pyjs.track.lineno=21;
		var $bases = new Array($m['ButtonBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Button', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=55;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['Factory']['registerClass']('pyjamas.ui.Button', 'Button', $m['Button']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
	return this;
}; /* end pyjamas.ui.Button */


/* end module: pyjamas.ui.Button */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui', 'pyjamas.ui.ButtonBase']
*/
