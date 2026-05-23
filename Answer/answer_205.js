function pascalRow(n) {
    let result = [];
    let previous = 1;
    for(let i = 0; i < n; i++){
        if(i === 0 || i === n-1){
            result.push(1);
        }else{
            let next = previous * ((n-1) - i + 1) / i;
            result.push(next);
            previous = next;
        }
    }

    return result;
}

// console.log(pascalRow(5));
// console.log(pascalRow(3));
// console.log(pascalRow(1));
// console.log(pascalRow(10));
// console.log(pascalRow(15));