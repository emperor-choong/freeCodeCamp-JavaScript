function getWords(paragraph) {
    let array = paragraph.split(" ");
    
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let lastChar = array[i][array[i].length-1];
        if(lastChar === "," || lastChar === "." || lastChar === "!"){
            let newWord = array[i].slice(0, array[i].length-1);
            newArray.push(newWord.toLowerCase());
        }else{
            newArray.push(array[i].toLowerCase());
        }
    }

    let s = new Set(newArray);
    let unique = [...s];

    let x = {};
    let max = 1;
    for(let i = 0; i < unique.length; i++){
        let count = 0;
        for(let j = 0; j < newArray.length; j++){
            if(unique[i] === newArray[j]){
                count++;
            }
        }
        x[unique[i]] = count;
        if(count > max){
            max = count;
        }
    }

    let result = [];
    for(let key in x) {
        if(x[key] === max){
            result.push(key);
        }
    }

    for(let key in x) {
        if(x[key] === max-1){
            result.push(key);
        }
    }

    for(let key in x) {
        if(x[key] === max-2){
            result.push(key);
        }
    }

    let part = [];
    if(result.length > 3){
        part = result.slice(0, 3);
    }else{
        part = result;
    }

    return part;
}

// console.log(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"));
// console.log(getWords("I like coding. I like testing. I love debugging!"));
// console.log(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"));