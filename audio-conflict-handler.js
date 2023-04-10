// audio-conflict-handler.js

var audio = document.getElementById("myAudio");
var youtubePlayer;

// Add event listener for "play" event of the audio element
audio.addEventListener("play", function() {
    // Pause the audio if the YouTube video is playing
    if (youtubePlayer && youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) {
        audio.pause();
        console.log("Audio paused");
    }
});

// Add event listener for YouTube iframe API ready event
function onYouTubeIframeAPIReady() {
    // Create a new YouTube player instance
    youtubePlayer = new YT.Player('youtubePlayer', {
        events: {
            'onStateChange': onYouTubePlayerStateChange
        }
    });
}

// Function to handle YouTube player state change
function onYouTubePlayerStateChange(event) {
    // Pause the audio if the YouTube video is playing
    if (event.data === YT.PlayerState.PLAYING && !audio.paused) {
        audio.pause();
        console.log("Audio paused");
    }
}
