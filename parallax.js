let moon = document.getElementById("moon");
let rocks = document.getElementById("rocks");

window.addEventListener("scroll",()=>{
    let scrollY = window.scrollY;
    moon.style.top = scrollY*1.05 + "px";
    rocks.style.top = scrollY*0.5 + "px";
});