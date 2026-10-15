const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");

const lapsContainer = document.getElementById("lapsContainer");
const lapList = document.getElementById("lapList");

let count = 0;

const circumference = 2 * Math.PI * 52;

let elapsedTime = 0;
let timer = null;
let isRunning = false;
let lapCount = 0;

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
function startTimer() {
    console.log("таймер запущен");
    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
    let isRunning = true;
    let timer = setInterval(() => {
    count++;
    console.log(`Прошло секунд: ${count}`);
    if (isRunning == false) {
        clearInterval(timer);
    }
}, 1000);
}

function stopTimer(){
    console.log("остановлен");
    startBtn.disabled = false;
    stopBtn.disabled = true;
    isRunning = false;
}

function resetTimer(){
    console.log("таймер перезапущен");
    
    

}
function lapTimer() {
    console.log("таймер ларпнут");
    
}
startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
lapBtn.addEventListener("click", lapTimer)
resetBtn.addEventListener("click", resetTimer)
