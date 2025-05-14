const ulSm = document.querySelector(".navbar__list-sm");
const burger = document.querySelector(".hamburger");

let isOpen = false;

burger.addEventListener("click", (e)=>{
    e.preventDefault()

    if(!isOpen){
       ulSm.style.visibility = "hidden";
       isOpen = true;
    }else{
       ulSm.style.visibility = "visible";
       isOpen = false;

    }
})