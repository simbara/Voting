/* start module: fysom */
$pyjs.loaded_modules['fysom'] = function (__mod_name__) {
	if($pyjs.loaded_modules['fysom'].__was_initialized__) return $pyjs.loaded_modules['fysom'];
	var $m = $pyjs.loaded_modules["fysom"];
	$m.__repr__ = function() { return "<module: fysom>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'fysom';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'fysom.py, line 1:\n    #';
	$m.__track_lines__[247] = "fysom.py, line 247:\n    __author__ = 'Mansour'";
	$m.__track_lines__[248] = "fysom.py, line 248:\n    __copyright__ = 'Copyright 2011, Mansour and Jake Gordon'";
	$m.__track_lines__[249] = "fysom.py, line 249:\n    __credits__ = ['Mansour', 'Jake Gordon']";
	$m.__track_lines__[250] = "fysom.py, line 250:\n    __license__ = 'MIT'";
	$m.__track_lines__[251] = "fysom.py, line 251:\n    __version__ = '1.0'";
	$m.__track_lines__[252] = "fysom.py, line 252:\n    __maintainer__ = 'Mansour'";
	$m.__track_lines__[253] = "fysom.py, line 253:\n    __email__ = 'mansour@oxplot.com'";
	$m.__track_lines__[257] = 'fysom.py, line 257:\n    class FysomError(Exception):';
	$m.__track_lines__[258] = 'fysom.py, line 258:\n    pass';
	$m.__track_lines__[260] = 'fysom.py, line 260:\n    class Fysom(object):';
	$m.__track_lines__[262] = 'fysom.py, line 262:\n    def __init__(self, cfg):';
	$m.__track_lines__[263] = 'fysom.py, line 263:\n    self._apply(cfg)';
	$m.__track_lines__[265] = 'fysom.py, line 265:\n    def isstate(self, state):';
	$m.__track_lines__[266] = 'fysom.py, line 266:\n    return self.current == state';
	$m.__track_lines__[268] = 'fysom.py, line 268:\n    def can(self, event):';
	$m.__track_lines__[269] = 'fysom.py, line 269:\n    return event in self._map and self.current in self._map[event] \\';
	$m.__track_lines__[272] = 'fysom.py, line 272:\n    def cannot(self, event):';
	$m.__track_lines__[273] = 'fysom.py, line 273:\n    return not self.can(event)';
	$m.__track_lines__[275] = 'fysom.py, line 275:\n    def _apply(self, cfg):';
	$m.__track_lines__[276] = "fysom.py, line 276:\n    init = cfg['initial'] if 'initial' in cfg else None";
	$m.__track_lines__[277] = 'fysom.py, line 277:\n    if isinstance(init, basestring):';
	$m.__track_lines__[278] = "fysom.py, line 278:\n    init = {'state': init}";
	$m.__track_lines__[279] = "fysom.py, line 279:\n    events = cfg['events'] if 'events' in cfg else []";
	$m.__track_lines__[280] = "fysom.py, line 280:\n    callbacks = cfg['callbacks'] if 'callbacks' in cfg else {}";
	$m.__track_lines__[281] = 'fysom.py, line 281:\n    tmap = {}';
	$m.__track_lines__[282] = 'fysom.py, line 282:\n    self._map = tmap';
	$m.__track_lines__[284] = 'fysom.py, line 284:\n    def add(e):';
	$m.__track_lines__[285] = "fysom.py, line 285:\n    src = [e['src']] if isinstance(e['src'], basestring) else e['src']";
	$m.__track_lines__[286] = "fysom.py, line 286:\n    if e['name'] not in tmap:";
	$m.__track_lines__[287] = "fysom.py, line 287:\n    tmap[e['name']] = {}";
	$m.__track_lines__[288] = 'fysom.py, line 288:\n    for s in src:';
	$m.__track_lines__[289] = "fysom.py, line 289:\n    tmap[e['name']][s] = e['dst']";
	$m.__track_lines__[291] = 'fysom.py, line 291:\n    if init:';
	$m.__track_lines__[292] = "fysom.py, line 292:\n    if 'event' not in init:";
	$m.__track_lines__[293] = "fysom.py, line 293:\n    init['event'] = 'startup'";
	$m.__track_lines__[294] = "fysom.py, line 294:\n    add({'name': init['event'], 'src': 'none', 'dst': init['state']})";
	$m.__track_lines__[296] = 'fysom.py, line 296:\n    for e in events:';
	$m.__track_lines__[297] = 'fysom.py, line 297:\n    add(e)';
	$m.__track_lines__[299] = 'fysom.py, line 299:\n    for name in tmap:';
	$m.__track_lines__[300] = 'fysom.py, line 300:\n    setattr(self, name, self._build_event(name))';
	$m.__track_lines__[302] = 'fysom.py, line 302:\n    for name in callbacks:';
	$m.__track_lines__[303] = 'fysom.py, line 303:\n    setattr(self, name, callbacks[name])';
	$m.__track_lines__[305] = "fysom.py, line 305:\n    self.current = 'none'";
	$m.__track_lines__[307] = "fysom.py, line 307:\n    if init and 'defer' not in init:";
	$m.__track_lines__[308] = "fysom.py, line 308:\n    getattr(self, init['event'])()";
	$m.__track_lines__[310] = 'fysom.py, line 310:\n    def _build_event(self, event):';
	$m.__track_lines__[312] = 'fysom.py, line 312:\n    def fn(**kwargs):';
	$m.__track_lines__[314] = "fysom.py, line 314:\n    if hasattr(self, 'transition'):";
	$m.__track_lines__[315] = 'fysom.py, line 315:\n    raise FysomError("event %s inappropriate because previous"';
	$m.__track_lines__[317] = 'fysom.py, line 317:\n    if not self.can(event):';
	$m.__track_lines__[318] = 'fysom.py, line 318:\n    raise FysomError("event %s inappropriate in current state"';
	$m.__track_lines__[321] = 'fysom.py, line 321:\n    src = self.current';
	$m.__track_lines__[322] = 'fysom.py, line 322:\n    dst = self._map[event][src]';
	$m.__track_lines__[324] = 'fysom.py, line 324:\n    class _e_obj(object):';
	$m.__track_lines__[325] = 'fysom.py, line 325:\n    pass';
	$m.__track_lines__[326] = 'fysom.py, line 326:\n    e = _e_obj()';
	$m.__track_lines__[327] = 'fysom.py, line 327:\n    e.fsm, e.event, e.src, e.dst = self, event, src, dst';
	$m.__track_lines__[328] = 'fysom.py, line 328:\n    for k in kwargs:';
	$m.__track_lines__[329] = 'fysom.py, line 329:\n    setattr(e, k, kwargs[k])';
	$m.__track_lines__[331] = 'fysom.py, line 331:\n    if self.current != dst:';
	$m.__track_lines__[332] = 'fysom.py, line 332:\n    if self._before_event(e) == False:';
	$m.__track_lines__[333] = 'fysom.py, line 333:\n    return';
	$m.__track_lines__[334] = 'fysom.py, line 334:\n    def _tran():';
	$m.__track_lines__[335] = "fysom.py, line 335:\n    delattr(self, 'transition')";
	$m.__track_lines__[336] = 'fysom.py, line 336:\n    self.current = dst';
	$m.__track_lines__[337] = 'fysom.py, line 337:\n    self._enter_state(e)';
	$m.__track_lines__[338] = 'fysom.py, line 338:\n    self._change_state(e)';
	$m.__track_lines__[339] = 'fysom.py, line 339:\n    self._after_event(e)';
	$m.__track_lines__[340] = 'fysom.py, line 340:\n    self.transition = _tran';
	$m.__track_lines__[342] = 'fysom.py, line 342:\n    if self._leave_state(e) != False:';
	$m.__track_lines__[343] = "fysom.py, line 343:\n    if hasattr(self, 'transition'):";
	$m.__track_lines__[344] = 'fysom.py, line 344:\n    self.transition()';
	$m.__track_lines__[346] = 'fysom.py, line 346:\n    return fn';
	$m.__track_lines__[348] = 'fysom.py, line 348:\n    def _before_event(self, e):';
	$m.__track_lines__[349] = "fysom.py, line 349:\n    fnname = 'onbefore' + e.event";
	$m.__track_lines__[350] = 'fysom.py, line 350:\n    if hasattr(self, fnname):';
	$m.__track_lines__[351] = 'fysom.py, line 351:\n    return getattr(self, fnname)(e)';
	$m.__track_lines__[353] = 'fysom.py, line 353:\n    def _after_event(self, e):';
	$m.__track_lines__[354] = "fysom.py, line 354:\n    for fnname in ['onafter' + e.event, 'on' + e.event]:";
	$m.__track_lines__[355] = 'fysom.py, line 355:\n    if hasattr(self, fnname):';
	$m.__track_lines__[356] = 'fysom.py, line 356:\n    return getattr(self, fnname)(e)';
	$m.__track_lines__[358] = 'fysom.py, line 358:\n    def _leave_state(self, e):';
	$m.__track_lines__[359] = "fysom.py, line 359:\n    fnname = 'onleave' + e.src";
	$m.__track_lines__[360] = 'fysom.py, line 360:\n    if hasattr(self, fnname):';
	$m.__track_lines__[361] = 'fysom.py, line 361:\n    return getattr(self, fnname)(e)';
	$m.__track_lines__[363] = 'fysom.py, line 363:\n    def _enter_state(self, e):';
	$m.__track_lines__[364] = "fysom.py, line 364:\n    for fnname in ['onenter' + e.dst, 'on' + e.dst]:";
	$m.__track_lines__[365] = 'fysom.py, line 365:\n    if hasattr(self, fnname):';
	$m.__track_lines__[366] = 'fysom.py, line 366:\n    return getattr(self, fnname)(e)';
	$m.__track_lines__[368] = 'fysom.py, line 368:\n    def _change_state(self, e):';
	$m.__track_lines__[369] = "fysom.py, line 369:\n    fnname = 'onchangestate'";
	$m.__track_lines__[370] = 'fysom.py, line 370:\n    if hasattr(self, fnname):';
	$m.__track_lines__[371] = 'fysom.py, line 371:\n    return getattr(self, fnname)(e)';
	$m.__track_lines__[373] = "fysom.py, line 373:\n    if __name__ == '__main__':";
	$m.__track_lines__[374] = 'fysom.py, line 374:\n    pass';


	$pyjs.track.module='fysom';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=247;
	$m['__author__'] = 'Mansour';
	$pyjs.track.lineno=248;
	$m['__copyright__'] = 'Copyright 2011, Mansour and Jake Gordon';
	$pyjs.track.lineno=249;
	$m['__credits__'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list'](['Mansour', 'Jake Gordon']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=250;
	$m['__license__'] = 'MIT';
	$pyjs.track.lineno=251;
	$m['__version__'] = '1.0';
	$pyjs.track.lineno=252;
	$m['__maintainer__'] = 'Mansour';
	$pyjs.track.lineno=253;
	$m['__email__'] = 'mansour@oxplot.com';
	$pyjs.track.lineno=257;
	$m['FysomError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'fysom';
		$pyjs.track.lineno=258;
		$pyjs.track.lineno=257;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FysomError', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=260;
	$m['Fysom'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'fysom';
		$pyjs.track.lineno=262;
		$method = $pyjs__bind_method2('__init__', function(cfg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cfg = arguments[1];
			}

			$pyjs.track={module:'fysom', lineno:262};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=262;
			$pyjs.track.lineno=263;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['_apply'](cfg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['cfg']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=265;
		$method = $pyjs__bind_method2('isstate', function(state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			$pyjs.track={module:'fysom', lineno:265};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=265;
			$pyjs.track.lineno=266;
			$pyjs.track.lineno=266;
			var $pyjs__ret = $p['op_eq']($p['getattr'](self, 'current'), state);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['isstate'] = $method;
		$pyjs.track.lineno=268;
		$method = $pyjs__bind_method2('can', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and3,$and2;
			$pyjs.track={module:'fysom', lineno:268};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=268;
			$pyjs.track.lineno=269;
			$pyjs.track.lineno=269;
			var $pyjs__ret = ($p['bool']($and1=$p['getattr'](self, '_map').__contains__(event))?($p['bool']($and2=$p['getattr'](self, '_map').__getitem__(event).__contains__($p['getattr'](self, 'current')))?!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()):$and2):$and1);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['can'] = $method;
		$pyjs.track.lineno=272;
		$method = $pyjs__bind_method2('cannot', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs.track={module:'fysom', lineno:272};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=272;
			$pyjs.track.lineno=273;
			$pyjs.track.lineno=273;
			var $pyjs__ret = !$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return self['can'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['cannot'] = $method;
		$pyjs.track.lineno=275;
		$method = $pyjs__bind_method2('_apply', function(cfg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cfg = arguments[1];
			}
			var $iter3_type,$iter4_type,$iter4_iter,$iter3_idx,$iter2_iter,init,add,$iter3_iter,events,$iter2_type,$and4,$and5,callbacks,$iter2_idx,$iter3_array,tmap,$iter2_nextval,e,name,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array,$iter3_nextval,$iter2_array;
			$pyjs.track={module:'fysom', lineno:275};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=275;
			$pyjs.track.lineno=276;
			init = ($p['bool'](cfg.__contains__('initial'))? (cfg.__getitem__('initial')) : (null));
			$pyjs.track.lineno=277;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](init, $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=278;
				init = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['state', init]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs.track.lineno=279;
			events = ($p['bool'](cfg.__contains__('events'))? (cfg.__getitem__('events')) : ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()));
			$pyjs.track.lineno=280;
			callbacks = ($p['bool'](cfg.__contains__('callbacks'))? (cfg.__getitem__('callbacks')) : ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()));
			$pyjs.track.lineno=281;
			tmap = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs.track.lineno=282;
			self._map = tmap;
			$pyjs.track.lineno=284;
			add = function(e) {
				var src,$iter1_nextval,$iter1_type,$iter1_iter,s,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs.track={module:'fysom',lineno:284};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='fysom';
				$pyjs.track.lineno=284;
				$pyjs.track.lineno=285;
				src = ($p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](e.__getitem__('src'), $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})())? ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([e.__getitem__('src')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) : (e.__getitem__('src')));
				$pyjs.track.lineno=286;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!tmap.__contains__(e.__getitem__('name')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs.track.lineno=287;
					(function(){try{try{$pyjs.in_try_except += 1;
					return tmap.__setitem__(e.__getitem__('name'), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				$pyjs.track.lineno=288;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return src;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					s = $iter1_nextval.$nextval;
					$pyjs.track.lineno=289;
					(function(){try{try{$pyjs.in_try_except += 1;
					return tmap.__getitem__(e.__getitem__('name')).__setitem__(s, e.__getitem__('dst'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
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
			$pyjs.track.lineno=291;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](init);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs.track.lineno=292;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!init.__contains__('event'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs.track.lineno=293;
					(function(){try{try{$pyjs.in_try_except += 1;
					return init.__setitem__('event', 'startup');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				$pyjs.track.lineno=294;
				(function(){try{try{$pyjs.in_try_except += 1;
				return add((function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['name', init.__getitem__('event')], ['src', 'none'], ['dst', init.__getitem__('state')]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			}
			$pyjs.track.lineno=296;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return events;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				e = $iter2_nextval.$nextval;
				$pyjs.track.lineno=297;
				(function(){try{try{$pyjs.in_try_except += 1;
				return add(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=299;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return tmap;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				name = $iter3_nextval.$nextval;
				$pyjs.track.lineno=300;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['setattr'](self, name, (function(){try{try{$pyjs.in_try_except += 1;
				return self['_build_event'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=302;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return callbacks;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				name = $iter4_nextval.$nextval;
				$pyjs.track.lineno=303;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['setattr'](self, name, callbacks.__getitem__(name));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=305;
			self.current = 'none';
			$pyjs.track.lineno=307;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and4=init)?!init.__contains__('defer'):$and4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
				$pyjs.track.lineno=308;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, init.__getitem__('event'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['cfg']]);
		$cls_definition['_apply'] = $method;
		$pyjs.track.lineno=310;
		$method = $pyjs__bind_method2('_build_event', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var fn;
			$pyjs.track={module:'fysom', lineno:310};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=310;
			$pyjs.track.lineno=312;
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
				var $iter5_nextval,src,$iter5_idx,e,_tran,$iter5_array,dst,$pyjs__trackstack_size_1,$iter5_iter,$iter5_type,k;
				$pyjs.track={module:'fysom',lineno:312};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='fysom';
				$pyjs.track.lineno=312;
				$pyjs.track.lineno=314;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
					$pyjs.track.lineno=315;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $m['FysomError']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('event %s inappropriate because previous transition did not complete', event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
				}
				$pyjs.track.lineno=317;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['can'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs.track.lineno=318;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $m['FysomError']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('event %s inappropriate in current state %s', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple']([event, $p['getattr'](self, 'current')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
				}
				$pyjs.track.lineno=321;
				src = $p['getattr'](self, 'current');
				$pyjs.track.lineno=322;
				dst = $p['getattr'](self, '_map').__getitem__(event).__getitem__(src);
				$pyjs.track.lineno=324;
				$m['_e_obj'] = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'fysom';
					$pyjs.track.lineno=325;
					$pyjs.track.lineno=324;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('_e_obj', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=326;
				e = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['_e_obj']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.track.lineno=327;
				var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([self, event, src, dst]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), 4, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				e.fsm = $tupleassign1[0];
				e.event = $tupleassign1[1];
				e.src = $tupleassign1[2];
				e.dst = $tupleassign1[3];
				$pyjs.track.lineno=328;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					k = $iter5_nextval.$nextval;
					$pyjs.track.lineno=329;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['setattr'](e, k, kwargs.__getitem__(k));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='fysom';
				$pyjs.track.lineno=331;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']($p['getattr'](self, 'current'), dst));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
					$pyjs.track.lineno=332;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return self['_before_event'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})(), false));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
						$pyjs.track.lineno=333;
						$pyjs.track.lineno=333;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=334;
					_tran = function() {

						$pyjs.track={module:'fysom',lineno:334};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='fysom';
						$pyjs.track.lineno=334;
						$pyjs.track.lineno=335;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $p['delattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
						$pyjs.track.lineno=336;
						self.current = dst;
						$pyjs.track.lineno=337;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_enter_state'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
						$pyjs.track.lineno=338;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_change_state'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
						$pyjs.track.lineno=339;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_after_event'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					};
					_tran.__name__ = '_tran';

					_tran.__bind_type__ = 0;
					_tran.__args__ = [null,null];
					$pyjs.track.lineno=340;
					self.transition = _tran;
				}
				$pyjs.track.lineno=342;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return self['_leave_state'](e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})(), false));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
					$pyjs.track.lineno=343;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['hasattr'](self, 'transition');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
						$pyjs.track.lineno=344;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['transition']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = [null,['kwargs']];
			$pyjs.track.lineno=346;
			$pyjs.track.lineno=346;
			var $pyjs__ret = fn;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_build_event'] = $method;
		$pyjs.track.lineno=348;
		$method = $pyjs__bind_method2('_before_event', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $add2,$add1,fnname;
			$pyjs.track={module:'fysom', lineno:348};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=348;
			$pyjs.track.lineno=349;
			fnname = $p['__op_add']($add1='onbefore',$add2=$p['getattr'](e, 'event'));
			$pyjs.track.lineno=350;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
				$pyjs.track.lineno=351;
				$pyjs.track.lineno=351;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_before_event'] = $method;
		$pyjs.track.lineno=353;
		$method = $pyjs__bind_method2('_after_event', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$iter6_idx,$iter6_type,$pyjs__trackstack_size_1,$add3,$iter6_array,$add6,$add4,$add5,$iter6_iter,$iter6_nextval;
			$pyjs.track={module:'fysom', lineno:353};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=353;
			$pyjs.track.lineno=354;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([$p['__op_add']($add3='onafter',$add4=$p['getattr'](e, 'event')), $p['__op_add']($add5='on',$add6=$p['getattr'](e, 'event'))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				fnname = $iter6_nextval.$nextval;
				$pyjs.track.lineno=355;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
					$pyjs.track.lineno=356;
					$pyjs.track.lineno=356;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
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
		$pyjs.track.lineno=358;
		$method = $pyjs__bind_method2('_leave_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var $add8,fnname,$add7;
			$pyjs.track={module:'fysom', lineno:358};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=358;
			$pyjs.track.lineno=359;
			fnname = $p['__op_add']($add7='onleave',$add8=$p['getattr'](e, 'src'));
			$pyjs.track.lineno=360;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs.track.lineno=361;
				$pyjs.track.lineno=361;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_leave_state'] = $method;
		$pyjs.track.lineno=363;
		$method = $pyjs__bind_method2('_enter_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname,$iter7_nextval,$add9,$iter7_iter,$iter7_array,$add10,$add11,$add12,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs.track={module:'fysom', lineno:363};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=363;
			$pyjs.track.lineno=364;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter7_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([$p['__op_add']($add9='onenter',$add10=$p['getattr'](e, 'dst')), $p['__op_add']($add11='on',$add12=$p['getattr'](e, 'dst'))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				fnname = $iter7_nextval.$nextval;
				$pyjs.track.lineno=365;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
					$pyjs.track.lineno=366;
					$pyjs.track.lineno=366;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
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
		$pyjs.track.lineno=368;
		$method = $pyjs__bind_method2('_change_state', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}
			var fnname;
			$pyjs.track={module:'fysom', lineno:368};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='fysom';
			$pyjs.track.lineno=368;
			$pyjs.track.lineno=369;
			fnname = 'onchangestate';
			$pyjs.track.lineno=370;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs.track.lineno=371;
				$pyjs.track.lineno=371;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, fnname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()(e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['_change_state'] = $method;
		$pyjs.track.lineno=260;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Fysom', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=373;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
		$pyjs.track.lineno=374;
	}
	return this;
}; /* end fysom */


/* end module: fysom */


