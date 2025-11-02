function sockPairs(pairs, cycles) {
    let sum = pairs * 2;
    for(let i = 2; i <= cycles; i++){
        if(i % 2 === 0){
            sum = sum - 1;
        } 

        if(i % 3 === 0){
            sum = sum + 1;
        } 

        if(i % 5 === 0){
            sum = sum - 1;
        } 

        if(i % 10 === 0){
            sum = sum + 2;
        }   
    }

    if(sum < 0){
        sum = 0;
    } 

    return Math.floor(sum / 2);
}

// console.log(sockPairs(2, 5));
// console.log(sockPairs(1, 2));
// console.log(sockPairs(5, 11));
// console.log(sockPairs(6, 25));
// console.log(sockPairs(1, 8));