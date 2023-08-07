function checkLoggedInStatus() {
  // Check if the user is logged in by retrieving the user information from local storage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // If the user is logged in, replace the signin button with a logout button
    const loginContainer = document.querySelector(".signInSignUp");
    loginContainer.innerHTML = `<button id="logoutBtn" class="btn btn-danger">Logout</button>`;
    document.getElementById("logoutBtn").addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      window.location.href = "signin.html";
    });
  }
}

export { checkLoggedInStatus };
