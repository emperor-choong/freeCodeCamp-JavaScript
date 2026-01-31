function getAverageGrade(scores) {
    let sum = scores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    let average = sum / scores.length;
    if(average >= 97){
        return "A+";
    }else if(average >= 93){
        return "A";
    }else if(average >= 90){
        return "A-";
    }else if(average >= 87){
        return "B+";
    }else if(average >= 83){
        return "B";
    }else if(average >= 80){
        return "B-";
    }else if(average >= 77){
        return "C+";
    }else if(average >= 73){
        return "C";
    }else if(average >= 70){
        return "C-";
    }else if(average >= 67){
        return "D+";
    }else if(average >= 63){
        return "D";
    }else if(average >= 60){
        return "D-";
    }else{
        return "F";
    }
}

// console.log(getAverageGrade([92, 91, 90, 94, 89, 93]));
// console.log(getAverageGrade([84, 89, 85, 100, 91, 88, 79]));
// console.log(getAverageGrade([63, 69, 65, 66, 71, 64, 65]));
// console.log(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]));
// console.log(getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]));
// console.log(getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]));