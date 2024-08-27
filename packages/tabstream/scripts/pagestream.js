const getPageStream = async () => {

  const id = await chrome.tabCapture.getMediaStreamId();
  console.log('id', id);
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: id,
      },
    },
    audio: false,
  });
  console.log('stream', stream);
  return stream;
}

