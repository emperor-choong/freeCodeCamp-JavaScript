function toCamelCase(s) {
    // Capture group
    let result = s
        .toLowerCase()
        .replace(/[-_ ]+([a-z])/g, (match, p1) => p1.toUpperCase());

    return result;
}

// console.log(toCamelCase("hello world"));
// console.log(toCamelCase("HELLO WORLD"));
// console.log(toCamelCase("secret agent-X"));
// console.log(toCamelCase("FREE cODE cAMP"));
// console.log(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));