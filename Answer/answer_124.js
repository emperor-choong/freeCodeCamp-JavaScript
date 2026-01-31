function vowelCase(str) {
    let result = str.replace(/[a-z]/gi, match => {
        return "aeiouAEIOU".includes(match) ? match.toUpperCase() : match.toLowerCase();
    });

    return result;
}

// console.log(vowelCase("vowelcase"));
// console.log(vowelCase("coding is fun"));
// console.log(vowelCase("HELLO, world!"));
// console.log(vowelCase("git cherry-pick"));
// console.log(vowelCase("HEAD~1"));