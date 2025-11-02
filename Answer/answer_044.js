function calculateTips(mealPrice, customTip) {
    let price = parseFloat(mealPrice.slice(1));
    let tip = parseInt(customTip);

    return [`$${(price*0.15).toFixed(2)}`, `$${(price*0.20).toFixed(2)}`, `$${(price*tip/100).toFixed(2)}`];
}

// console.log(calculateTips("$10.00", "25%"));
// console.log(calculateTips("$89.67", "26%"));
// console.log(calculateTips("$19.85", "9%"));