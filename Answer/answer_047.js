function wiseSpeak(sentence) {
    let str = sentence.slice(0, sentence.length-1);
    let punctuation = sentence.slice(-1);
    let array = str.split(" ");

    let index = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === "have" || array[i] === "must" || array[i] === "are" || array[i] === "will" || array[i] === "can"){
            index = i;
            break;
        }
    }

    let firstPart = array.slice(0, index + 1);
    let secondPart = array.slice(index + 1);

    let end1 = firstPart.length-1;
    firstPart[end1] = firstPart[end1] + punctuation;

    let end2 = secondPart.length-1;
    secondPart[end2] = secondPart[end2] + ",";

    let capitalize = secondPart[0][0].toUpperCase() + secondPart[0].slice(1);
    secondPart[0] = capitalize;

    let lower = firstPart[0][0].toLowerCase() + firstPart[0].slice(1);
    firstPart[0] = lower;

    let combine = [...secondPart, ...firstPart];

    return combine.join(" ");
}

// console.log(wiseSpeak("You must speak wisely."));
// console.log(wiseSpeak("You can do it!"));
// console.log(wiseSpeak("Do you think you will complete this?"));
// console.log(wiseSpeak("All your base are belong to us."));
// console.log(wiseSpeak("You have much to learn."));