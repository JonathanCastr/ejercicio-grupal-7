const form = document.getElementById('form');
// inputs
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');
// error tags
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const errors = {
    name: 'Debe ingresar un nombre',
    phone: 'Debe ingresar un numero de 9 digitos o dejar en blanco',
    email: 'Debe ingresar un correo valido',
    message: 'Debe ingresar un mensaje'
  };

  if (isNameValid(name.value)) errors.name = '';
  if (isPhoneValid(phone.value)) errors.phone = '';
  if (isEmailValid(email.value)) errors.email = '';
  if (isMessageValid(message.value)) errors.message = '';

  nameError.textContent = errors.name;
  phoneError.textContent = errors.phone;
  emailError.textContent = errors.email;
  messageError.textContent = errors.message;

  // pendiente validacion total para hacer el submit
}
);

// pendiente
const isNameValid = (name) => {
  return true;
};

const isPhoneValid = (phone) => {
  if (phone.length !== 9 || phone.length !== 0) return false;
  return true;
};

const isEmailValid = (email) => {
  if (!email.includes('@')) return false;
  if (!email.includes('.')) return false;
  if (email.length < 9) return false;
  return true;
};

//pendiente
const isMessageValid = (message) => {
  return true;
};









// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('evento');
//   const emailInput = document.getElementById('emailInput');
//   const emailError = document.getElementById('emailError');
//   const passwordInput = document.getElementById('passwordInput');
//   const passwordError = document.getElementById('passwordError');

//   const emailIsValid = validateEmail(emailInput.value);
//   const passwordIsValid = validatePassword(passwordInput.value);

//   if (emailIsValid) {
//     console.log('is Valid', emailIsValid);
//     emailError.textContent = '';
//   } else {
//     emailError.textContent = 'Debe ingresar un correo valido';
//   };

//   if (passwordIsValid) {
//     passwordError.textContent = '';
//   } else {
//     passwordError.textContent = 'Debe ingresar un password de al menos 6 caracteres';
//   }

//   if (emailIsValid && passwordIsValid) {
//     authenticate(emailInput.value, passwordInput.value);
//     console.log('fetch')
//   }
// }
// );





