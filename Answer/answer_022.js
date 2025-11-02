function formatNumber(number) {
    let sum = "+";
    for(let i = 0; i < number.length; i++){
        if(i === 0){
            sum = sum + number[i] + " (";
        }else if(i === 3){
            sum = sum + number[i] + ") ";
        }else if(i === 6){
            sum = sum + number[i] + "-";
        }else{
            sum = sum + number[i];
        }
    }

    return sum;
}

// console.log(formatNumber("05552340182"));
// console.log(formatNumber("15554354792"));