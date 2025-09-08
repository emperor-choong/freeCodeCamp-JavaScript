function buildAcronym(str) {
    let ignore = ["a", "for", "an", "and", "by", "of"];

    let array = str.split(" ");
    let [firstItem, ...rest] = array;
    let filterArray = rest.filter(word => !ignore.includes(word));
    let filterPlusFirst = [firstItem, ...filterArray];
    let acronym = filterPlusFirst.map(word => word[0]).join("").toUpperCase();

    return acronym;
}

// console.log(buildAcronym("Search Engine Optimization"));
// console.log(buildAcronym("Frequently Asked Questions"));
// console.log(buildAcronym("National Aeronautics and Space Administration"));
// console.log(buildAcronym("Federal Bureau of Investigation"));
// console.log(buildAcronym("For your information"));
// console.log(buildAcronym("By the way"));
// console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"));