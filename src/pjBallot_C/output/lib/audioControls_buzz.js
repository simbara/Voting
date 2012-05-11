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
	$m.__track_lines__[21] = 'audioControls_buzz.py, line 21:\n    def isPlayingAudio():';
	$m.__track_lines__[22] = "audioControls_buzz.py, line 22:\n    JS('''";
	$m.__track_lines__[152] = 'audioControls_buzz.py, line 152:\n    confirmPath = root_path + "media/reselectCandidate.wav"';
	$m.__track_lines__[154] = "audioControls_buzz.py, line 154:\n    JS('''";
	$m.__track_lines__[27] = "audioControls_buzz.py, line 27:\n    JS('''";
	$m.__track_lines__[26] = 'audioControls_buzz.py, line 26:\n    def pauseAudio():';
	$m.__track_lines__[162] = "audioControls_buzz.py, line 162:\n    JS('''";
	$m.__track_lines__[37] = 'audioControls_buzz.py, line 37:\n    def fadeAway(sound):';
	$m.__track_lines__[38] = "audioControls_buzz.py, line 38:\n    JS('''";
	$m.__track_lines__[45] = 'audioControls_buzz.py, line 45:\n    def pa(sound, path):';
	$m.__track_lines__[46] = "audioControls_buzz.py, line 46:\n    JS('''";
	$m.__track_lines__[189] = 'audioControls_buzz.py, line 189:\n    def playAudioList(audioList):';
	$m.__track_lines__[190] = 'audioControls_buzz.py, line 190:\n    if audioList == []:';
	$m.__track_lines__[191] = 'audioControls_buzz.py, line 191:\n    return';
	$m.__track_lines__[192] = 'audioControls_buzz.py, line 192:\n    path = root_path + audioList.pop(0)';
	$m.__track_lines__[193] = "audioControls_buzz.py, line 193:\n    JS('''";
	$m.__track_lines__[113] = 'audioControls_buzz.py, line 113:\n    def playAudio(arg_audioPath, confirm=None):';
	$m.__track_lines__[114] = 'audioControls_buzz.py, line 114:\n    global currObj';
	$m.__track_lines__[115] = 'audioControls_buzz.py, line 115:\n    path = root_path + arg_audioPath';
	$m.__track_lines__[122] = 'audioControls_buzz.py, line 122:\n    if confirm == True:';
	$m.__track_lines__[123] = 'audioControls_buzz.py, line 123:\n    confirmPath = root_path + "media/confirm.wav"';
	$m.__track_lines__[124] = 'audioControls_buzz.py, line 124:\n    confirmPath2 = root_path + "media/confirm2.wav"';
	$m.__track_lines__[126] = "audioControls_buzz.py, line 126:\n    JS('''";


	$pyjs.track.module='audioControls_buzz';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=2;
	$pyjs.track.lineno=4;
	$m['even'] = true;
	$pyjs.track.lineno=6;
	$m['root_path'] = 'http://10.0.22.220/';
	$pyjs.track.lineno=9;

var mainSnd = new buzz.sound("http://10.0.22.220/media/yes.wav");

var snd1 = new Audio();
var snd2 = new Audio();

var varSnd = new Audio();
var loopSnd1 = new Audio();
var loopSnd2 = new Audio();


	$pyjs.track.lineno=21;
	$m['isPlayingAudio'] = function() {


    return !((mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    
	};
	$m['isPlayingAudio'].__name__ = 'isPlayingAudio';

	$m['isPlayingAudio'].__bind_type__ = 0;
	$m['isPlayingAudio'].__args__ = [null,null];
	$pyjs.track.lineno=26;
	$m['pauseAudio'] = function() {

		$pyjs.track={module:'audioControls_buzz',lineno:26};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=26;
		$pyjs.track.lineno=27;

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
	$pyjs.track.lineno=37;
	$m['fadeAway'] = function(sound) {

		$pyjs.track={module:'audioControls_buzz',lineno:37};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=37;
		$pyjs.track.lineno=38;

    sound.fadeOut(1, function() {
        sound.pause()                     
        });  
    
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	};
	$m['fadeAway'].__name__ = 'fadeAway';

	$m['fadeAway'].__bind_type__ = 0;
	$m['fadeAway'].__args__ = [null,null,['sound']];
	$pyjs.track.lineno=45;
	$m['pa'] = function(sound, path) {

		$pyjs.track={module:'audioControls_buzz',lineno:45};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=45;
		$pyjs.track.lineno=46;

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
	$pyjs.track.lineno=113;
	$m['playAudio'] = function(arg_audioPath, confirm) {
		if (typeof confirm == 'undefined') confirm=arguments.callee.__args__[3][1];
		var confirmPath,confirmPath2,$add2,$add3,$add1,$add6,$add7,$add4,$add5,path,$add8;
		$pyjs.track={module:'audioControls_buzz',lineno:113};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='audioControls_buzz';
		$pyjs.track.lineno=113;
		$pyjs.track.lineno=114;
		$pyjs.track.lineno=115;
		path = $p['__op_add']($add1=$m['root_path'],$add2=arg_audioPath);
		$pyjs.track.lineno=122;
		if ($p['bool']($p['op_eq'](confirm, true))) {
			$pyjs.track.lineno=123;
			confirmPath = $p['__op_add']($add3=$m['root_path'],$add4='media/confirm.wav');
			$pyjs.track.lineno=124;
			confirmPath2 = $p['__op_add']($add5=$m['root_path'],$add6='media/confirm2.wav');
			$pyjs.track.lineno=126;

        mainSnd.pause();
        
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
			$pyjs.track.lineno=152;
			confirmPath = $p['__op_add']($add7=$m['root_path'],$add8='media/reselectCandidate.wav');
			$pyjs.track.lineno=154;

        snd1.pause();
        snd2.pause();
        mainSnd.src = confirmPath;
        mainSnd.play();
        
		}
		else {
			$pyjs.track.lineno=162;

        //console.log(mainSnd.get("playbackRate"));
        if (mainSnd.isPaused() == false) {
            //console.log("sound is playing");
            mainSnd.fadeOut(1, function() {
                //console.log("fading");
                mainSnd.pause().bind("pause", function(e) {
                    //console.log("old sound paused");
                    mainSnd.set("src", path);
                    //console.log(mainSnd.get("src"));                      
                });  
            });
        } else {
            //console.log("sound is NOT playing");
            mainSnd.set("src", path);
            //console.log(mainSnd.get("src"));
        }
        mainSnd.bind("loadstart", function(e) {
            //console.log("start new audio");
            mainSnd.setVolume(80);
            mainSnd.play();
        });   
        
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['playAudio'].__name__ = 'playAudio';

	$m['playAudio'].__bind_type__ = 0;
	$m['playAudio'].__args__ = [null,null,['arg_audioPath'],['confirm', null]];
	$pyjs.track.lineno=189;
	$m['playAudioList'] = function(audioList) {
		var $add10,$add11,$add12,path,$add9;
		if ($p['bool']($p['op_eq'](audioList, $p['list']([])))) {
			return null;
		}
		path = $p['__op_add']($add11=$m['root_path'],$add12=(function(){try{try{$pyjs.in_try_except += 1;
		return audioList['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
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
