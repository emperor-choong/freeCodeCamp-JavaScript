function isValidCard(number) {
    let array = number.split("").map(Number);
    let result = array.map((element, index, array) => {
        let double = element * 2;
        if(array.length % 2 === 0){
            if(index % 2 === 0){
                if(double > 9){
                    return double - 9;
                }else{
                    return double;
                }
            }else{
                return element;
            }
        }else{
            if(index % 2 === 1){
                if(double > 9){
                    return double - 9;
                }else{
                    return double;
                }
            }else{
                return element;
            }
        }
    });

    let sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum % 10 === 0;
}

// console.log(isValidCard("4532015112830366"));
// console.log(isValidCard("5425233430109903"));
// console.log(isValidCard("371449635398431"));
// console.log(isValidCard("6011111111111117"));
// console.log(isValidCard("4532015112830367"));
// console.log(isValidCard("1234567890123456"));
// console.log(isValidCard("4532015112830368"));