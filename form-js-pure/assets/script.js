const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const buttonElement = document.getElementById("button")
// console.log(username.parentElement)

// username.style.borderColor='red'

let data = {
    "username": "",
    "email": "",
    "password": "",
    "confirm-password": ""
}

function checkValid(element, msg) {
  element.addEventListener("change", (e) => {
    if (e.target.value === "") {
      element.style.borderColor = "red";
      const small = element.parentElement.children[4];
      small.innerHTML = msg;
      small.style.visibility = "visible";
    } else {
      element.style.borderColor = "#2ecc71";
      data[element.id] = e.target.value
    }
  });
}

checkValid(username, "Digite um nome válido");
checkValid(email, "Digite um email válido");
checkValid(password, "Digite uma senha válida");
checkValid(confirmPassword, "Digite uma senha válida");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(data)
})

