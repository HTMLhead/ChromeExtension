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
    this.explaneBtn.addEventListener('click', this.ihmb.alertManual.bind(this));
    this.startBtn.addEventListener('click', this.ihmb.setAlarm.bind(this));
    this.endBtn.addEventListener('click', this.ihmb.clearAlarm.bind(this));
    this.input.addEventListener('keypress', this.ihmb.enterPress.bind(this));
  } 
}

export { Event }