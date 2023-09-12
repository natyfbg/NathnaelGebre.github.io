var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

var submitButton = document.getElementById("submit-button");
function handleButtonClick(){
    submitButton.style.background = "#7e8185";
    setTimeout(function(){
        submitButton.style.background = "#ff004f";
    }, 200)
}



// ------------------------ see more and hide projects------------------------

// JavaScript function to toggle the "show-more" and "hide-more" classes
let projectsVisible = false;

function toggleProjects() {
    const moreProjects = document.getElementById("more-projects");
    const seeMoreBtn = document.getElementById("see-more-btn");

    if (projectsVisible) {
        moreProjects.classList.remove("show-more");
        seeMoreBtn.innerText = "See More";
    } else {
        moreProjects.classList.add("show-more");
        seeMoreBtn.innerText = "Show Less";
    }

    projectsVisible = !projectsVisible;
}



 
