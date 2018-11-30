'use strict';
let getChangeTime

function isNumber(letter) {
    if(isNaN(letter)) {
        
    }
}

function setAlarm() {
    let minutes = Number(document.getElementById('time').value)
    if(isNaN(minutes)) {
        return alert('숫자만 입력해 주세요')
    }
    getChangeTime = setInterval(() => {
        if(minutes <= 0) {
            clearInterval(getChangeTime)
        }
        minutes = minutes - 1
        return chrome.browserAction.setBadgeText({text: `${minutes}`})
    }, 60000)
    chrome.browserAction.setBadgeText({ text: `${minutes}` });
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
}

function clearAlarm() {
    clearInterval(getChangeTime)
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
}

document.getElementById('startButton').addEventListener('click', setAlarm)
document.getElementById('clearButton').addEventListener('click', clearAlarm)