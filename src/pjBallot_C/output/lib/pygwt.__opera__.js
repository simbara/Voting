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
	$m.__track_lines__[2] = 'pygwt.py, line 2:\n    ';
	$m.__track_lines__[3] = 'pygwt.py, line 3:\n    sNextHashId = 0';
	$m.__track_lines__[4] = 'pygwt.py, line 4:\n    ';
	$m.__track_lines__[5] = 'pygwt.py, line 2:\n     ... def getNextHashId():';
	$m.__track_lines__[7] = 'pygwt.py, line 7:\n    sNextHashId += 1';
	$m.__track_lines__[10] = 'pygwt.py, line 7:\n    sNextHashId += 1 ... def getHashCode(o):';
	$m.__track_lines__[13] = 'pygwt.py, line 13:\n    (@{{o}}.$H ? @{{o}}.$H : (@{{o}}.$H = @{{!pygwt_getNextHashId}}()))';
	$m.__track_lines__[16] = 'pygwt.py, line 13:\n    (@{{o}}.$H ? @{{o}}.$H : (@{{o}}.$H = @{{!pygwt_getNextHashId}}())) ... def getModuleName():';
	$m.__track_lines__[18] = 'pygwt.py, line 18:\n    import sys';
	$m.__track_lines__[24] = 'pygwt.py, line 18:\n    import sys ... def getModuleBaseURL():';


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
		$pyjs.track.lineno=2;
		$pyjs.track.lineno=3;
		$m['sNextHashId'] = $p['__op_add']($add1=$m['sNextHashId'],$add2=1);
		$pyjs.track.lineno=4;
		$pyjs.track.lineno=4;
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
        (o.$H ? o.$H : (o.$H = $m['getNextHashId']()));
    
	};
	$m['getHashCode'].__name__ = 'getHashCode';

	$m['getHashCode'].__bind_type__ = 0;
	$m['getHashCode'].__args__ = [null,null,['o']];
	$pyjs.track.lineno=16;
	$m['getModuleName'] = function() {


    return $moduleName;
    
	};
	$m['getModuleName'].__name__ = 'getModuleName';

	$m['getModuleName'].__bind_type__ = 0;
	$m['getModuleName'].__args__ = [null,null];
	$pyjs.track.lineno=24;
	$m['getModuleBaseURL'] = function() {


    // this is intentionally not using $doc, because we want
    // the module's own url
    var s = document.location.href;
    
    // Pull off any hash.
    var i = s.indexOf('#');
    if (i != -1)
        s = s.substring(0, i);
    
    // Pull off any query string.
    i = s.indexOf('?');
    if (i != -1)
        s = s.substring(0, i);
    
    // Rip off everything after the last slash.
    i = s.lastIndexOf('/');
    if (i != -1)
        s = s.substring(0, i);

    return (s.length > 0) ? s + "/" : "";
    
	};
	$m['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

	$m['getModuleBaseURL'].__bind_type__ = 0;
	$m['getModuleBaseURL'].__args__ = [null,null];
	return this;
}; /* end pygwt */


/* end module: pygwt */


