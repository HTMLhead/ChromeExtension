import { qs } from './util.js';
import { Alarm } from './setAlarm.js';

document.addEventListener('DOMContentLoaded', () => {
  const alarm = new Alarm()
  const eventNode = qs(document, '.event');
  qs(eventNode, '.test').addEventListener('click', setAlarm)
  qs(eventNode, '.twentyMin').addEventListener('click', setAlarm);
  qs(eventNode, '.fortyMin').addEventListener('click', setAlarm)
  qs(eventNode, '.sixytMin').addEventListener('click', setAlarm)
  qs(eventNode, '.explane').addEventListener('click', addExplane)
  qs(eventNode, '.clearButton').addEventListener('click', clearAlarm)
})