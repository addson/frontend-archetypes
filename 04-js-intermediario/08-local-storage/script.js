

function calLocalStorageWithInputSring(input) {
    let h3 = document.getElementById("h3");
    h3.innerText = input.value;

    console.log("");
    console.log(">> Guardando o dado...");
    localStorage.setItem("nome", input.value);
    console.log(localStorage.getItem("nome"));
}

//if I want storage an object I use JSON
function calLocalStorageWithObject(object) {
    let json = JSON.stringify(object); //here
    let h5 = document.getElementById("h5");
    h5.innerText = json;

    console.log("");
    console.log(">> Saving the data...");
    localStorage.setItem("key", json);
    let objectBack = JSON.parse(localStorage.getItem("key")); //here
    console.log(objectBack);
}

function updateH5() {
    let json = localStorage.getItem("key");
    let h5 = document.getElementById("h5");
    h5.innerText = json;

    let object = createObjectEx();
    calLocalStorageWithObject(object);
}

function createObjectEx() {
    let object = {
        nome: "Addson",
        idade: 45
    }
    return object;
}

function onChange(element) {
    element.value = "";
    updateH3();
}

function onLoad(element) {
    updateH3();
    updateH5();
}

function updateH3() {
    let h3 = document.getElementById("h3");
    h3.innerText = localStorage.getItem("nome");
}



