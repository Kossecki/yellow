let button = document.getElementById("load-work");
const sourceElement = document.getElementById("main");
const oldNode = document.getElementById("article");
const newNode = document.importNode(oldNode, true);

let load = function() {
    document.getElementById("article").appendChild(newNode);
};

button.addEventListener("click", load);
