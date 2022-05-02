

// Get data
const nameInput = document.querySelector("#name"); // This is the 'name' constant (const) variable
const email = document.querySelector("#email"); // This is the 'email' constant (const) variable
const message = document.querySelector("#message"); // This is the 'message' constant (const) variable
const success = document.querySelector("#success"); // This is the 'success' constant (const) variable
const errorNodes = document.querySelectorAll(".error"); // This is the 'error' constant (const) variable


// This section validates data
function validateForm(){
    console.log("Test") // This tests to check if all elements are working

  clearMessages();
  let errorFlag = false;

  if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name cannot be blank"; // If the value length is less than 1 letter/blank a message stating 'Name cannot be blank' will show up
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(email.value.length < 1){
    errorNodes[1].innerText = "Email address cannot be blank"; // If the value length is less than 1 letter/blank a message stating 'Email cannot be blank' will show up
    email.classList.add("error-border");
    errorFlag = true;
  }

  if(message.value.length < 1){
    errorNodes[2].innerText = "Please enter message"; // If the value length is less than 1 letter/blank a message stating 'Please enter message' will show up
    message.classList.add("error-border");
    errorFlag = true;
  }

// This clears error / success messages
function clearMessages(){
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText = "";
    }
    success.InnerText = "";
    nameInput.classList.remove("error-border"); // If correct this removes error message/border
    email.classList.remove("error-border"); // If correct this removes error message/border
    message.classList.remove("error-border"); // If correct this removes error message/border
}

// This function checks if email is valid
function emailIsValid(email){
  let pattern = /\S+@\.\S+/; // This is the let pattern that further checks the validity of the email
}
}
// https://www.youtube.com/watch?v=QT1ya4Ut40o used this tutorial to guide me through making this contact form then applied own knowledge and design
