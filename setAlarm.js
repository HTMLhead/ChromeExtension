import { qs } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
  const eventNode = qs(document, '.event');
  qs(eventNode, '.test').addEventListener('click', setAlarm)
  qs(eventNode, '.twentyMin').addEventListener('click', setAlarm);
  qs(eventNode, '.fortyMin').addEventListener('click', setAlarm)
  qs(eventNode, '.sixytMin').addEventListener('click', setAlarm)
  qs(eventNode, '.explane').addEventListener('click', addExplane)
  qs(eventNode, '.clearButton').addEventListener('click', clearAlarm)
})

function setAlarm(event) {
  let minutes = parseFloat(event.target.innerText);
  chrome.browserAction.setBadgeText({text: `${minutes}`});
  chrome.alarms.create({delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  window.close();
}

function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

function addExplane() {
  const explaneContainer = qs(document, '.explane-container');
  explaneContainer.classList.toggle('explane-open');
}