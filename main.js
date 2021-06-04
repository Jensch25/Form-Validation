
// sla de referenties op naar de inputvelden

const usernameInput = document.getElementById('input-username');
const passwordInput = document.getElementById('input-password');

const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');


usernameInput.addEventListener('keyup', checkUsername);
passwordInput.addEventListener('keyup', checkPassword);

function checkUsername (e) {
    if (e.target.value.includes("@")) {
        usernameError.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        usernameError.textContent = "";
    }
}
function checkPassword (e) {
    if (e.target.value === "" || e.target.value.length > 6) {
        passwordError.textContent = "";
    }
    else {
        passwordError.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}








