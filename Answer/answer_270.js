function isValidSchema(obj) {
    return typeof obj === "object" && typeof obj.username === "string";
}

// console.log(isValidSchema({ username: "bob" }));
// console.log(isValidSchema({ username: "jen", posts: 30 }));
// console.log(isValidSchema({ username: "" }));
// console.log(isValidSchema({ username: 7 }));
// console.log(isValidSchema({ posts: 25 }));