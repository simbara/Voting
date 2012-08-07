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
	$m.__track_lines__[139] = 'audioControls.py, line 139:\n    confirmPath = root_path + "media/reselectCandidate.wav"';
	$m.__track_lines__[141] = "audioControls.py, line 141:\n    JS('''";
	$m.__track_lines__[149] = 'audioControls.py, line 149:\n    if even:';
	$m.__track_lines__[150] = 'audioControls.py, line 150:\n    fade(mainSnd2);';
	$m.__track_lines__[23] = 'audioControls.py, line 23:\n    def isPlayingAudio():';
	$m.__track_lines__[24] = "audioControls.py, line 24:\n    JS('''";
	$m.__track_lines__[153] = 'audioControls.py, line 153:\n    fade(mainSnd1);';
	$m.__track_lines__[154] = 'audioControls.py, line 154:\n    pa(mainSnd2, path);';
	$m.__track_lines__[28] = 'audioControls.py, line 28:\n    def pauseAudio():';
	$m.__track_lines__[29] = "audioControls.py, line 29:\n    JS('''";
	$m.__track_lines__[161] = 'audioControls.py, line 161:\n    def playAudioList(audioList):';
	$m.__track_lines__[162] = 'audioControls.py, line 162:\n    if audioList == []:';
	$m.__track_lines__[163] = 'audioControls.py, line 163:\n    return';
	$m.__track_lines__[164] = 'audioControls.py, line 164:\n    path = root_path + audioList.pop(0)';
	$m.__track_lines__[165] = "audioControls.py, line 165:\n    JS('''";
	$m.__track_lines__[40] = 'audioControls.py, line 40:\n    def fadeAudio():';
	$m.__track_lines__[41] = 'audioControls.py, line 41:\n    fade(snd1)';
	$m.__track_lines__[42] = 'audioControls.py, line 42:\n    fade(snd2)';
	$m.__track_lines__[43] = 'audioControls.py, line 43:\n    fade(varSnd)';
	$m.__track_lines__[45] = 'audioControls.py, line 45:\n    def fade(audio, rampTime, targetVolume, tick):';
	$m.__track_lines__[46] = "audioControls.py, line 46:\n    JS('''";
	$m.__track_lines__[157] = 'audioControls.py, line 157:\n    even = not even';
	$m.__track_lines__[151] = 'audioControls.py, line 151:\n    pa(mainSnd1, path);';
	$m.__track_lines__[93] = 'audioControls.py, line 93:\n    def pa(sound, path):';
	$m.__track_lines__[94] = "audioControls.py, line 94:\n    JS('''";
	$m.__track_lines__[100] = 'audioControls.py, line 100:\n    def playAudio(arg_audioPath, confirm = None):';
	$m.__track_lines__[101] = 'audioControls.py, line 101:\n    global currObj, even';
	$m.__track_lines__[102] = 'audioControls.py, line 102:\n    path = root_path + arg_audioPath';
	$m.__track_lines__[105] = 'audioControls.py, line 105:\n    if confirm == True:';
	$m.__track_lines__[106] = 'audioControls.py, line 106:\n    confirmPath = root_path + "media/confirm.wav"';
	$m.__track_lines__[107] = 'audioControls.py, line 107:\n    confirmPath2 = root_path + "media/confirm2.wav"';
	$m.__track_lines__[109] = "audioControls.py, line 109:\n    JS('''";


	$pyjs.track.module='audioControls';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=2;
	$pyjs.track.lineno=4;
	$m['even'] = true;
	$pyjs.track.lineno=6;
	$m['root_path'] = 'http://10.0.22.106/';
	$pyjs.track.lineno=8;

var mainSnd = new Audio();
var mainSnd1 = new Audio();
var mainSnd2 = new Audio();

var snd1 = new Audio();
var snd2 = new Audio();
var varSnd = new Audio();

var loopSnd1 = new Audio();
var loopSnd2 = new Audio();

