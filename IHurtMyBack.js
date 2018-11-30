'use strict';
let time

function isNumber(letter) {
    if (isNaN(letter)) {
        return true
    }
}

function displayTime(minutesTimeData) {
    time = setInterval(() => {
        minutesTimeData = minutesTimeData - 1
        if (minutesTimeData <= 0) {
            clearInterval(time)
        }
        return chrome.browserAction.setBadgeText({ text: `${minutesTimeData}` })
    }, 60000)
}

function setAlarm() {
    let minutes = Number(document.getElementById('time').value)
    if (isNumber(minutes)) return alert('숫자만 입력해 주세요.')

    displayTime(minutes)
    chrome.browserAction.setBadgeText({ text: `${minutes}` })
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
    window.close();
}

function clearAlarm() {
    clearInterval(time)
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
    window.close();
}

document.getElementById('startButton').addEventListener('click', setAlarm)
document.getElementById('clearButton').addEventListener('click', clearAlarm)