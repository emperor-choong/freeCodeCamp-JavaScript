function getOldest(people) {
    let result = people.reduce((accumulator, currentValue) => {
        if(currentValue.age > accumulator.maxAge){
            accumulator.maxAge = currentValue.age;
            accumulator.names = [currentValue.name];
        }else if(currentValue.age === accumulator.maxAge){
            accumulator.names.push(currentValue.name);
        }

        return accumulator;
    }, {maxAge: -Infinity, names: []});

    return result.names;
}

// console.log(getOldest([{ name: "Brenda", age: 40 }]));
// console.log(getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]));
// console.log(getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }]));
// console.log(getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]));