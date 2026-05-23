function isValidHSL(hsl) {
    let regex = /^hsl\(\s*(?:360|3[0-5]\d|[12]?\d?\d)\s*,\s*(?:100|[1-9]?\d)%\s*,\s*(?:100|[1-9]?\d)%\s*\)\s*;?$/;
    return regex.test(hsl);
}

// console.log(isValidHSL("hsl(240, 50%, 50%)"));
// console.log(isValidHSL("hsl( 200 , 50% , 75% )"));
// console.log(isValidHSL("hsl(99,60%,80%);"));
// console.log(isValidHSL("hsl(0, 0%, 0%) ;"));
// console.log(isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;"));
// console.log(isValidHSL("hsl(361, 50%, 80%)"));
// console.log(isValidHSL("hsl(300, 101%, 70%)"));
// console.log(isValidHSL("hsl(200, 55%, 75)"));
// console.log(isValidHSL("hsl (80, 20%, 10%)"));