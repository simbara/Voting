import buzz.js
from __pyjamas__ import JS

even = True

root_path = "http://10.0.22.106/" 


JS("""
var mainSnd = new buzz.sound("http://192.168.1.149/media/yes.wav");

var snd1 = new Audio();
var snd2 = new Audio();

var varSnd = new Audio();
var loopSnd1 = new Audio();
var loopSnd2 = new Audio();

""")

def isPlayingAudio():
    JS('''
    return !((mainSnd.paused || mainSnd.ended) && (snd1.paused || snd1.ended) && (snd2.paused || snd2.ended) && (varSnd.paused || varSnd.ended));
    ''')

def pauseAudio():
    JS('''
    snd1.pause();
    snd2.pause();
    mainSnd.pause();
    varSnd.pause();
    loopSnd1.pause();
    loopSnd2.pause();
    ''')
    
#
def fadeAway(sound):
    JS('''
    sound.fadeOut(1, function() {
        sound.pause()                     
        });  
    ''')
 
    
def pa(sound, path):
    JS('''
    sound.set("src", path);
    sound.bind("loadstart", function(e) {
        //console.log("start new audio");
        sound.setVolume(80);
        sound.play();
        });
    ''') 
    
#def playAudio(arg_audioPath, confirm = None):
#    global currObj, even
#    path = root_path + arg_audioPath
#    
#    # Say the word "Confirm" before the provided audio path
#    if confirm == True:
#        confirmPath = root_path + "media/confirm.wav"
#        confirmPath2 = root_path + "media/confirm2.wav"
#        #confirmPath = "http://10.0.22.220/media/confirm.wav"
#        JS('''
#/*
#        mainSnd.pause();
#        
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
#*/       
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
#   
#    else:
#        if even:
#            fadeAway(mainSnd2);
#            pa(mainSnd1, path);
#        else:
#            fadeAway(mainSnd1);
#            pa(mainSnd2, path);      
#        even = not even


#  
# TODO: make a version to play multiple audio files sequentially if provided a list
def playAudio(arg_audioPath, confirm=None):
    global currObj
    path = root_path + arg_audioPath

    
    #path = "http://10.0.22.220/" + currObj.audioPath
    #path = "/Users/kurifuc4/Projects/mysite/" + audioPath#+ currObj.audioPath
    
    # Say the word "Confirm" before the provided audio path
    if confirm == True:
        confirmPath = root_path + "media/confirm.wav"
        confirmPath2 = root_path + "media/confirm2.wav"
        #confirmPath = "http://10.0.22.220/media/confirm.wav"
        JS('''
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
    # All other audio
    else:
        JS('''
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
        ''')
        


      
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
  