function parseInlineCode(markdown) {
    // Capturing group: (...)
    let regex = /`([^`]+)`/g;
    // Replacement string: $1
    let result = markdown.replace(regex, "<code>$1</code>");

    return result;
}

// console.log(parseInlineCode("Use `let` to declare the variable."));
// console.log(parseInlineCode("Use `let` or `const` to declare a variable."));
// console.log(parseInlineCode("Run `npm install` then `npm start`."));