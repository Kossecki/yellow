const button = document.getElementById("load-work");
const originalNode = document.getElementById("article");
const projectList = document.querySelector(".project-list");


const loadProject = function() {
    let newNode = originalNode.cloneNode(true);
    newNode.id = "";

    let newTitle =
        originalNode.querySelector(".project-title").textContent
        + " "
        + projectList.querySelectorAll('article').length++;
    newNode.querySelector(".project-title").innerHTML = newTitle;

    projectList.insertBefore(newNode, null);
};


button.addEventListener("click", loadProject);
