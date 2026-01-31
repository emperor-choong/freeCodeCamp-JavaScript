function golfScore(par, strokes) {
    if(strokes === 1){
        return "Hole in one!";
    }else if(strokes === par-2){
        return "Eagle";
    }else if(strokes === par-1){
        return "Birdie";
    }else if(strokes === par){
        return "Par";
    }else if(strokes === par+1){
        return "Bogey";
    }else if(strokes === par+2){
        return "Double bogey";
    }
}

// console.log(golfScore(3, 3));
// console.log(golfScore(4, 3));
// console.log(golfScore(3, 1));
// console.log(golfScore(5, 7));
// console.log(golfScore(4, 5));
// console.log(golfScore(5, 3));