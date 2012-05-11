/* start module: pyjamas.ui.ComplexPanel */
$pyjs.loaded_modules['pyjamas.ui.ComplexPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ComplexPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ComplexPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.ComplexPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.ComplexPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ComplexPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['ComplexPanel'] = $pyjs.loaded_modules['pyjamas.ui.ComplexPanel'];
	$m.__track_lines__[1] = 'pyjamas.ui.ComplexPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[15] = 'pyjamas.ui.ComplexPanel.py, line 15:\n    from pyjamas import DOM';
	$m.__track_lines__[16] = 'pyjamas.ui.ComplexPanel.py, line 16:\n    from pyjamas import Factory';
	$m.__track_lines__[18] = 'pyjamas.ui.ComplexPanel.py, line 18:\n    from pyjamas.ui.Panel import Panel';
	$m.__track_lines__[20] = 'pyjamas.ui.ComplexPanel.py, line 20:\n    class ComplexPanel(Panel):';
	$m.__track_lines__[24] = 'pyjamas.ui.ComplexPanel.py, line 24:\n    def add(self, widget, container=None):';
	$m.__track_lines__[25] = 'pyjamas.ui.ComplexPanel.py, line 25:\n    if container is not None:';
	$m.__track_lines__[26] = 'pyjamas.ui.ComplexPanel.py, line 26:\n    self.insert(widget, container, self.getWidgetCount())';
	$m.__track_lines__[28] = 'pyjamas.ui.ComplexPanel.py, line 28:\n    self.insert(widget, self.getWidgetCount())';
	$m.__track_lines__[30] = 'pyjamas.ui.ComplexPanel.py, line 30:\n    def insert(self, widget, container, beforeIndex):';
	$m.__track_lines__[31] = 'pyjamas.ui.ComplexPanel.py, line 31:\n    if widget.getParent() == self:';
	$m.__track_lines__[32] = 'pyjamas.ui.ComplexPanel.py, line 32:\n    return';
	$m.__track_lines__[34] = 'pyjamas.ui.ComplexPanel.py, line 34:\n    self.adopt(widget, container)';
	$m.__track_lines__[35] = 'pyjamas.ui.ComplexPanel.py, line 35:\n    self.children.insert(beforeIndex, widget)';
	$m.__track_lines__[37] = 'pyjamas.ui.ComplexPanel.py, line 37:\n    def remove(self, widget):';
	$m.__track_lines__[38] = 'pyjamas.ui.ComplexPanel.py, line 38:\n    if isinstance(widget, int):';
	$m.__track_lines__[39] = 'pyjamas.ui.ComplexPanel.py, line 39:\n    widget = self.getWidget(widget)';
	$m.__track_lines__[40] = 'pyjamas.ui.ComplexPanel.py, line 40:\n    if widget not in self.getChildren():';
	$m.__track_lines__[41] = 'pyjamas.ui.ComplexPanel.py, line 41:\n    return False';
	$m.__track_lines__[43] = 'pyjamas.ui.ComplexPanel.py, line 43:\n    self.disown(widget)';
	$m.__track_lines__[44] = 'pyjamas.ui.ComplexPanel.py, line 44:\n    self.getChildren().remove(widget)';
	$m.__track_lines__[46] = 'pyjamas.ui.ComplexPanel.py, line 46:\n    return True';
	$m.__track_lines__[49] = "pyjamas.ui.ComplexPanel.py, line 49:\n    Factory.registerClass('pyjamas.ui.ComplexPanel', 'ComplexPanel', ComplexPanel)";


	$pyjs.track.module='pyjamas.ui.ComplexPanel';
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
	$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=20;
	$m['ComplexPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.ComplexPanel';
		$pyjs.track.lineno=24;
		$method = $pyjs__bind_method2('add', function(widget, container) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
			}
			if (typeof container == 'undefined') container=arguments.callee.__args__[4][1];

			$pyjs.track={module:'pyjamas.ui.ComplexPanel', lineno:24};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.ComplexPanel';
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=25;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((container !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
				$pyjs.track.lineno=26;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insert'](widget, container, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			else {
				$pyjs.track.lineno=28;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['insert'](widget, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidgetCount']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container', null]]);
		$cls_definition['add'] = $method;
		$pyjs.track.lineno=30;
		$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
				beforeIndex = arguments[3];
			}

			$pyjs.track={module:'pyjamas.ui.ComplexPanel', lineno:30};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.ComplexPanel';
			$pyjs.track.lineno=30;
			$pyjs.track.lineno=31;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return widget['getParent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), self));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs.track.lineno=32;
				$pyjs.track.lineno=32;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=34;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['adopt'](widget, container);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=35;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['children']['insert'](beforeIndex, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex']]);
		$cls_definition['insert'] = $method;
		$pyjs.track.lineno=37;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.ComplexPanel', lineno:37};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.ComplexPanel';
			$pyjs.track.lineno=37;
			$pyjs.track.lineno=38;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](widget, $p['float_int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs.track.lineno=39;
				widget = (function(){try{try{$pyjs.in_try_except += 1;
				return self['getWidget'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs.track.lineno=40;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!(function(){try{try{$pyjs.in_try_except += 1;
			return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})().__contains__(widget));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs.track.lineno=41;
				$pyjs.track.lineno=41;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=43;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['disown'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.track.lineno=44;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return self['getChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['remove'](widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$pyjs.track.lineno=20;
		var $bases = new Array($m['Panel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ComplexPanel', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=49;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['Factory']['registerClass']('pyjamas.ui.ComplexPanel', 'ComplexPanel', $m['ComplexPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
	return this;
}; /* end pyjamas.ui.ComplexPanel */


/* end module: pyjamas.ui.ComplexPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel']
*/
