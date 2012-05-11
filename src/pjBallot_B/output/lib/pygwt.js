/* start module: pygwt */
$pyjs.loaded_modules['pygwt'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pygwt'].__was_initialized__) return $pyjs.loaded_modules['pygwt'];
	var $m = $pyjs.loaded_modules["pygwt"];
	$m.__repr__ = function() { return "<module: pygwt>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pygwt';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'pygwt.py, line 1:\n    from __pyjamas__ import get_main_frame, doc, JS';
	$m.__track_lines__[3] = 'pygwt.py, line 3:\n    sNextHashId = 0';
	$m.__track_lines__[5] = 'pygwt.py, line 5:\n    def getNextHashId():';
	$m.__track_lines__[6] = 'pygwt.py, line 6:\n    global sNextHashId';
	$m.__track_lines__[7] = 'pygwt.py, line 7:\n    sNextHashId += 1';
	$m.__track_lines__[8] = 'pygwt.py, line 8:\n    return sNextHashId';
	$m.__track_lines__[10] = 'pygwt.py, line 10:\n    def getHashCode(o):';
	$m.__track_lines__[11] = 'pygwt.py, line 11:\n    JS("""';
	$m.__track_lines__[16] = 'pygwt.py, line 16:\n    def getModuleName():';
	$m.__track_lines__[17] = 'pygwt.py, line 17:\n    import os';
	$m.__track_lines__[18] = 'pygwt.py, line 18:\n    import sys';
	$m.__track_lines__[19] = 'pygwt.py, line 19:\n    mod_name = sys.argv[0]';
	$m.__track_lines__[20] = 'pygwt.py, line 20:\n    mod_name = os.path.split(mod_name)[1]';
	$m.__track_lines__[21] = 'pygwt.py, line 21:\n    mod_name = os.path.spliext(mod_name)[0]';
	$m.__track_lines__[22] = 'pygwt.py, line 22:\n    return mod_name';
	$m.__track_lines__[24] = 'pygwt.py, line 24:\n    def getModuleBaseURL():';
	$m.__track_lines__[27] = 'pygwt.py, line 27:\n    s = get_main_frame().getUri()';
	$m.__track_lines__[31] = "pygwt.py, line 31:\n    i = s.find('#')";
	$m.__track_lines__[32] = 'pygwt.py, line 32:\n    if i != -1:';
	$m.__track_lines__[33] = 'pygwt.py, line 33:\n    s = s[:i]';
	$m.__track_lines__[36] = "pygwt.py, line 36:\n    i = s.find('?')";
	$m.__track_lines__[37] = 'pygwt.py, line 37:\n    if i != -1:';
	$m.__track_lines__[38] = 'pygwt.py, line 38:\n    s = s[:i]';
	$m.__track_lines__[41] = "pygwt.py, line 41:\n    i = s.rfind('/')";
	$m.__track_lines__[42] = 'pygwt.py, line 42:\n    if i != -1:';
	$m.__track_lines__[43] = 'pygwt.py, line 43:\n    s = s[:i]';
	$m.__track_lines__[45] = 'pygwt.py, line 45:\n    if len(s) > 0:';
	$m.__track_lines__[46] = 'pygwt.py, line 46:\n    return s + "/"';
	$m.__track_lines__[47] = 'pygwt.py, line 47:\n    return ""';


	$pyjs.track.module='pygwt';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=3;
	$m['sNextHashId'] = 0;
	$pyjs.track.lineno=5;
	$m['getNextHashId'] = function() {
		var $add2,$add1;
		$pyjs.track={module:'pygwt',lineno:5};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pygwt';
		$pyjs.track.lineno=5;
		$pyjs.track.lineno=6;
		$pyjs.track.lineno=7;
		$m['sNextHashId'] = $p['__op_add']($add1=$m['sNextHashId'],$add2=1);
		$pyjs.track.lineno=8;
		$pyjs.track.lineno=8;
		var $pyjs__ret = $m['sNextHashId'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getNextHashId'].__name__ = 'getNextHashId';

	$m['getNextHashId'].__bind_type__ = 0;
	$m['getNextHashId'].__args__ = [null,null];
	$pyjs.track.lineno=10;
	$m['getHashCode'] = function(o) {


    return (o == null) ? 0 :
        (o.$H ? o.$H : (o.$H = pygwt_getNextHashId()))
    
	};
	$m['getHashCode'].__name__ = 'getHashCode';

	$m['getHashCode'].__bind_type__ = 0;
	$m['getHashCode'].__args__ = [null,null,['o']];
	$pyjs.track.lineno=16;
	$m['getModuleName'] = function() {
		var sys,os,mod_name;
		$pyjs.track={module:'pygwt',lineno:16};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pygwt';
		$pyjs.track.lineno=16;
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		os = $p['___import___']('os', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		sys = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		mod_name = $p['getattr'](sys, 'argv').__getitem__(0);
		$pyjs.track.lineno=20;
		mod_name = (function(){try{try{$pyjs.in_try_except += 1;
		return os['path']['$$split'](mod_name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})().__getitem__(1);
		$pyjs.track.lineno=21;
		mod_name = (function(){try{try{$pyjs.in_try_except += 1;
		return os['path']['spliext'](mod_name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})().__getitem__(0);
		$pyjs.track.lineno=22;
		$pyjs.track.lineno=22;
		var $pyjs__ret = mod_name;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getModuleName'].__name__ = 'getModuleName';

	$m['getModuleName'].__bind_type__ = 0;
	$m['getModuleName'].__args__ = [null,null];
	$pyjs.track.lineno=24;
	$m['getModuleBaseURL'] = function() {
		var i,$add3,s,$add4;
		$pyjs.track={module:'pygwt',lineno:24};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pygwt';
		$pyjs.track.lineno=24;
		$pyjs.track.lineno=27;
		s = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['getUri']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$pyjs.track.lineno=31;
		i = (function(){try{try{$pyjs.in_try_except += 1;
		return s['find']('#');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
		$pyjs.track.lineno=32;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['op_eq'](i, (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
			$pyjs.track.lineno=33;
			s = $p['__getslice'](s, 0, i);
		}
		$pyjs.track.lineno=36;
		i = (function(){try{try{$pyjs.in_try_except += 1;
		return s['find']('?');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
		$pyjs.track.lineno=37;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['op_eq'](i, (typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
			$pyjs.track.lineno=38;
			s = $p['__getslice'](s, 0, i);
		}
		$pyjs.track.lineno=41;
		i = (function(){try{try{$pyjs.in_try_except += 1;
		return s['rfind']('/');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		$pyjs.track.lineno=42;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['op_eq'](i, (typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
			$pyjs.track.lineno=43;
			s = $p['__getslice'](s, 0, i);
		}
		$pyjs.track.lineno=45;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), 0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = $p['__op_add']($add3=s,$add4='/');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=47;
		$pyjs.track.lineno=47;
		var $pyjs__ret = '';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

	$m['getModuleBaseURL'].__bind_type__ = 0;
	$m['getModuleBaseURL'].__args__ = [null,null];
	return this;
}; /* end pygwt */


/* end module: pygwt */


/*
PYJS_DEPS: ['os', 'sys']
*/
