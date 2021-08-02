// locates the go to top button with the id, button
var scrollToTopBtn = document.getElementById("button");

// when the user scroll up or down, it will execute the function scrollFunction
window.onscroll = function(){
  scrollFunction()
};
function scrollFunction(){
  // When the user scrolls down 20px from the top of the document, show the button
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show") //add css class, add
  }
  else{
    scrollToTopBtn.classList.remove("show")//remove css class, add
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
