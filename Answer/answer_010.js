function generateSlug(str) {
    let str1 = str.trim().toLowerCase();
    let sum = "";
    for(let i = 0; i < str1.length; i++){
        if("abcdefghijklmnopqrstuvwxyz0123456789".includes(str1[i])){
            sum = sum + str1[i];
        }

        if(str1[i] === " " && "abcdefghijklmnopqrstuvwxyz0123456789".includes(str1[i+1])){
            sum = sum + "%20";
        }
    }
    
    return sum;
}

// console.log(generateSlug("helloWorld"));
// console.log(generateSlug("hello world!"));
// console.log(generateSlug(" hello-world "));
// console.log(generateSlug("hello  world"));
// console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "));