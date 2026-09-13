function petYears(pet, age) {
    if(pet === "dog"){
        return age * 7;
    }else if(pet === "cat"){
        return age * 6;
    }else if(pet === "rabbit"){
        return age * 8;
    }else if(pet === "hamster"){
        return age * 30;
    }else if(pet === "guinea pig"){
        return age * 12;
    }else if(pet === "goldfish"){
        return age * 6;
    }else if(pet === "bird"){
        return age * 5;
    }
}

// console.log(petYears("dog", 5));
// console.log(petYears("cat", 9));
// console.log(petYears("rabbit", 3));
// console.log(petYears("hamster", 4));
// console.log(petYears("guinea pig", 5));
// console.log(petYears("goldfish", 2));
// console.log(petYears("bird", 1));