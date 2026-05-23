function findOrg(acronym) {
    let org = ["National Avocado Storage Authority", "Cats Infiltration Agency", "Fluffy Beanbag Inspectors", "Department Of Jelly", "Wild Honey Organization", "Eating Pancakes Administration"];
    for(let i = 0; i < org.length; i++){
        let x = org[i].split(" ").reduce((accumulator, currentValue) => {
            return accumulator + currentValue[0];
        }, "");

        if(acronym === x){
            return org[i];
        }
    }
}

// console.log(findOrg("NASA"));
// console.log(findOrg("CIA"));
// console.log(findOrg("FBI"));
// console.log(findOrg("DOJ"));
// console.log(findOrg("WHO"));
// console.log(findOrg("EPA"));