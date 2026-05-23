function convertParsecs(parsecs) {
    if(parsecs % 2 === 0){
        return parsecs / 2 * 6;
    }else{
        return parsecs * 2;
    }
}

// console.log(convertParsecs(1));
// console.log(convertParsecs(2));
// console.log(convertParsecs(31));
// console.log(convertParsecs(88));
// console.log(convertParsecs(17));
// console.log(convertParsecs(14));