function finishFunction() {
    alert("Thank you for completing the quiz!")
}

function checkAnswers(){
    var score = 0;
    
    quiz = document.forms.Quiz.elements;
    
    answer1 = quiz.yearCreated.value;

    if (answer1 == "1992"){
        score = score + 1;
    }
    
    answer2 = quiz.oldAmount.value;

    if (answer2 == "22"){
        score = score + 1;
    }
    
    answer3 = quiz.topScorer.value;

    if (answer3 == "alanShearer"){
        score = score + 1;
    }
    

    answer4 = quiz.topAssister.value;
    if (answer4 == "ryanGiggs"){
        score = score + 1;
    }

    answer5 = quiz.mostTitles.value
    if (answer5 == "manchesterUnited"){
        score = score + 1;
    }

    answer6 = quiz.titleAmount.value;
    if (answer6 == "13"){
        score = score + 1;
    }

    alert ("Well done, your score was " + score);
}