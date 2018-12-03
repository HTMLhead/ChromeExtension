'use strict';

function isNumber(letter) {
    if (isNaN(letter)) {
        return true
    }
}

function setAlarm() {
    let minutes = Number(document.getElementById('time').value)
    if (isNumber(minutes)) return alert('숫자만 입력해 주세요.')
    chrome.browserAction.setBadgeText({ text: `${minutes}` })
    chrome.alarms.create({ delayInMinutes: minutes }); 
    window.close()
}

function clearAlarm() {
    clearInterval(time)
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
    window.close()
}

function alertManual() {
    alert(`익스텐션의 목적
-계속 앉아 작업만 한다면 허리에도, 눈에도 악영향을 끼칩니다.
-분대의 시간을 정해서 한번씩 일어나서 스트레칭을 해줍시다.

사용법
-1. '분 입력' 이 적혀있는 빈칸에, 원하는 분대의 시간을 입력합니다.
-2. 사람이 달리기 시작을 준비하고 있는 자세의 start버튼을 클릭합니다.
-3. 클릭하시면, 창이닫히며 익스텐션의 위치에 남아있는 시간이 표시됩니다.(분)
-4. 시간을 초기화하고 싶으실때는 delete버튼을 누르시고 처음부터 다시 진행하시면 됩니다.

제작자 : head, 이모티콘 출처 : https://thenounproject.com/`)
}

document.getElementById('manual').addEventListener('click', alertManual)
document.getElementById('startButton').addEventListener('click', setAlarm)
document.getElementById('clearButton').addEventListener('click', clearAlarm)