/* start module: sampleBallot */
$pyjs.loaded_modules['sampleBallot'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sampleBallot'].__was_initialized__) return $pyjs.loaded_modules['sampleBallot'];
	var $m = $pyjs.loaded_modules["sampleBallot"];
	$m.__repr__ = function() { return "<module: sampleBallot>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sampleBallot';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'sampleBallot.py, line 1:\n    from fysom import Fysom';
	$m.__track_lines__[2] = 'sampleBallot.py, line 2:\n    from ballotTree import Race';
	$m.__track_lines__[4] = "sampleBallot.py, line 4:\n    race = Race('',[],'')";
	$m.__track_lines__[6] = 'sampleBallot.py, line 6:\n    def sendRace(srace):';
	$m.__track_lines__[7] = 'sampleBallot.py, line 7:\n    global race';
	$m.__track_lines__[8] = 'sampleBallot.py, line 8:\n    race = srace';
	$m.__track_lines__[10] = 'sampleBallot.py, line 10:\n    def getInstruction():';
	$m.__track_lines__[11] = 'sampleBallot.py, line 11:\n    return race.instructions';


	$pyjs.track.module='sampleBallot';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Fysom'] = $p['___import___']('fysom.Fysom', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=2;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Race'] = $p['___import___']('ballotTree.Race', null, null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=4;
	$m['race'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['Race']('', (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=6;
	$m['sendRace'] = function(srace) {

		$pyjs.track={module:'sampleBallot',lineno:6};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=6;
		$pyjs.track.lineno=7;
		$pyjs.track.lineno=8;
		$m['race'] = srace;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sendRace'].__name__ = 'sendRace';

	$m['sendRace'].__bind_type__ = 0;
	$m['sendRace'].__args__ = [null,null,['srace']];
	$pyjs.track.lineno=10;
	$m['getInstruction'] = function() {

		$pyjs.track={module:'sampleBallot',lineno:10};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='sampleBallot';
		$pyjs.track.lineno=10;
		$pyjs.track.lineno=11;
		$pyjs.track.lineno=11;
		var $pyjs__ret = $p['getattr']($m['race'], 'instructions');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInstruction'].__name__ = 'getInstruction';

	$m['getInstruction'].__bind_type__ = 0;
	$m['getInstruction'].__args__ = [null,null];
	return this;
}; /* end sampleBallot */


/* end module: sampleBallot */


/*
PYJS_DEPS: ['fysom.Fysom', 'fysom', 'ballotTree.Race', 'ballotTree']
*/
