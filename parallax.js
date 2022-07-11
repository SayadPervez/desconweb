let moon = document.getElementById("moon");
let rocks = document.getElementById("rocks");
let bg0 = document.getElementById("background0");
let bg1 = document.getElementById("background1");

window.addEventListener("scroll",()=>{
    let scrollY = window.scrollY;
    bg0.style.top = scrollY*0.55 + "px";
    bg1.style.top = scrollY*0.55 + "px";
    moon.style.top = scrollY*0.85 + "px";
    rocks.style.top = scrollY*0.65 + "px";
});