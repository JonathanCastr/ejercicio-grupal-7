const form = document.getElementById('form');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const checkbox = document.getElementById('checkBox');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value == "") {
    alert("El correo no puede estar vacío");
    return false;
  }
  if (password.value == "") {
      alert("La contraseña no puede estar vacía");
      return false;
    }
  if (checkbox.value == "" ) {
      alert("El mensaje no puede estar vacío");
      return false;
    }
}
);