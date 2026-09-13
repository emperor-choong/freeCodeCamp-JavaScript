function findTarget(arr, target) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }

    return "Target not found";
}

// console.log(findTarget([2, 7, 11, 15], 9));
// console.log(findTarget([3, 2, 4, 5], 6));
// console.log(findTarget([1, 3, 5, 6, 7, 8], 15));
// console.log(findTarget([1, 3, 5, 7], 14));