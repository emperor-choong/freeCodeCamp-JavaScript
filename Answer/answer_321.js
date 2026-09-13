function piggyBank(coins) {
    // Nullish coalescing operator (??)
    let total = (coins["pennies"] ?? 0)*0.01 + (coins["nickels"] ?? 0)*0.05 + (coins["dimes"] ?? 0)*0.10 + (coins["quarters"] ?? 0)*0.25;

    return `$${total.toFixed(2)}`;
}


// console.log(piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }));
// console.log(piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }));
// console.log(piggyBank({ nickels: 8, dimes: 6, quarters: 5 }));
// console.log(piggyBank({}));
// console.log(piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }));