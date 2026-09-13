function rgbToHex(rgb) {
    let array = rgb.match(/\d+/g);
    let result = "#" + array.map(element => Number(element).toString(16).padStart(2, "0")).join("");

    return result;
}

// console.log(rgbToHex("rgb(255, 255, 255)"));
// console.log(rgbToHex("rgb(1, 11, 111)"));
// console.log(rgbToHex("rgb(173, 216, 230)"));
// console.log(rgbToHex("rgb(79, 123, 201)"));