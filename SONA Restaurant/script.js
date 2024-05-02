let dropdown1 = document.getElementById("dropdown1");
let dropdown2 = document.getElementById("dropdown2");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let dropdownCount1 = 0;
let dropdownCount2 = 0;


function drops1() {
    if (dropdownCount1 == 0) {
        dropdown1.style.cssText = "visibility: visible"
        dropdown2.style.cssText = "visibility: hidden"
        arrow1.style.cssText = "rotate: 180deg"
        arrow2.style.cssText = "rotate: 0deg"
        dropdownCount1 = 1;
        dropdownCount2 = 0;
    } else {
        dropdown1.style.cssText = "visibility: hidden"
        arrow1.style.cssText = "rotate: 0deg"
        dropdownCount1 = 0;

    }
}

function drops2() {
    if (dropdownCount2 == 0) {
        dropdown2.style.cssText = "visibility: visible"
        dropdown1.style.cssText = "visibility: hidden"
        arrow2.style.cssText = "rotate: 180deg"
        arrow1.style.cssText = "rotate: 0deg"
        dropdownCount2 = 1;
        dropdownCount1 = 0;
    } else {
        dropdown2.style.cssText = "visibility: hidden"
        arrow2.style.cssText = "rotate: 0deg"
        dropdownCount2 = 0;
    }
}
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


