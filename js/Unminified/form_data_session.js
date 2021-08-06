// javascript for collecting the user's input on contact.html upon submitting the form using Web Storage

function collectData(){
  // retrives values from the form upon submitting it
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let type = document.getElementById("Enquirytype").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // switch statment to match the enquiry type for the respective description for user to read
  switch (type){
    case "General_Enquiry":
      var typeContent = "General Enquiry";
      break;
    case "Copyright":
      var typeContent = "Copyright Issues with Multimedia Assets Used";
      break;
    case "Clarifications":
      var typeContent = "Need Futher Clarifications Regarding Something";
      break;
    case "Inaccurate_Info":
      var typeContent = "Inaccurate Information on the Website";
      break;
    case "Feedback":
      var typeContent = "Feedback";
      break;
    case "Others":
      var typeContent = "Others";
      break;
  }
  // uses Web Storage to store the form data
  sessionStorage.setItem("Name", name);
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Type", typeContent);
  sessionStorage.setItem("Subject", subject);
  sessionStorage.setItem("Message", message);
}
