// Get the button element by its ID
var button = document.getElementById("showFormButton");

// Get the modal element
var modal = document.getElementById("googleFormContainer");

// Add a click event listener to the button
button.addEventListener("click", function() {
  modal.style.display = "block";
});

// Add a click event listener to the close button
var closeBtn = modal.querySelector(".btn-close");
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});