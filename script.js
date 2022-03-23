
var play = document.getElementById("play");
var enter_num = document.getElementById("enter_num");
var done = document.getElementById("done");
var reset = document.getElementById("reset");
var num = document.getElementById("num");
var score = document.getElementById("score");
var turns = document.getElementById("turns");
var play_again = document.getElementById("play_again");
var how_to_play = document.getElementById("how_to_play");
var howtoplay = document.getElementById("howtoplay");


var background_sound = new Audio('background.mp3');
var wrong_sound = new Audio('wrong.mp3');
var win_sound = new Audio('win.mp3');
var lose_sound = new Audio('lose.mp3');
var click = new Audio('click.mp3');
background_sound.play();


// When clicked on play button 
function Play() {
    click.play();
    enter_num.style.display = "block";
    num.style.display = "block";
    done.style.display = "block";
    reset.style.display = "block";
    score.style.display = "block";
    turns.style.display = "block";

    how_to_play.style.display = "none";
    play.style.display = "none";
}



// process of the game

var cnum = parseInt(Math.random() * 10 + 1);

function Done() {
    // console.log(cnum);
    var cscore = Number(document.getElementById("cscore").innerText);
    var uscore = Number(document.getElementById("uscore").innerText);
    var uturns = Number(document.getElementById("uturns").innerText);
    // console.log(uscore);
    if (uturns <= 1) {
        lose_sound.play();
        uturns--;
        document.getElementById("uturns").innerText = uturns;
        cscore++;
        document.getElementById("cscore").innerText = cscore;
        document.getElementById("result").innerHTML = `
            <p style="color: red; margin-top:5px; font-size:1.5rem; text-align: center;" >You LOOSE <br> Computer's no. = ${cnum}</p>`
        play_again.style.display = "block";
        done.style.display = "none";

        

    }

    else {

        if (num.value == cnum) {
            document.getElementById("result").innerHTML = `
            <p style="color: green; margin-top:5px; font-size:1.2rem;" >You won !</p>`
            win_sound.play();
            uscore++;
            document.getElementById("uscore").innerText = uscore;
            play_again.style.display = "block";
            done.style.display = "none";

           
        }
        else {
            document.getElementById("result").innerHTML = `
            <p style="color: red; margin-top:5px; font-size:1.2rem;" >Wrong</p>`
            wrong_sound.play();
            uturns--;
            document.getElementById("uturns").innerText = uturns;
            console.log(uturns);

        }
    }
}


// When clicked on play again

function Play_again() {
    click.play();
    num.value = "";
    play_again.style.display = "none"
    done.style.display = "block"
    document.getElementById("uturns").innerText = 5;
    document.getElementById("result").innerText = ""
    
    cnum = parseInt(Math.random() * 10 + 1);
}



// When clicked on how to play button

function How_to_play() {
    click.play();
    howtoplay.style.display = "block"
    how_to_play.style.display = "none"
    play.style.display = "none"
}

// When clicked on back button

function Back() {
    click.play();
    howtoplay.style.display = "none"
    how_to_play.style.display = "block"
    play.style.display = "block"
}






// When clicked on reset button

function Reset() {
    click.play();
    play.style.display = "block";
    num.value = "";
    num.style.display = "none";
    enter_num.style.display = "none";
    done.style.display = "none";
    reset.style.display = "none";
    score.style.display = "none";
    turns.style.display = "none";
    play_again.style.display = "none";
    how_to_play.style.display = "block";
    document.getElementById("result").innerText = ""
    document.getElementById("uturns").innerText = 5;
    document.getElementById("uscore").innerText = 0;
    document.getElementById("cscore").innerText = 0;

    cnum = parseInt(Math.random() * 10 + 1);


}