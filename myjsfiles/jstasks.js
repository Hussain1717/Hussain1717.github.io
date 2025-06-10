// Toggle the burger menu for small screens
function toggleBurgerMenu() {
  const nav = document.getElementById("topnav");
  nav.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop form from submitting
      clearErrors();

      const inputs = form.querySelectorAll("input[type='text'], input[type='tel'], input[type='email'], input[type='password']");
      let isValid = true;

      // Validate empty fields
      inputs.forEach(input => {
        if (input.hasAttribute("required") && input.value.trim() === "") {
          showError(input, `${input.placeholder} is required.`);
          isValid = false;
        }
      });

      // Validate email format
      const emailInput = form.querySelector("input[type='email']");
      if (emailInput.value && !validateEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
      }

      // Validate phone format
      const phoneInput = form.querySelector("input[type='tel']");
      if (phoneInput.value && !/^\d{10,15}$/.test(phoneInput.value)) {
        showError(phoneInput, "Please enter a valid phone number (10-15 digits).");
        isValid = false;
      }

      // Validate passwords match
      const password = form.querySelector("input[placeholder='Password']");
      const confirmPassword = form.querySelector("input[placeholder='Confirm password']");
      if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match.");
        isValid = false;
      }

      // Validate gender selection
      const genderInputs = form.querySelectorAll("input[name='gender']");
      let genderChecked = 0;
      genderInputs.forEach(input => {
        if (input.checked) genderChecked++;
      });
      if (genderChecked !== 1) {
        showError(genderInputs[0].closest(".gender"), "Please select one gender.");
        isValid = false;
      }

      // If valid, show confirmation and reset
      if (isValid) {
        alert("Registration Successful!");
        form.reset();
      }
    });
  }

  // Show error message
  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "yellow";
    error.style.fontSize = "12px";
    error.style.marginBottom = "8px";
    error.innerText = message;

    if (input.classList.contains("gender")) {
      input.appendChild(error);
    } else {
      input.insertAdjacentElement("afterend", error);
    }
  }

  // Clear all error messages
  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
  }

  // Validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});