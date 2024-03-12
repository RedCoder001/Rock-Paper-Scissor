let choice1 = document.getElementById("box1");
choice1.addEventListener("click", function() {
    gamelogic(0);
});

let choice2 = document.getElementById("box2");
choice2.addEventListener("click", function() {
    gamelogic(1);
});

let choice3 = document.getElementById("box3");
choice3.addEventListener("click", function() {
    gamelogic(2);
});

let userScore = 0;
let compScore = 0;

function gamelogic(a) {
    let choices = ["Rock", "Paper", "Scissor"];
    let rand = Math.floor(Math.random() * 3);
    
    let textElement = document.getElementById("text");
    textElement.innerHTML = "You chose " + choices[a];


    //Draw Game
    if (a == rand) {
        document.getElementById("text2").innerHTML = "Computer chose "+ choices[rand]+". It is a draw.";
    }
    //Rock logic
    else if (a == 0) {
        if (rand == 1) {
            document.getElementById("text2").innerHTML = "Computer chose Paper. You loose";
            compScore ++;
        }
        else {
            document.getElementById("text2").innerHTML = "Computer chose Scissor. You win";
            userScore ++;
        }
    }
    //Paper logic 
    else if (a == 1) {
        if (rand == 2){
            document.getElementById("text2").innerHTML = "Computer chose Scissors. You loose";
            compScore ++;
        }
        else {
            document.getElementById("text2").innerHTML = "Computer chose Rock. You win";
            userScore ++;
        }
    //Scissor logic
    } else if (a == 2) {   
        if (rand == 0) {
            document.getElementById("text2").innerHTML = "Computer chose Rock. You loose";
            compScore ++;
        }
        else {
            document.getElementById("text2").innerHTML = "Computer chose Paper. You win";
            userScore ++;
        }
    }
    let userD = document.getElementById("user");
    let compD = document.getElementById("comp");

    userD.innerHTML = "Your Score: "+ userScore;
    compD.innerHTML = "Computer Score: "+ compScore;
}





