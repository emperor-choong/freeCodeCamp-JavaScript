function formatCoffeeOrder(order) {
    let menu = {
        "cold brew": 4.50,
        "oat latte": 5.00,
        "cappuccino": 4.75,
        "espresso": 3.00,
        "vanilla syrup": 0.75,
        "caramel drizzle": 0.60,
        "extra shot": 0.50,
        "oat milk": 0.75,
        "cream": 0.75
    };

    let regex = new RegExp(`\\b(${Object.keys(menu).join("|")})\\b`, "g");
    let matchedItems = order.match(regex);

    let totalPrice = matchedItems.reduce((accumulator, currentValue) => {
        return accumulator + menu[currentValue];
    }, 0);

    let x = new Set(matchedItems);
    let array = Object.keys(menu).filter(element => x.has(element));

    let result = `${array.join(" + ")}: $${totalPrice.toFixed(2)}`;

    return result;
}

// console.log(formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please."));
// console.log(formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk."));
// console.log(formatCoffeeOrder("Can I get a cold brew with some cream and an extra shot."));
// console.log(formatCoffeeOrder("Just an espresso please."));
// console.log(formatCoffeeOrder("I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle."));