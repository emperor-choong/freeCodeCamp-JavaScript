function infected(days) {
    let sum = 1;
    for(let i = 1; i <= days; i++){
        sum = sum*2;
        if(i % 3 === 0){
            let patch = sum*0.2;
            sum = sum - Math.ceil(patch);
        }
    }

    return sum;
}

// console.log(infected(1));
// console.log(infected(3));
// console.log(infected(8));
// console.log(infected(17));
// console.log(infected(25));