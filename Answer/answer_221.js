function getInitials(name) {
    let result = name.split(" ").reduce((accumulator, currentValue) => {
        return accumulator + currentValue[0] + ".";
    }, "");

    return result;
}

// console.log(getInitials("Tommy Millwood"));
// console.log(getInitials("Savanna Puddlesplash"));
// console.log(getInitials("Frances Cowell Conrad"));
// console.log(getInitials("Dragon"));
// console.log(getInitials("Dorothy Vera Clump Haverstock Norris"));