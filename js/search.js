// search.js

// JavaScript code for handling the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the keyword input value
    const keyword = document.getElementById('keywordInput').value;
  
    // Call the search function with the keyword
    const searchResults = search(keyword);
  
    // Display the search results on the page
    const searchResultsList = document.getElementById('searchResultsList');
    searchResultsList.innerHTML = ''; // Clear previous results
  
    if (searchResults.length > 0) {
      searchResults.forEach(result => {
        // Create a new list item for each search result
        const li = document.createElement('li');
        li.textContent = `Name: ${result.Name}, Location: ${result.Location}`; // Update with your specific object keys
        searchResultsList.appendChild(li);
      });
    } else {
      // Display a message for no results found
      const li = document.createElement('li');
      li.textContent = 'No results found';
      searchResultsList.appendChild(li);
    }
  });
  
  // Assume that the Google Sheet is already connected and the data is stored in a variable named 'data'
  // 'data' should contain an array of objects, where each object represents a row in the sheet and contains key-value pairs for each column
  
  // Function to perform search on the data
  function search(keyword) {
    // Convert the keyword to lowercase for case-insensitive search
    keyword = keyword.toLowerCase();
  
    // Filter the data array to find matching results
    const results = data.filter(row => {
      // Modify the condition based on your specific search requirements
      // In this example, it searches for a match in the 'Name' and 'Location' columns
      return row.Name.toLowerCase().includes(keyword) || row.Location.toLowerCase().includes(keyword);
    });
  
    // Return the search results
    return results;
  }
  