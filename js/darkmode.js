function toggleDarkMode() {
  var bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode"); // Toggle the dark mode class on body element
}

var darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", function() {
  toggleDarkMode(); // Call the toggleDarkMode() function when the dark mode button is clicked
});