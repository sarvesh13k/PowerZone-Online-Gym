// get HTML elements and initialize variables
let menuBtn = document.querySelector(".hamburgerMenu");
let showMenu = document.querySelector("#showMenu");
let navBar = document.querySelector("nav");
let arrowUp = document.querySelector(".fa-up");
let clicked = false;
let subBtn = document.querySelector(".btn");

// add events to the elements
menuBtn.addEventListener("click", showNavBar);
document.addEventListener("scroll", scrollPage);
subBtn.addEventListener("click", validateForm);

// functions
function showNavBar() {
  if (clicked == false) {
    showMenu.style.display = "inline-block";
    showMenu.style.animation = "show .3s ease 0s 1 normal both";
    navBar.style.display = "inline-block";
    navBar.style.animation = "show .3s ease 0s 1 normal both";

    clicked = true;
  } else if (clicked == true) {
    showMenu.style.animation = "hide .3s ease 0s 1 normal both";
    navBar.style.animation = "hide .3s ease 0s 1 normal both";
    setTimeout(() => {
      showMenu.style.display = "none";
      navBar.style.display = "none";
    }, 300);

    clicked = false;
  }
}

function scrollPage() {
  if (window.scrollY == 0) {
    arrowUp.style.opacity = 0;
    arrowUp.style.cursor = "initial";
  } else {
    arrowUp.style.opacity = 1;
    arrowUp.style.cursor = "pointer";
    arrowUp.onclick = () => {
      window.scrollTo(0, 0);
    };
  }
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function seterror(id, error){
  //sets error inside the tag
  element = document.getElementById(id);
  element.getElementByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
  var returnval = true;

  //perform validation and if validation fails, set returnval false
  var name = document.forms["myform"]["first_name"].value;
  console.log(name);
  
  if(name.length<2){
    seterror("name", "Name is invalid");
    returnval = false;
  }
}
