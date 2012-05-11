def fade(audio, rampTime, targetVolume, tick):
    JS('''
    var originalVolume = audio.volume;
    console.log("fading");
    //
    if(!targetVolume) {
        targetVolume = 0;
    }

    // By default, ramp up in one second
    if(!rampTime) {
        rampTime = 1000;
    }

    // How often adjust audio volume (ms)
    if(!tick) {
        tick = 50;
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
            console.log(audio.volume);
            // Keep up going until 11
            setTimeout(ramp, tick);
        } else {
            audio.pause();

            // Reset audio volume so audio can be played again
            audio.volume = originalVolume;
        }
    }

    ramp();
	''')

 