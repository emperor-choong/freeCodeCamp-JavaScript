function generateHex(color) {
    if (!["red", "green", "blue"].includes(color)) {
        return "Invalid color";
    }

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    if (color === "red") {
        r = Math.max(r, g, b) + 1;
        if (r > 255) r = 255;
    } else if (color === "green") {
        g = Math.max(r, g, b) + 1;
        if (g > 255) g = 255;
    } else {
        b = Math.max(r, g, b) + 1;
        if (b > 255) b = 255;
    }

    return [r, g, b]
        .map(value => value.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
}

// console.log(generateHex("yellow"));
// console.log(generateHex("red"));
// console.log(generateHex("red"));
// console.log(generateHex("red"));

// console.log(generateHex("red"));
// console.log(generateHex("red"));

// console.log(generateHex("green"));
// console.log(generateHex("green"));

// console.log(generateHex("blue"));
// console.log(generateHex("blue"));