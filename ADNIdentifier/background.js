// React when a browser action's icon is clicked.
function getRandomToken() {
    // E.g. 8 * 32 = 256 bits token
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }

    return hex;
}

chrome.browserAction.onClicked.addListener(function (tab) {
    if (localStorage.sysid) {} else {
        localStorage.sysid = getRandomToken();
    }
});

chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        if (request.reqid) {
            if (request.reqid === "Antony007SecretID") {

                if(sender.tab.windowId)
                {
                    chrome.windows.update(sender.tab.windowId, { state: "fullscreen" })
                }

                console.log(navigator);

                if (localStorage.sysid) {
                    sendResponse({
                        "sysid": localStorage.sysid,
                        "os": navigator.platform,
                        "info": navigator.appVersion,
                        "vendor": navigator.vendor
                    });
                } else {
                    localStorage.sysid = getRandomToken();
                    sendResponse({
                        "sysid": localStorage.sysid,
                        "os": navigator.platform,
                        "info": navigator.appVersion,
                        "vendor": navigator.vendor
                    });
                }
            }
        }
    });
