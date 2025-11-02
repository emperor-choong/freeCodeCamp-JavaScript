function navigate(commands) {
    let history = ["Home"];
    let index = 0;
    for(let i = 0; i < commands.length; i++){
        if(commands[i] === "Back"){
            index = index - 1;
            if(index < 0){
                index = 0;
            }
        }else if(commands[i] === "Forward"){
            index = index + 1;
            if(index > history.length-1){
                index = history.length - 1;
            }
        }else{
            if(index === history.length-1){
                history.push(commands[i]);
                index++;
            }else{
                history.splice(index+1, 0, commands[i]);
                history = history.slice(0, index+2);
                index++;
            }
        }
    }

    if(history[index] === "Home"){
        return "Home";
    }else{
        let array = history[index].split(" ");
        let result = array.slice(1).join(" ");
        return result;
    }
}

// console.log(navigate(["Visit About Us", "Back", "Forward"]));
// console.log(navigate(["Forward"]));
// console.log(navigate(["Back"]));
// console.log(navigate(["Visit About Us", "Visit Gallery"]));
// console.log(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]));
// console.log(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]));
// console.log(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]));