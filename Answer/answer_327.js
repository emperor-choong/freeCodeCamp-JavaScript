function getContrastRating(ratio, isLargeText) {
    if(isLargeText === true){
        if(ratio >= 4.5){
            return "AAA";
        }else if(ratio >= 3.0 && ratio < 4.5){
            return "AA";
        }else if(ratio < 3.0){
            return "Fail";
        }
    }else if(isLargeText === false){
        if(ratio >= 7.0){
            return "AAA";
        }else if(ratio >= 4.5 && ratio < 7.0){
            return "AA";
        }else if(ratio < 4.5){
            return "Fail";
        }
    }
}

// console.log(getContrastRating("7.5", false));
// console.log(getContrastRating("4.8", false));
// console.log(getContrastRating("4.2", false));
// console.log(getContrastRating("4.5", true));
// console.log(getContrastRating("3.0", true));
// console.log(getContrastRating("2.7", false));