chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({ text: "" });
  chrome.notifications.create({
    type: "basic",
    iconUrl: "extensionImage/IHurtMyBack.png",
    title: "스트레칭할 시간입니다!",
    message: " ",
    buttons: [{ title: "찾아보세요 이스터에그." }],
    priority: 0
  });
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.storage.sync.get(["minutes"], function(item) {
    chrome.browserAction.setBadgeText({ text: `${item.minutes}` });
    chrome.alarms.create({ delayInMinutes: item.minutes });
  });
});