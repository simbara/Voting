/* start module: fysom */
$pyjs.loaded_modules['fysom'] = function (__mod_name__) {
	if($pyjs.loaded_modules['fysom'].__was_initialized__) return $pyjs.loaded_modules['fysom'];
	var $m = $pyjs.loaded_modules["fysom"];
	$m.__repr__ = function() { return "<module: fysom>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'fysom';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = "fysom.py, line 1:\n    from __pyjamas__ import INT, JS, setCompilerOptions, debugger";
	$m.__track_lines__[32] = "fysom.py, line 32:\n    \'\'\'";
	$m.__track_lines__[277] = "fysom.py, line 277:\n    \"\"\"";
	$m.__track_lines__[279] = "fysom.py, line 279:\n    __author__ = \'Mansour\'";
	$m.__track_lines__[280] = "fysom.py, line 280:\n    __copyright__ = \'Copyright 2011, Mansour and Jake Gordon\'";
	$m.__track_lines__[281] = "fysom.py, line 281:\n    __credits__ = [\'Mansour\', \'Jake Gordon\']";
	$m.__track_lines__[282] = "fysom.py, line 282:\n    __license__ = \'MIT\'";
	$m.__track_lines__[283] = "fysom.py, line 283:\n    __version__ = \'1.0\'";
	$m.__track_lines__[284] = "fysom.py, line 284:\n    __maintainer__ = \'Mansour\'";
	$m.__track_lines__[285] = "fysom.py, line 285:\n    __email__ = \'mansour@oxplot.com\'";
	$m.__track_lines__[289] = "fysom.py, line 289:\n    class FysomError(Exception):";
	$m.__track_lines__[290] = "fysom.py, line 290:\n    pass";
	$m.__track_lines__[292] = "fysom.py, line 292:\n    class Fysom(object):";
	$m.__track_lines__[294] = "fysom.py, line 294:\n    def __init__(self, cfg):";
	$m.__track_lines__[295] = "fysom.py, line 295:\n    self._apply(cfg)";
	$m.__track_lines__[297] = "fysom.py, line 297:\n    def isstate(self, state):";
	$m.__track_lines__[298] = "fysom.py, line 298:\n    return self.current == state";
	$m.__track_lines__[300] = "fysom.py, line 300:\n    def can(self, event):";
	$m.__track_lines__[301] = "fysom.py, line 301:\n    return event in self._map and self.current in self._map[event] \\";
	$m.__track_lines__[304] = "fysom.py, line 304:\n    def cannot(self, event):";
	$m.__track_lines__[305] = "fysom.py, line 305:\n    return not self.can(event)";
	$m.__track_lines__[307] = "fysom.py, line 307:\n    def _apply(self, cfg):";
	$m.__track_lines__[308] = "fysom.py, line 308:\n    init = cfg[\'initial\'] if \'initial\' in cfg else None";
	$m.__track_lines__[309] = "fysom.py, line 309:\n    if isinstance(init, basestring):";
	$m.__track_lines__[310] = "fysom.py, line 310:\n    init = {\'state\': init}";
	$m.__track_lines__[311] = "fysom.py, line 311:\n    events = cfg[\'events\'] if \'events\' in cfg else []";
	$m.__track_lines__[312] = "fysom.py, line 312:\n    callbacks = cfg[\'callbacks\'] if \'callbacks\' in cfg else {}";
	$m.__track_lines__[313] = "fysom.py, line 313:\n    tmap = {}";
	$m.__track_lines__[314] = "fysom.py, line 314:\n    self._map = tmap";
	$m.__track_lines__[316] = "fysom.py, line 316:\n    def add(e):";
	$m.__track_lines__[317] = "fysom.py, line 317:\n    src = [e[\'src\']] if isinstance(e[\'src\'], basestring) else e[\'src\']";
	$m.__track_lines__[318] = "fysom.py, line 318:\n    if e[\'name\'] not in tmap:";
	$m.__track_lines__[319] = "fysom.py, line 319:\n    tmap[e[\'name\']] = {}";
	$m.__track_lines__[320] = "fysom.py, line 320:\n    for s in src:";
	$m.__track_lines__[321] = "fysom.py, line 321:\n    tmap[e[\'name\']][s] = e[\'dst\']";
	$m.__track_lines__[323] = "fysom.py, line 323:\n    if init:";
	$m.__track_lines__[324] = "fysom.py, line 324:\n    if \'event\' not in init:";
	$m.__track_lines__[325] = "fysom.py, line 325:\n    init[\'event\'] = \'startup\'";
	$m.__track_lines__[326] = "fysom.py, line 326:\n    add({\'name\': init[\'event\'], \'src\': \'none\', \'dst\': init[\'state\']})";
	$m.__track_lines__[328] = "fysom.py, line 328:\n    for e in events:";
	$m.__track_lines__[329] = "fysom.py, line 329:\n    add(e)";
	$m.__track_lines__[331] = "fysom.py, line 331:\n    for name in tmap:";
	$m.__track_lines__[332] = "fysom.py, line 332:\n    setattr(self, name, self._build_event(name))";
	$m.__track_lines__[334] = "fysom.py, line 334:\n    for name in callbacks:";
	$m.__track_lines__[335] = "fysom.py, line 335:\n    setattr(self, name, callbacks[name])";
	$m.__track_lines__[337] = "fysom.py, line 337:\n    self.current = \'none\'";
	$m.__track_lines__[339] = "fysom.py, line 339:\n    if init and \'defer\' not in init:";
	$m.__track_lines__[340] = "fysom.py, line 340:\n    getattr(self, init[\'event\'])()";
	$m.__track_lines__[342] = "fysom.py, line 342:\n    def _build_event(self, event):";
	$m.__track_lines__[344] = "fysom.py, line 344:\n    def fn(**kwargs):";
	$m.__track_lines__[346] = "fysom.py, line 346:\n    if hasattr(self, \'transition\'):";
	$m.__track_lines__[347] = "fysom.py, line 347:\n    raise FysomError(\"event %s inappropriate because previous\"";
	$m.__track_lines__[349] = "fysom.py, line 349:\n    if not self.can(event):";
	$m.__track_lines__[350] = "fysom.py, line 350:\n    raise FysomError(\"event %s inappropriate in current state\"";
	$m.__track_lines__[353] = "fysom.py, line 353:\n    src = self.current";
	$m.__track_lines__[354] = "fysom.py, line 354:\n    dst = self._map[event][src]";
	$m.__track_lines__[356] = "fysom.py, line 356:\n    class _e_obj(object):";
	$m.__track_lines__[357] = "fysom.py, line 357:\n    pass";
	$m.__track_lines__[358] = "fysom.py, line 358:\n    e = _e_obj()";
	$m.__track_lines__[359] = "fysom.py, line 359:\n    e.fsm, e.event, e.src, e.dst = self, event, src, dst";
	$m.__track_lines__[360] = "fysom.py, line 360:\n    for k in kwargs:";
	$m.__track_lines__[361] = "fysom.py, line 361:\n    setattr(e, k, kwargs[k])";
	$m.__track_lines__[363] = "fysom.py, line 363:\n    if self.current != dst:";
	$m.__track_lines__[364] = "fysom.py, line 364:\n    if self._before_event(e) == False:";
	$m.__track_lines__[365] = "fysom.py, line 365:\n    return";
	$m.__track_lines__[366] = "fysom.py, line 366:\n    def _tran():";
	$m.__track_lines__[369] = "fysom.py, line 369:\n    str = \"i am not here\"";
	$m.__track_lines__[373] = "fysom.py, line 371:\n    JS(\'\'\' ... \'\'\')";
	$m.__track_lines__[375] = "fysom.py, line 375:\n    self.current = dst";
	$m.__track_lines__[376] = "fysom.py, line 376:\n    self._enter_state(e)";
	$m.__track_lines__[377] = "fysom.py, line 377:\n    self._change_state(e)";
	$m.__track_lines__[378] = "fysom.py, line 378:\n    self._after_event(e)";
	$m.__track_lines__[379] = "fysom.py, line 379:\n    self.transition = _tran";
	$m.__track_lines__[381] = "fysom.py, line 381:\n    if self._leave_state(e) != False:";
	$m.__track_lines__[382] = "fysom.py, line 382:\n    if hasattr(self, \'transition\'):";
	$m.__track_lines__[383] = "fysom.py, line 383:\n    self.transition()";
	$m.__track_lines__[385] = "fysom.py, line 385:\n    return fn";
	$m.__track_lines__[387] = "fysom.py, line 387:\n    def _before_event(self, e):";
	$m.__track_lines__[388] = "fysom.py, line 388:\n    fnname = \'onbefore\' + e.event";
	$m.__track_lines__[389] = "fysom.py, line 389:\n    if hasattr(self, fnname):";
	$m.__track_lines__[390] = "fysom.py, line 390:\n    return getattr(self, fnname)(e)";
	$m.__track_lines__[392] = "fysom.py, line 392:\n    def _after_event(self, e):";
	$m.__track_lines__[393] = "fysom.py, line 393:\n    for fnname in [\'onafter\' + e.event, \'on\' + e.event]:";
	$m.__track_lines__[394] = "fysom.py, line 394:\n    if hasattr(self, fnname):";
	$m.__track_lines__[395] = "fysom.py, line 395:\n    return getattr(self, fnname)(e)";
	$m.__track_lines__[397] = "fysom.py, line 397:\n    def _leave_state(self, e):";
	$m.__track_lines__[398] = "fysom.py, line 398:\n    fnname = \'onleave\' + e.src";
	$m.__track_lines__[399] = "fysom.py, line 399:\n    if hasattr(self, fnname):";
	$m.__track_lines__[400] = "fysom.py, line 400:\n    return getattr(self, fnname)(e)";
	$m.__track_lines__[402] = "fysom.py, line 402:\n    def _enter_state(self, e):";
	$m.__track_lines__[403] = "fysom.py, line 403:\n    for fnname in [\'onenter\' + e.dst, \'on\' + e.dst]:";
	$m.__track_lines__[404] = "fysom.py, line 404:\n    if hasattr(self, fnname):";
	$m.__track_lines__[405] = "fysom.py, line 405:\n    return getattr(self, fnname)(e)";
	$m.__track_lines__[407] = "fysom.py, line 407:\n    def _change_state(self, e):";
	$m.__track_lines__[408] = "fysom.py, line 408:\n    fnname = \'onchangestate\'";
	$m.__track_lines__[409] = "fysom.py, line 409:\n    if hasattr(self, fnname):";
	$m.__track_lines__[410] = "fysom.py, line 410:\n    return getattr(self, fnname)(e)";
	$m.__track_lines__[412] = "fysom.py, line 412:\n    if __name__ == \'__main__\':";
	$m.__track_lines__[413] = "fysom.py, line 413:\n    pass";


	$pyjs.track.module='fysom';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=32;
	$pyjs.track.lineno=277;
	$pyjs.track.lineno=279;
	$m['__author__'] = 'Mansour';
	$pyjs.track.lineno=280;
	$m['__copyright__'] = 'Copyright 2011, Mansour and Jake Gordon';
	$pyjs.track.lineno=281;
	$m['__credits__'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list'](['Mansour', 'Jake Gordon']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if ($pyjs_dbg_1_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=282;
	$m['__license__'] = 'MIT';
	$pyjs.track.lineno=283;
	$m['__version__'] = '1.0';
	$pyjs.track.lineno=284;
	$m['__maintainer__'] = 'Mansour';
	$pyjs.track.lineno=285;
	$m['__email__'] = 'mansour@oxplot.com';
	$pyjs.track.lineno=289;
	$m['FysomError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'fysom';
		$pyjs.track.lineno=290;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FysomError', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=292;
	$m['Fysom'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'fysom';
		$pyjs.track.lineno=294;
		$method = $pyjs__bind_method2('__init__', function(cfg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cfg = arguments[1];
			}

			$pyjs.track={module:'fysom', lineno:294};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=294;
			$pyjs.track.lineno=295;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['_apply'](cfg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if ($pyjs_dbg_2_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['cfg']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=297;
		$method = $pyjs__bind_method2('isstate', function(state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}
			var $attr1,$attr2;
			$pyjs.track={module:'fysom', lineno:297};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=297;
			$pyjs.track.lineno=298;
			$pyjs.track.lineno=298;
			var $pyjs__ret = $p['op_eq']((($attr1=($attr2=self)['current']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'current'):
						self['current']), state);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['isstate'] = $method;
		$pyjs.track.lineno=300;
		$method = $pyjs__bind_method2('can', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr8,$and1,$attr3,$and3,$attr5,$attr4,$attr7,$attr6,$and2;
			$pyjs.track={module:'fysom', lineno:300};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=300;
			$pyjs.track.lineno=301;
			$pyjs.track.lineno=301;
			var $pyjs__ret = ($p['bool']($and1=(($attr3=($attr4=self)['_map']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '_map'):
						self['_map']).__contains__(event))?($p['bool']($and2=(($attr7=($attr8=self)['_map']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, '_map'):
						self['_map']).__getitem__(event).__contains__((($attr5=($attr6=self)['current']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'current'):
						self['current'])))?!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if ($pyjs_dbg_3_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()):$and2):$and1);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['can'] = $method;
		$pyjs.track.lineno=304;
		$method = $pyjs__bind_method2('cannot', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs.track={module:'fysom', lineno:304};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=304;
			$pyjs.track.lineno=305;
			$pyjs.track.lineno=305;
			var $pyjs__ret = !$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return self['can'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if ($pyjs_dbg_4_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['cannot'] = $method;
		$pyjs.track.lineno=307;
		$method = $pyjs__bind_method2('_apply', function(cfg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cfg = arguments[1];
			}
			var $iter3_type,$iter4_type,$iter4_iter,$iter3_idx,$iter2_iter,init,add,$iter3_iter,events,$iter2_type,$and4,$and5,callbacks,$iter2_idx,$iter3_array,tmap,$iter2_nextval,e,name,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array,$iter3_nextval,$iter2_array;
			$pyjs.track={module:'fysom', lineno:307};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=307;
			$pyjs.track.lineno=308;
			init = ($p['bool'](cfg.__contains__('initial'))? (cfg.__getitem__('initial')) : (null));
			$pyjs.track.lineno=309;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](init, $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if ($pyjs_dbg_5_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if ($pyjs_dbg_6_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=310;
				init = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['state', init]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if ($pyjs_dbg_7_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs.track.lineno=311;
			events = ($p['bool'](cfg.__contains__('events'))? (cfg.__getitem__('events')) : ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if ($pyjs_dbg_8_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()));
			$pyjs.track.lineno=312;
			callbacks = ($p['bool'](cfg.__contains__('callbacks'))? (cfg.__getitem__('callbacks')) : ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if ($pyjs_dbg_9_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()));
			$pyjs.track.lineno=313;
			tmap = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if ($pyjs_dbg_10_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.track.lineno=314;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_map', tmap) : $p['setattr'](self, '_map', tmap);
			$pyjs.track.lineno=316;
			add = function(e) {
				var src,$iter1_nextval,$iter1_type,$iter1_iter,s,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs.track={module:'fysom',lineno:316};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='fysom';
				$pyjs.track.lineno=316;
				$pyjs.track.lineno=317;
				src = ($p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](e.__getitem__('src'), $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if ($pyjs_dbg_11_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})())? ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([e.__getitem__('src')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if ($pyjs_dbg_12_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) : (e.__getitem__('src')));
				$pyjs.track.lineno=318;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!tmap.__contains__(e.__getitem__('name')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if ($pyjs_dbg_13_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs.track.lineno=319;
					(function(){try{try{$pyjs.in_try_except += 1;
					return tmap.__setitem__(e.__getitem__('name'), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if ($pyjs_dbg_14_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if ($pyjs_dbg_15_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				$pyjs.track.lineno=320;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return src;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if ($pyjs_dbg_16_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					s = $iter1_nextval.$nextval;
					$pyjs.track.lineno=321;
					(function(){try{try{$pyjs.in_try_except += 1;
					return tmap.__getitem__(e.__getitem__('name')).__setitem__(s, e.__getitem__('dst'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if ($pyjs_dbg_17_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='fysom';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			};
			add.__name__ = 'add';

			add.__bind_type__ = 0;
			add.__args__ = [null,null,['e']];
			$pyjs.track.lineno=323;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](init);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if ($pyjs_dbg_18_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs.track.lineno=324;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!init.__contains__('event'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if ($pyjs_dbg_19_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs.track.lineno=325;
					(function(){try{try{$pyjs.in_try_except += 1;
					return init.__setitem__('event', 'startup');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if ($pyjs_dbg_20_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				$pyjs.track.lineno=326;
				(function(){try{try{$pyjs.in_try_except += 1;
				return add((function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['name', init.__getitem__('event')], ['src', 'none'], ['dst', init.__getitem__('state')]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if ($pyjs_dbg_21_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if ($pyjs_dbg_22_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			}
			$pyjs.track.lineno=328;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return events;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if ($pyjs_dbg_23_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				e = $iter2_nextval.$nextval;
				$pyjs.track.lineno=329;
				(function(){try{try{$pyjs.in_try_except += 1;
				return add(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if ($pyjs_dbg_24_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=331;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return tmap;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if ($pyjs_dbg_25_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				name = $iter3_nextval.$nextval;
				$pyjs.track.lineno=332;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['setattr'](self, name, (function(){try{try{$pyjs.in_try_except += 1;
				return self['_build_event'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if ($pyjs_dbg_26_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if ($pyjs_dbg_27_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=334;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return callbacks;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if ($pyjs_dbg_28_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				name = $iter4_nextval.$nextval;
				$pyjs.track.lineno=335;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['setattr'](self, name, callbacks.__getitem__(name));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if ($pyjs_dbg_29_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=337;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('current', 'none') : $p['setattr'](self, 'current', 'none');
			$pyjs.track.lineno=339;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and4=init)?!init.__contains__('defer'):$and4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if ($pyjs_dbg_30_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
				$pyjs.track.lineno=340;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, init.__getitem__('event'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if ($pyjs_dbg_31_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if ($pyjs_dbg_32_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['cfg']]);
		$cls_definition['_apply'] = $method;
		$pyjs.track.lineno=342;
		$method = $pyjs__bind_method2('_build_event', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var fn;
			$pyjs.track={module:'fysom', lineno:342};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=342;
			$pyjs.track.lineno=344;
			fn = function() {
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
{
					}
				}
				var $attr9,src,$iter5_idx,e,k,_tran,$iter5_array,dst,$pyjs__trackstack_size_1,$iter5_type,$attr15,$iter5_nextval,$iter5_iter,$attr14,$attr16,$attr11,$attr10,$attr13,$attr12;
				$pyjs.track={module:'fysom',lineno:344};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='fysom';
				$pyjs.track.lineno=344;
				$pyjs.track.lineno=346;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if ($pyjs_dbg_33_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if ($pyjs_dbg_34_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
					$pyjs.track.lineno=347;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $m['FysomError']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('event %s inappropriate because previous transition did not complete', event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if ($pyjs_dbg_35_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if ($pyjs_dbg_36_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
				}
				$pyjs.track.lineno=349;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['can'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if ($pyjs_dbg_37_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if ($pyjs_dbg_38_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs.track.lineno=350;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $m['FysomError']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('event %s inappropriate in current state %s', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple']([event, (($attr9=($attr10=self)['current']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
								$p['getattr']($attr10, 'current'):
								self['current'])]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if ($pyjs_dbg_39_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if ($pyjs_dbg_40_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if ($pyjs_dbg_41_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
				}
				$pyjs.track.lineno=353;
				src = (($attr11=($attr12=self)['current']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'current'):
							self['current']);
				$pyjs.track.lineno=354;
				dst = (($attr13=($attr14=self)['_map']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
							$p['getattr']($attr14, '_map'):
							self['_map']).__getitem__(event).__getitem__(src);
				$pyjs.track.lineno=356;
				$m['_e_obj'] = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'fysom';
					$pyjs.track.lineno=357;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('_e_obj', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=358;
				e = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['_e_obj']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if ($pyjs_dbg_42_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.track.lineno=359;
				var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([self, event, src, dst]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if ($pyjs_dbg_43_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				e.fsm = (function(){try{try{$pyjs.in_try_except += 1;
				return $tupleassign1.__getitem__(0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if ($pyjs_dbg_44_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				e.event = (function(){try{try{$pyjs.in_try_except += 1;
				return $tupleassign1.__getitem__(1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if ($pyjs_dbg_45_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				e.src = (function(){try{try{$pyjs.in_try_except += 1;
				return $tupleassign1.__getitem__(2);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if ($pyjs_dbg_46_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				e.dst = (function(){try{try{$pyjs.in_try_except += 1;
				return $tupleassign1.__getitem__(3);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if ($pyjs_dbg_47_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$pyjs.track.lineno=360;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if ($pyjs_dbg_48_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					k = $iter5_nextval.$nextval;
					$pyjs.track.lineno=361;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['setattr'](e, k, kwargs.__getitem__(k));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if ($pyjs_dbg_49_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='fysom';
				$pyjs.track.lineno=363;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((($attr15=($attr16=self)['current']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
							$p['getattr']($attr16, 'current'):
							self['current']), dst));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if ($pyjs_dbg_50_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs.track.lineno=364;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return self['_before_event'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if ($pyjs_dbg_51_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), false));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if ($pyjs_dbg_52_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
						$pyjs.track.lineno=365;
						$pyjs.track.lineno=365;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=366;
					_tran = function() {
						var str;
						$pyjs.track={module:'fysom',lineno:366};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='fysom';
						$pyjs.track.lineno=366;
						$pyjs.track.lineno=369;
						str = 'i am not here';
						$pyjs.track.lineno=373;

          delete self.transition
          
						$pyjs.track.lineno=375;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('current', dst) : $p['setattr'](self, 'current', dst);
						$pyjs.track.lineno=376;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_enter_state'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if ($pyjs_dbg_53_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
						$pyjs.track.lineno=377;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_change_state'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if ($pyjs_dbg_54_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
						$pyjs.track.lineno=378;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_after_event'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if ($pyjs_dbg_55_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					};
					_tran.__name__ = '_tran';

					_tran.__bind_type__ = 0;
					_tran.__args__ = [null,null];
					$pyjs.track.lineno=379;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('transition', _tran) : $p['setattr'](self, 'transition', _tran);
				}
				$pyjs.track.lineno=381;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return self['_leave_state'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if ($pyjs_dbg_56_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})(), false));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if ($pyjs_dbg_57_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs.track.lineno=382;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if ($pyjs_dbg_58_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if ($pyjs_dbg_59_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
						$pyjs.track.lineno=383;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['transition']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if ($pyjs_dbg_60_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,['kwargs']];
			$pyjs.track.lineno=385;
			$pyjs.track.lineno=385;
			var $pyjs__ret = fn;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_build_event'] = $method;
		$pyjs.track.lineno=387;
		$method = $pyjs__bind_method2('_before_event', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$add2,$add1,$attr18,$attr17;
			$pyjs.track={module:'fysom', lineno:387};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=387;
			$pyjs.track.lineno=388;
			fnname = $p['__op_add']($add1='onbefore',$add2=(($attr17=($attr18=e)['event']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'event'):
						e['event']));
			$pyjs.track.lineno=389;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if ($pyjs_dbg_61_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if ($pyjs_dbg_62_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs.track.lineno=390;
				$pyjs.track.lineno=390;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if ($pyjs_dbg_63_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if ($pyjs_dbg_64_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_before_event'] = $method;
		$pyjs.track.lineno=392;
		$method = $pyjs__bind_method2('_after_event', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$iter6_idx,$attr21,$iter6_type,$pyjs__trackstack_size_1,$attr22,$attr20,$add3,$iter6_array,$attr19,$add4,$add5,$add6,$iter6_iter,$iter6_nextval;
			$pyjs.track={module:'fysom', lineno:392};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=392;
			$pyjs.track.lineno=393;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([$p['__op_add']($add3='onafter',$add4=(($attr19=($attr20=e)['event']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'event'):
						e['event'])), $p['__op_add']($add5='on',$add6=(($attr21=($attr22=e)['event']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'event'):
						e['event']))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if ($pyjs_dbg_65_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if ($pyjs_dbg_66_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				fnname = $iter6_nextval.$nextval;
				$pyjs.track.lineno=394;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if ($pyjs_dbg_67_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if ($pyjs_dbg_68_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
					$pyjs.track.lineno=395;
					$pyjs.track.lineno=395;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if ($pyjs_dbg_69_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if ($pyjs_dbg_70_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_after_event'] = $method;
		$pyjs.track.lineno=397;
		$method = $pyjs__bind_method2('_leave_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$attr23,$attr24,$add7,$add8;
			$pyjs.track={module:'fysom', lineno:397};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=397;
			$pyjs.track.lineno=398;
			fnname = $p['__op_add']($add7='onleave',$add8=(($attr23=($attr24=e)['src']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'src'):
						e['src']));
			$pyjs.track.lineno=399;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if ($pyjs_dbg_71_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if ($pyjs_dbg_72_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
				$pyjs.track.lineno=400;
				$pyjs.track.lineno=400;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if ($pyjs_dbg_73_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if ($pyjs_dbg_74_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_leave_state'] = $method;
		$pyjs.track.lineno=402;
		$method = $pyjs__bind_method2('_enter_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $attr27,fnname,$add12,$iter7_nextval,$add9,$iter7_iter,$iter7_array,$add10,$attr25,$attr26,$iter7_idx,$attr28,$iter7_type,$pyjs__trackstack_size_1,$add11;
			$pyjs.track={module:'fysom', lineno:402};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=402;
			$pyjs.track.lineno=403;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter7_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([$p['__op_add']($add9='onenter',$add10=(($attr25=($attr26=e)['dst']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'dst'):
						e['dst'])), $p['__op_add']($add11='on',$add12=(($attr27=($attr28=e)['dst']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'dst'):
						e['dst']))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if ($pyjs_dbg_75_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if ($pyjs_dbg_76_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				fnname = $iter7_nextval.$nextval;
				$pyjs.track.lineno=404;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if ($pyjs_dbg_77_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if ($pyjs_dbg_78_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs.track.lineno=405;
					$pyjs.track.lineno=405;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if ($pyjs_dbg_79_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if ($pyjs_dbg_80_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_enter_state'] = $method;
		$pyjs.track.lineno=407;
		$method = $pyjs__bind_method2('_change_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname;
			$pyjs.track={module:'fysom', lineno:407};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=407;
			$pyjs.track.lineno=408;
			fnname = 'onchangestate';
			$pyjs.track.lineno=409;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if ($pyjs_dbg_81_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if ($pyjs_dbg_82_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
				$pyjs.track.lineno=410;
				$pyjs.track.lineno=410;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if ($pyjs_dbg_83_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if ($pyjs_dbg_84_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_change_state'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Fysom', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=412;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if ($pyjs_dbg_85_err.__name__ != 'StopIteration'){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
		$pyjs.track.lineno=413;
	}
	return this;
}; /* end fysom */


/* end module: fysom */


