function parseBold(markdown) {
    let result = markdown 
    .replace(/\*\*([^\s](?:.*?[^\s])?)\*\*/g, "<b>$1</b>")
    .replace(/__([^\s](?:.*?[^\s])?)__/g, "<b>$1</b>");

    return result;
}

// console.log(parseBold("**This is bold**"));
// console.log(parseBold("__This is also bold__"));
// console.log(parseBold("**This is not bold **"));
// console.log(parseBold("__ This is also not bold__"));
// console.log(parseBold("The **quick** brown fox __jumps__ over the **lazy** dog."));



