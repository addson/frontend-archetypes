
/* 14 Switch */

var nota1 = prompt("Nota da Prova 1?");
var nota2 = prompt("Nota da Prova 2?");
var media = ((parseInt(nota1) + parseInt(nota2))/2);

//conceito
if(media < 7) 
    var conceito = "RUIM";
else if(media >= 7 && media < 8) 
    var conceito = "BOM";
else
    var conceito = "OTIMO";

//switch
switch(conceito) {
    case "RUIM":
        console.log("MELHORAR MUITO... MÉDIA: " + media);
        break;

    case "BOM":
        console.log("ESTÁ BOM... MÉDIA: " + media);
        break;

    case "OTIMO":
        console.log("PARABÉNS... MÉDIA: " + media);
        break;

    default:
}

//resultado com operador ternário
var resultado = media >= 7 ? "Você Passou de Ano..." : "INFELIZMENTE, você NÃO Passou de Ano...";
console.log(resultado);







