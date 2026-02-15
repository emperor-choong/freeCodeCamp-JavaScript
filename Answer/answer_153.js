function truncateText(text) {
    if(text.length <= 20){
        return text;
    }else{
        return text.slice(0, 17) + "...";
    }
}

// console.log(truncateText("Hello, world!"));
// console.log(truncateText("This string should get truncated."));
// console.log(truncateText("Exactly twenty chars"));
// console.log(truncateText("....................."));