function shiftArray(arr, n) {
    let result = new Array(arr.length);
    let shift = Math.abs(n) % arr.length;

    if(shift === 0){
        return arr;
    }

    if(n > 0){
        for(let i = 0; i < arr.length; i++){
            let leftShift = i-shift;
            if(leftShift < 0){
                leftShift = arr.length + leftShift;
            }
            result[leftShift] = arr[i];
        }
    }else if(n < 0){
        for(let i = 0; i < arr.length; i++){
            let rightShift = (i+shift) % arr.length;
            result[rightShift] = arr[i];
        }
    }

    return result;
}

// console.log(shiftArray([1, 2, 3], 1));
// console.log(shiftArray([1, 2, 3], -1));
// console.log(shiftArray(["alpha", "bravo", "charlie"], 5));
// console.log(shiftArray(["alpha", "bravo", "charlie"], -11));
// console.log(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15));