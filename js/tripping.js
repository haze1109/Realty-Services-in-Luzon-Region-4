document.getElementById("showFormButton3").addEventListener("click", function () {
    document.getElementById("googleFormContainer3").style.display = "block";
  });
  
 
  document.querySelector("#googleFormContainer3 .btn-close").addEventListener("click", function () {
    document.getElementById("googleFormContainer3").style.display = "none";
  });
  
 
  document.addEventListener("click", function (event) {
    if (event.target === document.getElementById("googleFormContainer3")) {
      document.getElementById("googleFormContainer3").style.display = "none";
    }
  });
