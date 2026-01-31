function getsFreeShipping(cart, minimum) {
    let sum = cart.reduce((accumulator, currentValue) => {
        if(currentValue === "shirt"){
            return accumulator + 34.25;
        }else if(currentValue === "jeans"){
            return accumulator + 48.50;
        }else if(currentValue === "shoes"){
            return accumulator + 75.00;
        }else if(currentValue === "hat"){
            return accumulator + 19.95;
        }else if(currentValue === "socks"){
            return accumulator + 15.00;
        }else if(currentValue === "jacket"){
            return accumulator + 109.95;
        }
    }, 0);

    return sum >= minimum;
}

// console.log(getsFreeShipping(["shoes"], 50));
// console.log(getsFreeShipping(["hat", "socks"], 50));
// console.log(getsFreeShipping(["jeans", "shirt", "jacket"], 75));
// console.log(getsFreeShipping(["socks", "socks", "hat"], 75));
// console.log(getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100));
// console.log(getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200));