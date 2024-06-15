document.addEventListener('DOMContentLoaded', () => {
  const pasteButton = document.getElementById('paste-button');
  const cloneButton = document.getElementById('clone-button');
  const copyButton = document.getElementById('copy-button');
  const caInput = document.getElementById('ca-input');
  const message = document.getElementById('message');

  if (pasteButton && cloneButton && copyButton && caInput && message) {
    // Button to paste from clipboard
    pasteButton.addEventListener('click', () => {
      navigator.clipboard.readText().then(text => {
        caInput.value = text;
        console.log('Pasted text from clipboard.');
        message.textContent = 'CLIPBOARD PASTED';
      }).catch(err => {
        console.error('Failed to read text from clipboard:', err);
      });
    });
    // Runs the clone action and is processed by the background script
    cloneButton.addEventListener('click', () => {
      const ca = caInput.value;
      if (ca) {
        console.log(`Cloning data for contact address: ${ca}`);
        chrome.runtime.sendMessage({ action: 'clone', ca: ca });
        message.textContent = 'COIN CLONED';
      }
    });
    // Button used to copy contact address from the current URL
    copyButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const activeTab = tabs[0];
          console.log('Active tab URL:', activeTab.url);

          try {
            const url = new URL(activeTab.url);
            const match = url.href.match(/^https:\/\/pump\.fun\/([a-zA-Z0-9]+)$/);
            if (match) {
              const contactAddress = match[1];
              navigator.clipboard.writeText(contactAddress).then(() => {
                console.log('Contact address copied to clipboard:', contactAddress);
                message.textContent = `COIN COPIED`;
              }).catch(err => {
                console.error('Failed to copy contact address:', err);
              });
            } else {
              console.error('No valid contact address found in the current URL.');
              message.textContent = 'INVALID URL';
            }
          } catch (e) {
            console.error('Failed to parse URL:', e);
            message.textContent = 'ERROR PARSING URL';
          }
        } else {
          console.error('No active tab found.');
          message.textContent = 'NO ACTIVE TAB FOUND';
        }
      });
    });
  } else {
    console.error('One or more elements not found in the popup.');
  }
});
