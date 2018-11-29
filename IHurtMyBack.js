function click() {
    const userStr = document.getElementById('time').value
    const userNum = Number(userStr)
    if(isNaN(userNum)) {
        return alert('숫자를 입력해주세요. 다른거 말고')
    }
    const mintues = userNum * 60000
    setTimeout(function() {
        
    }, mintues)
}

document.getElementById('startButton').addEventListener('click', click)