// Simulate form submissions
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
  
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sign-Up successful! Redirecting to login...");
        window.location.href = "login.html";
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login successful! Redirecting to home...");
        window.location.href = "home.html";
      });
    }
  });

 