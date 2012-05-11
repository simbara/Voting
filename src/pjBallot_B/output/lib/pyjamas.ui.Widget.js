/* start module: pyjamas.ui.Widget */
$pyjs.loaded_modules['pyjamas.ui.Widget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Widget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Widget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Widget"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Widget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Widget';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Widget'] = $pyjs.loaded_modules['pyjamas.ui.Widget'];
	$m.__track_lines__[1] = 'pyjamas.ui.Widget.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[15] = 'pyjamas.ui.Widget.py, line 15:\n    from pyjamas import DOM';
	$m.__track_lines__[16] = 'pyjamas.ui.Widget.py, line 16:\n    from pyjamas import Factory';
	$m.__track_lines__[17] = 'pyjamas.ui.Widget.py, line 17:\n    from pyjamas import log';
	$m.__track_lines__[19] = 'pyjamas.ui.Widget.py, line 19:\n    from pyjamas.ui.UIObject import UIObject';
	$m.__track_lines__[20] = 'pyjamas.ui.Widget.py, line 20:\n    from pyjamas.ui import Event';
	$m.__track_lines__[21] = 'pyjamas.ui.Widget.py, line 21:\n    from pyjamas.ui.ClickListener import ClickHandler';
	$m.__track_lines__[22] = 'pyjamas.ui.Widget.py, line 22:\n    from pyjamas.ui.FocusListener import FocusHandler';
	$m.__track_lines__[23] = 'pyjamas.ui.Widget.py, line 23:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
	$m.__track_lines__[24] = 'pyjamas.ui.Widget.py, line 24:\n    from pyjamas.ui.MouseListener import MouseHandler, MouseWheelHandler';
	$m.__track_lines__[25] = 'pyjamas.ui.Widget.py, line 25:\n    from pyjamas.ui.DragHandler import DragHandler';
	$m.__track_lines__[26] = 'pyjamas.ui.Widget.py, line 26:\n    from pyjamas.ui.DropHandler import DropHandler';
	$m.__track_lines__[28] = 'pyjamas.ui.Widget.py, line 28:\n    class Widget(UIObject):';
	$m.__track_lines__[34] = 'pyjamas.ui.Widget.py, line 34:\n    def __init__(self, **kwargs):';
	$m.__track_lines__[35] = 'pyjamas.ui.Widget.py, line 35:\n    self.attached = False';
	$m.__track_lines__[36] = 'pyjamas.ui.Widget.py, line 36:\n    self.parent = None';
	$m.__track_lines__[37] = 'pyjamas.ui.Widget.py, line 37:\n    self.layoutData = None';
	$m.__track_lines__[38] = 'pyjamas.ui.Widget.py, line 38:\n    self.contextMenu = None';
	$m.__track_lines__[40] = 'pyjamas.ui.Widget.py, line 40:\n    UIObject.__init__(self, **kwargs)';
	$m.__track_lines__[42] = 'pyjamas.ui.Widget.py, line 42:\n    def getLayoutData(self):';
	$m.__track_lines__[43] = 'pyjamas.ui.Widget.py, line 43:\n    return self.layoutData';
	$m.__track_lines__[45] = 'pyjamas.ui.Widget.py, line 45:\n    def getParent(self):';
	$m.__track_lines__[49] = 'pyjamas.ui.Widget.py, line 49:\n    return self.parent';
	$m.__track_lines__[51] = 'pyjamas.ui.Widget.py, line 51:\n    def isAttached(self):';
	$m.__track_lines__[53] = 'pyjamas.ui.Widget.py, line 53:\n    return self.attached';
	$m.__track_lines__[55] = 'pyjamas.ui.Widget.py, line 55:\n    def setContextMenu(self, menu):';
	$m.__track_lines__[56] = 'pyjamas.ui.Widget.py, line 56:\n    self.contextMenu = menu';
	$m.__track_lines__[57] = 'pyjamas.ui.Widget.py, line 57:\n    if menu is not None:';
	$m.__track_lines__[58] = 'pyjamas.ui.Widget.py, line 58:\n    self.sinkEvents(Event.ONCONTEXTMENU)';
	$m.__track_lines__[60] = 'pyjamas.ui.Widget.py, line 60:\n    self.unsinkEvents(Event.ONCONTEXTMENU)';
	$m.__track_lines__[62] = 'pyjamas.ui.Widget.py, line 62:\n    def onBrowserEvent(self, event):';
	$m.__track_lines__[67] = 'pyjamas.ui.Widget.py, line 67:\n    if hasattr(self, "_clickListeners"):';
	$m.__track_lines__[68] = 'pyjamas.ui.Widget.py, line 68:\n    ClickHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[69] = 'pyjamas.ui.Widget.py, line 69:\n    if hasattr(self, "_keyboardListeners"):';
	$m.__track_lines__[70] = 'pyjamas.ui.Widget.py, line 70:\n    KeyboardHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[71] = 'pyjamas.ui.Widget.py, line 71:\n    if hasattr(self, "_mouseListeners"):';
	$m.__track_lines__[72] = 'pyjamas.ui.Widget.py, line 72:\n    MouseHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[73] = 'pyjamas.ui.Widget.py, line 73:\n    if hasattr(self, "_mouseWheelListeners"):';
	$m.__track_lines__[74] = 'pyjamas.ui.Widget.py, line 74:\n    MouseWheelHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[75] = 'pyjamas.ui.Widget.py, line 75:\n    if hasattr(self, "_focusListeners"):';
	$m.__track_lines__[76] = 'pyjamas.ui.Widget.py, line 76:\n    FocusHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[77] = 'pyjamas.ui.Widget.py, line 77:\n    if hasattr(self, "_dragListeners"):';
	$m.__track_lines__[78] = 'pyjamas.ui.Widget.py, line 78:\n    DragHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[79] = 'pyjamas.ui.Widget.py, line 79:\n    if hasattr(self, "_dropListeners"):';
	$m.__track_lines__[80] = 'pyjamas.ui.Widget.py, line 80:\n    DropHandler.onBrowserEvent(self, event)';
	$m.__track_lines__[82] = 'pyjamas.ui.Widget.py, line 82:\n    if self.contextMenu is None:';
	$m.__track_lines__[83] = 'pyjamas.ui.Widget.py, line 83:\n    return True';
	$m.__track_lines__[85] = 'pyjamas.ui.Widget.py, line 85:\n    type = DOM.eventGetType(event)';
	$m.__track_lines__[86] = 'pyjamas.ui.Widget.py, line 86:\n    if type == "contextmenu":';
	$m.__track_lines__[87] = 'pyjamas.ui.Widget.py, line 87:\n    DOM.eventCancelBubble(event, True)';
	$m.__track_lines__[88] = 'pyjamas.ui.Widget.py, line 88:\n    DOM.eventPreventDefault(event)';
	$m.__track_lines__[89] = 'pyjamas.ui.Widget.py, line 89:\n    self.contextMenu.onContextMenu(self)';
	$m.__track_lines__[90] = 'pyjamas.ui.Widget.py, line 90:\n    return False';
	$m.__track_lines__[92] = 'pyjamas.ui.Widget.py, line 92:\n    return True';
	$m.__track_lines__[94] = 'pyjamas.ui.Widget.py, line 94:\n    def onLoad(self):';
	$m.__track_lines__[95] = 'pyjamas.ui.Widget.py, line 95:\n    pass';
	$m.__track_lines__[97] = 'pyjamas.ui.Widget.py, line 97:\n    def doDetachChildren(self):';
	$m.__track_lines__[98] = 'pyjamas.ui.Widget.py, line 98:\n    pass';
	$m.__track_lines__[100] = 'pyjamas.ui.Widget.py, line 100:\n    def doAttachChildren(self):';
	$m.__track_lines__[101] = 'pyjamas.ui.Widget.py, line 101:\n    pass';
	$m.__track_lines__[103] = 'pyjamas.ui.Widget.py, line 103:\n    def onAttach(self):';
	$m.__track_lines__[106] = 'pyjamas.ui.Widget.py, line 106:\n    if self.isAttached():';
	$m.__track_lines__[107] = 'pyjamas.ui.Widget.py, line 107:\n    return';
	$m.__track_lines__[108] = 'pyjamas.ui.Widget.py, line 108:\n    self.attached = True';
	$m.__track_lines__[109] = 'pyjamas.ui.Widget.py, line 109:\n    DOM.setEventListener(self.getElement(), self)';
	$m.__track_lines__[110] = 'pyjamas.ui.Widget.py, line 110:\n    self.doAttachChildren()';
	$m.__track_lines__[111] = 'pyjamas.ui.Widget.py, line 111:\n    self.onLoad()';
	$m.__track_lines__[113] = 'pyjamas.ui.Widget.py, line 113:\n    def onDetach(self):';
	$m.__track_lines__[115] = 'pyjamas.ui.Widget.py, line 115:\n    if not self.isAttached():';
	$m.__track_lines__[116] = 'pyjamas.ui.Widget.py, line 116:\n    return';
	$m.__track_lines__[117] = 'pyjamas.ui.Widget.py, line 117:\n    self.doDetachChildren()';
	$m.__track_lines__[118] = 'pyjamas.ui.Widget.py, line 118:\n    self.attached = False';
	$m.__track_lines__[119] = 'pyjamas.ui.Widget.py, line 119:\n    DOM.setEventListener(self.getElement(), None)';
	$m.__track_lines__[121] = 'pyjamas.ui.Widget.py, line 121:\n    def setLayoutData(self, layoutData):';
	$m.__track_lines__[122] = 'pyjamas.ui.Widget.py, line 122:\n    self.layoutData = layoutData';
	$m.__track_lines__[124] = 'pyjamas.ui.Widget.py, line 124:\n    def setParent(self, parent):';
	$m.__track_lines__[127] = 'pyjamas.ui.Widget.py, line 127:\n    oldparent = self.parent';
	$m.__track_lines__[128] = 'pyjamas.ui.Widget.py, line 128:\n    self.parent = parent';
	$m.__track_lines__[129] = 'pyjamas.ui.Widget.py, line 129:\n    if parent is None:';
	$m.__track_lines__[130] = 'pyjamas.ui.Widget.py, line 130:\n    if oldparent is not None and oldparent.attached:';
	$m.__track_lines__[131] = 'pyjamas.ui.Widget.py, line 131:\n    self.onDetach()';
	$m.__track_lines__[133] = 'pyjamas.ui.Widget.py, line 133:\n    self.onAttach()';
	$m.__track_lines__[135] = 'pyjamas.ui.Widget.py, line 135:\n    def removeFromParent(self):';
	$m.__track_lines__[138] = 'pyjamas.ui.Widget.py, line 138:\n    if hasattr(self.parent, "remove"):';
	$m.__track_lines__[139] = 'pyjamas.ui.Widget.py, line 139:\n    self.parent.remove(self)';
	$m.__track_lines__[141] = 'pyjamas.ui.Widget.py, line 141:\n    def getID(self):';
	$m.__track_lines__[143] = 'pyjamas.ui.Widget.py, line 143:\n    return DOM.getAttribute(self.getElement(), "id")';
	$m.__track_lines__[145] = 'pyjamas.ui.Widget.py, line 145:\n    def setID(self, id):';
	$m.__track_lines__[147] = 'pyjamas.ui.Widget.py, line 147:\n    DOM.setAttribute(self.getElement(), "id", id)';
	$m.__track_lines__[149] = "pyjamas.ui.Widget.py, line 149:\n    Factory.registerClass('pyjamas.ui.Widget', 'Widget', Widget)";


	$pyjs.track.module='pyjamas.ui.Widget';
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
	$m['log'] = $p['___import___']('pyjamas.log', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=19;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=20;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=22;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=23;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=24;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=25;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DragHandler'] = $p['___import___']('pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=26;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=28;
	$m['Widget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.Widget';
		$pyjs.track.lineno=34;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:34};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=34;
			$pyjs.track.lineno=35;
			self.attached = false;
			$pyjs.track.lineno=36;
			self.parent = null;
			$pyjs.track.lineno=37;
			self.layoutData = null;
			$pyjs.track.lineno=38;
			self.contextMenu = null;
			$pyjs.track.lineno=40;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['UIObject'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=42;
		$method = $pyjs__bind_method2('getLayoutData', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:42};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=43;
			$pyjs.track.lineno=43;
			var $pyjs__ret = $p['getattr'](self, 'layoutData');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLayoutData'] = $method;
		$pyjs.track.lineno=45;
		$method = $pyjs__bind_method2('getParent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:45};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=49;
			$pyjs.track.lineno=49;
			var $pyjs__ret = $p['getattr'](self, 'parent');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getParent'] = $method;
		$pyjs.track.lineno=51;
		$method = $pyjs__bind_method2('isAttached', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:51};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=51;
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=53;
			var $pyjs__ret = $p['getattr'](self, 'attached');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAttached'] = $method;
		$pyjs.track.lineno=55;
		$method = $pyjs__bind_method2('setContextMenu', function(menu) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				menu = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:55};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=56;
			self.contextMenu = menu;
			$pyjs.track.lineno=57;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((menu !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs.track.lineno=58;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			else {
				$pyjs.track.lineno=60;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['unsinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['menu']]);
		$cls_definition['setContextMenu'] = $method;
		$pyjs.track.lineno=62;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var type;
			$pyjs.track={module:'pyjamas.ui.Widget', lineno:62};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=62;
			$pyjs.track.lineno=67;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_clickListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=68;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['ClickHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs.track.lineno=69;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_keyboardListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs.track.lineno=70;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['KeyboardHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			}
			$pyjs.track.lineno=71;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_mouseListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['MouseHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			$pyjs.track.lineno=73;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_mouseWheelListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs.track.lineno=74;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['MouseWheelHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			}
			$pyjs.track.lineno=75;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_focusListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs.track.lineno=76;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['FocusHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
			$pyjs.track.lineno=77;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_dragListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
				$pyjs.track.lineno=78;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DragHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			}
			$pyjs.track.lineno=79;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, '_dropListeners');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs.track.lineno=80;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DropHandler']['onBrowserEvent'](self, event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			}
			$pyjs.track.lineno=82;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['getattr'](self, 'contextMenu') === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=83;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=85;
			type = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs.track.lineno=86;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](type, 'contextmenu'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs.track.lineno=87;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventCancelBubble'](event, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs.track.lineno=88;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['eventPreventDefault'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.track.lineno=89;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['contextMenu']['onContextMenu'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=90;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=92;
			$pyjs.track.lineno=92;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$pyjs.track.lineno=94;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:94};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=94;
			$pyjs.track.lineno=95;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$pyjs.track.lineno=97;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:97};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=97;
			$pyjs.track.lineno=98;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$pyjs.track.lineno=100;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:100};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=100;
			$pyjs.track.lineno=101;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$pyjs.track.lineno=103;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:103};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=103;
			$pyjs.track.lineno=106;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return self['isAttached']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
				$pyjs.track.lineno=107;
				$pyjs.track.lineno=107;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=108;
			self.attached = true;
			$pyjs.track.lineno=109;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['setEventListener']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs.track.lineno=110;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['doAttachChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs.track.lineno=111;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['onLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs.track.lineno=113;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:113};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=113;
			$pyjs.track.lineno=115;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return self['isAttached']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
				$pyjs.track.lineno=116;
				$pyjs.track.lineno=116;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=117;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['doDetachChildren']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs.track.lineno=118;
			self.attached = false;
			$pyjs.track.lineno=119;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['setEventListener']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs.track.lineno=121;
		$method = $pyjs__bind_method2('setLayoutData', function(layoutData) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layoutData = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:121};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=121;
			$pyjs.track.lineno=122;
			self.layoutData = layoutData;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['layoutData']]);
		$cls_definition['setLayoutData'] = $method;
		$pyjs.track.lineno=124;
		$method = $pyjs__bind_method2('setParent', function(parent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
			}
			var $and1,$and2,oldparent;
			$pyjs.track={module:'pyjamas.ui.Widget', lineno:124};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=124;
			$pyjs.track.lineno=127;
			oldparent = $p['getattr'](self, 'parent');
			$pyjs.track.lineno=128;
			self.parent = parent;
			$pyjs.track.lineno=129;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((parent === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
				$pyjs.track.lineno=130;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and1=(oldparent !== null))?$p['getattr'](oldparent, 'attached'):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs.track.lineno=131;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['onDetach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['getattr'](parent, 'attached'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs.track.lineno=133;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['onAttach']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['parent']]);
		$cls_definition['setParent'] = $method;
		$pyjs.track.lineno=135;
		$method = $pyjs__bind_method2('removeFromParent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:135};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=135;
			$pyjs.track.lineno=138;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr']($p['getattr'](self, 'parent'), 'remove');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
				$pyjs.track.lineno=139;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['parent']['remove'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeFromParent'] = $method;
		$pyjs.track.lineno=141;
		$method = $pyjs__bind_method2('getID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:141};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=141;
			$pyjs.track.lineno=143;
			$pyjs.track.lineno=143;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['getAttribute']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), 'id');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getID'] = $method;
		$pyjs.track.lineno=145;
		$method = $pyjs__bind_method2('setID', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			$pyjs.track={module:'pyjamas.ui.Widget', lineno:145};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Widget';
			$pyjs.track.lineno=145;
			$pyjs.track.lineno=147;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['setAttribute']((function(){try{try{$pyjs.in_try_except += 1;
			return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})(), 'id', id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['setID'] = $method;
		$pyjs.track.lineno=28;
		var $bases = new Array($m['UIObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Widget', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=149;
	(function(){try{try{$pyjs.in_try_except += 1;
	return $m['Factory']['registerClass']('pyjamas.ui.Widget', 'Widget', $m['Widget']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
	return this;
}; /* end pyjamas.ui.Widget */


/* end module: pyjamas.ui.Widget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.log', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui.DragHandler', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui.DropHandler']
*/
