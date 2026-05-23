function getNextBingoNumber(n) {
    let letter = n[0];
    let number = Number(n.slice(1));

    if(letter === "B"){
        if(number === 15){
            return "I16";
        }else{
            number++;
            return "B" + number.toString();
        }
    }else if(letter === "I"){
        if(number === 30){
            return "N31";
        }else{
            number++;
            return "I" + number.toString();
        }
    }else if(letter === "N"){
        if(number === 45){
            return "G46";
        }else{
            number++;
            return "N" + number.toString();
        }
    }else if(letter === "G"){
        if(number === 60){
            return "O61";
        }else{
            number++;
            return "G" + number.toString();
        }
    }else if(letter === "O"){
        if(number === 75){
            return "B1";
        }else{
            number++;
            return "O" + number.toString();
        }
    }
}

// console.log(getNextBingoNumber("B10"));
// console.log(getNextBingoNumber("N33"));
// console.log(getNextBingoNumber("I30"));
// console.log(getNextBingoNumber("G60"));
// console.log(getNextBingoNumber("O75"));