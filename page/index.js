function openLogin() {
    const logbox = document.getElementById("logBox");
    if(logbox.style.display="none") {
        logbox.style.display = "block";
    } else {
        logbox.style.display="none";
    }
}

const setupSubmit = document.getElementById("logSub");
const login = document.getElementById("login");
const entered = login.passcode.value;


function showSub() {
    if(entered = "crab") {
        setupSubmit.style.display= "block";
    } 
}

