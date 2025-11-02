function hexToDecimal(hex) {
    let sum = 0;
    let power = 0;
    for(let i = hex.length-1; i >= 0; i--){
        if(hex[i] === 'A'){
            sum = sum + 10*(16**power);
        }else if(hex[i] === 'B'){
            sum = sum + 11*(16**power);
        }else if(hex[i] === 'C'){
            sum = sum + 12*(16**power);
        }else if(hex[i] === 'D'){
            sum = sum + 13*(16**power);
        }else if(hex[i] === 'E'){
            sum = sum + 14*(16**power);
        }else if(hex[i] === 'F'){
            sum = sum + 15*(16**power);
        }else{
            sum = sum + parseInt(hex[i])*(16**power);
        }
        
        power++;
    }

    return sum;
}

// console.log(hexToDecimal("A"));
// console.log(hexToDecimal("15"));
// console.log(hexToDecimal("2E"));
// console.log(hexToDecimal("FF"));
// console.log(hexToDecimal("A3F"));