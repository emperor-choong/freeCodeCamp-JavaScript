function parseImage(markdown) {
    let pattern = /!\[(.*?)\]\((.*?)\)/;
    let result = markdown.match(pattern);

    return `<img src="${result[2]}" alt="${result[1]}">`;
}

// console.log(parseImage("![Cute cat](cat.png)"));
// console.log(parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)"));
// console.log(parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)"));