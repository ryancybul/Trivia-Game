
$(document).ready(function() {
        
    //Variables
    //Question data
    let questions = [
        {
            "question": "What state does Twin Peaks take place in?",
            "answer": ["Colorado", "Montana", "Washington", "Wyoming"],
            "correctAnswer": "Washington"
        }, 
        {
            "question": "What is Agent Coopers favorite drink?",
            "answer": ["Whiskey", "Coffee", "Beer", "Soda"],
            "correctAnswer": "Coffee"
        },
        {
            "question": "What was the name of the diner run by Norma?",
            "answer": ["Double R", "The Roadhouse", "Triple B", "The Spot"],
            "correctAnswer": "Double R"
        },
        {
            "question": "What device does Nadine invent?",
            "answer": ["Coffee warmer", "Golden shovel", "Waterproof shoes", "Silent draperunners"],
            "correctAnswer": "Silent draperunners"
        },
        {
            "question": "What’s the population of Twin Peaks?",
            "answer": ["63,982", "58,016", "55,245", "51,201"],
            "correctAnswer": "51,201"
        },
        {
            "question": "How many children does Benjamin Horne actually have?",
            "answer": ["1", "2", "3", "4"],
            "correctAnswer": "3"
        },
        {
            "question": "Who runs One-Eyed Jack's?",
            "answer": ["Leland Palmer", "Hank Jennings", "Blackie O'Reilly", "Ed Hurley"],
            "correctAnswer": "Blackie O'Reilly"
        },
        {
            "question": "Who fakes his own death?",
            "answer": ["Benjamin Horne", "Leland Palmer", "Hank Jennings", "Andrew Packard"],
            "correctAnswer": "Andrew Packard"
        },
        {
            "question": "What’s the name of Laura Palmer’s identical cousin?",
            "answer": ["Amanda Palmer", "Maddy Palmer", "Amanda Freguson", "Maddy Ferguson"],
            "correctAnswer": "Maddy Ferguson"
        },
        {
            "question": "What’s the name of Laura’s psychiatrist??",
            "answer": ["Dr. Jacobs", "Dr. Jacoby", "Dr. Filman", "Dr. Filban"],
            "correctAnswer": "Dr. Jacoby"
        }
    ]

    let correctAnswers = 0;
    let wrongAnswers = 0;
    let unanswered = 0;
    let timerCount = 60;
    let intervalId; 

    //Functions
    function init() {
    $('.js-title').text('Trivia Game');
    $('.js-button').text('Start Game!');
    $('.js-stop').hide();
    }

    function startGame() {
        //change button state and hide title
        $('.js-button').hide();
        $('.js-stop').show();
        $('.js-title').hide();
        $('.js-timer').show();

        //populate questions div
        for (var i = 0; i < questions.length; i++) {
            $('.js-questions').append('<h2>' + questions[i].question + '</h2>');
            for (var j=0; j < questions[i].answer.length; j++){
                $('.js-questions').append('<input type ="radio" value="' + questions[i].answer[j] + '", name="' + i + '">' + " " + questions[i].answer[j] + " " + '</input>');
                }
                $('.js-questions').append('</br>');
            }
    }

    function stopGame() {
        $('input:checked').each(function() {
            //if value = correct question answer add 1 to score
            let answerChecked = $(this).val();
                if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
                    correctAnswers++;
                    console.log(correctAnswers);
                } 
                else {
                    wrongAnswers++;
                }
        });

        //Counts questions unanswered. 
        unanswered = (questions.length) - correctAnswers - wrongAnswers;

        //Hide the questions, timer, and button. 
        $('.js-questions').hide();
        $('.js-timer').hide();
        $('.js-stop').hide();

        //Display the results
        $('.js-results').append('<h2>' + 'Correct Answers: ' + (correctAnswers) + '</h2>');
        $('.js-results').append('<h2>' + 'Wrong Answers: ' + (wrongAnswers) + '</h2>');
        $('.js-results').append('<h2>' + 'Unanswered: ' + unanswered  + '</h2>');
    }

    //Timer start
    function timerStart() {
        $(".js-timer").html('<h2>' + "Time Remaining: "  + '</h2>')
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    //The decrement function for the timer.
    function decrement() {
        $(".js-timer").html('<h2>' + "Time Remaining: " + timerCount + '</h2>');
            timerCount--;
        //If timer gets to zero stop the game and stop the timer
        if (timerCount === 0) {
            stopGame();
            stopTimer();
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        }

    //Events
    //Page load
    init();

    //Button click/start game.  
    $('.js-button').on('click', function(){
        timerStart();
        startGame();
    })
        
    $('.js-stop').on('click', function(){
        stopGame();
        stopTimer();
    })

});