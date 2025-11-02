function battle(ourTeam, opponent) {
    let our = ourTeam.split(" ");
    let oppo = opponent.split(" ");

    let sum = 0;
    for(let i = 0; i < our.length; i++){
        if(score(our[i]) > score(oppo[i])){
            sum = sum + 1;
        }else if(score(our[i]) < score(oppo[i])){
            sum = sum - 1;
        }else{
            sum = sum + 0;
        }
    }

    if(sum > 0){
        return "We win";
    }else if(sum < 0){
        return "We lose";
    }else{
        return "Draw";
    }
}

function score(word){
    let alphaLower = "abcdefghijklmnopqrstuvwxyz";
    let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sum = 0;
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < alphaLower.length; j++){
            if(word[i] === alphaLower[j]){
                sum = sum + word[i].charCodeAt(0)-96;
                break;
            }
        }

        for(let k = 0; k < alphaUpper.length; k++){
            if(word[i] === alphaUpper[k]){
                sum = sum + (word[i].toLowerCase().charCodeAt(0)-96)*2;
                break;
            }
        }
    }

    return sum;
}

// console.log(battle("hello world", "hello word"));
// console.log(battle("Hello world", "hello world"));
// console.log(battle("lorem ipsum", "kitty ipsum"));
// console.log(battle("hello world", "world hello"));
// console.log(battle("git checkout", "git switch"));
// console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries"));
// console.log(battle("We must never surrender", "Our team must win"));