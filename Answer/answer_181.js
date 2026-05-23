function cardValues(cards) {
    let result = cards.map(x => {
        let value = x.slice(0, -1);
        if(value === "A"){
            return 1;
        }else if(value === "J" || value === "Q" || value === "K"){
            return 10;
        }else{
            return Number(value);
        }
    });

    return result;
}

// console.log(cardValues(["3H", "4D", "5S"]));
// console.log(cardValues(["AS", "10S", "10H", "6D", "7D"]));
// console.log(cardValues(["8D", "QS", "2H", "JC", "9C"]));
// console.log(cardValues(["AS", "KS"]));
// console.log(cardValues(["10H", "JH", "QH", "KH", "AH"]));