const getTabInfo = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    console.log('Tab Title:', currentTab.title);
    console.log('Tab URL:', currentTab.url);
  });
}