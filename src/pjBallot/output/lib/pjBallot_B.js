/* start module: pjBallot_B */
$pyjs.loaded_modules['pjBallot_B'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pjBallot_B'].__was_initialized__) return $pyjs.loaded_modules['pjBallot_B'];
	var $m = $pyjs.loaded_modules["pjBallot_B"];
	$m.__repr__ = function() { return "<module: pjBallot_B>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pjBallot_B';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = "pjBallot_B.py, line 1:\n    '''";
	$m.__track_lines__[12] = 'pjBallot_B.py, line 12:\n    from pyjamas.ui.RootPanel import RootPanel, RootPanelCls, manageRootPanel';
	$m.__track_lines__[13] = 'pjBallot_B.py, line 13:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
	$m.__track_lines__[14] = 'pjBallot_B.py, line 14:\n    from pyjamas.ui.VerticalPanel import VerticalPanel';
	$m.__track_lines__[15] = 'pjBallot_B.py, line 15:\n    from pyjamas.ui.Button import Button';
	$m.__track_lines__[16] = 'pjBallot_B.py, line 16:\n    from pyjamas.ui.HTML import HTML';
	$m.__track_lines__[17] = 'pjBallot_B.py, line 17:\n    from pyjamas import Window';
	$m.__track_lines__[18] = 'pjBallot_B.py, line 18:\n    from pyjamas.ui import KeyboardListener';
	$m.__track_lines__[19] = 'pjBallot_B.py, line 19:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
	$m.__track_lines__[22] = 'pjBallot_B.py, line 22:\n    from pyjamas.ui.FocusPanel import FocusPanel';
	$m.__track_lines__[23] = 'pjBallot_B.py, line 23:\n    from pyjamas import DOM';
	$m.__track_lines__[26] = 'pjBallot_B.py, line 26:\n    from pyjamas.JSONService import JSONProxy';
	$m.__track_lines__[27] = 'pjBallot_B.py, line 27:\n    from pyjamas.ui.Label import Label';
	$m.__track_lines__[28] = 'pjBallot_B.py, line 28:\n    from pyjamas import JSONService';
	$m.__track_lines__[30] = 'pjBallot_B.py, line 30:\n    from ballotTree import Candidate, Race, Contest';
	$m.__track_lines__[32] = 'pjBallot_B.py, line 32:\n    from pyjamas.JSONService import JSONResponseTextHandler';
	$m.__track_lines__[34] = 'pjBallot_B.py, line 34:\n    import sampleBallot';
	$m.__track_lines__[37] = 'pjBallot_B.py, line 37:\n    def tester():';
	$m.__track_lines__[38] = "pjBallot_B.py, line 38:\n    return 'hello'";
	$m.__track_lines__[40] = 'pjBallot_B.py, line 40:\n    class PjBallot:';
	$m.__track_lines__[41] = 'pjBallot_B.py, line 41:\n    def __init__(self):';
	$m.__track_lines__[42] = 'pjBallot_B.py, line 42:\n    self.mainPanel = VerticalPanel()';
	$m.__track_lines__[43] = "pjBallot_B.py, line 43:\n    self.button = Button('test', self.test)";
	$m.__track_lines__[44] = "pjBallot_B.py, line 44:\n    self.status = Label('hi')";
	$m.__track_lines__[45] = 'pjBallot_B.py, line 45:\n    self.x = 1';
	$m.__track_lines__[46] = "pjBallot_B.py, line 46:\n    self.srace = Race('', '', [], '')";
	$m.__track_lines__[48] = 'pjBallot_B.py, line 48:\n    def test(self):';
	$m.__track_lines__[49] = 'pjBallot_B.py, line 49:\n    self.button.setText("No, really click me!")';
	$m.__track_lines__[50] = "pjBallot_B.py, line 50:\n    self.contest.add(HTML('yay'))";
	$m.__track_lines__[52] = 'pjBallot_B.py, line 52:\n    def onKeyDown(self, sender, keycode, modifiers):';
	$m.__track_lines__[55] = 'pjBallot_B.py, line 55:\n    pass';
	$m.__track_lines__[57] = 'pjBallot_B.py, line 57:\n    def onKeyUp(self, sender, keycode, modifiers):';
	$m.__track_lines__[58] = 'pjBallot_B.py, line 58:\n    pass';
	$m.__track_lines__[60] = 'pjBallot_B.py, line 60:\n    def onModuleLoad(self):';
	$m.__track_lines__[61] = 'pjBallot_B.py, line 61:\n    print "inside onModuleLoad"';
	$m.__track_lines__[62] = 'pjBallot_B.py, line 62:\n    self.remote_py = JSONService()';
	$m.__track_lines__[63] = 'pjBallot_B.py, line 63:\n    self.mainPanel.add(sampleBallot.title)';
	$m.__track_lines__[64] = 'pjBallot_B.py, line 64:\n    self.mainPanel.add(sampleBallot.instructions)';
	$m.__track_lines__[65] = 'pjBallot_B.py, line 65:\n    self.mainPanel.add(sampleBallot.contest)';
	$m.__track_lines__[66] = 'pjBallot_B.py, line 66:\n    self.mainPanel.add(sampleBallot.candidate)';
	$m.__track_lines__[67] = 'pjBallot_B.py, line 67:\n    self.mainPanel.add(sampleBallot.selection)';
	$m.__track_lines__[68] = 'pjBallot_B.py, line 68:\n    self.mainPanel.add(sampleBallot.status)';
	$m.__track_lines__[69] = 'pjBallot_B.py, line 69:\n    panel = FocusPanel(Widget=self.mainPanel)';
	$m.__track_lines__[70] = 'pjBallot_B.py, line 70:\n    gp = RootPanelListener(panel)';
	$m.__track_lines__[71] = 'pjBallot_B.py, line 71:\n    manageRootPanel(gp)';
	$m.__track_lines__[72] = 'pjBallot_B.py, line 72:\n    RootPanel().add(panel)';
	$m.__track_lines__[73] = 'pjBallot_B.py, line 73:\n    panel.setFocus(True)';
	$m.__track_lines__[74] = 'pjBallot_B.py, line 74:\n    self.remote_py.passBallot(self)';
	$m.__track_lines__[76] = 'pjBallot_B.py, line 76:\n    def onRemoteResponse(self, response, request_info):';
	$m.__track_lines__[77] = 'pjBallot_B.py, line 77:\n    print "inside onRemoteResponse"';
	$m.__track_lines__[78] = 'pjBallot_B.py, line 78:\n    print response';
	$m.__track_lines__[79] = 'pjBallot_B.py, line 79:\n    self.srace = response';
	$m.__track_lines__[80] = 'pjBallot_B.py, line 80:\n    sampleBallot.sendRace(self.srace)';
	$m.__track_lines__[82] = "pjBallot_B.py, line 82:\n    sampleBallot.title.add(HTML('Name: %s' % self.srace.name))";
	$m.__track_lines__[83] = "pjBallot_B.py, line 83:\n    sampleBallot.instructions.add(HTML('Instruction: %s' %  self.srace.instructions))";
	$m.__track_lines__[86] = 'pjBallot_B.py, line 86:\n    sampleBallot.fsm.startVoting()';
	$m.__track_lines__[87] = 'pjBallot_B.py, line 87:\n    sampleBallot.currObj = sampleBallot.race';
	$m.__track_lines__[89] = 'pjBallot_B.py, line 89:\n    sampleBallot.setContest()';
	$m.__track_lines__[91] = 'pjBallot_B.py, line 91:\n    def onRemoteError(self, code, errobj, request_info):';
	$m.__track_lines__[99] = "pjBallot_B.py, line 99:\n    message = errobj['message']";
	$m.__track_lines__[100] = 'pjBallot_B.py, line 100:\n    if code != 0:';
	$m.__track_lines__[101] = 'pjBallot_B.py, line 101:\n    self.status.setText("HTTP error %d: %s" % (code, message))';
	$m.__track_lines__[102] = 'pjBallot_B.py, line 102:\n    print "HTTP error %d: %s" % (code, message)';
	$m.__track_lines__[104] = "pjBallot_B.py, line 104:\n    code = errobj['code']";
	$m.__track_lines__[105] = 'pjBallot_B.py, line 105:\n    self.status.setText("JSONRPC Error %s: %s" % (code, message))';
	$m.__track_lines__[106] = 'pjBallot_B.py, line 106:\n    print "JSONRPC Error %s: %s: %s" % (code, message, data)';
	$m.__track_lines__[108] = 'pjBallot_B.py, line 108:\n    class JSONService(JSONProxy):';
	$m.__track_lines__[109] = 'pjBallot_B.py, line 109:\n    def __init__(self):';
	$m.__track_lines__[110] = 'pjBallot_B.py, line 110:\n    JSONProxy.__init__(self, "http://10.0.22.220/test-service/", ["passBallot", "echo", "reverse", "uppercase", "lowercase", "nonexistant"])';
	$m.__track_lines__[112] = 'pjBallot_B.py, line 112:\n    class RootPanelListener(RootPanelCls, KeyboardHandler):';
	$m.__track_lines__[113] = 'pjBallot_B.py, line 113:\n    def __init__(self, Parent, *args, **kwargs):';
	$m.__track_lines__[114] = 'pjBallot_B.py, line 114:\n    self.Parent = Parent';
	$m.__track_lines__[115] = 'pjBallot_B.py, line 115:\n    self.focussed = False';
	$m.__track_lines__[116] = 'pjBallot_B.py, line 116:\n    self.Parent.setFocus(False)';
	$m.__track_lines__[117] = 'pjBallot_B.py, line 117:\n    RootPanelCls.__init__(self, *args, **kwargs)';
	$m.__track_lines__[118] = 'pjBallot_B.py, line 118:\n    KeyboardHandler.__init__(self)';
	$m.__track_lines__[120] = 'pjBallot_B.py, line 120:\n    self.addKeyboardListener(self)';
	$m.__track_lines__[122] = 'pjBallot_B.py, line 122:\n    def onKeyDown(self, sender, keyCode, modifiers = None):';
	$m.__track_lines__[123] = 'pjBallot_B.py, line 123:\n    sampleBallot.onKeyPress(sender, keyCode, modifiers)';
	$m.__track_lines__[125] = "pjBallot_B.py, line 125:\n    if __name__ == '__main__':";
	$m.__track_lines__[126] = 'pjBallot_B.py, line 126:\n    app = PjBallot()';
	$m.__track_lines__[127] = 'pjBallot_B.py, line 127:\n    app.onModuleLoad()';


	$pyjs.track.module='pjBallot_B';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=12;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=13;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=14;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=15;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=17;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=18;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=19;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=22;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=23;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=26;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=27;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=28;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONService'] = $p['___import___']('pyjamas.JSONService', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=30;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Candidate'] = $p['___import___']('ballotTree.Candidate', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Contest'] = $p['___import___']('ballotTree.Contest', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=32;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONResponseTextHandler'] = $p['___import___']('pyjamas.JSONService.JSONResponseTextHandler', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=34;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['sampleBallot'] = $p['___import___']('sampleBallot', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=37;
	$m['tester'] = function() {

		$pyjs.track={module:'pjBallot_B',lineno:37};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pjBallot_B';
		$pyjs.track.lineno=37;
		$pyjs.track.lineno=38;
		$pyjs.track.lineno=38;
		var $pyjs__ret = 'hello';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['tester'].__name__ = 'tester';

	$m['tester'].__bind_type__ = 0;
	$m['tester'].__args__ = [null,null];
	$pyjs.track.lineno=40;
	$m['PjBallot'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot_B';
		$pyjs.track.lineno=41;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot_B', lineno:41};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=41;
			$pyjs.track.lineno=42;
			self.mainPanel = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['VerticalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=43;
			self.button = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Button']('test', $p['getattr'](self, 'test'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=44;
			self.status = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Label']('hi');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=45;
			self.x = 1;
			$pyjs.track.lineno=46;
			self.srace = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Race']('', '', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=48;
		$method = $pyjs__bind_method2('test', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot_B', lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=49;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['button']['setText']('No, really click me!');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs.track.lineno=50;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('yay');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test'] = $method;
		$pyjs.track.lineno=52;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot_B', lineno:52};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=52;
			$pyjs.track.lineno=55;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs.track.lineno=57;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot_B', lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=58;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$pyjs.track.lineno=60;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var gp,panel;
			$pyjs.track={module:'pjBallot_B', lineno:60};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=60;
			$pyjs.track.lineno=61;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc'](['inside onModuleLoad'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.track.lineno=62;
			self.remote_py = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['JSONService']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.track.lineno=63;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'title'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.track.lineno=64;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'instructions'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs.track.lineno=65;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'contest'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs.track.lineno=66;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'candidate'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs.track.lineno=67;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'selection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.track.lineno=68;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'status'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs.track.lineno=69;
			panel = (function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{Widget:$p['getattr'](self, 'mainPanel')}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs.track.lineno=70;
			gp = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof RootPanelListener == "undefined"?$m.RootPanelListener:RootPanelListener)(panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs.track.lineno=71;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['manageRootPanel'](gp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.track.lineno=72;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m['RootPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['add'](panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=73;
			(function(){try{try{$pyjs.in_try_except += 1;
			return panel['setFocus'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs.track.lineno=74;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['remote_py']['passBallot'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$pyjs.track.lineno=76;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}

			$pyjs.track={module:'pjBallot_B', lineno:76};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=77;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc'](['inside onRemoteResponse'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=78;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc']([response], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs.track.lineno=79;
			self.srace = response;
			$pyjs.track.lineno=80;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['sendRace']($p['getattr'](self, 'srace'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs.track.lineno=82;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['title']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('Name: %s', $p['getattr']($p['getattr'](self, 'srace'), '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs.track.lineno=83;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['instructions']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('Instruction: %s', $p['getattr']($p['getattr'](self, 'srace'), 'instructions'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs.track.lineno=86;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['fsm']['startVoting']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=87;
			$m['sampleBallot'].currObj = $p['getattr']($m['sampleBallot'], 'race');
			$pyjs.track.lineno=89;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['setContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$pyjs.track.lineno=91;
		$method = $pyjs__bind_method2('onRemoteError', function(code, errobj, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				errobj = arguments[2];
				request_info = arguments[3];
			}
			var message;
			$pyjs.track={module:'pjBallot_B', lineno:91};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=91;
			$pyjs.track.lineno=99;
			message = errobj.__getitem__('message');
			$pyjs.track.lineno=100;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq'](code, 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs.track.lineno=101;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['status']['setText']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('HTTP error %d: %s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([code, message]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs.track.lineno=102;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('HTTP error %d: %s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([code, message]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			}
			else {
				$pyjs.track.lineno=104;
				code = errobj.__getitem__('code');
				$pyjs.track.lineno=105;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['status']['setText']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('JSONRPC Error %s: %s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([code, message]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$pyjs.track.lineno=106;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc']([(function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('JSONRPC Error %s: %s: %s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([code, message, (typeof data == "undefined"?$m.data:data)]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$pyjs.track.lineno=40;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PjBallot', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=108;
	$m['JSONService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot_B';
		$pyjs.track.lineno=109;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot_B', lineno:109};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=109;
			$pyjs.track.lineno=110;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['JSONProxy']['__init__'](self, 'http://10.0.22.220/test-service/', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](['passBallot', 'echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=108;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=112;
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot_B';
		$pyjs.track.lineno=113;
		$method = $pyjs__bind_method2('__init__', function(Parent) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				Parent = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Parent != 'undefined') {
					if (Parent !== null && typeof Parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Parent;
						Parent = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs.track={module:'pjBallot_B', lineno:113};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=113;
			$pyjs.track.lineno=114;
			self.Parent = Parent;
			$pyjs.track.lineno=115;
			self.focussed = false;
			$pyjs.track.lineno=116;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['Parent']['setFocus'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs.track.lineno=117;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs.track.lineno=118;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['KeyboardHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs.track.lineno=120;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['addKeyboardListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=122;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			if (typeof modifiers == 'undefined') modifiers=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pjBallot_B', lineno:122};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot_B';
			$pyjs.track.lineno=122;
			$pyjs.track.lineno=123;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['onKeyPress'](sender, keyCode, modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs.track.lineno=112;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=125;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
		$pyjs.track.lineno=126;
		$m['app'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['PjBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
		$pyjs.track.lineno=127;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['app']['onModuleLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
	}
	return this;
}; /* end pjBallot_B */


/* end module: pjBallot_B */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.DOM', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'ballotTree.Candidate', 'ballotTree', 'ballotTree.Race', 'ballotTree.Contest', 'pyjamas.JSONService.JSONResponseTextHandler', 'sampleBallot']
*/
