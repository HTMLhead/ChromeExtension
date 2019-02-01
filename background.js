console.log('hi');

chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'extensionImage/IHurtMyBack.png',
      title:    '스트레칭하세요!',
      message:  ' ',
      buttons: [
        {title: '타이틀에 마우스를 계속 대고있어보세요.'}
      ],
      priority: 0});
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.browserAction.setBadgeText({text: item.minutes});
    chrome.alarms.create({delayInMinutes: item.minutes});
  });
});