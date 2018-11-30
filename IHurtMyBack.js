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
        console.log(minutesTimeData)
        if (minutesTimeData <= 0) {
            clearInterval(time)
        }
        return chrome.browserAction.setBadgeText({ text: `${minutesTimeData}` })
    }, 1000)
}

function setAlarm() {
    let minutes = Number(document.getElementById('time').value)
    if (isNumber(minutes)) return alert('숫자만 입력해 주세요.')

    displayTime(minutes)
    chrome.browserAction.setBadgeText({ text: `${minutes}` })
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
}

function clearAlarm() {
    clearInterval(time)
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
}

document.getElementById('startButton').addEventListener('click', setAlarm)
document.getElementById('clearButton').addEventListener('click', clearAlarm)