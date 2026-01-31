function getSign(dateStr) {
    let date = new Date(dateStr);
    let day = date.getDate();
    let month = date.getMonth() + 1;

    if((month === 3 && day >= 21) || (month === 4 && day <= 19)){
        return "Aries";
    }else if((month === 4 && day >= 20) || (month === 5 && day <= 20)){
        return "Taurus";
    }else if((month === 5 && day >= 21) || (month === 6 && day <= 20)){
        return "Gemini";
    }else if((month === 6 && day >= 21) || (month === 7 && day <= 22)){
        return "Cancer";
    }else if((month === 7 && day >= 23) || (month === 8 && day <= 22)){
        return "Leo";
    }else if((month === 8 && day >= 23) || (month === 9 && day <= 22)){
        return "Virgo";
    }else if((month === 9 && day >= 23) || (month === 10 && day <= 22)){
        return "Libra";
    }else if((month === 10 && day >= 23) || (month === 11 && day <= 21)){
        return "Scorpio";
    }else if((month === 11 && day >= 22) || (month === 12 && day <= 21)){
        return "Sagittarius";
    }else if((month === 12 && day >= 22) || (month === 1 && day <= 19)){
        return "Capricorn";
    }else if((month === 1 && day >= 20) || (month === 2 && day <= 18)){
        return "Aquarius";
    }else if((month === 2 && day >= 19) || (month === 3 && day <= 20)){
        return "Pisces";
    }
}

// console.log(getSign("2026-01-31"));
// console.log(getSign("2001-06-10"));
// console.log(getSign("1985-09-07"));
// console.log(getSign("2023-03-19"));
// console.log(getSign("2045-11-05"));
// console.log(getSign("1985-12-06"));
// console.log(getSign("2025-12-30"));
// console.log(getSign("2018-10-08"));
// console.log(getSign("1958-05-04"));