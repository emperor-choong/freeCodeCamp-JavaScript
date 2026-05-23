function zipStrings(a, b) {
    let longerLength = Math.max(a.length, b.length);

    let sum = "";
    for(let i = 0; i < longerLength; i++){
        if(a[i] === undefined){
            sum = sum + b[i];
            continue;
        }else if(b[i] === undefined){
            sum = sum + a[i];
            continue;
        }

        sum = sum + a[i] + b[i];
    }

    return sum;
}

// console.log(zipStrings("abc", "123"));
// console.log(zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz"));
// console.log(zipStrings("day", "night"));
// console.log(zipStrings("python", "javascript"));
// console.log(zipStrings("feCdCm", "reoeap"));