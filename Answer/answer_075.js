function convert(heading) {
    let start = heading.indexOf("#");

    if(start === -1){
        return "Invalid format";
    }

    for(let i = 0; i < start; i++){
        if(heading[i] !== " "){
            return "Invalid format";
        }
    }

    let end;
    for(let i = start; i < heading.length; i++){
        if(heading[i] !== "#"){
            end = i-1;
            break;
        }
    }

    if(heading[end+1] !== " "){
        return "Invalid format";
    }

    let headingIndex;
    for(let i = end+1; i <= heading.length; i++){
        if(heading[i] !== " "){
            headingIndex = i;
            break;
        }
    }

    let h = heading.slice(start, end+1);
    let text = heading.slice(headingIndex);

    if(h.length === 1){
        return `<h1>${text}</h1>`;
    }else if(h.length === 2){
        return `<h2>${text}</h2>`;
    }else if(h.length === 3){
        return `<h3>${text}</h3>`;
    }else if(h.length === 4){
        return `<h4>${text}</h4>`;
    }else if(h.length === 5){
        return `<h5>${text}</h5>`;
    }else if(h.length === 6){
        return `<h6>${text}</h6>`;
    }

    return "Invalid format";
}

// console.log(convert("# My level 1 heading"));
// console.log(convert("My heading"));
// console.log(convert("##### My level 5 heading"));
// console.log(convert("#My heading"));
// console.log(convert("  ###  My level 3 heading"));
// console.log(convert("####### My level 7 heading"));
// console.log(convert("## My #2 heading"));