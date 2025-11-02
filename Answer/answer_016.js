function isMirror(str1, str2) {
    let sum1 = "";
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < alpha.length; j++){
            if(str1[i] === alpha[j]){
                sum1 = sum1 + str1[i];
            }
        }
    }

    let sum2 = "";
    for(let i = 0; i < str2.length; i++){
        for(let j = 0; j < alpha.length; j++){
            if(str2[i] === alpha[j]){
                sum2 = sum2 + str2[i];
            }
        }
    }

    let mirror = sum1.split("").reverse().join("");

    if(mirror === sum2){
        return true;
    }else{
        return false;
    }
}

// console.log(isMirror("helloworld", "helloworld"));
// console.log(isMirror("Hello World", "dlroW olleH"));
// console.log(isMirror("RaceCar", "raCecaR"));
// console.log(isMirror("RaceCar", "RaceCar"));
// console.log(isMirror("Mirror", "rorrim"));
// console.log(isMirror("Hello World", "dlroW-olleH"));
// console.log(isMirror("Hello World", "!dlroW !olleH"));