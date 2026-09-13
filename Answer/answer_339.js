function mixPaint(bucket1, bucket2) {
    let red = (bucket1.color[0]*bucket1.fullness + bucket2.color[0]*bucket2.fullness) / (bucket1.fullness + bucket2.fullness);
    let green = (bucket1.color[1]*bucket1.fullness + bucket2.color[1]*bucket2.fullness) / (bucket1.fullness + bucket2.fullness);
    let blue = (bucket1.color[2]*bucket1.fullness + bucket2.color[2]*bucket2.fullness) / (bucket1.fullness + bucket2.fullness);

    return [red, green, blue].map(Math.round);
}

// console.log(mixPaint({ color: [250, 250, 250], fullness: 50 }, { color: [0, 0, 0], fullness: 50 }));
// console.log(mixPaint({ color: [250, 250, 250], fullness: 80 }, { color: [0, 0, 0], fullness: 20 }));
// console.log(mixPaint({ color: [100, 150, 200], fullness: 30 }, { color: [100, 150, 200], fullness: 70 }));
// console.log(mixPaint({ color: [143, 143, 101], fullness: 45 }, { color: [100, 204, 204], fullness: 90 }));
// console.log(mixPaint({ color: [15, 134, 249], fullness: 29 }, { color: [97, 178, 55], fullness: 54 }));

