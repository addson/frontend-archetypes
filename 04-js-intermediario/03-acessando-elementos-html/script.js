
console.log("############### getElementById ##################");
function getTagByID(id) {
    let element = document.getElementById(id);
    return element;
}
console.log(getTagByID("p1"));


console.log("############### getElementsByClassName ##################");
function getTagsByClass(className) {
    let elements = document.getElementsByClassName(className);
    return elements;
}
for (const element of getTagsByClass("p")) {
    console.log(element);
}


console.log("############### getElementsByTagName ##################");
function getTagsByName(tagName) {
    let elements = document.getElementsByTagName(tagName);
    return elements;
}
for (const element of getTagsByName("h1")) {
    console.log(element);
}


console.log("############### change innerHTML - Adiciono outra tag HTML dentro da tag atual ##################");
function changeInnerHTML(element, newContent) {
    element.innerHTML = newContent;
    return element;
}
let element1 = getTagByID("p1");
console.log(changeInnerHTML(element1, "<h1>Entende e adiciona de fato uma tag HTML...</h1>"));


console.log("############### change changeInnerText - Não entende tag HTML ##################");
function changeInnerText(element, newContent) {
    element.innerText = newContent;
    return element;
}
let element2 = getTagByID("p2");
console.log(changeInnerText(element2, "<h1>Não entende tag HTML</h1>..."));


console.log("############### change changeTextContent - Também Não entende tag HTML ##################");
function changeTextContent(element, newContent) {
    element.textContent = newContent;
    return element;
}
let element3 = getTagByID("p3");
console.log(changeTextContent(element3, "<h1>Também Não entende tag HTML</h1>..."));


console.log("############### innerText - Não mostra tag oculta ##################");
let element4 = getTagByID("p4");
console.log(element4.innerText);


console.log("############### textContent - Mostra tag oculta ##################");
let element5 = getTagByID("p5");
console.log(element5.textContent);


console.log("############### Via padrão CSS - Modificando um atributo do elemento ##################");
element4.style = "color: white; background-color: black;";
console.log("-");

console.log("############### Via Atributo - Modificando um atributo do elemento ##################");
element5.style.color="white";
element5.style.backgroundColor="blue";
console.log("-");

console.log("############### Criando ou Modificando um atributo do elemento ##################");
element4.setAttribute("novo-atributo-criado", "Addson");
console.log(element4);

