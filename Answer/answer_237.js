function parseUrlQuery(url) {
    let queryString = url.split("?")[1];
    let array = queryString.split("&");
    let result = array.reduce((accumulator, currentValue) => {
        let [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
    }, {});

    return result;
}

// console.log(parseUrlQuery("https://example.com/search?name=Alice&age=30"));
// console.log(parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python"));
// console.log(parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2"));
// console.log(parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now"));