function toRoman(num) {
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";
    for(let i = 0; i < value.length; i++){
        while(num >= value[i]){
            num = num - value[i];
            result = result + symbol[i];
        }
    }

    return result;
}

// console.log(toRoman(18));
// console.log(toRoman(19));
// console.log(toRoman(1464));
// console.log(toRoman(2025));
// console.log(toRoman(3999));