function parseItalic(markdown) {
    let pattern = /([*_])([^\s*_](?:[^*_]*[^\s*_])?)\1/g;
    let result = markdown.replace(pattern, "<i>$2</i>");

    return result;
}

// console.log(parseItalic("*This is italic*"));
// console.log(parseItalic("_This is also italic_"));
// console.log(parseItalic("*This is not italic *"));
// console.log(parseItalic("_ This is also not italic_"));
// console.log(parseItalic("The *quick* brown fox _jumps_ over the *lazy* dog."));