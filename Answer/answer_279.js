function getItineraryCount(stops) {
    const n = stops.length;

    // breakfast [a stops] lunch [b stops] dinner [c stops]
    // a >= 1, b >= 1, c = 0 or 1
    // a + b + c = n
    // If c = 0 : a + b = n => n - 1 solutions
    // If c = 1 : a + b = n - 1 => n - 2 solutions 
    // (n - 1) + (n - 2) = 2n - 3
    // Answer = n! x (2n - 3)
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial * (2 * n - 3);
}

// console.log(getItineraryCount(["library", "park"]));
// console.log(getItineraryCount(["library", "park", "arcade"]));
// console.log(getItineraryCount(["library", "park", "arcade", "store"]));
// console.log(getItineraryCount(["library", "park", "arcade", "store", "cafe"]));
// console.log(getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]));