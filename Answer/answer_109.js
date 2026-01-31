function buyItems(funds, items) {
    let limit = convertToUSD(funds);
    
    let sum = 0;
    for(let i = 0; i < items.length; i++){
        sum = sum + convertToUSD(items[i]);
    
        if(sum === limit){
            if(i === items.length-1){
                return "Buy them all!";
            }else{
                return `Buy the first ${i+1} items.`;
            }
        }else if(sum > limit){
            return `Buy the first ${i} items.`;
        }

        if(sum < limit && i === items.length-1){
            return "Buy them all!";
        }
    }
}

function convertToUSD(amount){
    let result;
    if(amount[1] === "USD"){
        result = parseFloat(amount[0]);
    }else if(amount[1] === "EUR"){
        result = parseFloat(amount[0]*1.10);
    }else if(amount[1] === "GBP"){
        result = parseFloat(amount[0]*1.25);
    }else if(amount[1] === "JPY"){
        result = parseFloat(amount[0]*0.0070);
    }else if(amount[1] === "CAD"){
        result = parseFloat(amount[0]*0.75);
    }

    return result;
}

// console.log(buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]));
// console.log(buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]));
// console.log(buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]));
// console.log(buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]));
// console.log(buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]));