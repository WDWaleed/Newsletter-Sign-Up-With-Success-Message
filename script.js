"use strict";

let emailContainer = document.getElementById("email");

let messageBox = document.getElementById("validity");

let checkEmail = () => {
  let emailContainer = document.getElementById("email");
  let email = emailContainer.value;
  let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
  if (!email.match(emailPattern)) {
    messageBox.style.display = "block";
    let setStyle = emailContainer.style;
    setStyle.color = "hsl(4, 100%, 67%)";
    setStyle.backgroundColor = "hsla(231, 7%, 60%, 0.15)";
  } else {
    let userEmail = document.getElementById("user-email");
    userEmail.textContent = email;
    document.getElementById("overlay").style.display = "block";
  }
};

window.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    checkEmail()
  }
});

function off() {
  document.getElementById("overlay").style.display = "none";
}

emailContainer.addEventListener("input", (event) => {
  emailContainer.style.color = "hsl(234, 29%, 20%)"
  emailContainer.style.backgroundColor = "white"
  messageBox.style.display = "none"
})
