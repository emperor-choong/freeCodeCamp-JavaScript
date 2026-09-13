function getLowercaseWords(str) {
    let array = str.split(" ");
    let result = array.filter(element => {
        return element === element.toLowerCase();
    });

    return result.join(" ");
}

// console.log(getLowercaseWords("hello GOOD world"));
// console.log(getLowercaseWords("these are all lowercase"));
// console.log(getLowercaseWords("less is NoT more"));
// console.log(getLowercaseWords("DonT eat pizza every OTHER day"));
// console.log(getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog"));