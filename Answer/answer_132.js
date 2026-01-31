function parseLink(markdown) {
    let regex = /\[([^\]]+)\]\(([^)]+)\)/;
    let result = markdown.replace(regex, replacer);
    return result;
}

function replacer(match, p1, p2){
    return `<a href="${p2}">${p1}</a>`;
}

// console.log(parseLink("[freeCodeCamp](https://freecodecamp.org/)"));
// console.log(parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)"));
// console.log(parseLink("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)"));