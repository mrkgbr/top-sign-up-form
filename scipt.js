const password = document.querySelector("#pwd");
const confPassword = document.querySelector("#confpwd");
const feedback = document.querySelector("#pwd-feedback");

password.addEventListener("input", passwordCheck);

confPassword.addEventListener("input", passwordCheck);
function passwordCheck() {
  if (password.value == "" || confPassword.value == "") {
    feedback.textContent = "Password is required.";
  } else if (password.value !== confPassword.value) {
    feedback.classList.add("error");
    feedback.classList.remove("match");
    feedback.textContent = "Password does not match!";
  } else {
    feedback.classList.add("match");
    feedback.classList.remove("error");
    feedback.textContent = "Password does match!";
  }
}
