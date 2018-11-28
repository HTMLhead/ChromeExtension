function checkTime() {
    let time = document.getElementById('time').value
    console.log(time)
}


window.addEventListener('load', function load(event){
    var createButton = document.getElementById('startButton');
    createButton.addEventListener('click', checkTime());
})