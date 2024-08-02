
//usando propriedades default
function onLoadPropsDefault(element) {
    offPropsDefault(element);
}

function ligaDesligaPropsDefault(element) {

    if (element.value == "ON") {
        offPropsDefault(element);
    } else {
        onPropsDefault(element);
    }
}

function offPropsDefault(element) {
    element.value = "OFF";
    element.style.backgroundColor = "gainsboro";
    element.style.color = "black";
}

function onPropsDefault(element) {
    element.value = "ON";
    element.style.backgroundColor = "green";
    element.style.color = "white";
}

//usando SetAttribute
function onLoadSetAttribute(element) {
    offSetAttribute(element);
}

function ligaDesligaSetAttribute(element) {

    if (element.value == "ON") {
        offSetAttribute(element);
    } else {
        onSetAttribute(element);
    }
}

function offSetAttribute(element) {

    element.setAttribute("value", "OFF");
    element.setAttribute("class", "off");
}

function onSetAttribute(element) {

    element.setAttribute("value", "ON");
    element.setAttribute("class", "on");
}

function criaLista(element) {

    let input = document.getElementById("inqtd");
    let qtd = parseInt(input.value);
    console.log(qtd);

    let lista = document.getElementById("lista");
    let fatorAtt = lista.getAttribute("fator");
    let fator = parseInt(fatorAtt);
    console.log(fator);

    let listSize = qtd * fator;
    let h4 = document.getElementById("h4");
    h4.innerText = "list size = qtd x fator = " + qtd + " x " + fator;
    let conteudo = ""; 
    for (let index = 1; index <= listSize; index++) {
        
        conteudo += "<li>" + index + "</li>" + "\n";
    }
    lista.innerHTML = conteudo;
}

