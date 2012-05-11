/* start module: pyjamas.Factory */
$pyjs.loaded_modules['pyjamas.Factory'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Factory'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Factory'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Factory"];
	$m.__repr__ = function() { return "<module: pyjamas.Factory>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Factory';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['Factory'] = $pyjs.loaded_modules['pyjamas.Factory'];
	$m.__track_lines__[1] = 'pyjamas.Factory.py, line 1:\n    # Copyright (C) 2009 Luke Kenneth Casson Leighton <lkcl@lkcl.net>';
	$m.__track_lines__[9] = 'pyjamas.Factory.py, line 9:\n    from pyjamas import log';
	$m.__track_lines__[10] = 'pyjamas.Factory.py, line 10:\n    from pyjamas import DOM';
	$m.__track_lines__[12] = 'pyjamas.Factory.py, line 12:\n    factory = {}';
	$m.__track_lines__[14] = 'pyjamas.Factory.py, line 14:\n    def registerClass(modname, klsname, kls):';
	$m.__track_lines__[15] = 'pyjamas.Factory.py, line 15:\n    global factory';
	$m.__track_lines__[16] = 'pyjamas.Factory.py, line 16:\n    if modname is None:';
	$m.__track_lines__[17] = "pyjamas.Factory.py, line 17:\n    modname = '.'.join(['pyjamas.ui', klsname])";
	$m.__track_lines__[18] = "pyjamas.Factory.py, line 18:\n    name = '.'.join([modname, klsname])";
	$m.__track_lines__[19] = 'pyjamas.Factory.py, line 19:\n    factory[name] = kls';
	$m.__track_lines__[21] = 'pyjamas.Factory.py, line 21:\n    def lookupClass(name):';
	$m.__track_lines__[22] = 'pyjamas.Factory.py, line 22:\n    return factory[name]';
	$m.__track_lines__[24] = 'pyjamas.Factory.py, line 24:\n    def createWidgetOnElement(element):';
	$m.__track_lines__[25] = "pyjamas.Factory.py, line 25:\n    fc = DOM.getAttribute(element, 'id')";
	$m.__track_lines__[26] = 'pyjamas.Factory.py, line 26:\n    lbr = fc.find("(")';
	$m.__track_lines__[27] = 'pyjamas.Factory.py, line 27:\n    klsname = fc[:lbr]';
	$m.__track_lines__[28] = 'pyjamas.Factory.py, line 28:\n    txtargs = fc[lbr+1:-1]';
	$m.__track_lines__[29] = 'pyjamas.Factory.py, line 29:\n    args = []';
	$m.__track_lines__[30] = 'pyjamas.Factory.py, line 30:\n    kwargs = {}';
	$m.__track_lines__[31] = "pyjamas.Factory.py, line 31:\n    for arg in txtargs.split(','):";
	$m.__track_lines__[32] = "pyjamas.Factory.py, line 32:\n    findeq = arg.find('=')";
	$m.__track_lines__[33] = 'pyjamas.Factory.py, line 33:\n    if findeq == -1:';
	$m.__track_lines__[34] = 'pyjamas.Factory.py, line 34:\n    args.append(arg)';
	$m.__track_lines__[36] = 'pyjamas.Factory.py, line 36:\n    k = arg[:findeq]';
	$m.__track_lines__[37] = 'pyjamas.Factory.py, line 37:\n    v = arg[findeq+1:]';
	$m.__track_lines__[38] = 'pyjamas.Factory.py, line 38:\n    if ((v[0] == "\'" and v[-1] == "\'") or';
	$m.__track_lines__[41] = 'pyjamas.Factory.py, line 41:\n    v = v[1:-1]';
	$m.__track_lines__[44] = 'pyjamas.Factory.py, line 44:\n    v = int(v)';
	$m.__track_lines__[45] = 'pyjamas.Factory.py, line 45:\n    kwargs[k] = v';
	$m.__track_lines__[47] = "pyjamas.Factory.py, line 47:\n    kwargs['Element'] = element";
	$m.__track_lines__[48] = 'pyjamas.Factory.py, line 48:\n    return lookupClass(klsname)(*args, **kwargs)';
	$m.__track_lines__[50] = 'pyjamas.Factory.py, line 50:\n    def addPyjamasNameSpace():';
	$m.__track_lines__[51] = 'pyjamas.Factory.py, line 51:\n    doc().createElementNS("urn:schemas-pyjs-org:pyjs")';


	$pyjs.track.module='pyjamas.Factory';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=9;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['log'] = $p['___import___']('pyjamas.log', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=10;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=12;
	$m['factory'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
	$pyjs.track.lineno=14;
	$m['registerClass'] = function(modname, klsname, kls) {
		var name;
		$pyjs.track={module:'pyjamas.Factory',lineno:14};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Factory';
		$pyjs.track.lineno=14;
		$pyjs.track.lineno=15;
		$pyjs.track.lineno=16;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((modname === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
			$pyjs.track.lineno=17;
			modname = (function(){try{try{$pyjs.in_try_except += 1;
			return '.'['join']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](['pyjamas.ui', klsname]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		}
		$pyjs.track.lineno=18;
		name = (function(){try{try{$pyjs.in_try_except += 1;
		return '.'['join']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([modname, klsname]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
		$pyjs.track.lineno=19;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['factory'].__setitem__(name, kls);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['registerClass'].__name__ = 'registerClass';

	$m['registerClass'].__bind_type__ = 0;
	$m['registerClass'].__args__ = [null,null,['modname'],['klsname'],['kls']];
	$pyjs.track.lineno=21;
	$m['lookupClass'] = function(name) {

		$pyjs.track={module:'pyjamas.Factory',lineno:21};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Factory';
		$pyjs.track.lineno=21;
		$pyjs.track.lineno=22;
		$pyjs.track.lineno=22;
		var $pyjs__ret = $m['factory'].__getitem__(name);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['lookupClass'].__name__ = 'lookupClass';

	$m['lookupClass'].__bind_type__ = 0;
	$m['lookupClass'].__args__ = [null,null,['name']];
	$pyjs.track.lineno=24;
	$m['createWidgetOnElement'] = function(element) {
		var txtargs,lbr,$pyjs__trackstack_size_1,$iter1_iter,arg,$or1,$iter1_array,kwargs,klsname,findeq,$and3,$iter1_nextval,$or2,$and1,$and2,args,$and4,fc,$iter1_type,k,$add2,$add3,$add1,$iter1_idx,$add4,v;
		$pyjs.track={module:'pyjamas.Factory',lineno:24};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Factory';
		$pyjs.track.lineno=24;
		$pyjs.track.lineno=25;
		fc = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['DOM']['getAttribute'](element, 'id');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
		$pyjs.track.lineno=26;
		lbr = (function(){try{try{$pyjs.in_try_except += 1;
		return fc['find']('(');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		$pyjs.track.lineno=27;
		klsname = $p['__getslice'](fc, 0, lbr);
		$pyjs.track.lineno=28;
		txtargs = $p['__getslice'](fc, $p['__op_add']($add1=lbr,$add2=1), (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)));
		$pyjs.track.lineno=29;
		args = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
		$pyjs.track.lineno=30;
		kwargs = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
		$pyjs.track.lineno=31;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return txtargs['$$split'](',');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			arg = $iter1_nextval.$nextval;
			$pyjs.track.lineno=32;
			findeq = (function(){try{try{$pyjs.in_try_except += 1;
			return arg['find']('=');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs.track.lineno=33;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](findeq, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs.track.lineno=34;
				(function(){try{try{$pyjs.in_try_except += 1;
				return args['append'](arg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			}
			else {
				$pyjs.track.lineno=36;
				k = $p['__getslice'](arg, 0, findeq);
				$pyjs.track.lineno=37;
				v = $p['__getslice'](arg, $p['__op_add']($add3=findeq,$add4=1), null);
				$pyjs.track.lineno=38;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or1=($p['bool']($and1=$p['op_eq'](v.__getitem__(0), "'"))?$p['op_eq'](v.__getitem__((typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))), "'"):$and1))?$or1:($p['bool']($and3=$p['op_eq'](v.__getitem__(0), '"'))?$p['op_eq'](v.__getitem__((typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))), '"'):$and3)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
					$pyjs.track.lineno=41;
					v = $p['__getslice'](v, 1, (typeof ($usub5=1)=='number'?
						-$usub5:
						$p['op_usub']($usub5)));
				}
				else {
					$pyjs.track.lineno=44;
					v = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['float_int'](v);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				}
				$pyjs.track.lineno=45;
				(function(){try{try{$pyjs.in_try_except += 1;
				return kwargs.__setitem__(k, v);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.Factory';
		$pyjs.track.lineno=47;
		(function(){try{try{$pyjs.in_try_except += 1;
		return kwargs.__setitem__('Element', element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
		$pyjs.track.lineno=48;
		$pyjs.track.lineno=48;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $pyjs_kwargs_call(null, (function(){try{try{$pyjs.in_try_except += 1;
		return $m['lookupClass'](klsname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), args, kwargs, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createWidgetOnElement'].__name__ = 'createWidgetOnElement';

	$m['createWidgetOnElement'].__bind_type__ = 0;
	$m['createWidgetOnElement'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=50;
	$m['addPyjamasNameSpace'] = function() {

		$pyjs.track={module:'pyjamas.Factory',lineno:50};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.Factory';
		$pyjs.track.lineno=50;
		$pyjs.track.lineno=51;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $m.doc();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['createElementNS']('urn:schemas-pyjs-org:pyjs');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['addPyjamasNameSpace'].__name__ = 'addPyjamasNameSpace';

	$m['addPyjamasNameSpace'].__bind_type__ = 0;
	$m['addPyjamasNameSpace'].__args__ = [null,null];
	return this;
}; /* end pyjamas.Factory */


/* end module: pyjamas.Factory */


/*
PYJS_DEPS: ['pyjamas.log', 'pyjamas', 'pyjamas.DOM']
*/
