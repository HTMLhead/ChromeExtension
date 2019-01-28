class IHMB {
  constructor() {}
  setAlarm() {
    let time = document.getElementById("time").value;
    if (time === "") return alert(`값을 입력해주세요.`);
    let minutes = Number(time);
    if (app.isNotNumber(minutes)) return alert(`숫자만 입력해 주세요.`);
    chrome.browserAction.setBadgeText({ text: `${minutes}` });
    chrome.alarms.create({ delayInMinutes: minutes });
    window.close();
  }
  isNotNumber(letter) {
    return isNaN(letter) ? true : false;
  }
  clearAlarm() {
    chrome.browserAction.setBadgeText({ text: "" });
    chrome.alarms.clearAll();
    window.close();
  }
  alertManual() {
    const explain = `익스텐션의 목적
-계속 앉아 작업만 한다면 허리에도, 눈에도 악영향을 끼칩니다.
-분대의 시간을 정해서 한번씩 일어나서 스트레칭을 해줍시다.
		
사용법
-1. '분 입력' 이 적혀있는 빈칸에, 원하는 분대의 시간을 입력합니다.
-2. 시작 버튼을 클릭합니다.
-3. 클릭하시면, 창이닫히며 익스텐션의 위치에 정하신 시간이 표시됩니다.(분)
-4. 시간을 초기화하고 싶으실때는 제거 버튼을 누르시고 처음부터 다시 진행하시면 됩니다.`;

    alert(explain);
  }
}
