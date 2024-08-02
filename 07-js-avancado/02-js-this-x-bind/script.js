"use strict";

document.body.innerHTML += "<h2>Ver prints do console...</h2>";


function acertouOChute() {
    console.log(this.bingo);
    document.body.innerHTML += this.bingo + "<br>";
}

let JogadorFutebol = {
    bingo: "Gooooooooooooooool",
    chuta: acertouOChute
}

let JogadorBasquete = {
    bingo: "Sextaaaaaaaaaaaaaa",
    chuta: acertouOChute
}

let JogadorVoley = {
    bingo: "Poooooooooooooonto",
    chuta: acertouOChute
}

console.log("usando o this...");
document.body.innerHTML += "<h3>Chamando o acertouOChute() usando o this...</h3>";
JogadorFutebol.chuta();
JogadorBasquete.chuta();

console.log("usando o bind...");
document.body.innerHTML += "<h3>Chamando o acertouOChute() usando o bind...</h3>";
let usandoBind = acertouOChute.bind(JogadorVoley);
usandoBind();


