function getElementSize(windowSize, elementVw, elementVh) {
    let array = windowSize.split(" x ");
    let width = Number(array[0]);
    let height = Number(array[1]);
    let vw = Number(elementVw.slice(0, -2));
    let vh = Number(elementVh.slice(0, -2));

    let resultWidth = width * vw / 100;
    let resultHeight = height * vh / 100;

    return `${resultWidth} x ${resultHeight}`;
}

// console.log(getElementSize("1200 x 800", "50vw", "50vh"));
// console.log(getElementSize("320 x 480", "25vw", "50vh"));
// console.log(getElementSize("1000 x 500", "7vw", "3vh"));
// console.log(getElementSize("1920 x 1080", "95vw", "100vh"));
// console.log(getElementSize("1200 x 800", "0vw", "0vh"));
// console.log(getElementSize("1440 x 900", "100vw", "114vh"));