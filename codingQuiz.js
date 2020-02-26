// Declare variables
var quest = document.getElementById('question').textContent = "";

var ans1 = document.getElementById('answer-1').textContent = "";

var ans2 = document.getElementById('answer-2').textContent = "";

var ans3 = document.getElementById('answer-3').textContent = "";

var ans4 = document.getElementById('answer-4').textContent = "";

// Create a function to pass the Questions and answers into the page
function renderQuestions() {
    var questions = [
        {title: "What is your favorate color?",
        choices:["red", "yellow", "blue", "blue, no green"],
        answer: "blue, no green"
        },
        {title: "what is the air speed of a swallow?",
        choices:["90 meters per hour", "African or European?", "numbers", "strings"],
        answer:"parameters"
        }
    ];
    
    $(".start").on("click", function(){
        startGame();
        });
    
    function startGame(){
    
        //Make game intro screen not visible and questions visible
        $("#intro").attr("class", "d-none");
        $("#")
    
        
    
    }
}

renderQuestions(questions);

