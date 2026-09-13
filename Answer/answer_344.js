function spaceJam(s) {
    let array = s.split("");
    let result = array.reduce((accumulator, currentValue) => {
        if(currentValue === " "){
            return accumulator;
        }else{
            return accumulator + currentValue;
        }
    }, "");

    return result.toUpperCase().split("").join("  ");
}

// console.log(spaceJam("freeCodeCamp"));
// console.log(spaceJam("   free   Code   Camp   "));
// console.log(spaceJam("Hello World?!"));
// console.log(spaceJam("C@t$ & D0g$"));
// console.log(spaceJam("allyourbase"));