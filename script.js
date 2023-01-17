document.addEventListener("DOMContentLoaded", function() {
    
    let password = document.querySelector("#password").ariaValueMax;
    let confirmPassword = document.querySelector("#confirmPassword");

    let error = document.querySelector("#error");

    if (password == "" && confirmPassword == "") {
        error.innerHTML = "*Passwords do not match";
    }
    if (password == confirmPassword) {
        error.innerHTML = "";
    }
})