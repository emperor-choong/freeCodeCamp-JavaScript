function doMath(str) {
    // Quantifiers
    // + => 1 or more times
    // * => 0 or more times
    // Capturing group : (...)
    const regex = /(\d+)(\D*)/g;

    let match;
    let result = 0;
    let operator = "+"; 

    while (true) {
        match = regex.exec(str);
        if(match === null){
            break;
        }

        const num = Number(match[1]);
        const separator = match[2];

        if (operator === "+") {
            result = result + num;
        } else {
            result = result - num;
        }

        if (separator !== "") {
            operator = separator.length % 2 === 0 ? "+" : "-";
        }
    }

    return result;
}

// console.log(doMath("3ab10c8"));
// console.log(doMath("6MINUS4"));
// console.log(doMath("9plus3"));
// console.log(doMath("5fkwo#10i#%.<>15P=@20!#B/25"));
// console.log(doMath("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt"));