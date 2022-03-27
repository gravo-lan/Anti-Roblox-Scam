var host = "http://www.roblox.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [ // The Black List
            "*://vvvvvv-roblox.com/*",
            "*://www.roblox.qq.com/*",
            "*://www.roblox.cm/*",
            "*://www.roblox.gg/*",
            "*://www.robloxfun.xyz/*",
            "*://www.blox.green/*",
            "*://www.rbxpurple.com/*",
            "*://track.vcdc.com/*",
            "*://www.rovblox.com/*",
            "*://www.roblox.ms/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
