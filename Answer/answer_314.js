function chunkArray(arr, size) {
    let result = [];
    for(let i = 0; i < arr.length; i = i + size){
        if(i + size > arr.length){
            result.push(arr.slice(i));
        }else{
            result.push(arr.slice(i, i + size));
        }
    }

    return result;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
// console.log(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2));
// console.log(chunkArray([1, 2, 3, 4, 5], 3));
// console.log(chunkArray(["a", "b", "c", "d", "e"], 1));
// console.log(chunkArray([1, 2, 3], 5));