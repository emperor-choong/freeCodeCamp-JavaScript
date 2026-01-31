function titleCase(title) {
    let array = title.split(" ");
    let result = array.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    return result.join(" ");
}

// console.log(titleCase("hello world"));
// console.log(titleCase("the quick brown fox"));
// console.log(titleCase("JAVASCRIPT AND PYTHON"));
// console.log(titleCase("AvOcAdO tOAst fOr brEAkfAst"));