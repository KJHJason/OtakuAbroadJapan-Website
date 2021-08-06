/*
* main javascript used throughout all webpages except the error pages
* for the loading screen (fading out the loading screen using jquery and removing the hidden attribute from the html document when it has finish loading using vanilla javascript),
* hamburger menu animation which appears on smaller devices (responsive navigation bar),
* and the go to top button
*/



// START OF LOADING SCREEN JAVASCRIPT //
// Jquery to make preloader fade out when html has loaded finished
$(window).on("load",function(){
  $(".loading-screen").fadeOut("slow");
});

// javascripts to remove the hidden attribute from the content when the page has finish loading
var content = document.getElementsByClassName("content-area");
// event listener to detect when the DOM hierarchy has finish constructing/loaded
window.addEventListener("DOMContentLoaded", function(){
  content[0].removeAttribute("hidden"); // content[0] as there is only one content-area class for every page
});
// END OF LOADING SCREEN JAVASCRIPT //



// START OF HAMBURGER MENU JAVASCRIPT //
// javascript below for the navbar hamburger icon
// finds the hamburger menu button with the id, nav-icon
navbtn = document.getElementById("nav-icon");

// function to be executed when the user clicks on the hamburger menu on devices with smaller screen
function btnclick(){
  navbtn.classList.toggle("open"); // it will toggle the class "open", i.e. add class="open" or remove class="open" to the hamburger icon which has the id, nav-icon
}

// when user clicks on the hamburger icon, it will execute the btnclick function
navbtn.addEventListener("click", btnclick);
// END OF HAMBURGER MENU JAVASCRIPT //



// START OF GO TO TOP BUTTON JAVASCRIPT //
var scrollToTopBtn = document.getElementById("button");

window.onscroll = function(){
  // when the user scroll up or down, it will execute the function scrollFunction
  scrollFunction()
};
function scrollFunction(){
  /*
  * When the user scrolls down 20px from the top of the document, show the button.
  * Else, make the button disappear when at the top of the html document.
  */
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show")
  }
  else{
    scrollToTopBtn.classList.remove("show")
  }
}

// When the user clicks on the button, it will scroll to the top of the document by calling out the function, scrollToTop
scrollToTopBtn.addEventListener("click", scrollToTop)

//documentElement returns the element that is the root element of the document which is <html>
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0, // go to top at 0px from the top
    behavior: "smooth" // for smoother scrolling to top when the function executes but is not supported on safari browsers
  })
}
// END OF GO TO TOP BUTTON JAVASCRIPT //
