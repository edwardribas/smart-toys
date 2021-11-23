// Elements call
var [up, burger, nav, back, question] = [
    document.querySelector("#up"),
    document.querySelector("#burger"),
    document.querySelector("nav"),
    document.querySelector("#back"),
    document.getElementsByClassName("questions-item")
];

// Class toggle function
const change = () => [nav, back].forEach(x => x.classList.toggle('active'));

// Burger, background and link click to leave the menu
[burger, back].forEach(i => i.onclick=change);
nav.onclick = e => e.target.classList.contains("link") && change(); // if first condition == true, navCall() will be called

// Up button
let higher = false;
up.style.bottom = "-100%";
document.addEventListener("scroll", function(){
        if(scrollY > 500){
            higher = true;
            up.style.bottom = "20px";
        }else{
            higher = false;
            up.style.bottom = "-100%";
        }
    }
)

// Questions
for(let i = 0; i < question.length; i++){
    question[i].addEventListener("click", function(){
        question[i].classList.toggle("active");
    }
)}