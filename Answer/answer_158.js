function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    let score = distancePoints + stylePoints + windComp + kPointBonus;
    let currentScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0];
    currentScores.sort((a, b) => b - a);

    if(score >= currentScores[0]){
        return "Gold";
    }else if(score >= currentScores[1]){
        return "Silver";
    }else if(score >= currentScores[2]){
        return "Bronze";
    }else{
        return "No Medal";
    }
}

// console.log(skiJumpMedal(125.0, 58.0, 0.0, 6.0));
// console.log(skiJumpMedal(119.0, 50.0, 1.0, 4.0));
// console.log(skiJumpMedal(122.0, 52.0, -1.0, 4.0));
// console.log(skiJumpMedal(118.0, 50.5, -1.5, 4.0));
// console.log(skiJumpMedal(124.0, 50.5, 2.0, 5.0));
// console.log(skiJumpMedal(119.0, 49.5, 0.0, 3.0));