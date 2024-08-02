"use strict";

document.body.innerHTML += "<h2>Ver prints do console...</h2>";

document.body.innerHTML += 
    "<h3>use strict - no início do js document é usado para " +
    "evitar o uso de variáveis sem a devida declaração. </h3>";

// descomente para forçar o erro...
// vglobal = 10;
var vglobal = 10;
console.log("vglobal está BEM declarado...");
console.log("vglobal: " + vglobal);


function teste() {
    // comente para corrigir o erro...
    console.log("vlocal está MAL declarado...");
    vlocal = 5;
    // descomente comente para corrigir o erro...
    // var vlocal = 5;
    console.log("vlocal: " + vlocal);
}

console.log(teste());


