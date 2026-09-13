function squaresWithThree(n) {
    let array = [];
    for(let i = 1; i <= n; i++){
        array.push(i**2);
    }

    let result = array.reduce((accumulator, currentValue) => {
        if(String(currentValue).includes("3") === true){
            return accumulator + 1;
        }else{
            return accumulator;
        }
    }, 0);

    return result;
}

// console.log(squaresWithThree(1));
// console.log(squaresWithThree(10));
// console.log(squaresWithThree(100));
// console.log(squaresWithThree(1000));
// console.log(squaresWithThree(10000));