var sound = new Audio();

	$pyjs.track.lineno=23;
	$m['isPlayingAudio'] = function() {


    return !((mainSnd1.paused || mainSnd1.ended) && (mainSnd2.paused || mainSnd2.ended) && (mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    
	};
	$m['isPlayingAudio'].__name__ = 'isPlayingAudio';

	$m['isPlayingAudio'].__bind_type__ = 0;
	$m['isPlayingAudio'].__args__ = [null,null];
	$pyjs.track.lineno=28;
	$m['pauseAudio'] = function() {

		$pyjs.track={module:'audioControls',lineno:28};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=28;
		$pyjs.track.lineno=29;

    snd1.pause();
    snd2.pause();
    mainSnd.pause();
    mainSnd1.pause();
    mainSnd2.pause();
    varSnd.pause();
    loopSnd1.pause();
    loopSnd2.pause();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['pauseAudio'].__name__ = 'pauseAudio';

	$m['pauseAudio'].__bind_type__ = 0;
	$m['pauseAudio'].__args__ = [null,null];
	$pyjs.track.lineno=40;
	$m['fadeAudio'] = function() {

		$pyjs.track={module:'audioControls',lineno:40};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=40;
		$pyjs.track.lineno=41;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof fade == "undefined"?$m.fade:fade)((typeof snd1 == "undefined"?$m.snd1:snd1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=42;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof fade == "undefined"?$m.fade:fade)((typeof snd2 == "undefined"?$m.snd2:snd2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs.track.lineno=43;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof fade == "undefined"?$m.fade:fade)((typeof varSnd == "undefined"?$m.varSnd:varSnd));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['fadeAudio'].__name__ = 'fadeAudio';

	$m['fadeAudio'].__bind_type__ = 0;
	$m['fadeAudio'].__args__ = [null,null];
	$pyjs.track.lineno=45;
	$m['fade'] = function(audio, rampTime, targetVolume, tick) {

		$pyjs.track={module:'audioControls',lineno:45};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=45;
		$pyjs.track.lineno=46;

    audio.volume = 0.8;
    var originalVolume = audio.volume;
    //
    if(!targetVolume) {
        targetVolume = 0;
    }

    // By default, ramp up in one second
    if(!rampTime) {
        rampTime = 200;
    }

    // How often adjust audio volume (ms)
    if(!tick) {
        tick = 20;
    }

    var volumeStep = (audio.volume - targetVolume) / (rampTime / tick);

    if(!volumeStep) {
        console.log(audio.volume)

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
	$pyjs.track.lineno=93;
	$m['pa'] = function(sound, path) {

		$pyjs.track={module:'audioControls',lineno:93};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=93;
		$pyjs.track.lineno=94;

    sound.src = path;
    sound.volume = .8;
    sound.play();
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['pa'].__name__ = 'pa';

	$m['pa'].__bind_type__ = 0;
	$m['pa'].__args__ = [null,null,['sound'],['path']];
	$pyjs.track.lineno=100;
	$m['playAudio'] = function(arg_audioPath, confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[3][1];
		var confirmPath,confirmPath2,$add2,$add3,$add1,$add6,$add7,$add4,$add5,path,$add8;
		$pyjs.track={module:'audioControls',lineno:100};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls';
		$pyjs.track.lineno=100;
		$pyjs.track.lineno=101;
		$pyjs.track.lineno=102;
		path = $p['__op_add']($add1=$m['root_path'],$add2=arg_audioPath);
		$pyjs.track.lineno=105;
		if ($p['bool']($p['op_eq'](confirm, true))) {
			$pyjs.track.lineno=106;
			confirmPath = $p['__op_add']($add3=$m['root_path'],$add4='media/confirm.wav');
			$pyjs.track.lineno=107;
			confirmPath2 = $p['__op_add']($add5=$m['root_path'],$add6='media/confirm2.wav');
			$pyjs.track.lineno=109;


        mainSnd.pause();
        snd1.volume = 0.8;
        snd2.volume = 0.8;
        varSnd.volume = 0.8;
        
        snd1.src = confirmPath;
        snd1.load();
        snd2.src = confirmPath2;
        snd2.load();

        snd1.addEventListener('ended', function() {
            snd1.currentTime = 0;
            snd1.pause();
            varSnd.src = path;
            varSnd.play();
        }, false);
        
        varSnd.addEventListener('ended', function() {
            varSnd.currentTime = 0;
            varSnd.pause();
            snd2.play();
        }, false);
       
        snd1.play();
        
		}
		else if ($p['bool']($p['op_eq'](confirm, false))) {
			$pyjs.track.lineno=139;
			confirmPath = $p['__op_add']($add7=$m['root_path'],$add8='media/reselectCandidate.wav');
			$pyjs.track.lineno=141;

        snd1.pause();
        snd2.pause();
        mainSnd.src = confirmPath;
        mainSnd.play();
        
		}
		else {
			$pyjs.track.lineno=149;
			if ($p['bool']($m['even'])) {
				$pyjs.track.lineno=150;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fade']((typeof mainSnd2 == "undefined"?$m.mainSnd2:mainSnd2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=151;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pa']((typeof mainSnd1 == "undefined"?$m.mainSnd1:mainSnd1), path);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			else {
				$pyjs.track.lineno=153;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fade']((typeof mainSnd1 == "undefined"?$m.mainSnd1:mainSnd1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.track.lineno=154;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pa']((typeof mainSnd2 == "undefined"?$m.mainSnd2:mainSnd2), path);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs.track.lineno=157;
			$m['even'] = !$p['bool']($m['even']);
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['arg_audioPath'],['confirm', null]];
	$pyjs.track.lineno=161;
	$m['playAudioList'] = function(audioList) {
		var $add10,$add11,$add12,path,$add9;
		if ($p['bool']($p['op_eq'](audioList, $p['list']([])))) {
			return null;
		}
		path = $p['__op_add']($add11=$m['root_path'],$add12=(function(){try{try{$pyjs.in_try_except += 1;
		return audioList['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
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
