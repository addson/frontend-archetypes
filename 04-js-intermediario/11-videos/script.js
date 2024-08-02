

let video = document.getElementById("v1");

function retroceder() {

    video.currentTime -= 15;
}

function avancar() {

    video.currentTime += 15;
}

function maisvelocidade() {

    video.playbackRate += 0.1;
}

function menosvelocidade() {
    video.playbackRate -= 0.1;
}

function play() {

    video.play();
}

function pause() {

    video.pause();
}

function stop() {

    video.pause();
    video.currentTime = 0;
    
}