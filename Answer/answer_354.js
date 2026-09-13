function battle(myArmy, opposingArmy) {
    let myArmyScore = 0;
    let opposingArmyScore = 0;

    if(myArmy.length > opposingArmy.length){
        return "Opponent retreated";
    }else if(opposingArmy.length > myArmy.length){
        return "We retreated";
    }else{
        for(let i = 0; i < myArmy.length; i++){
            if(characterValue(myArmy[i]) > characterValue(opposingArmy[i])){
                myArmyScore++;
            }else if(characterValue(myArmy[i]) < characterValue(opposingArmy[i])){
                opposingArmyScore++;
            }
        }
    }

    if(myArmyScore > opposingArmyScore){
        return "We won";
    }else if(myArmyScore < opposingArmyScore){
        return "We lost";
    }else{
        return "It was a tie";
    }
}

function characterValue(char){
    let result = 0;
    if(/^[a-z]$/.test(char) === true){
        result = char.charCodeAt(0) - 70;
    }else if(/^[A-Z]$/.test(char) === true){
        result = char.charCodeAt(0) - 64;
    }else if(/^[0-9]$/.test(char) === true){
        result = Number(char);
    }

    return result;
}

// console.log(battle("Hello", "World"));
// console.log(battle("pizza", "salad"));
// console.log(battle("C@T5", "D0G$"));
// console.log(battle("kn!ght", "orc"));
// console.log(battle("PC", "Mac"));
// console.log(battle("Wizards", "Dragons"));
// console.log(battle("Mr. Smith", "Dr. Jones"));