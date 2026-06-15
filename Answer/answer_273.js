function isValidSchema(obj) {
    let Roles = ["user", "creator", "moderator", "staff", "admin"];

    return typeof obj.username === "string" && 
           typeof obj.posts === "number" && 
           typeof obj.verified === "boolean" && 
           Roles.includes(obj.role) && 
           (obj.supporter === undefined || typeof obj.supporter === "boolean");
}

// console.log(isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true }));
// console.log(isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }));
// console.log(isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 }));
// console.log(isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" }));
// console.log(isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true }));
// console.log(isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }));
// console.log(isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true }));
// console.log(isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false }));