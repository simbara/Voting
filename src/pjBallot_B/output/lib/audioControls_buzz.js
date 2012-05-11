/* start module: audioControls_buzz */
$pyjs.loaded_modules['audioControls_buzz'] = function (__mod_name__) {
	if($pyjs.loaded_modules['audioControls_buzz'].__was_initialized__) return $pyjs.loaded_modules['audioControls_buzz'];
	var $m = $pyjs.loaded_modules["audioControls_buzz"];
	$m.__repr__ = function() { return "<module: audioControls_buzz>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'audioControls_buzz';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'audioControls_buzz.py, line 1:\n    import buzz.js';
	$m.__track_lines__[2] = 'audioControls_buzz.py, line 2:\n    from __pyjamas__ import JS';
	$m.__track_lines__[4] = 'audioControls_buzz.py, line 4:\n    even = True';
	$m.__track_lines__[6] = 'audioControls_buzz.py, line 6:\n    root_path = "http://10.0.22.220/"';
	$m.__track_lines__[9] = 'audioControls_buzz.py, line 9:\n    JS("""';
	$m.__track_lines__[23] = 'audioControls_buzz.py, line 23:\n    def isPlayingAudio():';
	$m.__track_lines__[24] = "audioControls_buzz.py, line 24:\n    JS('''";
	$m.__track_lines__[28] = 'audioControls_buzz.py, line 28:\n    def pauseAudio():';
	$m.__track_lines__[29] = "audioControls_buzz.py, line 29:\n    JS('''";
	$m.__track_lines__[39] = 'audioControls_buzz.py, line 39:\n    def fadeAway(sound):';
	$m.__track_lines__[40] = "audioControls_buzz.py, line 40:\n    JS('''";
	$m.__track_lines__[47] = 'audioControls_buzz.py, line 47:\n    def pa(sound, path):';
	$m.__track_lines__[48] = "audioControls_buzz.py, line 48:\n    JS('''";
	$m.__track_lines__[57] = 'audioControls_buzz.py, line 57:\n    def playAudio(arg_audioPath, confirm = None):';
	$m.__track_lines__[58] = 'audioControls_buzz.py, line 58:\n    global currObj, even';
	$m.__track_lines__[59] = 'audioControls_buzz.py, line 59:\n    path = root_path + arg_audioPath';
	$m.__track_lines__[62] = 'audioControls_buzz.py, line 62:\n    if confirm == True:';
	$m.__track_lines__[63] = 'audioControls_buzz.py, line 63:\n    confirmPath = root_path + "media/confirm.wav"';
	$m.__track_lines__[192] = 'audioControls_buzz.py, line 192:\n    if audioList == []:';
	$m.__track_lines__[193] = 'audioControls_buzz.py, line 193:\n    return';
	$m.__track_lines__[194] = 'audioControls_buzz.py, line 194:\n    path = root_path + audioList.pop(0)';
	$m.__track_lines__[195] = "audioControls_buzz.py, line 195:\n    JS('''";
	$m.__track_lines__[104] = 'audioControls_buzz.py, line 104:\n    if even:';
	$m.__track_lines__[105] = 'audioControls_buzz.py, line 105:\n    fadeAway(mainSnd2);';
	$m.__track_lines__[106] = 'audioControls_buzz.py, line 106:\n    pa(mainSnd1, path);';
	$m.__track_lines__[108] = 'audioControls_buzz.py, line 108:\n    fadeAway(mainSnd1);';
	$m.__track_lines__[109] = 'audioControls_buzz.py, line 109:\n    pa(mainSnd2, path);';
	$m.__track_lines__[112] = 'audioControls_buzz.py, line 112:\n    even = not even';
	$m.__track_lines__[191] = 'audioControls_buzz.py, line 191:\n    def playAudioList(audioList):';


	$pyjs.track.module='audioControls_buzz';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=2;
	$pyjs.track.lineno=4;
	$m['even'] = true;
	$pyjs.track.lineno=6;
	$m['root_path'] = 'http://10.0.22.220/';
	$pyjs.track.lineno=9;

var mainSnd1 = new buzz.sound("http://10.0.22.220/media/yes.wav");
var mainSnd2 = new buzz.sound("http://10.0.22.220/media/no.wav");

var snd1 = new Audio();
var snd2 = new Audio();

var varSnd = new Audio();
var loopSnd1 = new Audio();
var loopSnd2 = new Audio();
var mainSnd = new Audio();


	$pyjs.track.lineno=23;
	$m['isPlayingAudio'] = function() {


    return !((mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    
	};
	$m['isPlayingAudio'].__name__ = 'isPlayingAudio';

	$m['isPlayingAudio'].__bind_type__ = 0;
	$m['isPlayingAudio'].__args__ = [null,null];
	$pyjs.track.lineno=28;
	$m['pauseAudio'] = function() {

		$pyjs.track={module:'audioControls_buzz',lineno:28};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=28;
		$pyjs.track.lineno=29;

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
	$pyjs.track.lineno=39;
	$m['fadeAway'] = function(sound) {

		$pyjs.track={module:'audioControls_buzz',lineno:39};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=39;
		$pyjs.track.lineno=40;

    sound.fadeOut(1, function() {
        sound.pause()                     
        });  
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['fadeAway'].__name__ = 'fadeAway';

	$m['fadeAway'].__bind_type__ = 0;
	$m['fadeAway'].__args__ = [null,null,['sound']];
	$pyjs.track.lineno=47;
	$m['pa'] = function(sound, path) {

		$pyjs.track={module:'audioControls_buzz',lineno:47};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=47;
		$pyjs.track.lineno=48;

    sound.set("src", path);
    sound.bind("loadstart", function(e) {
        //console.log("start new audio");
        sound.setVolume(80);
        sound.play();
        });
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['pa'].__name__ = 'pa';

	$m['pa'].__bind_type__ = 0;
	$m['pa'].__args__ = [null,null,['sound'],['path']];
	$pyjs.track.lineno=57;
	$m['playAudio'] = function(arg_audioPath, confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[3][1];
		var confirmPath,$add2,$add3,$add1,$add4,path;
		$pyjs.track={module:'audioControls_buzz',lineno:57};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=57;
		$pyjs.track.lineno=58;
		$pyjs.track.lineno=59;
		path = $p['__op_add']($add1=$m['root_path'],$add2=arg_audioPath);
		$pyjs.track.lineno=62;
		if ($p['bool']($p['op_eq'](confirm, true))) {
			$pyjs.track.lineno=63;
			confirmPath = $p['__op_add']($add3=$m['root_path'],$add4='media/confirm.wav');
		}
		else {
			$pyjs.track.lineno=104;
			if ($p['bool']($m['even'])) {
				$pyjs.track.lineno=105;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fadeAway']((typeof mainSnd2 == "undefined"?$m.mainSnd2:mainSnd2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.track.lineno=106;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pa']((typeof mainSnd1 == "undefined"?$m.mainSnd1:mainSnd1), path);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			}
			else {
				$pyjs.track.lineno=108;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['fadeAway']((typeof mainSnd1 == "undefined"?$m.mainSnd1:mainSnd1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=109;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['pa']((typeof mainSnd2 == "undefined"?$m.mainSnd2:mainSnd2), path);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			}
			$pyjs.track.lineno=112;
			$m['even'] = !$p['bool']($m['even']);
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['arg_audioPath'],['confirm', null]];
	$pyjs.track.lineno=191;
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
}; /* end audioControls_buzz */


/* end module: audioControls_buzz */


/*
PYJS_DEPS: ['buzz.js']
*/
