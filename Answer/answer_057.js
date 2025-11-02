function verify(message, key, signature) {
    let small = "abcdefghijklmnopqrstuvwxyz";
    let big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let sum1 = 0;
    for(let i = 0; i < message.length; i++){
        if(small.includes(message[i]) === true){
            sum1 = sum1 + message.charCodeAt(i)-96;
        }

        if(big.includes(message[i]) === true){
            sum1 = sum1 + message.charCodeAt(i)-38;
        }
    }

    let sum2 = 0;
    for(let i = 0; i < key.length; i++){
        if(small.includes(key[i]) === true){
            sum2 = sum2 + key.charCodeAt(i)-96;
        }

        if(big.includes(key[i]) === true){
            sum2 = sum2 + key.charCodeAt(i)-38;
        }
    }

    let result = sum1 + sum2;
   
    if(result === signature){
        return true;
    }else{
        return false;
    }
}

// console.log(verify("foo", "bar", 57));
// console.log(verify("foo", "bar", 54));
// console.log(verify("freeCodeCamp", "Rocks", 238));
// console.log(verify("Is this valid?", "No", 210));
// console.log(verify("Is this valid?", "Yes", 233));
// console.log(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514));