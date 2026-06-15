function isValidSchema(obj) {
    let Roles = ["user", "creator", "moderator", "staff", "admin"];

    function isUserProfile(UserProfile){
        return typeof UserProfile.username === "string" && 
               typeof UserProfile.posts === "number" && 
               typeof UserProfile.verified === "boolean" && 
               Roles.includes(UserProfile.role) && 
               (UserProfile.supporter === undefined || typeof UserProfile.supporter === "boolean") &&
               (Array.isArray(UserProfile.badges) && UserProfile.badges.every(element => typeof element === "string"));
    }

    function matchesSchema(obj){
        return Array.isArray(obj.users) && obj.users.every(isUserProfile);
    }

    return matchesSchema(obj);   
}

// console.log(isValidSchema({ users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]}));
// console.log(isValidSchema({ users: [] }));
// console.log(isValidSchema({ users: { username: "anne", posts: 0, verified: false, role: "user", supporter: false, badges: []}}));
// console.log(isValidSchema({ users: [{ username: "tony", posts: 10, verified: true, role: "creator", supporter: true, badges: ["liked", 6]}]}));
// console.log(isValidSchema({ users: [{ username: "ursula", posts: 3, verified: false, role: "user", supporter: "false", badges: ["comeback"]}]}));
// console.log(isValidSchema({ users: [{ username: "benny", posts: 55, verified: true, role: "superstar", supporter: true, badges: ["veteran"]}]}));
// console.log(isValidSchema({ users: [{ username: "chase", posts: 1, verified: "yes", role: "staff", supporter: false, badges: ["superstar"]}]}));
// console.log(isValidSchema({ users: [{ username: "carla", posts: "10", verified: false, role: "user", supporter: false, badges: ["newbie"]}]}));
// console.log(isValidSchema({ users: [{ posts: 4, verified: false, role: "admin", supporter: false, badges: ["superuser", "veteran"]}]}));
// console.log(isValidSchema({ users: [{ username: "harold", posts: 80, verified: true, role: "creator", supporter: true, badges: ["liked", "hero"]}, { username: "kim", posts: 11, verified: false, role: "admin", supporter: true, badges: ["first"]}, {}]}));