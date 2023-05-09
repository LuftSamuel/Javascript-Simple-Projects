let timeBegan = null
let timeStopped = null
let stoppedDuration = 0
let startInterval = null
let flag = false

const timerContainer = document.getElementsByClassName('timer-container')[0]

timerContainer.addEventListener('click', function(){
    execute()
})
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space'){
        execute()
    }

    if(e.key === 'Backspace'){
        resetTimer()
    }
});
timerContainer.addEventListener('dblclick', function(){
    resetTimer()
})


function execute(){
    if(!flag){
        startTimer()
        flag = true
    }else{
        stopTimer()
        flag = false
    }
}

function startTimer(){
    if(timeBegan === null){
        timeBegan = new Date()
    }

    if(timeStopped !== null){
        stoppedDuration += (new Date() - timeStopped)
    }

    startInterval = setInterval(() => {
        clockRunning()
    }, 10);
}

function stopTimer(){
    timeStopped = new Date()
    clearInterval(startInterval)
}

function clockRunning(){
    let currentTime = new Date()
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)

    let minutes = timeElapsed.getUTCMinutes()
    let seconds = timeElapsed.getUTCSeconds()
    let milliSeconds = timeElapsed.getUTCMilliseconds()

    milliSeconds = Math.floor(milliSeconds / 10)

    document.getElementById('timer-display').innerHTML =
     (minutes = minutes < 10 ? '0' + minutes:minutes) + ':' +
     (seconds = seconds < 10 ? '0' + seconds:seconds) + ':' +
     (milliSeconds = milliSeconds < 10 ? '0' + milliSeconds:milliSeconds)
}

function resetTimer(){
    clearInterval(startInterval)
    timeBegan = null
    timeStopped = null
    stoppedDuration = 0
    flag = false
    document.getElementById('timer-display').innerHTML = '00:00:00'
}