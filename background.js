chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  './extensionImage.IHurtMyBack.png',
      title:    '스트레칭하세요!',
      message:  '내용없음',
      buttons: [
        {title: '타이틀에 마우스를 계속 대고있어보세요.'}
      ],
      priority: 0});
});