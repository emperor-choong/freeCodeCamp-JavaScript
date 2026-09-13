function isPronic(n) {
    const k = Math.floor(Math.sqrt(n));
    return k * (k + 1) === n;
}

// console.log(isPronic(6));
// console.log(isPronic(15));
// console.log(isPronic(12));
// console.log(isPronic(132));
// console.log(isPronic(80));
// console.log(isPronic(0));