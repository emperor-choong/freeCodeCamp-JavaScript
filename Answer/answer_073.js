function isMatch(fingerprintA, fingerprintB) {
    let numberOfDiff = 0;
    let total = fingerprintA.length;
    if(fingerprintA.length !== fingerprintB.length){
        return false;
    }else{
        for(let i = 0; i < total; i++){
            if(fingerprintA[i] !== fingerprintB[i]){
                numberOfDiff++;
            }
        }
    }

    let percent = numberOfDiff / total * 100;

    if(percent <= 10){
        return true;
    }else{
        return false;
    }
}

// console.log(isMatch("helloworld", "helloworld"));
// console.log(isMatch("helloworld", "helloworlds"));
// console.log(isMatch("helloworld", "jelloworld"));
// console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"));
// console.log(isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"));
// console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"));