// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Dummy credentials for the login
  const validEmail = "user@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    errorMessage.textContent = "";
    alert("Login successful!");
    // Redirect to another page or perform an action upon successful login
    window.location.href = "dashboard.html"; // Redirect to dashboard page
  } else {
    errorMessage.textContent = "Invalid email or password.";
  }
});
