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
  "www.roblox.ms"
];

let url = "www.rovbloxs.com";
// The current url

if (url.contains("roblox.com") != True) {
  let i = 1;
  do {
    if (url.contains(blackList[i]) = True) {
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
console.log(scam);
