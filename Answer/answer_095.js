function convertToKgs(lbs) {
    let kgs = (lbs*0.453592).toFixed(2);
    let result;

    if(lbs === 1){
        result = `${lbs} pound equals ${kgs} kilograms.`;
    }else if(kgs === "1.00"){
        result = `${lbs} pounds equals ${kgs} kilogram.`;
    }else{
        result = `${lbs} pounds equals ${kgs} kilograms.`;
    }

    return result;
}

// console.log(convertToKgs(1));
// console.log(convertToKgs(0));
// console.log(convertToKgs(100));
// console.log(convertToKgs(2.5));
// console.log(convertToKgs(2.20462));