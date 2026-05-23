function isValidIsbn13(str) {
    let isDigitsAndHyphens = /^[\d-]+$/.test(str);
    
    if(isDigitsAndHyphens === true){
        let is13Digits = str.split("-").join("").length === 13;
        if(is13Digits === true){
            let array = str.split("-").join("").split("").map(Number);
            let sum = array.reduce((accumulator, currentValue, currentIndex) => {
                if(currentIndex % 2 === 0){
                    return accumulator + currentValue*1;
                }else{
                    return accumulator + currentValue*3;
                }
            }, 0);

            if(sum % 10 === 0){
                return true;
            }
        }
    }

    return false;
}

// console.log(isValidIsbn13("9780306406157"));
// console.log(isValidIsbn13("97803064061570"));
// console.log(isValidIsbn13("978-0-13-595705-9"));
// console.log(isValidIsbn13("978-030-64061A-4"));
// console.log(isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9"));