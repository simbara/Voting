/* start module: pjBallot */
$pyjs.loaded_modules['pjBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pjBallot'].__was_initialized__) return $pyjs.loaded_modules['pjBallot'];
	var $m = $pyjs.loaded_modules["pjBallot"];
	$m.__repr__ = function() { return "<module: pjBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pjBallot';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['JSONService'] = $p['___import___']('pyjamas.JSONService', null, null, false);
	$m['Candidate'] = $p['___import___']('ballotTree.Candidate', null, null, false);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$m['Contest'] = $p['___import___']('ballotTree.Contest', null, null, false);
	$m['JSONResponseTextHandler'] = $p['___import___']('pyjamas.JSONService.JSONResponseTextHandler', null, null, false);
	$m['sampleBallot'] = $p['___import___']('sampleBallot', null);
	$m['tester'] = function() {

		return 'hello';
	};
	$m['tester'].__name__ = 'tester';

	$m['tester'].__bind_type__ = 0;
	$m['tester'].__args__ = [null,null];
	$m['PjBallot'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.mainPanel = $m['VerticalPanel']();
			self.button = $m['Button']('test', $p['getattr'](self, 'test'));
			self.status = $m['Label']('hi');
			self.x = 1;
			self.srace = $m['Race']('', '', $p['list']([]), '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('test', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['button']['setText']('No, really click me!');
			self['contest']['add']($m['HTML']('yay'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['test'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var gp,panel;
			$p['printFunc'](['inside onModuleLoad'], 1);
			self.remote_py = $m['JSONService']();
			self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'title'));
			self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'instructions'));
			self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'contest'));
			self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'candidate'));
			self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'selection'));
			self['mainPanel']['add']($p['getattr']($m['sampleBallot'], 'status'));
			panel = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{Widget:$p['getattr'](self, 'mainPanel')}]);
			gp = (typeof RootPanelListener == "undefined"?$m.RootPanelListener:RootPanelListener)(panel);
			$m['manageRootPanel'](gp);
			$m['RootPanel']()['add'](panel);
			panel['setFocus'](true);
			self['remote_py']['passBallot'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}

			$p['printFunc'](['inside onRemoteResponse'], 1);
			$p['printFunc']([response], 1);
			self.srace = response;
			$m['sampleBallot']['sendRace']($p['getattr'](self, 'srace'));
			$m['sampleBallot']['title']['add']($m['HTML']($p['sprintf']('Name: %s', $p['getattr']($p['getattr'](self, 'srace'), '$$name'))));
			$m['sampleBallot']['instructions']['add']($m['HTML']($p['sprintf']('Instruction: %s', $p['getattr']($p['getattr'](self, 'srace'), 'instructions'))));
			$m['sampleBallot']['fsm']['startVoting']();
			$m['sampleBallot'].currObj = $p['getattr']($m['sampleBallot'], 'race');
			$m['sampleBallot']['playAudio']();
			$m['sampleBallot']['setContest']();
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
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
			message = errobj.__getitem__('message');
			if ($p['bool'](!$p['op_eq'](code, 0))) {
				self['status']['setText']($p['sprintf']('HTTP error %d: %s', $p['tuple']([code, message])));
				$p['printFunc']([$p['sprintf']('HTTP error %d: %s', $p['tuple']([code, message]))], 1);
			}
			else {
				code = errobj.__getitem__('code');
				self['status']['setText']($p['sprintf']('JSONRPC Error %s: %s', $p['tuple']([code, message])));
				$p['printFunc']([$p['sprintf']('JSONRPC Error %s: %s: %s', $p['tuple']([code, message, (typeof data == "undefined"?$m.data:data)]))], 1);
			}
			return null;
		}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PjBallot', $p['tuple']($bases), $data);
	})();
	$m['JSONService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'http://209.129.244.15/test-service/', $p['list'](['passBallot', 'echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
	})();
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pjBallot';
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

			self.Parent = Parent;
			self.focussed = false;
			self['Parent']['setFocus'](false);
			$pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
			$m['KeyboardHandler']['__init__'](self);
			self['addKeyboardListener'](self);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
		$cls_definition['__init__'] = $method;
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

			$m['sampleBallot']['onKeyPress'](sender, keyCode, modifiers);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyDown'] = $method;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['app'] = $m['PjBallot']();
		$m['app']['onModuleLoad']();
	}
	return this;
}; /* end pjBallot */


/* end module: pjBallot */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.DOM', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'ballotTree.Candidate', 'ballotTree', 'ballotTree.Race', 'ballotTree.Contest', 'pyjamas.JSONService.JSONResponseTextHandler', 'sampleBallot']
*/
