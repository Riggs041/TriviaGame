// function needs:
// the questions
// somewhere to put the quiz
// somewhere to put the results
// a submit button
// create a timer

//Create Questions 


//Add timer
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 1000);
initializeClock('clockdiv', deadline);



var myQuestions = [
    {
        question: "What is Michael's middle name?",
        answers: {
            a: 'Gary',
            b: 'Henry',
            c: 'Danger',
            d: 'Scarn',
        },
        correctAnswer: 'a'
    },
    {
        question: "What does Dwight grow on Schrute Farms?",
        answers: {
            a: 'Carrots',
            b: 'Blueberries',
            c: 'Beets',
            d: 'Cabbage',
        },
        correctAnswer: 'c'
    },
    {
        question: "Who does Michael accidentally hit with his car in the parking lot?",
        answers: {
            a: 'Meredith',
            b: 'Phyllis',
            c: 'Kelly',
            d: 'Creed',
        },
        correctAnswer: 'a'
    },
    {
        question: "On the night Pam got really drunk at the Dundies and kissed Jim, what did she win her Dundie for?",
        answers: {
            a: 'Longest engagement',
            b: 'Tidiest desk',
            c: 'Whitest sneakers',
            d: 'Best artist',
        },
        correctAnswer: 'c'
    },
    {
        question: "According to Prison Mike, what is the worst thing about prison?",
        answers: {
            a: 'The orcs',
            b: 'The dementors',
            c: 'The banshees',
            d: 'The gruel',
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the name of the company Ryan sets up that sends messages to all of your devices at once?",
        answers: {
            a: 'WUPHF',
            b: 'BARKK',
            c: 'GRROWL',
            d: 'HOWWL',
        },
        correctAnswer: 'a'
    },
    {
        question: "What's in the giant pot that Kevin drops all over the office floor?",
        answers: {
            a: 'Gravy',
            b: 'Bolognese',
            c: 'Chili',
            d: 'Soup',
        },
        correctAnswer: 'c'
    },
    {
        question: "What does Michael pick as his username when he signs up for an online dating site?",
        answers: {
            a: 'LittleKidLover',
            b: 'IAmTheBoss',
            c: 'HappyCuddler',
            d: 'JansExBF',
        },
        correctAnswer: 'a'
    },
    {
        question: "What is Erin's real first name?",
        answers: {
            a: 'Angela',
            b: 'Talulah',
            c: 'Madge',
            d: 'Kelly',
        },
        correctAnswer: 'd'
    },
    {
        question: "When Jim thinks Michael is eating ice cream for breakfast, what is he actually eating?",
        answers: {
            a: 'Sour cream and sprinkles',
            b: 'Whipped cream and ketchup',
            c: 'Mayonnaise and black olives',
            d: 'Sour cream and oreos',
        },
        correctAnswer: 'c'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        //code goes here
        var output = [];
        var answers;

        //for each question
        for (var i = 0; i < questions.length; i++) {

            //reset the list of answers
            answers = [];

            //for each available answer to this question
            for (letter in questions[i].answers) {

                //add html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }


            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        //combine output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        //code goes here
        var answerContainers = quizContainer.querySelectorAll('.answers');

        //track users answers
        var userAnswer = '';
        var numCorrect = 0;

        //each question
        for (var i = 0; i < questions.length; i++) {

            //find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            //if answer is right
            if (userAnswer === questions[i].correctAnswer) {
                //add to the number of correct answers
                numCorrect++;

                //color answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            //if answer is wrong
            else {
                //color answer red
                answerContainers[i].style.color = 'red';
            }
        }

        //show number of correct questions
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

    }
    //show questions
    showQuestions(questions, quizContainer);

    //show results when user clicks submit
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}



//need to show questions



