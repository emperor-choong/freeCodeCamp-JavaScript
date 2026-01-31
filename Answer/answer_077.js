function lcm(a, b) {
    let arrayA = [];
    let arrayB = [];
    for(let i = 1; i <= a*b; i++){
        arrayA.push(a*i);
        arrayB.push(b*i);
    }

    for(let i = 0; i < arrayA.length; i++){
        for(let j = 0; j < arrayB.length; j++){
            if(arrayA[i] === arrayB[j]){
                return arrayA[i];
            }
        }
    }
}

// console.log(lcm(4, 6));
// console.log(lcm(9, 6));
// console.log(lcm(10, 100));
// console.log(lcm(13, 17));
// console.log(lcm(45, 70));