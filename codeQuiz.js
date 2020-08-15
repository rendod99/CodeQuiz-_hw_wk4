// Quiz Variables
var startingMinutes = 1;
var time = startingMinutes * 60;
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var nextBtn = document.querySelector("#nextBtn");
var questionCardElement= document.querySelector("#questionsCard");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons");
let shuffledQuestions, currentQuestonIndex




// Event Listeners
startBtn.addEventListener("click",() => {    
    startGame();
    updateTimer();
    addTimer();    
});

nextBtn.addEventListener("click", () =>{
    currentQuestonIndex++
    setNextQuestion()
    
})  
    


//function to un-hide timer
function addTimer(){
    timerEl.classList.remove("hide")
}

// Start Game Fuction
function startGame() {
    startBtn.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestonIndex = 0
    questionCardElement.classList.remove("hide")
    setNextQuestion()
    

}
// Timer interval anf function
setInterval(updateTimer, 1000);

function updateTimer(){
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timerEl.innerHTML = (minutes,seconds);
    time--;
    if(time <= 0) {
        clearInterval(time = 0)
    }
     
}
// Question Functions
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestonIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
// resets back to original state
function resetState(){
    nextBtn.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}
// Answer Function
function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    
        if (correct) {
            alert("correct!")
        } else {
            alert("Wrong!")
        }

    if (shuffledQuestions.length > currentQuestonIndex + 1){
    nextBtn.classList.remove("hide")
    } else{
        startBtn.innerText = "Restart"
        startBtn.classList.remove("hide")
    }
}


//Questions Object
var questions = [
    {
        question: "what is 2 + 2?",
        answers: [
            { text : "4", correct: true },
            { text : "22", correct: false}
        ]
    },
    {
        question: "what is 3 + 3?",
        answers: [
            { text : "6", correct: true},
            { text : "33", correct: false}
        ]
    },
    {
        question: "what is 4 + 4?",
        answers: [
            { text : "8", correct: true},
            { text : "44", correct: false},
            { text : "444", correct: false},
            { text : "4444", correct: false},
        ]
    },
]








