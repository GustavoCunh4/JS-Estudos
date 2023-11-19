//Timer
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");
const millisecondsDoc = document.querySelector("#milliseconds");
const secondsDoc = document.querySelector("#seconds");
const minutesDoc = document.querySelector("#minutes");

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

            minutesDoc.textContent = minutes;
            secondsDoc.textContent = seconds;
            millisecondsDoc.textContent = milliseconds;
        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}
//Função para pausar o timer, sumir o botão de pause e aparecer o botão resume
pauseBtn.addEventListener("click", pauseTimer);
function pauseTimer() { 
    paused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}
//Função para continuar a contar o tempo do timer e voltar a aparecer o botão de pausar e sumir o botão de continuar
resumeBtn.addEventListener("click", resumeTimer);
function resumeTimer() {
    paused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    
}
/*Função para resetar o timer, zerando os millisegundos, segundos e minutos, voltando a aparecer "00" neles,
fazendo também aparecer o botão de start de novo e sumindo o botão de pausar*/
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






//To Do List
const addButton = document.getElementById("addButton");
const inputList = document.getElementById("inputList");
const taskList = document.getElementById("taskList");
const clearTasksButton = document.getElementById("clearTasks");



/*Criado um evento no botão "addButton" de click, que caso o retorno seja vazio, ele retorna para função,
após isso foi criado alguns elementos que não podiam estar presentes no html, pois eles so aparecem em 
certas situações, como o botão "checkButton" por exemplo*/
addButton.addEventListener("click", addTask);
function addTask() {
    const taskText = inputList.value;
    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    const taskTextElement = document.createElement("span");
    taskTextElement.className = "task-text";
    taskTextElement.textContent = taskText;
    const checkButton = document.createElement("button");
    checkButton.className = "check-button";
    checkButton.textContent = "Feito";
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Retirar";

    //Evento para marcar a tarefa como concluída
    checkButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    //Função para remover a tarefa
    removeButton.addEventListener("click", removeTask);
    function removeTask() {
        taskItem.remove();
    }

    //Comando para fazer aparecer esses elementos dentro da constante "taskList"
    taskList.appendChild(taskItem);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(checkButton);
    taskItem.appendChild(removeButton);

    // Limpar o campo de entrada após adicionar a tarefa
    inputList.value = ''; 
}

// Função para limpar tarefas concluídas
clearTasksButton.addEventListener("click", clearTasks);
function clearTasks() {
    const completedTasks = document.querySelectorAll(".task-item.completed");
    completedTasks.forEach(task => {
        task.remove();
    });
}




