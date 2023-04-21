<!-- Pablo  -->
const form = document.getElementById('form');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const checkbox = document.getElementById('checkBox');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!email.value.includes('@') || !email.value.includes('.') || email.value.length < 9) {
    alert("Ingrese un correo válido");
    return false;
  }
  if (password.value.length < 6) {
    alert("Ingrese una contraseña de al menos 6 caracteres");
    return false;
  }
  if (checkbox.value == "") {
    alert("El mensaje no puede estar vacío");
    return false;
  }
}
);
<!-- /Pablo -->