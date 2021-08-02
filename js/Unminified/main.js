//Jquery to make preloader fade out when html has loaded finished
$(window).on("load",function(){
  $(".loading-screen").fadeOut("slow");
});

// js below for the navbar hamburger icon
// finds the hamburger menu button with the id, nav-icon
navbtn = document.getElementById("nav-icon");

// function to be executed when the user clicks on the hamburger menu on devices with smaller screen
function btnclick(){
  navbtn.classList.toggle("open"); // it will toggle the class "open", i.e. add class="open" or remove class="open" to the hamburger icon which has the id, nav-icon
}

// when user clicks on the hamburger icon, it will execute the btnclick function
navbtn.addEventListener("click", btnclick);
