function detectRoast(beans) {
    let sum = 0;
    for(let i = 0; i < beans.length; i++){
        if(beans[i] === "'"){
            sum = sum + 1;
        }else if(beans[i] === "-"){
            sum = sum + 2;
        }else if(beans[i] === "."){
            sum = sum + 3;
        }
    }

    let average = sum / beans.length;
    if(average < 1.75){
        return "Light";
    }else if(average >= 1.75 && average <= 2.5){
        return "Medium";
    }else if(average > 2.5){
        return "Dark";
    }
}

// console.log(detectRoast("''-''''''-'-''--''''"));
// console.log(detectRoast(".'-''-''..'''.-.-''-"));
// console.log(detectRoast("--.''--'-''.--..-.--"));
// console.log(detectRoast("-...'-......-..-...-"));
// console.log(detectRoast(".--.-..-......----.'"));
// console.log(detectRoast("..-..-..-..-....-.-."));
// console.log(detectRoast("-'-''''''..-'.''-'.'"));