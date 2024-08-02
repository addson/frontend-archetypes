"use strict";

document.body.innerHTML += "<h2>Ver prints do console...</h2>";


console.log("funções padrão...");
document.body.innerHTML += "<h3>funçoes padrão...</h3>";
let resultado = function quadruplicar(x) {
    return x*4;
}
console.log(resultado(5));
document.body.innerHTML += "resultado(5): " + resultado(5);

console.log("funções anônimas...");
document.body.innerHTML += "<h3>funções anônimas...</h3>";
resultado = function (x) {
    return x*3;
}
console.log(resultado(5));
document.body.innerHTML += "resultado(5): " + resultado(5);

console.log("arrow functions...");
document.body.innerHTML += "<h3>arrow functions...</h3>";
resultado = (x) => {
    return x*2;
}
console.log(resultado(5));
document.body.innerHTML += "resultado(5): " + resultado(5);

console.log("arrow functions + simples...");
document.body.innerHTML += "<h3>arrow functions + simples...</h3>";
resultado = x => x*1;
console.log(resultado(5));
document.body.innerHTML += "resultado(5): " + resultado(5);

console.log("IMPORTANTE: arrow functions não funcionam com o this e nem com o bind...");
document.body.innerHTML += "<h3>IMPORTANTE</h3>";
document.body.innerHTML += "arrow functions não funcionam com o this e nem com o bind...";




