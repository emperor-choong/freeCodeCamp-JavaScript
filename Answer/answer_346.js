function areAnagrams(str1, str2) {
    let one = str1.toLowerCase().split(" ").join("").split("").sort().join("");
    let two = str2.toLowerCase().split(" ").join("").split("").sort().join("");

    return one === two;
}

// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("School master", "The classroom"));
// console.log(areAnagrams("A gentleman", "Elegant man"));
// console.log(areAnagrams("Hello", "World"));
// console.log(areAnagrams("apple", "banana"));
// console.log(areAnagrams("cat", "dog"));