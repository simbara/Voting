/* start module: pyjamas.ui.FocusWidget */
$pyjs.loaded_modules['pyjamas.ui.FocusWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FocusWidget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FocusWidget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.FocusWidget"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.FocusWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusWidget';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['FocusWidget'] = $pyjs.loaded_modules['pyjamas.ui.FocusWidget'];
	$m.__track_lines__[32] = 'pyjamas.ui.FocusWidget.py, line 32:\n    FocusHandler.__init__(self)';
	$m.__track_lines__[1] = 'pyjamas.ui.FocusWidget.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[34] = 'pyjamas.ui.FocusWidget.py, line 34:\n    ClickHandler.__init__(self)';
	$m.__track_lines__[35] = 'pyjamas.ui.FocusWidget.py, line 35:\n    MouseHandler.__init__(self)';
	$m.__track_lines__[33] = 'pyjamas.ui.FocusWidget.py, line 33:\n    KeyboardHandler.__init__(self)';
	$m.__track_lines__[15] = 'pyjamas.ui.FocusWidget.py, line 15:\n    from pyjamas import DOM';
	$m.__track_lines__[16] = 'pyjamas.ui.FocusWidget.py, line 16:\n    from pyjamas import Factory';
	$m.__track_lines__[18] = 'pyjamas.ui.FocusWidget.py, line 18:\n    from pyjamas.ui.Widget import Widget';
	$m.__track_lines__[19] = 'pyjamas.ui.FocusWidget.py, line 19:\n    from pyjamas.ui.Focus import FocusMixin';
	$m.__track_lines__[20] = 'pyjamas.ui.FocusWidget.py, line 20:\n    from pyjamas.ui.ClickListener import ClickHandler';
	$m.__track_lines__[21] = 'pyjamas.ui.FocusWidget.py, line 21:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
	$m.__track_lines__[22] = 'pyjamas.ui.FocusWidget.py, line 22:\n    from pyjamas.ui.FocusListener import FocusHandler';
	$m.__track_lines__[23] = 'pyjamas.ui.FocusWidget.py, line 23:\n    from pyjamas.ui.MouseListener import MouseHandler';
	$m.__track_lines__[25] = 'pyjamas.ui.FocusWidget.py, line 25:\n    class FocusWidget(Widget, FocusHandler, KeyboardHandler,';
	$m.__track_lines__[29] = 'pyjamas.ui.FocusWidget.py, line 29:\n    def __init__(self, element, **kwargs):';
	$m.__track_lines__[30] = 'pyjamas.ui.FocusWidget.py, line 30:\n    self.setElement(element)';
	$m.__track_lines__[31] = 'pyjamas.ui.FocusWidget.py, line 31:\n    Widget.__init__(self, **kwargs)';


	$pyjs.track.module='pyjamas.ui.FocusWidget';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=15;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=18;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=19;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusMixin'] = $p['___import___']('pyjamas.ui.Focus.FocusMixin', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=20;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=22;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=23;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=25;
	$m['FocusWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.FocusWidget';
		$pyjs.track.lineno=29;
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

			$pyjs.track={module:'pyjamas.ui.FocusWidget', lineno:29};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.FocusWidget';
			$pyjs.track.lineno=29;
			$pyjs.track.lineno=30;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['setElement'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=31;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=32;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['FocusHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=33;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['KeyboardHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=34;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['ClickHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=35;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['MouseHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=25;
		var $bases = new Array($m['Widget'],$m['FocusHandler'],$m['KeyboardHandler'],$m['MouseHandler'],$m['ClickHandler'],$m['FocusMixin']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FocusWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.FocusWidget */


/* end module: pyjamas.ui.FocusWidget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Focus.FocusMixin', 'pyjamas.ui.Focus', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener']
*/
