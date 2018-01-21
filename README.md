# ADNIdentifier
Chrome extension to generate Unique system ID.

This extension is meant for web developers to uniquely identifiy their client.

### Usage:
- **(Recommended)** You can download or deploy the already hosted extension from web store [ADNIdentifier](https://chrome.google.com/webstore/detail/identifier/flapebfailmmgbpcpkemjlnfpmjnpmeh)

OR

- Build the extension from source and install in client browser. Follow the guide here for manual installation https://developer.chrome.com/extensions/getstarted

- Assuming you have installed the extension using the above web store link, use the following script to query for the system ID

```javascript
let editorExtensionId = 'flapebfailmmgbpcpkemjlnfpmjnpmeh'; // If building yourself, use your extension ID provided to you by google webstore
chrome.runtime.sendMessage(editorExtensionId, {reqid: 'Antony007SecretID'}, onExtCallBack.bind(this));

let onExtCallBack = function(response, sender, sendResponse) {
      if (response && response.sysid) 
      {
            //response.sysid contains the system ID.
            //You can make a ajax call here or any other verification to verify if this system ID is allowed to use your application
      }
};
```

### Note
If user reinstalls the extension, the system ID will change.

### Copyleft
###### Distributed under the GPLv3 license. Copyright (c) 2018, Antony Nadar.
