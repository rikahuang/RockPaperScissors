var rpsMoves = [
    "Rock",
    "Paper",
    "Scissors"
];

function enterGame() {
    var secondPage = document.getElementById("pageTwo");
    secondPage.classList.remove("hide");
    var firstPage = document.getElementById("pageOne");
    firstPage.classList.add("hide");
}

function enterName(event) {
    if (event.keyCode==13) {
        var yourName = document.getElementById("blankName");
        var enteredName = yourName.value;

        var fourthPageName = document.getElementById("playerName");
        fourthPageName.innerHTML = enteredName;
        
        var secondPage = document.getElementById("pageTwo");
        secondPage.classList.add("hide");
        var thirdPage = document.getElementById("pageThree");
        thirdPage.classList.remove("hide");
        event.preventDefault();
    }
}


function chooseCharacter(characterSlt) {
   if (characterSlt=="1") {
        var confirm1 = document.getElementById("conf1");
        confirm1.classList.remove("hide");
        var confirm2 = document.getElementById("conf2");
        confirm2.classList.add("hide");
        var confirm3 = document.getElementById("conf3");
        confirm3.classList.add("hide");
   } else if (characterSlt=="2") {
        var confirm2 = document.getElementById("conf2");
        confirm2.classList.remove("hide");
        var confirm1 = document.getElementById("conf1");
        confirm1.classList.add("hide");
        var confirm3 = document.getElementById("conf3");
        confirm3.classList.add("hide");
   } else if (characterSlt=="3") {
        var confirm3 = document.getElementById("conf3");
        confirm3.classList.remove("hide");
        var confirm2 = document.getElementById("conf2");
        confirm2.classList.add("hide");
        var confirm1 = document.getElementById("conf1");
        confirm1.classList.add("hide");

   }
}

function confirmCharacter(characterConfd) {
    if (characterConfd=="1") {
        var char = document.getElementById("userCharacter");
        char.classList.add("fa-hippo");
    } else if (characterConfd=="2") {
        var char = document.getElementById("userCharacter");
        char.classList.add("fa-dragon");
    } else if (characterConfd=="3") {
        var char = document.getElementById("userCharacter");
        char.classList.add("fa-crow");
    }

    var thirdPage = document.getElementById("pageThree");
    thirdPage.classList.add("hide");
    var fourthPage = document.getElementById("pageFour");
    fourthPage.classList.remove("hide");

}

function playerAttack(attackChoice) {
    var playerMove;
    if (attackChoice=="1") {
        playerMove = "Rock";
        var paper = document.getElementById("paperAttack");
        var scissor = document.getElementById("scissorAttack");
        paper.classList.add("hide");
        scissor.classList.add("hide");
    } else if (attackChoice=="2") {
        playerMove = "Paper";
        var rock = document.getElementById("rockAttack");
        var scissor = document.getElementById("scissorAttack");
        rock.classList.add("hide");
        scissor.classList.add("hide");
    } else if (attackChoice=="3") {
        playerMove = "Scissors";
        var rock = document.getElementById("rockAttack");
        var paper = document.getElementById("paperAttack");
        rock.classList.add("hide");
        paper.classList.add("hide");
    }
    
    var computerUnknown = document.getElementById("compAttack");
    computerUnknown.classList.add("hide");

    var randomMove = Math.floor(Math.random() * 3);

    var namePlz = document.getElementById("playerName");
    var computerMove;
    if (namePlz.innerHTML.toUpperCase()=="PETE" || namePlz.innerHTML.toUpperCase()=="PETER") {
        computerMove = peteLoses(playerMove);
    } else if (namePlz.innerHTML.toUpperCase()=="RIKA" || namePlz.innerHTML.toUpperCase()=="RIRI") {
        computerMove = ririWins(playerMove);
    } else {
        computerMove = rpsMoves[randomMove];
    }

    if (computerMove=="Rock") {
        var rock = document.getElementById("rockAttackComp");
        rock.classList.remove("hide");
    } else if (computerMove=="Paper") {
        var paper = document.getElementById("paperAttackComp");
        paper.classList.remove("hide");
    } else if (computerMove=="Scissors") {
        var scissors = document.getElementById("scissorsAttackComp");
        scissors.classList.remove("hide");
    }

    var finalResult = evaluator(playerMove, computerMove);

    if (finalResult=="DRAW") {
        var draw = document.getElementById("drawResult");
        draw.classList.remove("hide");
    } else if (finalResult=="WIN") {
        playerWins();
        var win = document.getElementById("winResult");
        win.classList.remove("hide");
    } else if (finalResult=="LOSE") {
        computerWins();
        var lose = document.getElementById("loseResult");
        lose.classList.remove("hide");
    }

    var playAgain = document.getElementById("playAgain");
    playAgain.classList.remove("hide");

}

