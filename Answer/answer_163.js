function getDifficulty(track) {
    let sum = 0;
    for(let i = 0; i < track.length-1; i++){
        if(track[i] === "L" && track[i+1] === "R"){
            sum = sum + 15;
        }else if(track[i] === "R" && track[i+1] === "L"){
            sum = sum + 15;
        }else if(track[i] === "L" && track[i+1] === "L"){
            sum = sum + 5;
        }else if(track[i] === "R" && track[i+1] === "R"){
            sum = sum + 5;
        }else if(track[i] === "S" && track[i+1] === "L"){
            sum = sum + 5;
        }else if(track[i] === "S" && track[i+1] === "R"){
            sum = sum + 5;
        }
    }

    if(sum <= 100){
        return "Easy";
    }else if(sum <= 200){
        return "Medium";
    }else if(sum > 200){
        return "Hard";
    }
}

// console.log(getDifficulty("SLSLLSRRLSRLRL"));
// console.log(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS"));
// console.log(getDifficulty("SRRRRLSLLRLRSSRLSRL"));
// console.log(getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL"));
// console.log(getDifficulty("SLLSSLRLSLSLRSLSSLRL"));
// console.log(getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR"));