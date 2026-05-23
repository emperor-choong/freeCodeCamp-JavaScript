function rookAttack(rook1, rook2) {
    if(rook1[0] === rook2[0] || rook1[1] === rook2[1]){
        return true;
    }else{
        return false;
    }
}

// console.log(rookAttack("A1", "A8"));
// console.log(rookAttack("B4", "F4"));
// console.log(rookAttack("E3", "D4"));
// console.log(rookAttack("H7", "F6"));