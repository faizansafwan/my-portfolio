var typed = new Typed(".name-typed", {
    strings: ["Faizan"],
    typeSpeed:150,
    backSpeed: 150,
    backDelay: 1500,
    loop: true
});

var tabLinks = document.getElementsByClassName('tab-link');
var tabContents = document.getElementsByClassName('tab-content');

function openContent(tab) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove('active-tab');
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove('active-content');
    }
    event.currentTarget.classList.add('active-tab');
    document.getElementById(tab).classList.add('active-content');
}

var sideMenu = document.getElementById("sideMenu");

// function showMenu() {
//     sideMenu.style.right= "0";
// }

function hideMenu() {
    sideMenu.style.right = "-150px";
}