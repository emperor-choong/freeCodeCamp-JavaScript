function getLuckyNumber(name) {
    // Array destructuring
    let [firstName, lastName] = name.split(" ");

    let [firstNameVowelCount, firstNameConsonantCount] = countName(firstName);
    let [lastNameVowelCount, lastNameConsonantCount] = countName(lastName);

    let smallerVowelCount = firstNameVowelCount;
    if(lastNameVowelCount < smallerVowelCount){
        smallerVowelCount = lastNameVowelCount;
    }

    let smallerConsonantCount = firstNameConsonantCount;
    if(lastNameConsonantCount < smallerConsonantCount){
        smallerConsonantCount = lastNameConsonantCount;
    }

    let smallerName = firstName;
    if(lastName.length < smallerName.length){
        smallerName = lastName;
    }

    let multiplySmaller = smallerVowelCount * smallerConsonantCount * smallerName.length;

    let largerVowelCount = firstNameVowelCount;
    if(lastNameVowelCount > largerVowelCount){
        largerVowelCount = lastNameVowelCount;
    }

    let largerConsonantCount = firstNameConsonantCount;
    if(lastNameConsonantCount > largerConsonantCount){
        largerConsonantCount = lastNameConsonantCount;
    }

    let largerName = firstName;
    if(lastName.length > smallerName.length){
        largerName = lastName;
    }

    let multiplyLarger = largerVowelCount * largerConsonantCount * largerName.length;

    let result = multiplyLarger - multiplySmaller;

    return result === 0 ? 13 : result;   
}

function countName(name){
    let vowelCount = 0;
    let consonantCount = 0;
    let vowel = "aeiou";
    for(let i = 0; i < name.length; i++){
        let isVowel = false;
        for(let j = 0; j < vowel.length; j++){
            if(name[i] === vowel[j] || name[i] === vowel[j].toUpperCase()){
                isVowel = true;
                vowelCount++;
                break;
            }
        }

        if(isVowel === false){
            consonantCount++;
        }
    }

    return [vowelCount, consonantCount];
}

// console.log(getLuckyNumber("John Doe"));
// console.log(getLuckyNumber("Olivia Lewis"));
// console.log(getLuckyNumber("James Wilson"));
// console.log(getLuckyNumber("Elizabeth Hernandez"));
// console.log(getLuckyNumber("Mike Walker"));
// console.log(getLuckyNumber("Chloe Perez"));