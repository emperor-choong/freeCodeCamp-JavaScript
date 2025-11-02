function getHeadings(csv) {
    let array = csv.split(",");
    let result = array.map((x) => x.trim());

    return result;
}

// console.log(getHeadings("name,age,city"));
// console.log(getHeadings("first name,last name,phone"));
// console.log(getHeadings("username , email , signup date "));