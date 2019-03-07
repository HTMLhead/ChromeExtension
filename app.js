import { qs } from './util.js';
import { Alarm } from './setAlarm.js';

document.addEventListener('DOMContentLoaded', () => {
  const alarm = new Alarm()
  const eventNode = qs(document, '.event');
  qs(eventNode, '.test').addEventListener('click', alarm.set)
  qs(eventNode, '.twentyMin').addEventListener('click', alarm.set);
  qs(eventNode, '.fortyMin').addEventListener('click', alarm.set)
  qs(eventNode, '.sixytMin').addEventListener('click', alarm.set)
  qs(eventNode, '.explane').addEventListener('click', alarm.addExplane)
  qs(eventNode, '.clearButton').addEventListener('click', alarm.clear)
})