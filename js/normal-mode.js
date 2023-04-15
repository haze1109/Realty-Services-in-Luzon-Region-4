// Add an event listener to the button element
document.getElementById("toggleButton").addEventListener("click", toggleDarkMode);

// Function to toggle dark mode
function toggleDarkMode() {
  var bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode"); // Toggle the dark mode class on body element
  bodyElement.classList.toggle("normal-mode"); // Toggle the normal mode class on body element
}
