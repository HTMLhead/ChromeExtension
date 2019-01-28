class Event {
  constructor(IHMB, explaneBtn, startBtn, endBtn, input) {
    this.ihmb = IHMB
    this.explaneBtn = explaneBtn
    this.startBtn = startBtn
    this.endBtn = endBtn
    this.input = input
    this.init();
  }

  init() {
    this.explaneBtn.addEventListener('click', this.ihmb.alertManual.bind(this.ihmb));
    this.startBtn.addEventListener('click', this.ihmb.setAlarm.bind(this.ihmb));
    this.endBtn.addEventListener('click', this.ihmb.clearAlarm.bind(this.ihmb));
    this.input.addEventListener('keypress', this.ihmb.enterPress.bind(this.ihmb));
  } 
}

export { Event }