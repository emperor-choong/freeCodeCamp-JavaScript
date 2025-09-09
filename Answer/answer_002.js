function allUnique(str) {
    for(let i = 0; i < str.length; i++){
        let count = 0;
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                count++;
            }
        }
        if(count > 1){
            return false;
        }
    }

    return true;
}

// console.log(allUnique("abc"));
// console.log(allUnique("aA"))
// console.log(allUnique("QwErTy123!@"))
// console.log(allUnique("~!@#$%^&*()_+"))
// console.log(allUnique("hello"))
// console.log(allUnique("freeCodeCamp"))
// console.log(allUnique("!@#*$%^&*()aA"))