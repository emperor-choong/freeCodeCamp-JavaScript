function parseBlockquote(markdown) {
    let regex = /^\s*>\s+(.+)/;
    let text = markdown.match(regex);
    let result = `<blockquote>${text[1]}</blockquote>`;

    return result;
}

// console.log(parseBlockquote("> This is a quote"));
// console.log(parseBlockquote(" > This is also a quote"));
// console.log(parseBlockquote("  >    So  Is  This"));

