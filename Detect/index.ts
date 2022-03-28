// Define blacklist and whitelist
const whitelist = [
  "www.roblox.com", // Will add some code so it doesn't match for roblox.com.mk etc.
  "www.web.roblox.com",
  "www.education.roblox.com",
  "www.ro-blox.com",
  "www.rowblox.com"
]

const blackList = [
  "vvvvvv-roblox.com",
  "www.roblox.qq.com",
  "www.roblox.cm",
  "www.roblox.gg",
  "www.robloxfun.xyz",
  "www.blox.green",
  "www.rbxpurple.com",
  "track.vcdc.com",
  "www.rovblox.com",
  "www.roblox.ms",
  "www.roblox.com.mk"
];

// The current URL
let url = "www.rovbloxs.com";

// Check against blacklist
if (url.contains("roblox.com")) {
  let i = 1;
  do {
    if (url.contains(blackList[i])) {
      let scam = True;
    }
    else {
      i+=1;
    }
  } while (i<=blacklist.length);
}
else {
  let scam = False;
}

// Todo: Add actions
console.log(scam);
