// Function to trigger button animation
document.getElementById("animateBtn").addEventListener("click", function() {
  this.classList.add("animate");

  // Remove the class after the animation to allow it to be triggered again
  setTimeout(() => {
    this.classList.remove("animate");
  }, 500);
});

// Function to save name in localStorage
function saveName() {
  const name = document.getElementById("username").value;
  localStorage.setItem("storedName", name);
  displayWelcome();
}

// Function to retrieve and display name from localStorage
function displayWelcome() {
  const storedName = localStorage.getItem("storedName");
  if (storedName) {
    document.getElementById("welcomeMessage").textContent = `Welcome back, ${storedName}! 🎉`;
  }
}

// Display welcome message when page loads (if name exists)
window.onload = displayWelcome;
