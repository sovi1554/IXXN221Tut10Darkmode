function changeMode() {
const screen = document.querySelectorAll(".screen");
const wrapper = document.querySelectorAll(".wrapper");
const item = document.querySelectorAll(".item");
const header = document.querySelectorAll(".item-header");
const button = document.querySelectorAll(".mode-button");

if (
    document.getElementById("wrapper").getAttribute("class")===
    "wrapper light") 
    {
        makeDark(screen);
        makeDark(wrapper);
        makeDark(item);
        makeDark(header);
        makeDark(button);
        
    }   else{
        makeLight(screen);
        makeLight(wrapper);
        makeLight(item);
        makeLight(header);
        makeLight(button);
    }
}

function makeDark (element) {
    element.forEach(function(el) {
        el.classList.remove("light");
        el.classList.add("dark");
    });
}

function makeLight (element) {
    element.forEach(function(el) {
        el.classList.remove("dark");
        el.classList.add("light");
    });
}
