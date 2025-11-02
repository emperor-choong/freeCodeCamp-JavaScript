function arrayDiff(arr1, arr2) {
    let combine = [...arr1, ...arr2];
    let result = [];
    for(let i = 0; i < combine.length; i++){
        let count = 0;
        for(let j = 0; j < combine.length; j++){
            if(combine[i] === combine[j]){
                count++;
            }
        }  
        if(count === 1){
            result.push(combine[i]);
        }  
    } 
    
    return result.sort();  
}

// console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]));
// console.log(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]));
// console.log(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]));
// console.log(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]));
// console.log(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]));