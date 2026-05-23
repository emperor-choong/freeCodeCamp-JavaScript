function getRotation(n) {
    let str = n.toString();
    let rotation = 0;
    let digitCount = str.length;
    for(let i = 0; i < digitCount; i++){
        if(Number(str) % str.length === 0){
            return rotation;
        }

        let array = str.split("");
        let firstDigit = array.shift();
        array.push(firstDigit); 
        str = array.join("");
        rotation++; 
    }

    return "none";
}

// console.log(getRotation(123));
// console.log(getRotation(13579));
// console.log(getRotation(24681));
// console.log(getRotation(84138789345));