function openLogin() {
    const logbox = document.getElementById("logBox");
    if(logbox.style.display="none") {
        logbox.style.display = "block";
    } else {
        logbox.style.display="none";
    }
}

const setupSubmit = document.getElementById("logSub");

setupSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const entered = document.getElementById("passcode");
    if(entered === "06042") {
       window.location.assign('setup.html');
    } 
})