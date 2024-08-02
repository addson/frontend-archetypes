

function calcRandomChangeH3(input) {
    let h3 = document.getElementsByTagName("h3")[0];

    let strFactor = calculateRamdom(input.value);
    h3.innerText = calculateRamdom(strFactor);
}

function calculateRamdom(strFactor) {

    var factor = parseInt(strFactor);

    let random = Math.ceil(Math.random() * factor);

    return random;

}

function onChange(element) {
    element.value = "";
}

