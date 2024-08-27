console.log('This is a popup!');

// const id = chrome.tabCapture.getMediaStreamId();
let streamObj = null;
const getPageStream = async () => {

  const id = await chrome.tabCapture.getMediaStreamId();
  console.log('id', id);
  let stream = await navigator.mediaDevices.getUserMedia({
    // video: {
    //   mandatory: {
    //     chromeMediaSource: 'tab',
    //     chromeMediaSourceId: id,
    //   },
    // },
    video: true,
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


const testClick = async () => {
  console.log('click')
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('tabs', tabs);
  const currTab = tabs[0];
  const video = document.querySelector('video');
  video.width = currTab.width;
  video.height = currTab.height;

}

let button = document.getElementById('btn')
button.addEventListener('click', async () => {
  await testClick();
  startStream();

})
getPageStream();