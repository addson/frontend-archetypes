

function calJsonTreat(input) {
    let h3 = document.getElementsByTagName("h3");
    h3[0].innerText = input.value;

    console.log("");
    console.log(">> Criando obj a partir do string json colada no input...");
    //get input
    let strJsonInput = input.value;
    console.log(strJsonInput);
    
    //transform to object
    let obj = JSON.parse(strJsonInput);
    h3[1].innerText = obj;
    console.log(obj);

    console.log("");
    console.log(">> Criando string json a partir do obj criado na mão...");
    //create a new obj
    obj = {
        nome:"Claudia",
        nota:9.0
    }
    console.log(obj);

    //transform to text
    let strJson = JSON.stringify(obj);
    console.log(strJson);
}

function onChange(element) {
    element.value = "";
}

