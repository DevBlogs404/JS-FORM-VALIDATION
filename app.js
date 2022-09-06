const form = document.getElementById("form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    checkInputs();  

});


function checkInputs(){
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = Number(zipCode.value);
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();


    if(emailValue == ""){
        //show error
        // add error class
        showError(email,"email cannot be blank")

    } else if(!isEmail(emailValue)){
        showError(email,"please enter an valid email")
    }
    else {
        // add success class
        setSuccess(email)
    }

    if(countryValue == ""){
        //show error
        // add error class
        showError(country,"country cannot be blank")
        

    }
    else {
        // add success class
        setSuccess(country)
    }

    if(zipCodeValue == ""){
        //show error
        // add error class
        showError(zipCode,"zipcode cannot be blank")

    }
    else {
        // add success class
        setSuccess(zipCode)
    }

    if(passwordValue == ""){
        //show error
        // add error class
        showError(password,"password cannot be blank")

    } 
    else {
        // add success class
        setSuccess(password)
    }

    if(confirmPasswordValue == ""){
        //show error
        // add error class
        showError(confirmPassword,"password cannot be blank")

    } else if(confirmPasswordValue !== passwordValue) {
        showError(confirmPassword,"password do not match")
    }
    else {
        // add success class
        setSuccess(confirmPassword)
    }
     
}




function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
   
}

function showError(input,message){
    // const formControl = document.getElementsByClassName("form-control");
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
} 

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function isPassword(password){
//    return /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(password);
// }