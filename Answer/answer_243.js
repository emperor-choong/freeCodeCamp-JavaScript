function isNarcissistic(n) {
    let array = n.toString().split("").map(Number);
    let power = n.toString().length;

    let result = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue ** power;
    }, 0);

    return result === n;
}

// console.log(isNarcissistic(153));
// console.log(isNarcissistic(154));
// console.log(isNarcissistic(371));
// console.log(isNarcissistic(512));
// console.log(isNarcissistic(9));
// console.log(isNarcissistic(11));
// console.log(isNarcissistic(9474));
// console.log(isNarcissistic(6549));