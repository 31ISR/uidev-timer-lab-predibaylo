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

function updateCircleProgress(circle, value, max) {
    const progress = (value / max) * circumference;
    circle.style.strokeDasharray = `${progress} ${circumference}`;
}

updateCircleProgress(hoursCircle, hours, 24);

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
function updateDisplay(){
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    
}
function recordLap() {
    if (isRunning) {
        lapCount++;
        const currentTime = formatTime(elapsedTime);

        const lapItem = document.createElement("div");
        lapItem.className = "lap-item";
        lapItem.innerHTML = `
            <span class="lap-number">Lap ${lapCount}</span>
            <span class="lap-time">${currentTime}</span>
        `;

        lapList.insertBefore(lapItem, lapList.firstChild);
        lapsContainer.style.display = "block";
    }
}

function getTimeParts(totalSeconds) {
    return {
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    };
}

function startTimer() {
    if (isRunning) return; 
    console.log("таймер запущен");
    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;

    isRunning = true;
    timer = setInterval(() => {
    count++;
    console.log(`Прошло секунд: ${count}`);
}, 1000);
}

function stopTimer(){
    console.log("остановлен");
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    isRunning = false;
    clearInterval(timer);
    console.log(formatTime(timer));
}

function resetTimer(){
    console.log("таймер перезапущен");
    count = 0;
    
    

}
function lapTimer() {
    console.log("таймер ларпнут");
    recordLap()
    
}


startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
lapBtn.addEventListener("click", lapTimer)
resetBtn.addEventListener("click", resetTimer)
