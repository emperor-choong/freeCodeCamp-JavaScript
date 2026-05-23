function getCapturedValue(pieces) {
    let total = 8*1 + 2*5 + 2*3 + 2*3 + 1*9 + 1*0;
    if(pieces.includes("K") === true){
        let notCapturedValue = pieces.reduce((accumulator, currentValue) => {
            if(currentValue === "P"){
                return accumulator + 1;
            }else if(currentValue === "R"){
                return accumulator + 5;
            }else if(currentValue === "N"){
                return accumulator + 3;
            }else if(currentValue === "B"){
                return accumulator + 3;
            }else if(currentValue === "Q"){
                return accumulator + 9;
            }else if(currentValue === "K"){
                return accumulator + 0;
            }
        }, 0);

        let result = total - notCapturedValue;
        return result;
    }else{
        return "Checkmate";
    }
}

// console.log(getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]));
// console.log(getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"]));
// console.log(getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]));
// console.log(getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]));
// console.log(getCapturedValue(["P", "K"]));
// console.log(getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]));
// console.log(getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]));