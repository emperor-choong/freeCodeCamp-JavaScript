function palindromeLocator(str) {
    let backwardStr = str.split("").reverse().join("");

    if(str === backwardStr){
        if(str.length % 2 === 0){
            let index = str.length / 2;
            return str[index-1] + str[index];
        }else{
            let index = Math.floor(str.length / 2);
            return str[index];
        }
    }else{
        return "none";
    }
}

// console.log(palindromeLocator("racecar"));
// console.log(palindromeLocator("level"));
// console.log(palindromeLocator("freecodecamp"));
// console.log(palindromeLocator("noon"));
// console.log(palindromeLocator("11100111"));