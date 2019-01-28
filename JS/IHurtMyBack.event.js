class Event {
  constructor(IHMB, explaneBtn, startBtn, endBtn) {
    this.ihmb = IHMB;
    this.explaneBtn = explaneBtn;
    this.startBtn = startBtn;
    this.endBtn = endBtn;
    this.init();
  }

  init() {
    this.explaneBtn.addEventListener('click', this.ihmb.alertManual.bind(this));
    this.startBtn.addEventListener('click', this.ihmb.setAlarm.bind(this));
    this.endBtn.addEventListener('click', this.ihmb.clearAlarm.bind(this));
  }
}