function ticTacToe(board) {
    if(board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O"){
        return "O wins";
    }else if(board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O"){
        return "O wins";
    }else if(board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O"){
        return "O wins";
    }

    if(board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O"){
        return "O wins";
    }else if(board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O"){
        return "O wins";
    }else if(board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O"){
        return "O wins";
    }

    if(board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O"){
        return "O wins";
    }else if(board[2][0] === "O" && board[1][1] === "O" && board[0][2] === "O"){
        return "O wins";
    }


    if(board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X"){
        return "X wins";
    }else if(board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X"){
        return "X wins";
    }else if(board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X"){
        return "X wins";
    }

    if(board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X"){
        return "X wins";
    }else if(board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X"){
        return "X wins";
    }else if(board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X"){
        return "X wins";
    }

    if(board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X"){
        return "X wins";
    }else if(board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X"){
        return "X wins";
    }

    return "Draw";
}

// console.log(ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]));
// console.log(ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]));
// console.log(ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]));
// console.log(ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]));
// console.log(ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]));
// console.log(ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]));