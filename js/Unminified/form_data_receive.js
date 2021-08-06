// javascript for displaying the user's input on contactSubmitted.html using Web Storage

// when the DOM hierarchy has been fully loaded/constructed, it will execute the function, retrieveData
window.addEventListener("DOMContentLoaded", retrieveData());

// function to retrieve the session storage data and put in the web page spans inside the paragraph
function retrieveData(){
  document.getElementById("nameDataShown").innerText = sessionStorage.getItem("Name");
  document.getElementById("emailDataShown").innerText = sessionStorage.getItem("Email");
  document.getElementById("typeDataShown").innerText = sessionStorage.getItem("Type");
  document.getElementById("subjectDataShown").innerText = sessionStorage.getItem("Subject");
  document.getElementById("messageDataShown").innerText = sessionStorage.getItem("Message");
}
