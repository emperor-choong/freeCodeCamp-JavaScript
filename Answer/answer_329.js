function getContrastRating(rgb1, rgb2, isLargeText) {
    let luminance1 = calculateLuminance(rgb1);
    let luminance2 = calculateLuminance(rgb2);
    let ratio = (luminance1 + 0.05) / (luminance2 + 0.05);

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

function calculateLuminance(rgb){
    let [R, G, B] = rgb;
    R = R / 255;
    G = G / 255;
    B = B / 255;
    if(R <= 0.04045){
        R = R / 12.92;
    }else{
        R = ((R + 0.055) / 1.055)**2.4;
    }

    if(G <= 0.04045){
        G = G / 12.92;
    }else{
        G = ((G + 0.055) / 1.055)**2.4;
    }

    if(B <= 0.04045){
        B = B / 12.92;
    }else{
        B = ((B + 0.055) / 1.055)**2.4;
    }

    let luminance = 0.2126*R + 0.7152*G + 0.0722*B;
    return luminance;
}

// console.log(getContrastRating([255, 255, 255], [0, 0, 0], false));
// console.log(getContrastRating([215, 188, 188], [55, 55, 55], false));
// console.log(getContrastRating([143, 144, 210], [46, 47, 61], false));
// console.log(getContrastRating([167, 167, 210], [53, 10, 53], true));
// console.log(getContrastRating([135, 147, 155], [60, 70, 90], true));
// console.log(getContrastRating([125, 210, 195], [105, 130, 90], true));