/* start module: audioControls */
$pyjs.loaded_modules['audioControls'] = function (__mod_name__) {
	if($pyjs.loaded_modules['audioControls'].__was_initialized__) return $pyjs.loaded_modules['audioControls'];
	var $m = $pyjs.loaded_modules["audioControls"];
	$m.__repr__ = function() { return "<module: audioControls>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'audioControls';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'audioControls.py, line 1:\n    import buzz.js';
	$m.__track_lines__[2] = 'audioControls.py, line 2:\n    from __pyjamas__ import JS';
	$m.__track_lines__[4] = 'audioControls.py, line 4:\n    even = True';
	$m.__track_lines__[6] = 'audioControls.py, line 6:\n    root_path = "http://10.0.22.106/"';
	$m.__track_lines__[8] = 'audioControls.py, line 8:\n    JS("""';
	$m.__track_lines__[138] = 'audioControls.py, line 138:\n    if even:';
	$m.__track_lines__[139] = 'audioControls.py, line 139:\n    fade(mainSnd2);';
	$m.__track_lines__[140] = 'audioControls.py, line 140:\n    pa(mainSnd1, path);';
	$m.__track_lines__[142] = 'audioControls.py, line 142:\n    fade(mainSnd1);';
	$m.__track_lines__[143] = 'audioControls.py, line 143:\n    pa(mainSnd2, path);';
	$m.__track_lines__[146] = 'audioControls.py, line 146:\n    even = not even';
	$m.__track_lines__[22] = 'audioControls.py, line 22:\n    def isPlayingAudio():';
	$m.__track_lines__[23] = "audioControls.py, line 23:\n    JS('''";
	$m.__track_lines__[27] = 'audioControls.py, line 27:\n    def pauseAudio():';
	$m.__track_lines__[28] = "audioControls.py, line 28:\n    JS('''";
	$m.__track_lines__[38] = 'audioControls.py, line 38:\n    def fade(audio, rampTime, targetVolume, tick):';
	$m.__track_lines__[39] = "audioControls.py, line 39:\n    JS('''";
	$m.__track_lines__[225] = 'audioControls.py, line 225:\n    def playAudioList(audioList):';
	$m.__track_lines__[84] = 'audioControls.py, line 84:\n    def pa(sound, path):';
	$m.__track_lines__[85] = "audioControls.py, line 85:\n    JS('''";
	$m.__track_lines__[91] = 'audioControls.py, line 91:\n    def playAudio(arg_audioPath, confirm = None):';
	$m.__track_lines__[92] = 'audioControls.py, line 92:\n    global currObj, even';
	$m.__track_lines__[93] = 'audioControls.py, line 93:\n    path = root_path + arg_audioPath';
	$m.__track_lines__[96] = 'audioControls.py, line 96:\n    if confirm == True:';
	$m.__track_lines__[97] = 'audioControls.py, line 97:\n    confirmPath = root_path + "media/confirm.wav"';
	$m.__track_lines__[226] = 'audioControls.py, line 226:\n    if audioList == []:';
	$m.__track_lines__[227] = 'audioControls.py, line 227:\n    return';
	$m.__track_lines__[228] = 'audioControls.py, line 228:\n    path = root_path + audioList.pop(0)';
	$m.__track_lines__[229] = "audioControls.py, line 229:\n    JS('''";


	$pyjs.track.module='audioControls';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=2;
	$pyjs.track.lineno=4;
	$m['even'] = true;
	$pyjs.track.lineno=6;
	$m['root_path'] = 'http://10.0.22.106/';
	$pyjs.track.lineno=8;

var mainSnd1 = new Audio();
var mainSnd2 = new Audio();

var snd1 = new Audio();
var snd2 = new Audio();

var varSnd = new Audio();
var loopSnd1 = new Audio();
var loopSnd2 = new Audio();
var mainSnd = new Audio();


	$pyjs.track.lineno=22;
	$m['isPlayingAudio'] = function() {


    return !((mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    
	};
	$m['isPlayingAudio'].__name__ = 'isPlayingAudio';

	$m['isPlayingAudio'].__bind_type__ = 0;
	$m['isPlayingAudio'].__args__ = [null,null];
	$pyjs.track.lineno=27;
	$m['pauseAudio'] = function() {

		$pyjs.track={module:'audioControls',lineno:27};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=27;
		$pyjs.track.lineno=28;

    snd1.pause();
    snd2.pause();
    mainSnd.pause();
    varSnd.pause();
    loopSnd1.pause();
    loopSnd2.pause();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['pauseAudio'].__name__ = 'pauseAudio';

	$m['pauseAudio'].__bind_type__ = 0;
	$m['pauseAudio'].__args__ = [null,null];
	$pyjs.track.lineno=38;
	$m['fade'] = function(audio, rampTime, targetVolume, tick) {

		$pyjs.track={module:'audioControls',lineno:38};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=38;
		$pyjs.track.lineno=39;

    var originalVolume = audio.volume;
    console.log("fading");
    //
    if(!targetVolume) {
        targetVolume = 0;
    }

    // By default, ramp up in one second
    if(!rampTime) {
        rampTime = 10;
    }

    // How often adjust audio volume (ms)
    if(!tick) {
        tick = 20;
    }

    var volumeStep = (audio.volume - targetVolume) / (rampTime / tick);

    if(!volumeStep) {
        throw "Could not calculate volume adjustment step";
    }

    function ramp() {

        var vol = Math.max(0, audio.volume - volumeStep);

        audio.volume = vol;

        // Have we reached target volume level yet?
        if(audio.volume > targetVolume) {
            // Keep up going until 11
            setTimeout(ramp, tick);
        } else {
            audio.pause();

            // Reset audio volume so audio can be played again
        }
    }

    ramp();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['fade'].__name__ = 'fade';

	$m['fade'].__bind_type__ = 0;
	$m['fade'].__args__ = [null,null,['audio'],['rampTime'],['targetVolume'],['tick']];
	$pyjs.track.lineno=84;
	$m['pa'] = function(sound, path) {

		$pyjs.track={module:'audioControls',lineno:84};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=84;
		$pyjs.track.lineno=85;

    sound.src = path;
    sound.volume = .8;
    sound.play();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['pa'].__name__ = 'pa';

	$m['pa'].__bind_type__ = 0;
	$m['pa'].__args__ = [null,null,['sound'],['path']];
	$pyjs.track.lineno=91;
	$m['playAudio'] = function(arg_audioPath, confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[3][1];
		var confirmPath,$add2,$add3,$add1,$add4,path;
		$pyjs.track={module:'audioControls',lineno:91};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=91;
		$pyjs.track.lineno=92;
		$pyjs.track.lineno=93;
		path = $p['__op_add']($add1=$m['root_path'],$add2=arg_audioPath);
		$pyjs.track.lineno=96;
		if ($p['bool']($p['op_eq'](confirm, true))) {
			$pyjs.track.lineno=97;
			confirmPath = $p['__op_add']($add3=$m['root_path'],$add4='media/confirm.wav');
		}
		else {
			$pyjs.track.lineno=138;
			if ($p['bool']($m['even'])) {
				$pyjs.track.lineno=139;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fade']((typeof mainSnd2 == "undefined"?$m.mainSnd2:mainSnd2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.track.lineno=140;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pa']((typeof mainSnd1 == "undefined"?$m.mainSnd1:mainSnd1), path);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			}
			else {
				$pyjs.track.lineno=142;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fade']((typeof mainSnd1 == "undefined"?$m.mainSnd1:mainSnd1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=143;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pa']((typeof mainSnd2 == "undefined"?$m.mainSnd2:mainSnd2), path);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			}
			$pyjs.track.lineno=146;
			$m['even'] = !$p['bool']($m['even']);
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['arg_audioPath'],['confirm', null]];
	$pyjs.track.lineno=225;
	$m['playAudioList'] = function(audioList) {
		var $add6,$add7,$add5,path,$add8;
		if ($p['bool']($p['op_eq'](audioList, $p['list']([])))) {
			return null;
		}
		path = $p['__op_add']($add7=$m['root_path'],$add8=(function(){try{try{$pyjs.in_try_except += 1;
		return audioList['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());

    loopSnd1 = new Audio();
    loopSnd2 = new Audio();
    
    console.log(audioList.__array)
    
    loopSnd1.addEventListener('ended', function(){
        if (audioList.__array.length == 0) {
            return
        } 
        loopSnd1.currentTime = 0;
        loopSnd1.pause();        
        path = $m['root_path']+audioList.__array.shift();
        console.log(path)
        loopSnd2.src = path
        loopSnd2.load();
        loopSnd2.play();
    }, false);
    loopSnd1.src = path
    loopSnd1.load();
    loopSnd1.play();
    
    loopSnd2.addEventListener('ended', function(){
        if (audioList.__array.length == 0) {
            return
        } 
        loopSnd2.currentTime = 0;
        loopSnd2.pause();        
        path = $m['root_path']+audioList.__array.shift();
        console.log(path)
        loopSnd1.src = path
        loopSnd1.load();
        loopSnd1.play();
    }, false);

    
	};
	$m['playAudioList'].__name__ = 'playAudioList';

	$m['playAudioList'].__bind_type__ = 0;
	$m['playAudioList'].__args__ = [null,null,['audioList']];
	return this;
}; /* end audioControls */


/* end module: audioControls */


/*
PYJS_DEPS: ['buzz.js']
*/
