
var interval;
var h1;
var bi;

function iniciarInterval() {
    
    h1 = document.getElementById("h1");
    h1.innerText += (" " + "START");
    interval = setInterval(escreveComNumeroRandomicos, 1000);

    bi = document.getElementById("bi1");
    bi.disabled = true;
}

function pararInterval() {

    clearInterval(interval);
    h1.innerText += (" " + "STOP");
    bi.disabled = false;
}

function escreveComNumeroRandomicos() {
    
    h1.innerText += (" " + Math.round(Math.random() * 10));
}


//timer
var timer;
var h2;
var bt;

function iniciarTimer() {

    h2 = document.getElementById("h2");
    h2.innerText += (" " + "...");
    
    timer = setTimeout(escreve1NumeroRandomico, 5000);

    bt = document.getElementById("bt1");
    bt.disabled = true;
}

function pararTimer() {

    clearTimeout(timer);
    h2.innerText += (" " + "STOP");
    bt.disabled = false;
}

function escreve1NumeroRandomico() {

    h2.innerText += (" " + "START");
    h2.innerText += (" " + Math.round(Math.random() * 10));
    h2.innerText += (" " + "STOP");
    bt.disabled = false;
}




