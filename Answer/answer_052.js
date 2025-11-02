function sequence(n) {
    let sum = "";
    for(let i = 1; i <= n; i++){
        sum = sum + i.toString();
    }

    return sum;
}

// console.log(sequence(5));
// console.log(sequence(10));
// console.log(sequence(1));
// console.log(sequence(27));