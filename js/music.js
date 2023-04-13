// document.addEventListener("DOMContentLoaded", function() {
//     var audio = document.getElementById("myAudio");
//     audio.play();
//   });
  

document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  audio.load();
  
  var playButton = document.getElementById("playButton");
  playButton.addEventListener("click", function() {
    playAudio();
  });
});

function playAudio() {
  var myAudio = document.getElementById("myAudio");
  myAudio.play();
}
