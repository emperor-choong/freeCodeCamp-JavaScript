function makeLeet(str) {
    let leet = {
        a: 4,
        e: 3,
        g: 9,
        i: 1,
        l: 1,
        o: 0,
        s: 5,
        t: 7
    };

    let sum = "";
    for(let i = 0; i < str.length; i++){
        if(leet[str[i]] === undefined){
            sum = sum + str[i];
        }else{
            sum = sum + leet[str[i]];
        }
    }

    return sum;
}

// console.log(makeLeet("cool"));
// console.log(makeLeet("leet"));
// console.log(makeLeet("hacker"));
// console.log(makeLeet("satellite"));
// console.log(makeLeet("abcdefghijklmnopqrstuvwxyz"));