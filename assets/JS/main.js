// toggle Theme
let link = document.querySelectorAll("link");
let i = document.querySelector(".row .Theme i");
i.addEventListener("click" , ()=>{
if(i.classList.contains("fa-moon")){
    link[1].href = "./assets/CSS/dark.css";
    i.classList.replace("fa-moon" , "fa-sun");
}
else{
    link[1].href = "./assets/CSS/main.css";
    i.classList.replace("fa-sun" , "fa-moon");
}
});

//============ Bars ===========
let bars = document.querySelector(".bars");
let menu = document.querySelector(".nav-links");
let i2 = document.querySelector(".bars i");
bars.addEventListener("click" , ()=>{
if (menu.style.height == 0){
    menu.style.height = "auto";
    i2.classList.replace("fa-bars","fa-xmark");
}
else{
    menu.style.height = null;
    i2.classList.replace("fa-xmark" , "fa-bars");
}
});