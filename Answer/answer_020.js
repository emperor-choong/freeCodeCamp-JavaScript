function isSpam(number) {
    let split1 = number.split(" ");
    let split2 = split1[2].split("-");
    let countryCode = split1[0].slice(1);
    let areaCode = split1[1].slice(1, 4);
    let localNumber3 = split2[0];
    let localNumber4 = split2[1];

    let array = localNumber3.split("");
    let sum = array.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
    let str = sum.toString();

    let ignore = "";
    let num = "0123456789";
    for(let i = 0; i < number.length; i++){
        for(let j = 0; j < num.length; j++){
            if(number[i] === num[j]){
                ignore = ignore + number[i];
            }
        }
    }

    let check = [];
    for(let i = 0; i <= ignore.length-4; i++){
        let fourDigit = "";
        for(let j = i; j < i+4; j++){
            fourDigit = fourDigit + ignore[j];
        }
        check.push(fourDigit);
    }

    let isSpammer = false;
    for(let i = 0; i < check.length; i++){
        let allSame = check[i].split("").every(num => num === check[i][0]);
        if(allSame === true){
            isSpammer = true;
            break;
        }
    }

    if(countryCode.length > 2 || countryCode[0] !== "0"){
        return true;
    }else if(parseInt(areaCode) > 900 || parseInt(areaCode) < 200){
        return true;
    }else if(localNumber4.includes(str)){
        return true;
    }else if(isSpammer === true){
        return true;
    }else{
        return false;
    }
}

// console.log(isSpam("+0 (200) 234-0182"));
// console.log(isSpam("+091 (555) 309-1922"));
// console.log(isSpam("+1 (555) 435-4792"));
// console.log(isSpam("+0 (955) 234-4364"));
// console.log(isSpam("+0 (155) 131-6943"));
// console.log(isSpam("+0 (555) 135-0192"));
// console.log(isSpam("+0 (555) 564-1987"));
// console.log(isSpam("+00 (555) 234-0182"));