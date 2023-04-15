

var button = document.getElementById("showFormButton5");
var modal = document.getElementById("googleFormContainer5");

document.addEventListener("DOMContentLoaded", function() {
  // Add a click event listener to the button
  button.addEventListener("click", function (event) {
    modal.style.display = "block";
  });

  // Add a click event listener to the close button
  var closeBtn = modal.querySelector(".btn-close");
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicked outside the modal
  document.addEventListener("click", function (event) {
    if (event.target !== button && !button.contains(event.target) && event.target.id !== "navbarBrandLogo") { // Exclude the navbar brand logo from triggering the dark mode
      modal.style.display = "none";
    }
  });
});
