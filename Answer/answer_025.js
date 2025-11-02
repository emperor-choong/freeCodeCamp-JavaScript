function checkStrength(password) {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let special = "!@#$%^&*";

    let isUpperCase = false;
    let isLowerCase = false;
    let isNumber = false;
    let isSpecial = false;
    for(let i = 0; i < password.length; i++){
        for(let j = 0; j < uppercase.length; j++){
            if(password[i] === uppercase[j]){
                isUpperCase = true;
                break;
            }
        }

        if(isUpperCase === true){
            break;
        }
    }

    for(let i = 0; i < password.length; i++){
        for(let j = 0; j < lowercase.length; j++){
            if(password[i] === lowercase[j]){
                isLowerCase = true;
                break;
            }
        }

        if(isLowerCase === true){
            break;
        }
    }

    for(let i = 0; i < password.length; i++){
        for(let j = 0; j < number.length; j++){
            if(password[i] === number[j]){
                isNumber = true;
                break;
            }
        }

        if(isNumber === true){
            break;
        }
    }

    for(let i = 0; i < password.length; i++){
        for(let j = 0; j < special.length; j++){
            if(password[i] === special[j]){
                isSpecial = true;
                break;
            }
        }

        if(isSpecial === true){
            break;
        }
    }

    let counter = 0;
    if(password.length >= 8){
        counter++;
    }
    
    if(isLowerCase === true && isUpperCase === true){
        counter++;
    }
    
    if(isNumber === true){
        counter++;
    }
    
    if(isSpecial === true){
        counter++;
    }

    if(counter < 2){
        return "weak";
    }else if(counter === 2 || counter === 3){
        return "medium";
    }else if(counter === 4){
        return "strong";
    }
}

// console.log(checkStrength("123456"));
// console.log(checkStrength("pass!!!"));
// console.log(checkStrength("Qwerty"));
// console.log(checkStrength("PASSWORD"));
// console.log(checkStrength("PASSWORD!"));
// console.log(checkStrength("PassWord%^!"));
// console.log(checkStrength("qwerty12345"));
// console.log(checkStrength("PASSWORD!"));
// console.log(checkStrength("PASSWORD!"));
// console.log(checkStrength("S3cur3P@ssw0rd"));
// console.log(checkStrength("C0d3&Fun!"));

