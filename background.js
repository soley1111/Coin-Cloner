chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'clone') {
      // Requests the coin data from the pumpportal API using the inputted contact address
      const apiUrl = `https://pumpportal.fun/api/data/token-info?ca=${request.ca}`;
      console.log(`Fetching data from API: ${apiUrl}`);
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(apiData => {
          console.log('API data fetched successfully:', apiData);
  
          // Store the API data
          chrome.storage.local.set({ apiData: apiData.data }, () => {
            console.log('API data stored in local storage.');
            // Open the create form page
            chrome.tabs.create({ url: 'https://pump.fun/create' });
          });
        })
        .catch(error => console.error('Error fetching data from API:', error));
    }
  });
  