function toSnake(camel) {
    let sum = "";
    for(let i = 0; i < camel.length; i++){
        if(camel[i] === camel[i].toUpperCase()){
            sum = sum + "_" + camel[i].toLowerCase();
        }else{
            sum = sum + camel[i];
        }
    }

    return sum;
}

// console.log(toSnake("helloWorld"));
// console.log(toSnake("myVariableName"));
// console.log(toSnake("freecodecampDailyChallenges"));