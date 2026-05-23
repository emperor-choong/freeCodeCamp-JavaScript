function isValidIsbn10(str) {
    let string = str.split("-").join("");

    let regex = /^\d{9}[\dX]$/;
    if(regex.test(string) === true){
        let array1 = string.split("");
        let array2 = array1.map((x, index) => {
            if(x === "X"){
                return 10 * (index + 1);
            }else{
                return Number(x) * (index + 1);
            }
        });

        let total = array2.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        if(total % 11 === 0){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

// console.log(isValidIsbn10("0-306-40615-2"));
// console.log(isValidIsbn10("0-306-40615-1"));
// console.log(isValidIsbn10("0-8044-2957-X"));
// console.log(isValidIsbn10("X-306-40615-2"));
// console.log(isValidIsbn10("0-6822-2589-4"));