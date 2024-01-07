// TODO: add light and dark themes

// Variables
const startStopBtn = document.querySelector('#startStopBtn');

const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// var for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// set timer interval & timer status
let timerInterval = null;
let timerStatus = "stopped";


// Stop watch functions
function stopWatch() {
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        // minutes to hrs
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    // if(seconds < 10)    leadingSeconds = "0" + seconds.toString();
    // else leadingSeconds = seconds;

    leadingSeconds = (seconds < 10) ? "0" + seconds.toString() : seconds;

    leadingMinutes = (minutes < 10) ? "0" + minutes.toString() : minutes;

    leadingHours = (hours < 10) ? "0" + hours.toString() : hours;


    let displayTimer = document.getElementById('timer').innerText = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}` ;

}

// window.setInterval(stopWatch, 1 );

startStopBtn.addEventListener('click', () => {
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
        timerStatus = "stopped"
    }

});

// event listner: resetBtn
resetBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    
    seconds = 0;
    minutes = 0;
    hours = 0;

    

    document.getElementById('timer').innerHTML = "00:00:00";

})