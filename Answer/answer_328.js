function getContrastRating(l1, l2, isLargeText) {
    let ratio = (l1 + 0.05) / (l2 + 0.05);
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

// console.log(getContrastRating(1.0, 0.0, false));
// console.log(getContrastRating(0.9015, 0.1364, false));
// console.log(getContrastRating(0.8965, 0.1628, false));
// console.log(getContrastRating(0.7469, 0.0957, true));
// console.log(getContrastRating(0.7489, 0.2018, true));
// console.log(getContrastRating(0.6571, 0.1974, true));