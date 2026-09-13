function findDuplicates(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }

        if(count > 1 && result.includes(arr[i]) === false){
            result.push(arr[i]);
        }
    }

    return result;
}

// console.log(findDuplicates([1, 2, 3, 4, 5]));
// console.log(findDuplicates([1, 2, 3, 4, 1, 2]));
// console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]));