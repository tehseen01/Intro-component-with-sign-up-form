const form = document.getElementById("form-control");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let str = email.value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName.value === "") {
    firstName.nextElementSibling.style.display = "block";
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    firstName.style.border = "";
    firstName.nextElementSibling.style.display = "none";
  }

  if (lastName.value === "") {
    lastName.nextElementSibling.style.display = "block";
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    lastName.style.border = "";
    lastName.nextElementSibling.style.display = "none";
  }

  if (email.value === "" || !str.match(validRegex)) {
    email.nextElementSibling.style.display = "block";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    email.style.border = "";
    email.nextElementSibling.style.display = "none";
  }

  if (password.value === "") {
    password.nextElementSibling.style.display = "block";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    password.style.border = "";
    password.nextElementSibling.style.display = "none";
  }
});
