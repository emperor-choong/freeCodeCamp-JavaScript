function rockPaperScissors(player1, player2) {
    if(player1 === "Rock" && player2 === "Scissors"){
        return "Player 1 wins";
    }else if(player1 === "Paper" && player2 === "Rock"){
        return "Player 1 wins";
    }else if(player1 === "Scissors" && player2 === "Paper"){
        return "Player 1 wins";
    }

    if(player2 === "Rock" && player1 === "Scissors"){
        return "Player 2 wins";
    }else if(player2 === "Paper" && player1 === "Rock"){
        return "Player 2 wins";
    }else if(player2 === "Scissors" && player1 === "Paper"){
        return "Player 2 wins";
    }

    if(player1 === player2){
        return "Tie";
    }
}

// console.log(rockPaperScissors("Rock", "Rock"));
// console.log(rockPaperScissors("Rock", "Paper"));
// console.log(rockPaperScissors("Scissors", "Paper"));
// console.log(rockPaperScissors("Rock", "Scissors"));
// console.log(rockPaperScissors("Scissors", "Scissors"));
// console.log(rockPaperScissors("Scissors", "Rock"));