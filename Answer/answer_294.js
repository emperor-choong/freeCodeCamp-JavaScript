function parseFrontmatter(str) {
    let result = {};
    let array = str.split("\n").slice(1, -1);

    array.forEach(element => {
        let [key, ...rest] = element.split(":");
        let value = rest.join(":").trim();

        if(value === "true"){
            value = true;
        }else if(value === "false"){
            value = false;
        }else if(isNaN(value) === false){
            value = Number(value);
        }

        result[key] = value;
    });

    return result;
}

// console.log(parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---"));
// console.log(parseFrontmatter("---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---"));
// console.log(parseFrontmatter("---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---"));
// console.log(parseFrontmatter("---\nrating: 4.5\nprice: 9.99\n---"));