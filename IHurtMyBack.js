'use strict';

function setAlarm() {
    let minutes = Number(document.getElementById('time').value)
    if(isNaN(minutes)) {
        return alert('숫자만 입력해 주세요')
    }
    chrome.browserAction.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
    window.close();
}

function clearAlarm() {
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
    window.close();
}

document.getElementById('startButton').addEventListener('click', setAlarm)
document.getElementById('clearButton').addEventListener('click', clearAlarm)