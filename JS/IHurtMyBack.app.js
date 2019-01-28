import { IHMB } from "./IHurtMyBack.IHMB.js";
import { Event } from "./IHurtMyBack.event.js";

document.addEventListener("DOMContentLoaded", _ => {
  const Ihmb = new IHMB();
  new Event(Ihmb, 
    document.getElementById("explane"),
    document.getElementById("startButton"),
    document.getElementById("clearButton"),
    document.getElementById("time"));
});