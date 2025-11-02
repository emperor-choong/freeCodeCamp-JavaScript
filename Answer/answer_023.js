function toDecimal(binary) {
    let sum = 0;
    let power = 0;
    for(let i = binary.length-1; i >= 0; i--){
        sum = sum + parseInt(binary[i])*(2**power);
        power++;
    }

    return sum;
}

// console.log(toDecimal("101"));
// console.log(toDecimal("1010"));
// console.log(toDecimal("10010"));
// console.log(toDecimal("1010101"));