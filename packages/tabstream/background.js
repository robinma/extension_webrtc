console.log('background.js')
// chrome.runtime.onInstalled.addListener(async () => {
//   console.log('chrome runtime.onInstalled')
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });



chrome.tabs.onActivated.addListener(async (tab) => {
  console.log('chrome tab.onClicked', tab)
  // chrome.action.setBadgeText({
  //   text: "ON",
  // });
  // chrome.action.setBadgeBackgroundColor({
  //   color: "#ff0000",
  // });
  // chrome.tabs.executeScript({
  //   file: "content.js",
  // });
  // chrome.tabs.insertCSS({
  //   file: "content.css",
  // });
});
