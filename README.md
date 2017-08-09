# ADNIdentifier
Chrome extension to generate Unique browser ID.

#Usage:
Build the extension and install in the browser. Follow the guide here https://developer.chrome.com/extensions/getstarted

Use the following typescript code in your webpage.

```sh
let editorExtensionId = '<your extension id>';
chrome.runtime.sendMessage(editorExtensionId, {param: 'Param2Passtotheextension'}, onExtCallBack.bind(this));

let onExtCallBack = function(response, sender, sendResponse) {
      if (response && response.sysid) 
      {
            //do something with the response
      }
};
```
