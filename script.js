const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpass");
const errorMsg = document.querySelector(".dontmatch");

function validatePass() {
    if (confirmPassword.value === "") {
        confirmPassword.setCustomValidity("");
        errorMsg.textContent = "";
    }

    if (password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords don't match");
        errorMsg.textContent = "Passwords don't match";
    } else {
        confirmPassword.setCustomValidity("")
        errorMsg.textContent = ""
    }
}

password.addEventListener("input", validatePass);
confirmPassword.addEventListener("input", validatePass)