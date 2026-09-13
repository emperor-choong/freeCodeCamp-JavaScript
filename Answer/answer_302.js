function migrateRecord(schema, record) {
    for (let [key, value] of Object.entries(record)) {
        if(!(key in schema)){
            schema[key] = value;
        }

        if(key in schema){
            if(schema[key] !== record[key]){
                schema[key] = record[key];
            }
        }
    }

    return schema;
}

// console.log(migrateRecord({ username: "", posts: 0 }, { verified: true }));
// console.log(migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }));
// console.log(migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }));
// console.log(migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }));
// console.log(migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }));