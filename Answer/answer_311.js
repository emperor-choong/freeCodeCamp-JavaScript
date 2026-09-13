function horoscopeMatch(sign1, sign2) {
    let signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    let start;
    let end;
    let n = signs.length;
    for(let i = 0; i < n; i++){
        if(signs[i] === sign1){
            start = i;
        }

        if(signs[i] === sign2){
            end = i;
        }
    }

    let distance1 = (end - start + n) % n;
    let distance2 = (start - end + n) % n;
    let shortestDistance = Math.min(distance1, distance2);

    if(shortestDistance === 0){
        return "100%";
    }else if(shortestDistance === 1){
        return "40%";
    }else if(shortestDistance === 2){
        return "80%";
    }else if(shortestDistance === 3){
        return "30%";
    }else if(shortestDistance === 4){
        return "90%";
    }else if(shortestDistance === 5){
        return "20%";
    }else if(shortestDistance === 6){
        return "50%";
    }
}

// console.log(horoscopeMatch("Libra", "Sagittarius"));
// console.log(horoscopeMatch("Gemini", "Scorpio"));
// console.log(horoscopeMatch("Pisces", "Aries"));
// console.log(horoscopeMatch("Capricorn", "Cancer"));
// console.log(horoscopeMatch("Aquarius", "Aquarius"));
// console.log(horoscopeMatch("Virgo", "Taurus"));
// console.log(horoscopeMatch("Leo", "Scorpio"));