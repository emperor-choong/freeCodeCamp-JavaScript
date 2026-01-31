function stringSum(str) {
    let pattern = /\d+/g;
    let array = str.match(pattern);

    let result = array.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue);
    }, 0);

    return result;
}

// console.log(stringSum("3apples2bananas"));
// console.log(stringSum("10cats5dogs2birds"));
// console.log(stringSum("125344"));
// console.log(stringSum("a1b20c300"));
// console.log(stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5"));