function evaluator(playerMove, computerMove) {
    var result;
    if (playerMove=="Rock") {
        if (computerMove=="Rock") {
            result = "DRAW";
        } else if (computerMove=="Paper") {
            result = "LOSE";
        } else if (computerMove=="Scissors") {
            result = "WIN";
        }
    } else if (playerMove=="Paper") {
        if (computerMove=="Rock") {
            result = "WIN";
        } else if (computerMove=="Paper") {
            result = "DRAW";
        } else if (computerMove=="Scissors") {
            result = "LOSE";
        }
    } else if (playerMove="Scissors") {
        if (computerMove=="Rock") {
            result = "LOSE";
        } else if (computerMove=="Paper") {
            result = "WIN";
        } else if (computerMove=="Scissors") {
            result = "DRAW";
        }
    }
    return result;

}

function replay() {
    var replayRock = document.getElementById("rockAttack");
    replayRock.classList.remove("hide");
    var replayPaper = document.getElementById("paperAttack");
    replayPaper.classList.remove("hide");
    var replayScissors = document.getElementById("scissorAttack");
    replayScissors.classList.remove("hide");

    var replayRockComp = document.getElementById("rockAttackComp");
    replayRockComp.classList.add("hide");
    var replayPaperComp = document.getElementById("paperAttackComp");
    replayPaperComp.classList.add("hide");
    var replayScissorsComp = document.getElementById("scissorsAttackComp");
    replayScissorsComp.classList.add("hide");

    var computerUnknown = document.getElementById("compAttack");
    computerUnknown.classList.remove("hide");

    var playAgain = document.getElementById("playAgain");
    playAgain.classList.add("hide");

    var win = document.getElementById("winResult");
    win.classList.add("hide");

    var lose = document.getElementById("loseResult");
    lose.classList.add("hide");

    var draw = document.getElementById("drawResult");
    draw.classList.add("hide");

    roundsCount();

}

function roundsCount() {
    var rounds = document.getElementById("rounds");
    rounds.innerHTML = rounds.innerHTML * 1 + 1;
}

function playerWins() {
    var wins = document.getElementById("playerWins");
    wins.innerHTML = wins.innerHTML * 1 + 1;
}

function computerWins() {
    var wins = document.getElementById("computerWins");
    wins.innerHTML = wins.innerHTML * 1 + 1;

}

/* RIRI WINS HEHE */

function ririWins(ririAttack) {
    var computerAttack;
    if (ririAttack=="Rock") {
        computerAttack="Scissors";
    } else if (ririAttack=="Paper") {
        computerAttack="Rock";
    } else if (ririAttack=="Scissors") {
        computerAttack="Paper";
    }

    return computerAttack;
}

/* PETE LOSE HEHE */

function peteLoses(peteAttack) {
    var computerAttack;
    if (peteAttack=="Rock") {
        computerAttack="Paper";
    } else if (peteAttack=="Paper") {
        computerAttack="Scissors";
    } else if (peteAttack=="Scissors") {
        computerAttack="Rock";
    }

    return computerAttack;
}   