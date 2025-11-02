function parseRomanNumeral(numeral) {
    let array = [];
    for(let i = 0; i < numeral.length-1; i++){
        let left = convertRomanToInteger(numeral[i]);
        let right = convertRomanToInteger(numeral[i+1]);
        if(left < right){
            array.push(right - left);
            i++;
        }else{
            array.push(left);
            if(i === numeral.length-2){
                array.push(right);
            }
        }
    }

    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

function convertRomanToInteger(roman){
    if(roman === 'I'){
        return 1;
    }else if(roman === 'V'){
        return 5;
    }else if(roman === 'X'){
        return 10;
    }else if(roman === 'L'){
        return 50;
    }else if(roman === 'C'){
        return 100;
    }else if(roman === 'D'){
        return 500;
    }else if(roman === 'M'){
        return 1000;
    }
}

// console.log(parseRomanNumeral("III"));
// console.log(parseRomanNumeral("IV"));
// console.log(parseRomanNumeral("XXVI"));
// console.log(parseRomanNumeral("XCIX"));
// console.log(parseRomanNumeral("CDLX"));
// console.log(parseRomanNumeral("DIV"));
// console.log(parseRomanNumeral("MMXXV"));