const startCapture = require('./scripts/displayMedia')
console.log('background.js')
// chrome.runtime.onInstalled.addListener(async () => {
//   console.log('chrome runtime.onInstalled')
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

console.log('This is a popup!');

// const id = chrome.tabCapture.getMediaStreamId();
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

const startStream = async () => {
  try {
    // let stream = await getPageStream();
    console.log('stream', streamObj);
    const video = document.querySelector('video');
    video.srcObject = streamObj;
    video.play();
  }
  catch (error) {
    console.log('error', error);
  }
}





chrome.tabs.onActivated.addListener(async (tab) => {
  console.log('chrome tab.onClicked', tab)
  startCapture();

});
