// Show modal when button is clicked
document.getElementById("showFormButton7").addEventListener("click", function () {
    document.getElementById("googleFormContainer7").style.display = "block";
  });
  
  // Close modal when close button is clicked
  document.querySelector("#googleFormContainer7 .btn-close").addEventListener("click", function () {
    document.getElementById("googleFormContainer7").style.display = "none";
  });
  
  // Close modal when clicked outside the modal
  document.addEventListener("click", function (event) {
    if (event.target === document.getElementById("googleFormContainer7")) {
      document.getElementById("googleFormContainer7").style.display = "none";
    }
  });

  // JavaScript code for the duplicated modal and button
// Update the IDs in the code to match the duplicated modal and button IDs

// Show modal when button is clicked
document
.getElementById("showFormButton4")
.addEventListener("click", function () {
  document.getElementById("googleFormContainer4").style.display = "block";
});

// Close modal when close button is clicked
document
.querySelector("#googleFormContainer4 .btn-close")
.addEventListener("click", function () {
  document.getElementById("googleFormContainer4").style.display = "none";
});

// Close modal when clicked outside the modal
document.addEventListener("click", function (event) {
if (event.target === document.getElementById("googleFormContainer4")) {
  document.getElementById("googleFormContainer4").style.display = "none";
}
});

  