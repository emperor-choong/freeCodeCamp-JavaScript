function calculateAge(birthday) {
    let birth = new Date(birthday);
    let current = new Date("2025-11-27");

    if(birth.getMonth() > current.getMonth()){
        return current.getFullYear()-birth.getFullYear()-1;
    }else if(birth.getMonth() === current.getMonth()){
        if(current.getDate() >= birth.getDate()){
            return current.getFullYear()-birth.getFullYear();
        }else{
            return current.getFullYear()-birth.getFullYear()-1;
        }
    }else{
        return current.getFullYear()-birth.getFullYear();
    }
}

// console.log(calculateAge("2000-11-20"));
// console.log(calculateAge("2000-12-01"));
// console.log(calculateAge("2014-10-25"));
// console.log(calculateAge("1994-01-06"));
// console.log(calculateAge("1994-12-14"));