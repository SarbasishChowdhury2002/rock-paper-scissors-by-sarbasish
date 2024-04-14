
let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const gameDraw = () => {
    console.log("It's Draw");
    msg.innerText = "It's Draw! Play next move."
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        if (userScore === 5) {
            msg.innerText = "Congratulations! You win the game!";
            disableChoices();
            showPlayAgain();
        } else {
            msg.innerText = `Wow! You Win! Your ${userChoice} beats ${compChoice}`;
        }
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        if (compScore === 5) {
            msg.innerText = "Oops! You lose the game! Better luck next time!";
            disableChoices();
            showPlayAgain();
        } else {
            msg.innerText = `Oops! You Lose! Comp Win! ${compChoice} beats your ${userChoice}`;
        }
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    let compChoice = getCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = (compChoice === "paper") ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = (compChoice === "scissors") ? false : true;
        }
        else {
            userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const disableChoices = () => {
    choices.forEach(choice => {
        choice.style.pointerEvents = "none";
    });
}

const showPlayAgain = () => {
    const playAgainBtn = document.createElement("button");
    playAgainBtn.innerText = "Play Again";
    playAgainBtn.classList.add("play-again-btn");
    const msgContainer = document.querySelector(".msg-container");
    msgContainer.appendChild(playAgainBtn);

    playAgainBtn.addEventListener("click", () => {
        resetGame();
    });
}


const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "black";
    choices.forEach(choice => {
        choice.style.pointerEvents = "auto";
    });
    const playAgainBtn = document.querySelector(".play-again-btn");
    if (playAgainBtn) {
        playAgainBtn.remove();
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

