// function needs:
// the questions
// somewhere to put the quiz
// somewhere to put the results
// a submit button
// create a timer

//Create Questions 


//Add timer 
var number = 100;
//variable that will hold interval ID when we select "run"
var intervalID;

function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

function decrement(){
    //decrease by 1
    number--;

    //show the number in the #show-number tag
    $("show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {
        
        stop();

        alert("Time is up!");
    }
}
//execute the run function
run();



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
        question: "What does Dwight grow on Schrutt Farms?",
        answers: {
            a: 'Carrots',
            b: 'Blueberries',
            c: 'Beets',
            d: 'Cabbage',
        },
        correctAnswer: 'c'
    },
    {
        question: "",
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
    {
        question: "?",
        answers: {
            a: '',
            b: '',
            c: '',
            d: '',
        },
        correctAnswer: ''
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
    function showQuestions(questions, quizContainer) {
        //code goes here
        var output = [];
        var answers;
        
        //for each question
        for(var i = 0; i<questions.length; i++){
           
            //reset the list of answers
            answers = [];
            
            //for each available answer to this question
            for(letter in questions[i].answers){
                
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

    function showResults(questions, quizContainer, resultsContainer){
        
        //code goes here
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        //track users answers
        var userAnswer = '';
        var numCorrect = 0;
        
        //each question
        for(var i=0; i<questions.length; i++){
            
            //find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            //if answer is right
            if(userAnswer===questions[i].correctAnswer){
                //add to the number of correct answers
                numCorrect++;
                
                //color answers green
                answerContainers[i].style.color = 'lightgreen';
            }
                //if answer is wrong
            else{
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
    submitButton.onclick = function (){
        showResults(questions, quizContainer, resultsContainer);
    }

}



//need to show questions



