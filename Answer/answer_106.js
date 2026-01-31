function pairwise(arr, target) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                sum = sum + i + j;
            }
        }
    }

    return sum;
}

// console.log(pairwise([2, 3, 4, 6, 8], 10));
// console.log(pairwise([4, 1, 5, 2, 6, 3], 7));
// console.log(pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20));
// console.log(pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24));