function toScreamingSnakeCase(variableName) {
    let sum = variableName[0].toUpperCase();
    for(let i = 1; i < variableName.length; i++){
        if(variableName[i] === "_" || variableName[i] === "-"){
            sum = sum + "_";
        }else if(variableName[i] === variableName[i].toUpperCase()){
            sum = sum + "_" + variableName[i];
        }else{
            sum = sum + variableName[i].toUpperCase();
        }
    }

    return sum;
}

// console.log(toScreamingSnakeCase("userEmail"));
// console.log(toScreamingSnakeCase("UserPassword"));
// console.log(toScreamingSnakeCase("user_id"));
// console.log(toScreamingSnakeCase("user-address"));
// console.log(toScreamingSnakeCase("username"));