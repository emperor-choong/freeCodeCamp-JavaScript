function explodeFizzbuzz(targetZCount) {
    let str = "fizzbuzz";
    let steps = 0;

    const countZ = (s) => (s.match(/z/g) || []).length;

    while (countZ(str) < targetZCount) {
        let newStr = "";

        for (let i = 0; i < str.length; i++) {
            let pos = i + 1;

            if (pos % 3 === 0 && pos % 5 === 0) {
                newStr += "fizzbuzz";
            } else if (pos % 3 === 0) {
                newStr += "fizz";
            } else if (pos % 5 === 0) {
                newStr += "buzz";
            } else {
                newStr += str[i];
            }
        }

        str = newStr;
        steps++;
    }

    return steps;
}

console.log(explodeFizzbuzz(9));
console.log(explodeFizzbuzz(15));
console.log(explodeFizzbuzz(51));
console.log(explodeFizzbuzz(52));
console.log(explodeFizzbuzz(359));
console.log(explodeFizzbuzz(789));
console.log(explodeFizzbuzz(54482));
console.log(explodeFizzbuzz(1000000));