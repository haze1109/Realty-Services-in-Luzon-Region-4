// Add an event listener to the 'touchstart' event
window.addEventListener('touchstart', function(event) {
    // Get the initial touch position
    var touchStartY = event.touches[0].clientY;
  
    // Add an event listener to the 'touchend' event
    window.addEventListener('touchend', function(event) {
      // Get the final touch position
      var touchEndY = event.changedTouches[0].clientY;
  
      // Calculate the difference in Y coordinates
      var touchDiffY = touchEndY - touchStartY;
  
      // Check if the touch gesture is a swipe down
      if (touchDiffY > 300) { // You can adjust the threshold as needed
        // Perform a page refresh
        location.reload();
      }
    });
  });
  