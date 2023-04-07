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



// JavaScript code for the duplicated modal and button
// Update the IDs in the code to match the duplicated modal and button IDs

// Show modal when button is clicked
document.getElementById('showFormButton2').addEventListener('click', function() {
    document.getElementById('googleFormContainer2').style.display = 'block';
  });
  
  // Close modal when close button is clicked
  document.querySelector('#googleFormContainer2 .btn-close').addEventListener('click', function() {
    document.getElementById('googleFormContainer2').style.display = 'none';
  });
  
  // Close modal when clicked outside the modal
  document.addEventListener('click', function(event) {
    if (event.target === document.getElementById('googleFormContainer2')) {
      document.getElementById('googleFormContainer2').style.display = 'none';
    }
  });
  