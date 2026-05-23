function rookBishopAttack(rook, bishop) {
    let column1 = rook.charCodeAt(0);
    let row1 = Number(rook[1]);
    let column2 = bishop.charCodeAt(0);
    let row2 = Number(bishop[1]);

    if(rook[0] === bishop[0] || rook[1] === bishop[1]){
        return "rook";
    }else if(Math.abs(column1 - column2) === Math.abs(row1 - row2)){
        return "bishop";
    }else{
        return "neither";
    }
}

// console.log(rookBishopAttack("A1", "A5"));
// console.log(rookBishopAttack("C3", "F6"));
// console.log(rookBishopAttack("D4", "D7"));
// console.log(rookBishopAttack("B7", "H1"));
// console.log(rookBishopAttack("B3", "C5"));
// console.log(rookBishopAttack("G3", "E8"));