'use strict';

chrome.alarms.onAlarm.addListener(function () {
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'IhurtMyBack.png',
        title: '스트레칭 할 시간입니다.',
        message: '쭉쭉쭉',
        buttons: [
            { title: '더보기를 누른 이유를 생각하며 스트레칭 하세요' }
        ],
        priority: 0
    });
});
