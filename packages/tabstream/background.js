console.log('background.js')
// chrome.runtime.onInstalled.addListener(async () => {
//   console.log('chrome runtime.onInstalled')
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

let streamObj = null;
const getPageStream = async () => {

  const id = await chrome.tabCapture.getMediaStreamId();
  console.log('id', id);
  let stream = await navigator.mediaDevices.getUserMedia({
    video: {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: id,
      },
    },
    audio: false,
  });
  // const [videoTrack] = stream.getVideoTracks();
  streamObj = stream;
}


chrome.tabs.onActivated.addListener(async (tab) => {
  console.log('chrome tab.onClicked', tab)

  await getPageStream();
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
