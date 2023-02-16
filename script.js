let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}

function convertToWord(letter){
    if(letter === "r") return "Piedra";
    if(letter === "p") return "Papel";
    return "Tijera";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} le gana a ${convertToWord(computerChoice)}. Ganaste!`
    userChoice_div.classList.add("green-glow")
    setTimeout( () => userChoice_div.classList.remove("green-glow"), 300)
}



function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} pierde con ${convertToWord(computerChoice)}. Perdiste!`
    userChoice_div.classList.add("red-glow")
    setTimeout( () => userChoice_div.classList.remove("red-glow"), 300)
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)} empata a ${convertToWord(computerChoice)}. Empataste!`
    userChoice_div.classList.add("grey-glow")
    setTimeout( () => userChoice_div.classList.remove("grey-glow"), 300)
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    });

    paper_div.addEventListener("click", function () {
        game("p");
    });

    scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main()