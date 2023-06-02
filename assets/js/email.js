
const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const emailInput = document.querySelector('input[name="address"]');

  const email = emailInput.value;

  let emailList = [];

  if (localStorage.getItem("emailList")) {
    emailList = JSON.parse(localStorage.getItem("emailList"));
  }

  // Add the new email to the list
  emailList.push(email);
  localStorage.setItem("emailList", JSON.stringify(emailList));
  alert("Thank you! We will get back to you soon!");

  // Clear the email input field
  emailInput.value = "";
});
