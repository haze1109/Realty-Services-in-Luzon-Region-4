

  // JavaScript code for the duplicated modal and button
// Update the IDs in the code to match the duplicated modal and button IDs

// Show modal when button is clicked
document
.getElementById("showFormButton9")
.addEventListener("click", function () {
  document.getElementById("googleFormContainer9").style.display = "block";
});

// Close modal when close button is clicked
document
.querySelector("#googleFormContainer9 .btn-close")
.addEventListener("click", function () {
  document.getElementById("googleFormContainer9").style.display = "none";
});

// Close modal when clicked outside the modal
document.addEventListener("click", function (event) {
if (event.target === document.getElementById("googleFormContainer9")) {
  document.getElementById("googleFormContainer9").style.display = "none";
}
});

  