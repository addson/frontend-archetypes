
function h3Click() {
    console.log('h3 clicado usando funções js no evento onclick...');
}

function changeH3Feio() {
    let input = document.getElementById("i1");
    let h3 = document.getElementsByTagName("h3")[4];
    h3.innerText = input.value;
}

function changeH3Bonito(input) {
    let h3 = document.getElementsByTagName("h3")[4];
    h3.innerText = input.value;
}

function changeH3Automatico(input) {
    let h3 = document.getElementsByTagName("h3")[5];
    h3.innerText = input.value;
}

function onOver(element) {
    element.style.backgroundColor = "red";
}

function onOut(element) {
    element.style.backgroundColor = "white";
}

function onOverRefFuncJs(element) {
    //nao pode finalizar com o parenteses do changeTextOnOverJs
    //somente chamamos a referencia do changeTextOnOverJs
    element.onclick = changeTextOnOverRefFuncJs; 
}
function changeTextOnOverRefFuncJs() {
    this.innerText += " >> onOver chamado... e logo depois onClick também chamado via referencia de funcao...";
}

function onOutRefFuncJs(element) {
    element.innerText = "clique aqui e teste a chamada função por referência dentro do js...";
}

function onOverEventListenerJs(element) {
    element.addEventListener("click", changeTextOnOverEventListenerJs); 
}
function changeTextOnOverEventListenerJs() {
    this.innerText += " >> onOver chamado... e logo depois onClick também chamado via addEventListener...";
}
function onOutEventListenerJs(element) {
    element.innerText = "clique aqui e teste eventListener dentro do js...";
}

function changeColor(element) {
    element.style.backgroundColor = "red    ";
}

function resetColor(element) {
    element.style.backgroundColor = document.body.style.backgroundColor;
}

function onOverEventListenerJs2(element) {
    element.addEventListener("click", changeTextOnOverEventListenerJs2); 
}
function changeTextOnOverEventListenerJs2(event) {
    event.target.innerText += " >> onOver chamado... e logo depois onClick via event.target do addEventListener...";
}
function onOutEventListenerJs2(element) {
    element.innerText = "clique aqui e teste onClick via event.target do addEventListener dentro do js...";
}



