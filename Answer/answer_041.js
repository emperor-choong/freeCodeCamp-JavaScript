function mask(card) {
    let sum = "";
    for(let i = 0; i < card.length; i++){
        if(i >= 0 && i <= 3){
            sum = sum + "*";
        }else if(i >= 5 && i <= 8){
            sum = sum + "*";
        }else if(i >= 10 && i <= 13){
            sum = sum + "*";
        }else{
            sum = sum + card[i];
        }
    }

    return sum;
}

// console.log(mask("4012-8888-8888-1881"));
// console.log(mask("5105 1051 0510 5100"));
// console.log(mask("6011 1111 1111 1117"));
// console.log(mask("2223-0000-4845-0010"));