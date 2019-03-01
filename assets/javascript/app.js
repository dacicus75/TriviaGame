$(document).ready(function () {
   
    
    var triviaQuestions = [
        {
            question:'What does body fat do?', 
            guess: ['Stores energy',  'Controls blood flow', 'Has no purpose'],
            answer: 'Stores energy',
        },
        {
            question: 'If you skip breakfast, you are more likely to have?',
            guess: ['Migraines', 'Allergies', 'Heart Attack'],
            answer: 'Heart Attack',
        },
        {
            question: 'Americans typically eat what percentage of their recommended intake of vegetables?',
            guess: ['20%', '40%', '60%', '80%'],
            answer: '20%',
        },
        
        
        {
            question:'Why could be dangerous to eat raw cookie dough?',
            guess:['Corrosive', 'Too much sugar','May contain raw egg','Expands in your stomach'],
            answer: 'May contain raw egg',
        },
       
        {
            question:'Which is least likely to cause food poisoning?',
            guess:['Raw sprouts','Chicken','Mayonnaise','Salad'],
            answer: 'Mayonnaise',
        },
        {
            question:'What is glucose?',
            guess:['A carbohydrated', 'A protein','A sugar','A mineral'],
            answer: 'A sugar',
        },
        
        {
            question:'Which is least likely to lower your blood pressure?',
            guess:['Low fat yogurt','Whole grain bread','Spinach','Broccoli'],
            answer: 'Whole grain bread',
        }];

        $('#start').on('click', function () {
            // wrapper will remove start button and replace with questions
            // $('#wrapper').remove();
            triviaGame.start();
        })
        
        var triviaGame = {
            correct: 0,
            incorrect: 0,
            // seconds
            counter: 30,
            //local functions
            countdown: function () {
                // created counter function that will start below
                triviaGame.counter--;
                $('#counter').html(triviaGame.counter);
                if (triviaGame.counter <= 0) {
                    //console.log("Time is up");
                    // this method will run when game is done
                    triviaGame.finished();
                }
            },

             start: function  () {
                // insert time, 1000seconds
                timer = setInterval(triviaGame.countdown,1000);
                $('#wrapper').prepend('<h2>Time Remaining: <span id="counter">30/span> Seconds</h2>');
                $('#start').remove();
                for (var i = 0; i < triviaQuestions.length; i++) {
                    // append to wrapper
                    $('#wrapper').append('<h2>' + triviaQuestions[i].question + '</h2');
                    
                    // subloop
                    for (var j = 0; j < triviaQuestions[i].answer.length; j++) {
                        $("#wrapper").append("<input type='radio' name='question-" +i+ "' value='" + triviaQuestions[i].answer[j] + "'>" + triviaQuestions[i].answer[j]);
                    }
                }
            },
            finished: function(){
                $.each($("input[name='question-0']:checked"),function() {
                    if($(this).val()==triviaQuestions[0].answer){
                        triviaGame.correct++;
                    } else {
                        triviaGame.incorrect++;
                    }
                });
                $.each($("input[name='question-1']:checked"),function() {
                    if($(this).val()==triviaQuestions[1].answer){
                       triviaGame.correct++;
                    } else {
                       triviaGame.incorrect++;
                    }
                });
                $.each($("input[name='question-2']:checked"),function() {
                    if($(this).val()==triviaQuestions[2].answer){
                        triviaGame.correct++;
                    } else {
                        triviaGame.incorrect++;
                    }
                });
                $.each($("input[name='question-3']:checked"),function() {
                    if($(this).val()==triviaQuestions[3].answer){
                        triviaGame.correct++;
                    } else {
                        triviaGame.incorrect++;
                    }
                });
                $.each($("input[name='question-4']:checked"),function() {
                    if($(this).val()==triviaQuestions[4].answer){
                       triviaGame.correct++;
                    } else {
                        triviaGame.incorrect++;
                    }
                });
                $.each($("input[name='question-5']:checked"),function() {
                    if($(this).val()==triviaQuestions[5].answer){
                        triviaGame.correct++;
                    } else {
                        triviaGame.incorrect++;
                    }
                });
                $.each($("input[name='question-6']:checked"),function() {
                    if($(this).val()==triviaQuestions[6].answer){
                        triviaGame.correct++;
                    } else {
                        triviaGame.incorrect++;
                    }
                });
                
                this.result();
            },
            result: function(){
                clearInterval(timer);
                $('#wrapper h2').remove();
                $('#wrapper').html("<h3>Finished!</h3>");
                // displays all correct and incorrect answers
                $('#wrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
                $('#wrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
                // displays questions not answered
                $('#wrapper').append("<h3>Unanswered: "+(triviaQuestions.length-(this.incorrect+this.correct))+"</h3>");
            }
        } });