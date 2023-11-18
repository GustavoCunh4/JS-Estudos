const minutesDoc = document.querySelector("#minutes");
const secondsDoc = document.querySelector("#seconds");
const millisecondsDoc = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let intervalo;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let paused = false;

/*Função de iniciar cronometro, caso nao esteja pausado
ele ira somar o milliseconds e quando ele atingir 1000,
voltara a ser 0 e o segundos aumentarão em 1, o mesmo se
repete de segundos para minutos, além de uma função para
questão de formatação do cronometro.
*/
startBtn.addEventListener("click", startTimer);
function startTimer() {

    intervalo = setInterval(() => {
        
        if(!paused) {
            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesDoc.textContent = formatTime(minutes);
            secondsDoc.textContent = formatTime(seconds);
            millisecondsDoc.textContent = formatMilliseconds(milliseconds);
        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

pauseBtn.addEventListener("click", pauseTimer);
function pauseTimer() { 
    paused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

resumeBtn.addEventListener("click", resumeTimer);
function resumeTimer() {
    paused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    
}

resetBtn.addEventListener("click", resetTimer);
function resetTimer() {
    clearInterval(intervalo);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    secondsDoc.textContent = "00";
    minutesDoc.textContent = "00";
    millisecondsDoc.textContent = "00";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `0${time}`: time;
}


