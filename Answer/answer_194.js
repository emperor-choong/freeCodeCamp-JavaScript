function getMilestone(years) {
    if(years >= 70){
        return "Platinum";
    }else if(years >= 60){
        return "Diamond";
    }else if(years >= 50){
        return "Gold";
    }else if(years >= 40){
        return "Ruby";
    }else if(years >= 25){
        return "Silver";
    }else if(years >= 10){
        return "Tin";
    }else if(years >= 5){
        return "Wood";
    }else if(years >= 1){
        return "Paper";
    }else{
        return "Newlyweds";
    }
}

// console.log(getMilestone(0));
// console.log(getMilestone(1));
// console.log(getMilestone(8));
// console.log(getMilestone(10));
// console.log(getMilestone(26));
// console.log(getMilestone(45));
// console.log(getMilestone(50));
// console.log(getMilestone(64));
// console.log(getMilestone(71));