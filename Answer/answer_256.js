function getBingoRange(letter) {
    let start;
    let end;
    if(letter === "B"){
        start = 1;
        end = 15;
    }else if(letter === "I"){
        start = 16;
        end = 30;
    }else if(letter === "N"){
        start = 31;
        end = 45;
    }else if(letter === "G"){
        start = 46;
        end = 60;
    }else if(letter === "O"){
        start = 61;
        end = 75;
    }

    return range(start, end);
}

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (element, index) => start + index);
}

// console.log(getBingoRange("B"));
// console.log(getBingoRange("I"));
// console.log(getBingoRange("N"));
// console.log(getBingoRange("G"));
// console.log(getBingoRange("O"));