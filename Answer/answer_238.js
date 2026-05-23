function isInCrossword(char) {
    let binary = [
        ["0", "1", "0", "0", "0", "0", "0", "1"],
        ["0", "1", "1", "0", "1", "1", "1", "1"],
        ["0", "1", "0", "0", "0", "1", "0", "0"],
        ["0", "1", "1", "0", "0", "1", "0", "1"],
        ["0", "1", "0", "1", "0", "0", "1", "0"],
        ["0", "1", "0", "1", "0", "1", "0", "0"],
        ["0", "1", "1", "0", "1", "0", "0", "0"],
        ["1", "0", "1", "0", "1", "1", "1", "0"],
    ];

    let x = [];
    for(let i = 0; i < binary.length; i++){
        x.push(binary[i].join(""));
    }

    for(let i = 0; i < binary.length; i++){
        x.push(binary[i].reverse().join(""));
    }

    for(let i = 0; i < binary.length; i++){
        let sum = "";
        for(let j = 0; j < binary[i].length; j++){
            sum = sum + binary[j][i];
        }

        x.push(sum);
    }

    for(let i = 0; i < binary.length; i++){
        let sum = "";
        for(let j = 0; j < binary[i].length; j++){
            let index = binary.length-1-j;
            sum = sum + binary[index][i];
        }

        x.push(sum);
    }

    let result = [];
    for(let i = 0; i < x.length; i++){
        result.push(String.fromCharCode(parseInt(x[i], 2)));
    }

    return result.includes(char);
}

// console.log(isInCrossword("I"));
// console.log(isInCrossword("D"));
// console.log(isInCrossword("0"));
// console.log(isInCrossword("u"));
// console.log(isInCrossword("Y"));
// console.log(isInCrossword("p"));
// console.log(isInCrossword("1"));
// console.log(isInCrossword("Q"));