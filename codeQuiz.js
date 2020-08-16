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
var gameOverEl = document.querySelector("#gameOver")
var initialsEl = document.querySelector("#initials")
var score = document.querySelector("#score")
var total = 1;




// Event Listeners
startBtn.addEventListener("click",() => {    
    startGame();
    updateTimer();
    addTimer();    
});

nextBtn.addEventListener("click", () =>{
    currentQuestonIndex++
    setNextQuestion()
    questionCardElement.classList.remove("hide")
    
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
    score.classList.remove("hide")
    setNextQuestion()
    setInterval(updateTimer, 1000);

}


//Timer function
function updateTimer(){
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timerEl.innerHTML = (minutes,seconds);
    time--;
    if(time <= 0) {
        clearInterval(time = 0)
        startBtn.classList.add("hide")
        questionCardElement.classList.add("hide")
        gameOverEl.classList.remove("hide")
        timerEl.classList.add("hide")
        

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
            score.innerText = ("You Answered " + total++ +" Correct!")                    
        } else {
            time -= 10
            alert("wrong, You lose 10 seconds!")
        }

    if (shuffledQuestions.length > currentQuestonIndex + 1){
        questionCardElement.classList.add("hide")
    nextBtn.classList.remove("hide")
    } else{
        //startBtn.innerText = "Restart"
        startBtn.classList.remove("hide")
        initialsEl.classList.remove("hide")
        questionCardElement.classList.add("hide")
        timerEl.classList.add("hide")
    }
}


//Questions Object
var questions = [
    {
        question: "Inside Which HTML element do we put the JavaScript?",
        answers: [
            { text : "<script>", correct: true },
            { text : "<scripting>", correct: false},
            { text : "<javascript>", correct: false},
            { text : "<js>", correct: false}
        ]
    },
    {
        question: "which operator is used to assign a value to a variable?",
        answers: [
            { text : "x", correct: false},
            { text : "-", correct: false},
            { text : "*", correct: false},
            { text : "=", correct: true},
        ]
    },
    {
        question: "How do you declare a javascript variable?",
        answers: [
            { text : "variable carName;", correct: false},
            { text : "v carName;", correct: false},
            { text : "var carName;", correct: true},
            { text : "varCarName;", correct: false},
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text : "<--This is a comment-->", correct: false},
            { text : "'This is a Comment", correct: false},
            { text : "//This is a comment", correct: true},
            { text : ">>This is a comment<<", correct: false},
        ]
    },
    {
        question: 'How do you write "HelloWorld?" in an alert box?',
        answers: [
            { text : 'alertBox("Hello World")', correct: false},
            { text : 'msgBox("Hello World")', correct: false},
            { text : 'alert("HelloWorld")', correct: true},
            { text : 'msg("Hello World")', correct: false},
        ]
    },
]








