function findDifferences(arr) {
    let result = arr.map((element, index, array) => {
        if(index === array.length-1){
            return 0;
        }else{
            return array[index + 1] - element;
        }
    });

    return result;
}

// console.log(findDifferences([1, 2, 4, 7]));
// console.log(findDifferences([10, 15, 19, 22, 24, 25]));
// console.log(findDifferences([25, 20, 16, 13, 11, 10]));
// console.log(findDifferences([0, 1, 2, 2, 3, 3, 4, 5]));
// console.log(findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]));