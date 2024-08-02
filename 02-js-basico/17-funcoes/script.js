
/* 17 Funções */
console.log("");

//não precisa colocar o var nos parametros
function media(nota1, nota2) {
    return ((nota1 + nota2)/2);
}
console.log("valor da media: " + media(10, 6));

//atribuição de função a variavel
var variavel = function saudacao() {
    return "atribuição de função a variavel..."
}
console.log(variavel());

//função anônima
var produto = function (nota1, nota2) {
    return (nota1 * nota2);
}
console.log("função anônima: " + produto(2, 5));

//função anônima com arrow
var soma = (nota1, nota2) => {
    return (nota1 + nota2);
}
console.log("função anônima com arrow(=>): " + soma(4, 8));










