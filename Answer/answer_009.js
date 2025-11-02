function capitalize(paragraph) {
    let sum = paragraph[0].toUpperCase();
    for(let i = 1; i < paragraph.length; i++){
        if([".", "?", "!", " "].includes(paragraph[i]) === false){
            if([".", "?", "!", " "].includes(paragraph[i-2]) && [".", "?", "!", " "].includes(paragraph[i-1])){
                sum = sum + paragraph[i].toUpperCase();
                continue;
            }
        }

        sum = sum + paragraph[i];  
    }

    return sum;
}

// console.log(capitalize("this is a simple sentence."));
// console.log(capitalize("hello world. how are you?"));
// console.log(capitalize("i did today's coding challenge... it was fun!!"));
// console.log(capitalize("crazy!!!strange???unconventional...sentences."));
// console.log(capitalize("there's a space before this period . why is there a space before that period ?"));