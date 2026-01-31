function toConsonantCase(str) {
    let regex1 = /[b-df-hj-np-tv-z]/gi;
    let regex2 = /[aeiou]/gi;
    let regex3 = /-/g;

    let result = str
        .replace(regex1, match => match.toUpperCase())
        .replace(regex2, match => match.toLowerCase())
        .replace(regex3, "_");

    return result;
}

// console.log(toConsonantCase("helloworld"));
// console.log(toConsonantCase("HELLOWORLD"));
// console.log(toConsonantCase("_hElLO-WOrlD-"));
// console.log(toConsonantCase("_~-generic_~-variable_~-name_~-here-~_"));