import buzz.js
from __pyjamas__ import JS

even = True

root_path = "http://10.0.22.106/" 

JS("""
var mainSnd = new Audio();
var mainSnd1 = new Audio();
var mainSnd2 = new Audio();

var snd1 = new Audio();
var snd2 = new Audio();
var varSnd = new Audio();

var loopSnd1 = new Audio();
var loopSnd2 = new Audio();

var sound = new Audio();
""")

def isPlayingAudio():
    JS('''
    return !((mainSnd1.paused || mainSnd1.ended) && (mainSnd2.paused || mainSnd2.ended) && (mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    ''')

def pauseAudio():
    JS('''
    snd1.pause();
    snd2.pause();
    mainSnd.pause();
    mainSnd1.pause();
    mainSnd2.pause();
    varSnd.pause();
    loopSnd1.pause();
    loopSnd2.pause();
    ''')
    
def fadeAudio():
    fade(snd1)
    fade(snd2)
    fade(varSnd)
 
def fade(audio, rampTime, targetVolume, tick):
    JS('''
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
    ''')
    
    
def pa(sound, path):
    JS('''
    sound.src = path;
    sound.volume = .8;
    sound.play();
    ''') 
    
def playAudio(arg_audioPath, confirm = None):
    global currObj, even
    path = root_path + arg_audioPath
    
    # Say the word "Confirm" before the provided audio path
    if confirm == True:
        confirmPath = root_path + "media/confirm.wav"
        confirmPath2 = root_path + "media/confirm2.wav"
        #confirmPath = "http://10.0.22.220/media/confirm.wav"
        JS('''

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
        ''')
    
    # Say the word "Reselect"
    elif confirm == False:
        confirmPath = root_path + "media/reselectCandidate.wav"
        #confirmPath = "http://10.0.22.220/" + "media/reselectCandidate.wav"
        JS('''
        snd1.pause();
        snd2.pause();
        mainSnd.src = confirmPath;
        mainSnd.play();
        ''')
   
    else:
        if even:
            fade(mainSnd2);
            pa(mainSnd1, path);
        else:
            fade(mainSnd1);
            pa(mainSnd2, path);
        
        
        even = not even


      
def playAudioList(audioList):
    if audioList == []: 
        return
    path = root_path + audioList.pop(0)
    JS('''
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

    ''')


##  
## TODO: make a version to play multiple audio files sequentially if provided a list
#def playAudio2(arg_audioPath, confirm=None):
#    global currObj
#    path = root_path + arg_audioPath
#
#    
#    #path = "http://10.0.22.220/" + currObj.audioPath
#    #path = "/Users/kurifuc4/Projects/mysite/" + audioPath#+ currObj.audioPath
#    
#    # Say the word "Confirm" before the provided audio path
#    if confirm == True:
#        confirmPath = root_path + "media/confirm.wav"
#        confirmPath2 = root_path + "media/confirm2.wav"
#        #confirmPath = "http://10.0.22.220/media/confirm.wav"
#        JS('''
#        mainSnd.pause();
#        
#        snd1.src = confirmPath;
#        snd1.load();
#        snd2.src = confirmPath2;
#        snd2.load();
#
#        snd1.addEventListener('ended', function() {
#            snd1.currentTime = 0;
#            snd1.pause();
#            varSnd.src = path;
#            varSnd.play();
#        }, false);
#        
#        varSnd.addEventListener('ended', function() {
#            varSnd.currentTime = 0;
#            varSnd.pause();
#            snd2.play();
#        }, false);
#        
#        snd1.play();
#        ''')
#
#    # Say the word "Reselect"
#    elif confirm == False:
#        confirmPath = root_path + "media/reselectCandidate.wav"
#        #confirmPath = "http://10.0.22.220/" + "media/reselectCandidate.wav"
#        JS('''
#        snd1.pause();
#        snd2.pause();
#        mainSnd.src = confirmPath;
#        mainSnd.play();
#        ''')
#    # All other audio
#    else:
#        JS('''
#        //console.log(mainSnd.get("playbackRate"));
#        if (mainSnd.isPaused() == false) {
#            //console.log("sound is playing");
#            mainSnd.fadeOut(1, function() {
#                //console.log("fading");
#                mainSnd.pause().bind("pause", function(e) {
#                    //console.log("old sound paused");
#                    mainSnd.set("src", path);
#                    //console.log(mainSnd.get("src"));                      
#                });  
#            });
#        } else {
#            //console.log("sound is NOT playing");
#            mainSnd.set("src", path);
#            //console.log(mainSnd.get("src"));
#        }
#        mainSnd.bind("loadstart", function(e) {
#            //console.log("start new audio");
#            mainSnd.setVolume(80);
#            mainSnd.play();
#        });   
#        ''')
#        
