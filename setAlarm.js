import { qs } from './util.js';

class Alarm {
  set(event) {
    let minutes = parseFloat(event.target.innerText);
    chrome.browserAction.setBadgeText({ text: `${minutes}` });
    chrome.alarms.create({ delayInMinutes: minutes });
    chrome.storage.sync.set({ minutes: minutes });
    window.close();
  }

  clear() {
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.alarms.clearAll();
    window.close();
  }

  addExplane() {
    const explaneContainer = qs(document, '.explane-container');
    explaneContainer.classList.toggle('explane-open');
  }
}

export { Alarm };
