function getMood(genre, bpm) {
    if(genre === "classical"){
        if(bpm >= 60 && bpm <= 109){
            return "focus";
        }else if(bpm >= 110 && bpm <= 180){
            return "happy";
        }
    }else if(genre === "electronic"){
        if(bpm >= 60 && bpm <= 89){
            return "focus";
        }else if(bpm >= 90 && bpm <= 134){
            return "happy";
        }else if(bpm >= 135 && bpm <= 180){
            return "hype";
        }
    }else if(genre === "pop"){
        if(bpm >= 60 && bpm <= 180){
            return "happy";
        }
    }else if(genre === "rock"){
        if(bpm >= 60 && bpm <= 129){
            return "happy";
        }else if(bpm >= 130 && bpm <= 180){
            return "hype";
        }
    }
}

// console.log(getMood("rock", 111));
// console.log(getMood("electronic", 74));
// console.log(getMood("classical", 180));
// console.log(getMood("rock", 155));
// console.log(getMood("electronic", 90));
// console.log(getMood("classical", 67));
// console.log(getMood("pop", 100));
// console.log(getMood("electronic", 135));