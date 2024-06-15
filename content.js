function triggerEvent(element, eventName) {
    const event = new Event(eventName, { bubbles: true, cancelable: true });
    element.dispatchEvent(event);
  }
  // Function to auto fill the form on the create page
  function autofillForm(data) {
    const nameInput = document.querySelector('#name');
    const tickerInput = document.querySelector('#ticker');
    const descriptionInput = document.querySelector('#text');
    const twitterInput = document.querySelector('#twitter');
    const telegramInput = document.querySelector('#telegram');
    const websiteInput = document.querySelector('#website');
    // For each input field, the script writes the resepective data. it triggers an input and a change event to make sure the text stays in the fields
    // if no data is found the fields in the API then the input field is left blank
    if (nameInput) {
      nameInput.value = data.name || '';
      triggerEvent(nameInput, 'input');
      triggerEvent(nameInput, 'change');
      console.log('Name field autofilled with:', data.name);
    } else {
      console.error('Name field not found.');
    }

    if (tickerInput) {
      tickerInput.value = data.symbol || '';
      triggerEvent(tickerInput, 'input');
      triggerEvent(tickerInput, 'change');
      console.log('Ticker field autofilled with:', data.symbol);
    } else {
      console.error('Ticker field not found.');
    }

    if (descriptionInput) {
      descriptionInput.value = data.description || '';
      triggerEvent(descriptionInput, 'input');
      triggerEvent(descriptionInput, 'change');
      console.log('Description field autofilled with:', data.description);
    } else {
      console.error('Description field not found.');
    }

    if (twitterInput) {
      twitterInput.value = data.twitter || '';
      triggerEvent(twitterInput, 'input');
      triggerEvent(twitterInput, 'change');
      console.log('Twitter field autofilled with:', data.twitter);
    } else {
      console.error('Twitter field not found.');
    }

    if (telegramInput) {
      telegramInput.value = data.telegram || '';
      triggerEvent(telegramInput, 'input');
      triggerEvent(telegramInput, 'change');
      console.log('Telegram field autofilled with:', data.telegram);
    } else {
      console.error('Telegram field not found.');
    }

    if (websiteInput) {
      websiteInput.value = data.website || '';
      triggerEvent(websiteInput, 'input');
      triggerEvent(websiteInput, 'change');
      console.log('Website field autofilled with:', data.website);
    } else {
      console.error('Website field not found.');
    }
  }
   // This function is to expand the section that contains the link input fields
  function expandSections() {
    const expandButtons = document.querySelectorAll('.cursor-pointer.hover\\:underline.text-blue-400.w-fit');
    if (expandButtons.length > 0) {
      expandButtons.forEach(button => button.click());
      console.log('Sections expanded.');
    } else {
      console.error('Expand buttons not found.');
    }
  }
    // This is used to open the link of the icon of the cloned coin from the API data
  function openImageLink(data) {
    if (data.image) {
      window.open(data.image, '_blank');
      console.log('Image link opened in new tab:', data.image);
    } else {
      console.error('Image link not found in API data.');
    }
  }
    // Function for filling the form out and runs through each operation to ensure the form is filled out correctly
  window.addEventListener('load', () => {
    console.log('Loading stored API data to autofill form if available.');
    // Grabs the stored API data from browser storage
    chrome.storage.local.get('apiData', (result) => {
      if (result.apiData) {
        console.log('API data found in local storage:', result.apiData);
  
        expandSections();
  
        // Use a timeout to ensure the sections have time to expand
        setTimeout(() => {
          autofillForm(result.apiData);
          openImageLink(result.apiData);
        }, 1000);
      } else {
        console.log('No API data available.');
      }
    });
  });
  