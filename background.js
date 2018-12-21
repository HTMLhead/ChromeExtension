'use strict';

chrome.alarms.onAlarm.addListener(function () {
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.notifications.create({
        type: 'basic',
        iconUrl: './extensionImage/soom.jpg',
        title: '스트레칭 해라.',
        message: '',
        buttons: [
            { title: '왜?' }
        ],
        priority: 0
    });
});