// Shortcut for printing in JavaScript console
const main = document.querySelector(".main");
const form = document.querySelector("form");
const fullname = document.getElementById("full-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const collectedData = {
    fullName: null,
    email: null,
    message: null
};

const errors = {};


function validateForm(ev){
    ev.preventDefault();
    
    // name
    if (fullname.value !== "") {
        collectedData.fname = fullname.value;
            delete errors.fn;
        } else {
            errors.fn ="Full name is missing";
        }  
   // email
     if (email.value !== "") {
        if (pattern.test(email.value)) {
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em ="Email is invalid";
        }  
    } else {
        errors.em ="Email is missing";
    } 
    // message
    
    if (message.value !== "") {
        collectedData.mg = message.value;
            delete errors.mg;
        } else {
            errors.mg = "Message is missing";
        }  
   //feedback
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors)
    }
    
}
form.addEventListener("submit", validateForm);
