//I just want to show two questions and record score

$(document).ready(function() {
    
//Variables
//Question data
let questions = [
    {
        "question": "What is Marges maiden name?",
        "answer": ["Smith", "Bouvier", "Bubble"],
        "correctAnswer": "Bouvier"
    }, 
    {
        "question": "What is the name of Homer's pet lobster?",
        "answer": ["Mr Lobster", "Bart Junior", "Pinchy"],
        "correctAnswer": "Pinchy"
    },
    {
        "question": "What is Mr. Sparkle disrespectful to?",
        "answer": ["Dirt", "Grime", "Crud"],
        "correctAnswer": "Dirt",
    }
]

let score = 0;

//Functions
function init() {
$('.js-title').text('Totally Trivial Trivia');
$('.js-button').text('Start Game!');
isStarted = false;
}

function startGame() {
    //populate questions div
    for (var i = 0; i < questions.length; i++) {
        $('.js-questions').append('<p>' + questions[i].question + '</p>');
        for (var j=0; j < questions[i].answer.length; j++){
            $('.js-questions').append('<input type ="radio" value="' + questions[i].answer[j] + '", name="' + i + '">' + " " + questions[i].answer[j] + " " + '</input>');
            }
            $('.js-questions').append('</br>');
        }
}

function stopGame() {
    $('.js-questions input:checked').each(function() {
        //if value = correct question answer add 1 to score
        let answerChecked = $(this).val();
        console.log(answerChecked);
        for (let i=0; i < questions.length; i++) {
            if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
                console.log("WooHoo");
                score++;
            } 
            else {
                console.log("Doh!");
            }
        }
    });
}


//Events
//Page load
init();

//Button click/start game.  
$('.js-button').on('click', function(){
    startGame();
})

    //Timer starts
    //Trivia questions
    //Submit button. 
    $('.js-stop').on('click', function(){
        stopGame();
    })

    //Either timer runs out or we click submit to end game. 

//Triva is graded 

});