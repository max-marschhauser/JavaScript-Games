const playerRock = document.getElementById("playerRock");
const playerScissors = document.getElementById("playerScissors");
const playerPaper = document.getElementById("playerPaper");

const choicePlayer = document.getElementById("choicePlayer");
const choiceComp = document.getElementById("choiceComp");

const newGame = document.getElementById("newGame");
const result = document.getElementById("result");

const resultPlayer = document.getElementById("scorePlayer");
const resultComp = document.getElementById("scoreComp");

let pointsPlayer = 0;
let pointsComp = 0;

startGame();

function startGame() {
    choicePlayer.classList.remove("rock");
    choicePlayer.classList.remove("paper");
    choicePlayer.classList.remove("scissors");
    choiceComp.classList.remove("rock");
    choiceComp.classList.remove("paper");
    choiceComp.classList.remove("scissors");
    result.classList.remove("result-player");
    result.classList.remove("result-comp");

    result.innerHTML = "YOUR MOVE!";

    playerRock.addEventListener("click", clickRock);
    playerScissors.addEventListener("click", clickScissors);
    playerPaper.addEventListener("click", clickPaper);
}

function clickRock() {
    choicePlayer.classList.add("rock");
    compRandomSelect();
    compare();
    playerRock.removeEventListener("click", clickRock);
    playerScissors.removeEventListener("click", clickScissors);
    playerPaper.removeEventListener("click", clickPaper);
    const myTimeout = setTimeout(startGame, 2000);
}

function clickScissors() {
    choicePlayer.classList.add("scissors");
    compRandomSelect();
    compare();
    playerRock.removeEventListener("click", clickRock);
    playerScissors.removeEventListener("click", clickScissors);
    playerPaper.removeEventListener("click", clickPaper);
    const myTimeout = setTimeout(startGame, 2000);
}

function clickPaper() {
    choicePlayer.classList.add("paper");
    compRandomSelect();
    compare();
    playerRock.removeEventListener("click", clickRock);
    playerScissors.removeEventListener("click", clickScissors);
    playerPaper.removeEventListener("click", clickPaper);
    const myTimeout = setTimeout(startGame, 2000);
}

function compRandomSelect() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        choiceComp.classList.add("rock");
    } else {
        if (num === 1) {
            choiceComp.classList.add("scissors");
        } else {
            choiceComp.classList.add("paper");
        }
    }
}

function compare() {
    if (
        (choicePlayer.classList.contains("rock") && choiceComp.classList.contains("rock")) ||
        (choicePlayer.classList.contains("paper") && choiceComp.classList.contains("paper")) ||
        (choicePlayer.classList.contains("scissors") && choiceComp.classList.contains("scissors"))
    ) {
        result.classList.remove("result-player");
        result.classList.remove("result-comp");
        result.innerHTML = "TIE";
    } else if (
        (choicePlayer.classList.contains("rock") && choiceComp.classList.contains("scissors")) ||
        (choicePlayer.classList.contains("scissors") && choiceComp.classList.contains("paper")) ||
        (choicePlayer.classList.contains("paper") && choiceComp.classList.contains("rock"))
    ) {
        result.classList.remove("result-comp");
        result.classList.add("result-player");
        result.innerHTML = "PLAYER WINS!";
        pointsPlayer += 1;
        scorePlayer.innerHTML = pointsPlayer;
        scoreComp.innerHTML = pointsComp;
    } else {
        result.classList.remove("result-player");
        result.classList.add("result-comp");
        result.innerHTML = "COMP WINS!";
        pointsComp += 1;
        scorePlayer.innerHTML = pointsPlayer;
        scoreComp.innerHTML = pointsComp;
    }
}

newGame.addEventListener("click", () => {
    choicePlayer.classList.remove("rock");
    choicePlayer.classList.remove("paper");
    choicePlayer.classList.remove("scissors");
    choiceComp.classList.remove("rock");
    choiceComp.classList.remove("paper");
    choiceComp.classList.remove("scissors");

    pointsPlayer = 0;
    pointsComp = 0;
    scorePlayer.innerHTML = pointsPlayer;
    scoreComp.innerHTML = pointsComp;

    result.innerHTML = "Result";
    result.classList.remove("result-comp");
    result.classList.remove("result-player");

    startGame();
});
