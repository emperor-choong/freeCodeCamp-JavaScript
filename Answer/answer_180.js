function countPerfectCubes(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    let start = Math.ceil(Math.cbrt(min));
    let end = Math.floor(Math.cbrt(max));

    return Math.max(0, end - start + 1);
}

// console.log(countPerfectCubes(3, 30));
// console.log(countPerfectCubes(1, 30));
// console.log(countPerfectCubes(30, 0));
// console.log(countPerfectCubes(-64, 64));
// console.log(countPerfectCubes(9214, -8127));