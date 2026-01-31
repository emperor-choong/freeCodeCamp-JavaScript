function oneHundred(chars) {
    let sum = chars;
    while(sum.length < 100){
        sum = sum + chars;
    }

    if(sum.length === 100){
        return sum;
    }else{
        return sum.slice(0, 100);
    }
}

// console.log(oneHundred("One hundred "));
// console.log(oneHundred("freeCodeCamp "));
// console.log(oneHundred("daily challenges "));
// console.log(oneHundred("!"));