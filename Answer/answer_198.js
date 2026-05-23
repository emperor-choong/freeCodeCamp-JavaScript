function decodeQr(qrCode) {
    let result;
    let result0 = checkCorrectlyOrientedCode(qrCode);
    let rotate90 = rotateClockwise90(qrCode);
    let rotate180 = rotateClockwise90(rotate90);
    let rotate270 = rotateClockwise90(rotate180);

    let result90 = checkCorrectlyOrientedCode(rotate90);
    let result180 = checkCorrectlyOrientedCode(rotate180);
    let result270 = checkCorrectlyOrientedCode(rotate270);

    if(result0 === true){
        result = qrCode;
    }else if(result90 === true){
        result = rotate90;
    }else if(result180 === true){
        result = rotate180;
    }else if(result270 === true){
        result = rotate270;
    }

    let sum = "";
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            if((i === 0 && j === 0) || (i === 0 && j === 1) || (i === 1 && j === 0) || (i === 1 && j === 1)){
                continue;
            }else if((i === 0 && j === 4) || (i === 0 && j === 5) || (i === 1 && j === 4) || (i === 1 && j === 5)){
                continue;
            }else if((i === 4 && j === 0) || (i === 4 && j === 1) || (i === 5 && j === 0) || (i === 5 && j === 1)){
                continue;
            }

            sum = sum + result[i][j];
        }
    }
    
    return sum;
}

function rotateClockwise90(matrix){
    let result = [];
    for(let i = 0; i < 6; i++){
        let temp = [];
        for(let j = 0; j < 6; j++){
            temp.push(matrix[j][i]);
        }

        result.push(temp.reverse().join(""));
    }

    return result;
}

function checkCorrectlyOrientedCode(matrix){
    let bottomLeft = false;
    let topLeft = false;
    let topRight = false;
    
    if(matrix[0][0] === "1" && matrix[0][1] === "1" && matrix[1][0] === "1" && matrix[1][1] === "1"){
        topLeft = true;
    }

    if(matrix[0][4] === "1" && matrix[0][5] === "1" && matrix[1][4] === "1" && matrix[1][5] === "1"){
        topRight = true;
    }

    if(matrix[4][0] === "1" && matrix[4][1] === "1" && matrix[5][0] === "1" && matrix[5][1] === "1"){
        bottomLeft = true;
    }

    if(bottomLeft === true && topLeft === true && topRight === true){
        return true;
    }else{
        return false;
    }
}

// console.log(decodeQr(["110011", "110011", "000000", "000000", "110000", "110001"]));
// console.log(decodeQr(["100011", "000011", "000000", "000000", "110011", "110011"]));
// console.log(decodeQr(["110011", "111111", "010000", "110000", "110011", "110100"]));
// console.log(decodeQr(["011011", "101011", "101000", "100010", "110011", "111011"]));
// console.log(decodeQr(["111100", "110001", "100011", "001101", "110011", "110011"]));