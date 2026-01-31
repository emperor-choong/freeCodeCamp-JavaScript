function scaleImage(size, scale) {
    let array = size.split("x");
    let result = array.map(dimension => {
        return String(Number(dimension)*scale);
    })

    return result.join("x");
}

// console.log(scaleImage("800x600", 2));
// console.log(scaleImage("100x100", 10));
// console.log(scaleImage("1024x768", 0.5));
// console.log(scaleImage("300x200", 1.5));