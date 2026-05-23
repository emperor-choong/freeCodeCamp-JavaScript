function getBrowserHistory(commands){
    let history = [];
    let currentIndex = -1;

    for(const cmd of commands){
        if(cmd === "Back"){
            if(currentIndex > 0){
                currentIndex--;
            } 
        }else if(cmd === "Forward"){
            if(currentIndex < history.length - 1){
                currentIndex++;
            } 
        }else{
            history.splice(currentIndex + 1);
            history.push(cmd);
            currentIndex++;
        }
    }

    return [history, currentIndex];
}

// console.log(getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]));
// console.log(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]));
// console.log(getBrowserHistory(["example.com", "example.com/about", "Back", "example.com/contact",  "example.com/blog", "Back", "Back", "Forward"]));
// console.log(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]));
// console.log(getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]));
// console.log(getBrowserHistory(["example.com", "example.com/about", "Forward"]));