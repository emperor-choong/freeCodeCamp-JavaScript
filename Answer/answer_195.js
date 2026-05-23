function largestNumber(str) {
    let array = str.split(/[,!?:;]/).map(Number);
    let result = Math.max(...array);

    return result;
}

// console.log(largestNumber("1,2"));
// console.log(largestNumber("4;15:60,26?52!0"));
// console.log(largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011"));
// console.log(largestNumber("12;-50,99.9,49.1!-10.1?88?16"));