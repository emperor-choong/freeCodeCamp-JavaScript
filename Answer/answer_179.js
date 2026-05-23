function sumLetters(str) {
    let lowercaseLetter = str.toLowerCase();
    let sum = 0;
    for(let i = 0; i < lowercaseLetter.length; i++){
        if(lowercaseLetter[i] === 'a'){
            sum = sum + 1;
        }else if(lowercaseLetter[i] === 'b'){
            sum = sum + 2;
        }else if(lowercaseLetter[i] === 'c'){
            sum = sum + 3;
        }else if(lowercaseLetter[i] === 'd'){
            sum = sum + 4;
        }else if(lowercaseLetter[i] === 'e'){
            sum = sum + 5;
        }else if(lowercaseLetter[i] === 'f'){
            sum = sum + 6;
        }else if(lowercaseLetter[i] === 'g'){
            sum = sum + 7;
        }else if(lowercaseLetter[i] === 'h'){
            sum = sum + 8;
        }else if(lowercaseLetter[i] === 'i'){
            sum = sum + 9;
        }else if(lowercaseLetter[i] === 'j'){
            sum = sum + 10;
        }else if(lowercaseLetter[i] === 'k'){
            sum = sum + 11;
        }else if(lowercaseLetter[i] === 'l'){
            sum = sum + 12;
        }else if(lowercaseLetter[i] === 'm'){
            sum = sum + 13;
        }else if(lowercaseLetter[i] === 'n'){
            sum = sum + 14;
        }else if(lowercaseLetter[i] === 'o'){
            sum = sum + 15;
        }else if(lowercaseLetter[i] === 'p'){
            sum = sum + 16;
        }else if(lowercaseLetter[i] === 'q'){
            sum = sum + 17;
        }else if(lowercaseLetter[i] === 'r'){
            sum = sum + 18;
        }else if(lowercaseLetter[i] === 's'){
            sum = sum + 19;
        }else if(lowercaseLetter[i] === 't'){
            sum = sum + 20;
        }else if(lowercaseLetter[i] === 'u'){
            sum = sum + 21;
        }else if(lowercaseLetter[i] === 'v'){
            sum = sum + 22;
        }else if(lowercaseLetter[i] === 'w'){
            sum = sum + 23;
        }else if(lowercaseLetter[i] === 'x'){
            sum = sum + 24;
        }else if(lowercaseLetter[i] === 'y'){
            sum = sum + 25;
        }else if(lowercaseLetter[i] === 'z'){
            sum = sum + 26;
        }
    }

    return sum;
}

// console.log(sumLetters("Hello"));
// console.log(sumLetters("freeCodeCamp"));
// console.log(sumLetters("The quick brown fox jumps over the lazy dog."));
// console.log(sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci."));
// console.log(sumLetters("</404>"));