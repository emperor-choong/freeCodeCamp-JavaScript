function getLaptopCost(laptops, budget) {
    let array = [...new Set(laptops)].sort((a, b) => b - a).slice(1);
    let result = 0;
    for(let price of array){
        if(budget >= price){
            result = price;
            break;
        }
    }

    return result;  
}

// console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900));
// console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900));
// console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200));
// console.log(getLaptopCost([2099, 1599, 1899, 1499], 1000));
// console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450));