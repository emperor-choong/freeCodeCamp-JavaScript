function getWiderAspectRatio(a, b) {
    let first = getRatio(a);
    let second = getRatio(b);
    let ratio1 = first[0] / first[1];
    let ratio2 = second[0] / second[1];  
    let result;
    if(ratio1 > ratio2){
        result = first;
    }else{
        result = second;
    }

    return result.join(":");
}

function getRatio(str){
    let array = str.split("x").map(Number);
    let [width, height] = array;
    let min = Math.min(width, height);
    let factor;
    for(let i = min; i >= 1; i--){
        if(width % i === 0 && height % i === 0){
            factor = i;
            break;
        }
    }

    return [width / factor, height / factor];
}

// console.log(getWiderAspectRatio("1920x1080", "800x600"));
// console.log(getWiderAspectRatio("1080x1350", "2048x1536"));
// console.log(getWiderAspectRatio("640x480", "2440x1220"));
// console.log(getWiderAspectRatio("360x640", "1080x1920"));
// console.log(getWiderAspectRatio("3440x1440", "2048x858"));
// console.log(getWiderAspectRatio("12345x61234", "12534x51234"));