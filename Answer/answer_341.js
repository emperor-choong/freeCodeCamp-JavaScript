function isBalanced(s) {
    let mid = Math.floor(s.length / 2);
    let firstHalf;
    let secondHalf;
    if(s.length % 2 === 0){
        firstHalf = s.slice(0, mid);
        secondHalf = s.slice(mid);
    }else{
        firstHalf = s.slice(0, mid);
        secondHalf = s.slice(mid + 1);
    }

    // Nullish coalescing operator (??)
    let array1 = firstHalf.match(/[aeiou]/gi) ?? [];
    let array2 = secondHalf.match(/[aeiou]/gi) ?? [];
    
    return array1.length === array2.length;
}

// console.log(isBalanced("racecar"));
// console.log(isBalanced("Lorem Ipsum"));
// console.log(isBalanced("Kitty Ipsum"));
// console.log(isBalanced("string"));
// console.log(isBalanced(" "));
// console.log(isBalanced("abcdefghijklmnopqrstuvwxyz"));
// console.log(isBalanced("123A#b!E&*456-o.U"));