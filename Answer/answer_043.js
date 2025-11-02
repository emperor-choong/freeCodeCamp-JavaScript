function extractAttributes(element) {
    let index = 0;
    for(let i = 0; i < element.length; i++){
        if(element[i] === "/"){
            index = i-1;
            break;
        }

        if(element[i] === ">"){
            index = i;
            break;
        }
    }

    let str = element.slice(1, index);
    let start = 0;
    let isGotAttribute = false;
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            start = i+1;
            isGotAttribute = true;
            break;
        }
    }

    if(isGotAttribute === false){
        return [];
    }

    let str1 = str.slice(start);
    
    let startIndex = 0;
    let result = [];
    while(true){
        let endIndex = str1.indexOf("=", startIndex);

        if(endIndex === -1){
            break;
        }

        let attribute = str1.slice(startIndex, endIndex);
        let startDoubleQuote = str1.indexOf('"', startIndex);
        let endDoubleQuote = str1.indexOf('"', startDoubleQuote + 1);
        let value = str1.slice(startDoubleQuote + 1, endDoubleQuote);
        startIndex = endDoubleQuote + 2;

        let attributes = `${attribute}, ${value}`;
        result.push(attributes);
    }

    return result;
}

// console.log(extractAttributes('<span class="red"></span>'));
// console.log(extractAttributes('<meta charset="UTF-8" />'));
// console.log(extractAttributes("<p>Lorem ipsum dolor sit amet</p>"));
// console.log(extractAttributes('<input name="email" type="email" required="true" />'));
// console.log(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>'));