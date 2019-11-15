const button = document.getElementById("load-work");
const originalNode = document.getElementById("article");
const projectList = document.querySelector(".project-list")
/* const newNode = originalNode.cloneNode(true); */

const loadProject = function() {
    let newNode = originalNode.cloneNode(true);
    newNode.id="";
    let newTitle = originalNode.querySelectorAll(."project-title").textContent
    + " "
    +projectList.querySelectorAll('article').length++;
    newNode.querySelector(".project-title").innerHTML = newTitle;
    console.log(newNode);
    console.log(
        document.querySelectorAll("article")
    )
    projectList.insertBefore(newNode, null);
};

button.addEventListener("click", loadProject);

console.log(document.querySelector(".project-list-last article:last-of-type"));