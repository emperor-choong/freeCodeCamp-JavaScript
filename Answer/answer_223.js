function sortAndSwap(arr) {
    let x = arr.sort((a, b) => a - b);
    for(let i = 0; i < x.length; i++){
        if(i % 3 === 0 && i !== 0){
            [x[i], x[i-1]] = [x[i-1], x[i]];
        }
    }

    return x;
}

// console.log(sortAndSwap([3, 1, 2, 4, 6, 5]));
// console.log(sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]));
// console.log(sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]));
// console.log(sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25]));
// console.log(sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]));