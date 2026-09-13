function playGame(p1, p2) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < p1.length; i++){
        if(p1[i] === "C" && p2[i] === "C"){
            sum1 = sum1 + 3;
            sum2 = sum2 + 3;
        }else if(p1[i] === "D" && p2[i] === "D"){
            sum1 = sum1 + 1;
            sum2 = sum2 + 1;
        }else if(p1[i] === "C" && p2[i] === "D"){
            sum1 = sum1 + 0;
            sum2 = sum2 + 5;
        }else if(p1[i] === "D" && p2[i] === "C"){
            sum1 = sum1 + 5;
            sum2 = sum2 + 0;
        }
    }

    return [sum1, sum2];
}

// console.log(playGame("CCCC", "CCCC"));
// console.log(playGame("DDDD", "DDDD"));
// console.log(playGame("CCDD", "CDDD"));
// console.log(playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD"));
// console.log(playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC"));