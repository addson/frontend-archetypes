

let audio = document.getElementById("a1");

function retroceder() {

    audio.currentTime -= 15;
}

function avancar() {

    audio.currentTime += 15;
}

function maisvelocidade() {

    audio.playbackRate += 0.1;
}

function menosvelocidade() {
    audio.playbackRate -= 0.1;
}

function play() {

    audio.play();
}

function pause() {

    audio.pause();
}

function stop() {

    audio.pause();
    audio.currentTime = 0;
    
}