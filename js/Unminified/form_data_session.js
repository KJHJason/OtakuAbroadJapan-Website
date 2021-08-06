// javascript for collecting the user's input on contact.html upon submitting the form using Web Storage

function collectData(){
  // retrives values from the form upon submitting it
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let type = document.getElementById("Enquirytype").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let typeContent = "";

  // switch statment to match the enquiry type for the respective description for user to read
  switch (type){
    case "General_Enquiry":
      typeContent = "General Enquiry";
      break;
    case "Copyright":
      typeContent = "Copyright Issues with Multimedia Assets Used";
      break;
    case "Clarifications":
      typeContent = "Need Futher Clarifications Regarding Something";
      break;
    case "Inaccurate_Info":
      typeContent = "Inaccurate Information on the Website";
      break;
    case "Feedback":
      typeContent = "Feedback";
      break;
    case "Others":
      typeContent = "Others";
      break;
  }
  // uses Web Storage to store the form data
  sessionStorage.setItem("Name", name);
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Type", typeContent);
  sessionStorage.setItem("Subject", subject);
  sessionStorage.setItem("Message", message);
}
