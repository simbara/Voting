/* start module: pjBallot */
$pyjs.loaded_modules['pjBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pjBallot'].__was_initialized__) return $pyjs.loaded_modules['pjBallot'];
	var $m = $pyjs.loaded_modules["pjBallot"];
	$m.__repr__ = function() { return "<module: pjBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pjBallot';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'pjBallot.py, line 1:\n    import pyjd # this is dummy in pyjs.';
	$m.__track_lines__[2] = 'pjBallot.py, line 2:\n    from pyjamas.ui.RootPanel import RootPanel, RootPanelCls, manageRootPanel';
	$m.__track_lines__[3] = 'pjBallot.py, line 3:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
	$m.__track_lines__[4] = 'pjBallot.py, line 4:\n    from pyjamas.ui.VerticalPanel import VerticalPanel';
	$m.__track_lines__[5] = 'pjBallot.py, line 5:\n    from pyjamas.ui.Button import Button';
	$m.__track_lines__[6] = 'pjBallot.py, line 6:\n    from pyjamas.ui.HTML import HTML';
	$m.__track_lines__[7] = 'pjBallot.py, line 7:\n    from pyjamas import Window';
	$m.__track_lines__[8] = 'pjBallot.py, line 8:\n    from pyjamas.ui import KeyboardListener';
	$m.__track_lines__[9] = 'pjBallot.py, line 9:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
	$m.__track_lines__[12] = 'pjBallot.py, line 12:\n    from pyjamas.ui.FocusPanel import FocusPanel';
	$m.__track_lines__[13] = 'pjBallot.py, line 13:\n    from pyjamas import DOM';
	$m.__track_lines__[15] = 'pjBallot.py, line 15:\n    import pygwt';
	$m.__track_lines__[16] = 'pjBallot.py, line 16:\n    from pyjamas.JSONService import JSONProxy';
	$m.__track_lines__[17] = 'pjBallot.py, line 17:\n    from pyjamas.ui.Label import Label';
	$m.__track_lines__[18] = 'pjBallot.py, line 18:\n    from pyjamas import JSONService';
	$m.__track_lines__[20] = 'pjBallot.py, line 20:\n    from ballotTree import Candidate, Race, Contest';
	$m.__track_lines__[21] = 'pjBallot.py, line 21:\n    from json import loads';
	$m.__track_lines__[22] = 'pjBallot.py, line 22:\n    from pyjamas.JSONService import JSONResponseTextHandler';
	$m.__track_lines__[24] = 'pjBallot.py, line 24:\n    import sampleBallot';
	$m.__track_lines__[28] = 'pjBallot.py, line 28:\n    def tester():';
	$m.__track_lines__[29] = "pjBallot.py, line 29:\n    return 'hello'";
	$m.__track_lines__[31] = 'pjBallot.py, line 31:\n    class PjBallot:';
	$m.__track_lines__[32] = 'pjBallot.py, line 32:\n    def __init__(self):';
	$m.__track_lines__[33] = 'pjBallot.py, line 33:\n    self.mainPanel = VerticalPanel()';
	$m.__track_lines__[34] = 'pjBallot.py, line 34:\n    self.contest = HorizontalPanel()';
	$m.__track_lines__[35] = "pjBallot.py, line 35:\n    self.contest.setStyleName('words')";
	$m.__track_lines__[36] = 'pjBallot.py, line 36:\n    self.selection = HorizontalPanel()';
	$m.__track_lines__[37] = "pjBallot.py, line 37:\n    self.selection.setStyleName('words')";
	$m.__track_lines__[38] = "pjBallot.py, line 38:\n    self.button = Button('test', self.test)";
	$m.__track_lines__[39] = "pjBallot.py, line 39:\n    self.status = Label('hi')";
	$m.__track_lines__[40] = 'pjBallot.py, line 40:\n    self.x = 1';
	$m.__track_lines__[41] = 'pjBallot.py, line 41:\n    self.srace = Race("",[],[])';
	$m.__track_lines__[43] = 'pjBallot.py, line 43:\n    def test(self):';
	$m.__track_lines__[44] = 'pjBallot.py, line 44:\n    self.button.setText("No, really click me!")';
	$m.__track_lines__[46] = "pjBallot.py, line 46:\n    self.contest.add(HTML('yay'))";
	$m.__track_lines__[48] = 'pjBallot.py, line 48:\n    def nextContest(self):';
	$m.__track_lines__[49] = 'pjBallot.py, line 49:\n    self.x += 1';
	$m.__track_lines__[50] = 'pjBallot.py, line 50:\n    self.contest.clear()';
	$m.__track_lines__[51] = "pjBallot.py, line 51:\n    self.contest.add(HTML('<b /> Contest: %d' % self.x))";
	$m.__track_lines__[53] = 'pjBallot.py, line 53:\n    def nextSelection(self):';
	$m.__track_lines__[54] = 'pjBallot.py, line 54:\n    self.x += 1';
	$m.__track_lines__[55] = 'pjBallot.py, line 55:\n    self.selection.clear()';
	$m.__track_lines__[56] = "pjBallot.py, line 56:\n    self.selection.add(HTML('<b /> Selection: %d' % self.x))";
	$m.__track_lines__[58] = 'pjBallot.py, line 58:\n    def onKeyDown(self, sender, keycode, modifiers):';
	$m.__track_lines__[59] = 'pjBallot.py, line 59:\n    pass';
	$m.__track_lines__[61] = 'pjBallot.py, line 61:\n    def onKeyUp(self, sender, keycode, modifiers):';
	$m.__track_lines__[62] = 'pjBallot.py, line 62:\n    pass';
	$m.__track_lines__[64] = 'pjBallot.py, line 64:\n    def onKeyPress(self, sender, keycode, modifiers):';
	$m.__track_lines__[65] = 'pjBallot.py, line 65:\n    DOM.eventPreventDefault(DOM.eventGetCurrentEvent()) #not needed';
	$m.__track_lines__[66] = 'pjBallot.py, line 66:\n    if keycode == KeyboardListener.KEY_UP:';
	$m.__track_lines__[67] = 'pjBallot.py, line 67:\n    self.nextContest()';
	$m.__track_lines__[68] = 'pjBallot.py, line 68:\n    if keycode == KeyboardListener.KEY_DOWN:';
	$m.__track_lines__[69] = 'pjBallot.py, line 69:\n    self.nextContest()';
	$m.__track_lines__[70] = 'pjBallot.py, line 70:\n    if keycode == KeyboardListener.KEY_LEFT:';
	$m.__track_lines__[71] = 'pjBallot.py, line 71:\n    self.nextSelection()';
	$m.__track_lines__[72] = 'pjBallot.py, line 72:\n    if keycode == KeyboardListener.KEY_RIGHT:';
	$m.__track_lines__[73] = 'pjBallot.py, line 73:\n    self.nextSelection()';
	$m.__track_lines__[75] = 'pjBallot.py, line 75:\n    def onModuleLoad(self):';
	$m.__track_lines__[76] = 'pjBallot.py, line 76:\n    self.remote_py = JSONService()';
	$m.__track_lines__[77] = 'pjBallot.py, line 77:\n    h = HTML("<b />Contest: ")';
	$m.__track_lines__[78] = 'pjBallot.py, line 78:\n    self.contest.add(h)';
	$m.__track_lines__[79] = 'pjBallot.py, line 79:\n    l = HTML("<b />Selection: ")';
	$m.__track_lines__[80] = 'pjBallot.py, line 80:\n    self.selection.add(l)';
	$m.__track_lines__[82] = 'pjBallot.py, line 82:\n    self.mainPanel.add(self.contest)';
	$m.__track_lines__[83] = 'pjBallot.py, line 83:\n    self.mainPanel.add(self.selection)';
	$m.__track_lines__[84] = 'pjBallot.py, line 84:\n    self.mainPanel.add(self.status)';
	$m.__track_lines__[85] = 'pjBallot.py, line 85:\n    panel = FocusPanel(Widget=self.mainPanel)';
	$m.__track_lines__[86] = 'pjBallot.py, line 86:\n    gp = RootPanelListener(panel)';
	$m.__track_lines__[87] = 'pjBallot.py, line 87:\n    manageRootPanel(gp)';
	$m.__track_lines__[88] = 'pjBallot.py, line 88:\n    RootPanel().add(panel)';
	$m.__track_lines__[89] = 'pjBallot.py, line 89:\n    panel.setFocus(True)';
	$m.__track_lines__[91] = 'pjBallot.py, line 91:\n    self.remote_py.passBallot(self)';
	$m.__track_lines__[93] = 'pjBallot.py, line 93:\n    def onRemoteResponse(self, response, request_info):';
	$m.__track_lines__[94] = 'pjBallot.py, line 94:\n    self.srace = response';
	$m.__track_lines__[95] = 'pjBallot.py, line 95:\n    sampleBallot.sendRace(self.srace)';
	$m.__track_lines__[96] = 'pjBallot.py, line 96:\n    name = self.srace.works';
	$m.__track_lines__[97] = "pjBallot.py, line 97:\n    self.mainPanel.add(HTML('pleasework %s' % name))";
	$m.__track_lines__[98] = 'pjBallot.py, line 98:\n    inst = sampleBallot.getInstruction()';
	$m.__track_lines__[99] = "pjBallot.py, line 99:\n    self.mainPanel.add(HTML('pleasework %s' % inst))";
	$m.__track_lines__[100] = 'pjBallot.py, line 100:\n    sampleBallot.fsm.startVoting()';
	$m.__track_lines__[103] = 'pjBallot.py, line 103:\n    def onRemoteError(self):';
	$m.__track_lines__[104] = 'pjBallot.py, line 104:\n    pass';
	$m.__track_lines__[106] = 'pjBallot.py, line 106:\n    class JSONService(JSONProxy):';
	$m.__track_lines__[107] = 'pjBallot.py, line 107:\n    def __init__(self):';
	$m.__track_lines__[108] = 'pjBallot.py, line 108:\n    JSONProxy.__init__(self, "http://127.0.0.1:8000/test-service/", ["passBallot", "echo", "reverse", "uppercase", "lowercase", "nonexistant"])';
	$m.__track_lines__[110] = 'pjBallot.py, line 110:\n    class RootPanelListener(RootPanelCls, KeyboardHandler):';
	$m.__track_lines__[111] = 'pjBallot.py, line 111:\n    def __init__(self, Parent, *args, **kwargs):';
	$m.__track_lines__[112] = 'pjBallot.py, line 112:\n    self.Parent = Parent';
	$m.__track_lines__[113] = 'pjBallot.py, line 113:\n    self.focussed = False';
	$m.__track_lines__[114] = 'pjBallot.py, line 114:\n    self.Parent.setFocus(False)';
	$m.__track_lines__[115] = 'pjBallot.py, line 115:\n    RootPanelCls.__init__(self, *args, **kwargs)';
	$m.__track_lines__[116] = 'pjBallot.py, line 116:\n    KeyboardHandler.__init__(self)';
	$m.__track_lines__[118] = 'pjBallot.py, line 118:\n    self.addKeyboardListener(self)';
	$m.__track_lines__[120] = 'pjBallot.py, line 120:\n    def onKeyDown(self, sender, keyCode, modifiers = None):';
	$m.__track_lines__[121] = 'pjBallot.py, line 121:\n    app.onKeyPress(sender, keyCode, modifiers)';
	$m.__track_lines__[123] = "pjBallot.py, line 123:\n    if __name__ == '__main__':";
	$m.__track_lines__[125] = 'pjBallot.py, line 125:\n    app = PjBallot()';
	$m.__track_lines__[126] = 'pjBallot.py, line 126:\n    app.onModuleLoad()';


	$pyjs.track.module='pjBallot';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=2;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=3;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=5;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=6;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=7;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=8;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=9;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=12;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=13;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=15;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=16;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=17;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=18;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONService'] = $p['___import___']('pyjamas.JSONService', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=20;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Candidate'] = $p['___import___']('ballotTree.Candidate', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Contest'] = $p['___import___']('ballotTree.Contest', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['loads'] = $p['___import___']('json.loads', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=22;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['JSONResponseTextHandler'] = $p['___import___']('pyjamas.JSONService.JSONResponseTextHandler', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=24;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['sampleBallot'] = $p['___import___']('sampleBallot', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=28;
	$m['tester'] = function() {

		$pyjs.track={module:'pjBallot',lineno:28};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pjBallot';
		$pyjs.track.lineno=28;
		$pyjs.track.lineno=29;
		$pyjs.track.lineno=29;
		var $pyjs__ret = 'hello';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['tester'].__name__ = 'tester';

	$m['tester'].__bind_type__ = 0;
	$m['tester'].__args__ = [null,null];
	$pyjs.track.lineno=31;
	$m['PjBallot'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$pyjs.track.lineno=32;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:32};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=33;
			self.mainPanel = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['VerticalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs.track.lineno=34;
			self.contest = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.track.lineno=35;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.track.lineno=36;
			self.selection = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=37;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['setStyleName']('words');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=38;
			self.button = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Button']('test', $p['getattr'](self, 'test'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs.track.lineno=39;
			self.status = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Label']('hi');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.track.lineno=40;
			self.x = 1;
			$pyjs.track.lineno=41;
			self.srace = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=43;
		$method = $pyjs__bind_method2('test', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:43};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=43;
			$pyjs.track.lineno=44;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['button']['setText']('No, really click me!');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.track.lineno=46;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('yay');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test'] = $method;
		$pyjs.track.lineno=48;
		$method = $pyjs__bind_method2('nextContest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			$pyjs.track={module:'pjBallot', lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=49;
			self.x = $p['__op_add']($add1=$p['getattr'](self, 'x'),$add2=1);
			$pyjs.track.lineno=50;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs.track.lineno=51;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Contest: %d', $p['getattr'](self, 'x'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['nextContest'] = $method;
		$pyjs.track.lineno=53;
		$method = $pyjs__bind_method2('nextSelection', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,$add4;
			$pyjs.track={module:'pjBallot', lineno:53};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=54;
			self.x = $p['__op_add']($add3=$p['getattr'](self, 'x'),$add4=1);
			$pyjs.track.lineno=55;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['clear']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs.track.lineno=56;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('<b /> Selection: %d', $p['getattr'](self, 'x'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['nextSelection'] = $method;
		$pyjs.track.lineno=58;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot', lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=59;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs.track.lineno=61;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot', lineno:61};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=61;
			$pyjs.track.lineno=62;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$pyjs.track.lineno=64;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

			$pyjs.track={module:'pjBallot', lineno:64};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=65;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventPreventDefault']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['eventGetCurrentEvent']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=66;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_UP')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs.track.lineno=67;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			}
			$pyjs.track.lineno=68;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_DOWN')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs.track.lineno=69;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextContest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_LEFT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs.track.lineno=72;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](keycode, $p['getattr']($m['KeyboardListener'], 'KEY_RIGHT')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
				$pyjs.track.lineno=73;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['nextSelection']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$pyjs.track.lineno=75;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var h,gp,l,panel;
			$pyjs.track={module:'pjBallot', lineno:75};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=75;
			$pyjs.track.lineno=76;
			self.remote_py = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['JSONService']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs.track.lineno=77;
			h = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b />Contest: ');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=78;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['contest']['add'](h);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=79;
			l = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']('<b />Selection: ');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs.track.lineno=80;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['selection']['add'](l);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs.track.lineno=82;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr'](self, 'contest'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs.track.lineno=83;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr'](self, 'selection'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs.track.lineno=84;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']($p['getattr'](self, 'status'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs.track.lineno=85;
			panel = (function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{Widget:$p['getattr'](self, 'mainPanel')}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs.track.lineno=86;
			gp = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof RootPanelListener == "undefined"?$m.RootPanelListener:RootPanelListener)(panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs.track.lineno=87;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['manageRootPanel'](gp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs.track.lineno=88;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m['RootPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()['add'](panel);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs.track.lineno=89;
			(function(){try{try{$pyjs.in_try_except += 1;
			return panel['setFocus'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs.track.lineno=91;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['remote_py']['passBallot'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$pyjs.track.lineno=93;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var inst,name;
			$pyjs.track={module:'pjBallot', lineno:93};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=93;
			$pyjs.track.lineno=94;
			self.srace = response;
			$pyjs.track.lineno=95;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['sendRace']($p['getattr'](self, 'srace'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs.track.lineno=96;
			name = $p['getattr']($p['getattr'](self, 'srace'), 'works');
			$pyjs.track.lineno=97;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('pleasework %s', name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs.track.lineno=98;
			inst = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['getInstruction']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs.track.lineno=99;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['mainPanel']['add']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTML']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('pleasework %s', inst);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs.track.lineno=100;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['sampleBallot']['fsm']['startVoting']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$pyjs.track.lineno=103;
		$method = $pyjs__bind_method2('onRemoteError', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:103};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=103;
			$pyjs.track.lineno=104;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onRemoteError'] = $method;
		$pyjs.track.lineno=31;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PjBallot', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=106;
	$m['JSONService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$pyjs.track.lineno=107;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pjBallot', lineno:107};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=107;
			$pyjs.track.lineno=108;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['JSONProxy']['__init__'](self, 'http://127.0.0.1:8000/test-service/', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](['passBallot', 'echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=106;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=110;
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$pyjs.track.lineno=111;
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

			$pyjs.track={module:'pjBallot', lineno:111};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=111;
			$pyjs.track.lineno=112;
			self.Parent = Parent;
			$pyjs.track.lineno=113;
			self.focussed = false;
			$pyjs.track.lineno=114;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['Parent']['setFocus'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs.track.lineno=115;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs.track.lineno=116;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['KeyboardHandler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs.track.lineno=118;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['addKeyboardListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=120;
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

			$pyjs.track={module:'pjBallot', lineno:120};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pjBallot';
			$pyjs.track.lineno=120;
			$pyjs.track.lineno=121;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.app['onKeyPress'](sender, keyCode, modifiers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs.track.lineno=110;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=123;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
		$pyjs.track.lineno=125;
		$m['app'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['PjBallot']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
		$pyjs.track.lineno=126;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['app']['onModuleLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
	}
	return this;
}; /* end pjBallot */


/* end module: pjBallot */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.DOM', 'pygwt', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'ballotTree.Candidate', 'ballotTree', 'ballotTree.Race', 'ballotTree.Contest', 'json.loads', 'json', 'pyjamas.JSONService.JSONResponseTextHandler', 'sampleBallot']
*/
