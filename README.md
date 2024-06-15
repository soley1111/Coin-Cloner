# Crypto Coin Cloner Chrome Extension
## Description
This chrome extension is used to clone crypto coins on the '**pump.fun**' website. It uses a contact address of a user selected crypto coin to fetch the data from the **PumpPortal API**. It then uses the selected coin's data to fill out a blank create coin form on a new page to create a new coin with the same details.

<p align="center">
  <img src='demo.png'/>
</p> 

## Features
- Fetches coin data from the Pump Portal API using the provided contact address.
- Automatically fills out the form on the Pump.fun create page with the fetched data.
- Opens the coin icon link in a new tab.
- Copy and paste functionality for contact addresses.
- User-friendly interface for easy cloning.
## Code Explanation
### **background.js**
> The background script listens for messages from the popup. When a clone action is requested, it fetches the coin data from the PumpPortal API and stores it in local storage. It then opens the Pump.fun create page in a new tab.
### **content.js**
> The content script runs on the Pump.fun create page. It retrieves the stored API data from local storage and fills out the form with the data. It also handles expanding sections of the form and opening the coin icon link in a new tab.
### **popup.js**
> The popup script manages the user interface of the extension. It includes buttons for copying the contact address from the current URL, pasting the contact address from the clipboard, and initiating the clone action.
## Usage
> When on  valid pump.fun page
## Installation
- Clone or download the repository.
- Open Chrome and navigate to chrome://extensions/.
- Enable "Developer mode" at the top right.
- Click "Load unpacked" and select the directory containing the extension files.
