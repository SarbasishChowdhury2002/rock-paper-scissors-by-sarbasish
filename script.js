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
    msg.innerText = "It's Draw! Play again."
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Wow! You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Oops! You Lose! Comp Win! ${compChoice} beats your ${userChoice}`;
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

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

