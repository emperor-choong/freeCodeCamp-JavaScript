function toBinary(decimal) {
    let divideResult = Math.floor(decimal / 2);
    let remainder = decimal % 2;
    let sum = remainder.toString();
    while(divideResult !== 0){
        remainder = divideResult % 2;
        divideResult = Math.floor(divideResult / 2);
        sum = sum + remainder.toString();
    }

    let array = sum.split("");
    array.reverse();

    return array.join("");
}

// console.log(toBinary(5));
// console.log(toBinary(12));
// console.log(toBinary(50));
// console.log(toBinary(99));