function capitalizeFibonacci(str) {
    let regex = /^[A-Za-z]$/;
    let sum = "";
    for(let i = 0; i < str.length; i++){
        if(regex.test(str[i]) === true){
            if(isFibonacci(i) === true){
                sum = sum + str[i].toUpperCase();
            }else{
                sum = sum + str[i].toLowerCase();
            }
        }else{
            sum = sum + str[i];
        }
    }

    return sum;
}

function isPerfectSquare(x) {
    const s = Math.sqrt(x);
    return Number.isInteger(s);
}

function isFibonacci(n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// console.log(capitalizeFibonacci("hello world"));
// console.log(capitalizeFibonacci("HELLO WORLD"));
// console.log(capitalizeFibonacci("hello, world!"));
// console.log(capitalizeFibonacci("The quick brown fox jumped over the lazy dog."));
// console.log(capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl."));