function kaprekar(n) {
    let count = 0;

    while (n !== 6174) {
        let digits = String(n).padStart(4, "0").split("");

        let largest = Number([...digits].sort((a, b) => b - a).join(""));
        let smallest = Number([...digits].sort((a, b) => a - b).join(""));

        n = largest - smallest;
        count++;
    }

    return count;
}

// console.log(kaprekar(1234));
// console.log(kaprekar(2025));
// console.log(kaprekar(7173));
// console.log(kaprekar(3164));
// console.log(kaprekar(8082));

