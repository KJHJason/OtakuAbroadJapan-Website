// add addEventListener to the browser window and will execute the function retrieveData when webpage has finished loading
window.addEventListener("load", retrieveData());

// function to retrieve the session storage data and put in the web page spans inside the paragraph
function retrieveData(){
  if (typeof(Storage) !== "undefined") {
    document.getElementById("nameDataShown").innerText = sessionStorage.getItem("Name");
    document.getElementById("emailDataShown").innerText = sessionStorage.getItem("Email");
    document.getElementById("typeDataShown").innerText = sessionStorage.getItem("Type");
    document.getElementById("subjectDataShown").innerText = sessionStorage.getItem("Subject");
    document.getElementById("messageDataShown").innerText = sessionStorage.getItem("Message");
  }
  // if Web Storage is not supported by the user browser, execute the following;
  else {
    // removes the error message which is hidden by the hidden attribute in HTML
    document.getElementById("notSupported").removeAttribute(hidden);
    // hides the div with the id dataShown which has all the data placeholder, e.g. one of the data placeholder is <p class="datastyle">Name: <span id="nameDataShown"></span></p>.
    document.getElementById("dataShown").setAttribute("hidden", "");
  }
}
