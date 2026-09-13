function repeatVowels(str) {
    let sum = "";
    let count = 0;
    for(let element of str){
        if(/[aeiou]/i.test(element) === true){
            sum = sum + element;
            sum = sum + element.repeat(count).toLowerCase();
            count++;
        }else{
            sum = sum + element;
        }
    }

    return sum;
}

// console.log(repeatVowels("hello world"));
// console.log(repeatVowels("freeCodeCamp"));
// console.log(repeatVowels("AEIOU"));
// console.log(repeatVowels("I like eating ice cream in Iceland"));