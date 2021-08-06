// javascript used on contact.html for the form validation

// locate the form using getElementById
var form = document.getElementById("contact_form");

form.addEventListener("submit", function (event) {
  // check the validity of all the inputs in the form
  if (form.checkValidity() === false) {
    event.preventDefault(); // stops browsers default behaviour, i.e. preventing the form from submitting until all the inputs are valid
    event.stopPropagation(); // prevents event from propagating or "bubbling up" the DOM
  }
  // add class "was-validated" upon submitting after checking the validity of the inputs
  form.classList.add("was-validated");
  /*
  the class "was-validated" is part of bootstrap 5 css
  if the input is invalid, it will highlight that input box in red and add a cross svg image to the right of the input box.
  it will also show the error message inside the div with the class, "invalid-feedback", if the input is invalid.
  else, if the input is valid, it will be highlighted green and show a check mark svg image to the right of the input box.
  */
});
