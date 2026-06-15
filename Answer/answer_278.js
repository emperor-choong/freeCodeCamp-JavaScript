function getRoommates(people) {
    let groups = new Map();
    for(let person of people){
        if(groups.has(person.group) === false){
            groups.set(person.group, []);
        }

        groups.get(person.group).push(person.name);  
    }

    let rooms = [];
    for(let names of groups.values()){
        for(let i = 0; i < names.length; i += 2){
            if(i + 1 < names.length){
                rooms.push(`${names[i]} and ${names[i+1]}`);
            }else{
                rooms.push(names[i]);
            }
        }
    }

    return rooms;
}

// console.log(getRoommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }]));
// console.log(getRoommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }]));
// console.log(getRoommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }]));
// console.log(getRoommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }]));
// console.log(getRoommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }]));