
//pegando o filho
console.log("");
let d1 = document.getElementById("d1");
let filho = d1.children[0];
console.log("aplicando o children...")
console.log(filho);

//pegando o pai
console.log("");
let p2 = document.getElementById("p2");
let pai = p2.parentElement;
console.log("aplicando o parentElement...")
console.log(pai);

function callTheEnd() {
    console.log("");
    console.log("All page loaded...")

    console.log("");
    console.log("Added addEventClickListenerChildrenByTag...")
    addEventClickListenerChildrenByTag("div");

    console.log("");
    console.log("Added addEventClickListenerParentByTag...")
    addEventClickListenerParentOfTag("h1");
}

function addEventClickListenerChildrenByTag(tag) {
    
    let tags = document.getElementsByTagName(tag);
    for (const tag of tags) {
        // console.log(tag);
        tag.addEventListener("click", whoAreTheChildrenOfTag);
    }
}

function whoAreTheChildrenOfTag(event) {
    let tag = event.target;
    let chield = tag.children;
    console.log(chield);
}

function addEventClickListenerParentOfTag(tag) {
    
    let tags = document.getElementsByTagName(tag);
    for (const tag of tags) {
        // console.log(tag);
        tag.addEventListener("click", whoAreTheParentOfTag);
    }
}

function whoAreTheParentOfTag(event) {
    let tag = event.target;
    let parent = tag.parentElement;
    console.log(parent);
}



