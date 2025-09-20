// ====== Part 1: Event Handling ======

const greetBtn = document.getElementById('greetBtn');
const greetMsg = document.getElementById('greetMsg');
const colorBox = document.getElementById('colorBox');

greetBtn.addEventListener('click', () => {
  greetMsg.textContent = "Hello! Thanks for clicking the button! 👋";
});

colorBox.addEventListener('mouseover', () => {
  colorBox.style.backgroundColor = '#4caf50'; // green
});

colorBox.addEventListener('mouseout', () => {
  colorBox.style.backgroundColor = '#88c'; // original color
});


// ====== Part 2: Interactive Elements ======

// Light/Dark mode toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter game
const counterBtn = document.getElementById('counterBtn');
const countDisplay = document.getElementById('countDisplay');
let count = 0;

counterBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});


// ====== Part 3: Form Validation ======

const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop form from submitting

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.textContent = '';

  // Validation flags
  let isValid = true;

  // Validate Name: non-empty, letters only
  const nameValue = nameInput.value.trim();
  if (!nameValue) {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(nameValue)) {
    nameError.textContent = 'Name can only contain letters and spaces.';
    isValid = false;
  }

  // Validate Email with simple regex
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Password: at least 6 chars, 1 number
  const passwordValue = passwordInput.value;
  if (!passwordValue) {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  } else if (!/\d/.test(passwordValue)) {
    passwordError.textContent = 'Password must contain at least one number.';
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = 'Form submitted successfully! 🎉';
    form.reset();
  }
});
