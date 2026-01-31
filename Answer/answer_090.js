function convertListItem(markdown) {
    let regex = /^\s*[1-9]\d*\.\s+/;
    let result = markdown.match(regex);
    
    if(regex.test(markdown) === true){
        let listItemText = markdown.slice(result[0].length);
        return "<li>" + listItemText + "</li>";
    }else{
        return "Invalid format";
    } 
}

// console.log(convertListItem("1. My item"));
// console.log(convertListItem(" 1.  Another item"));
// console.log(convertListItem("1 . invalid item"));
// console.log(convertListItem("2. list item text"));
// console.log(convertListItem(". invalid again"));
// console.log(convertListItem("A. last invalid"));