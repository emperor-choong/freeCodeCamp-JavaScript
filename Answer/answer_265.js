function getPizzasToOrder(hoursWorked) {
    let totalSlices = hoursWorked.reduce((accumulator, currentValue) => {
        return accumulator + Math.max(2, Math.ceil(currentValue / 3));
    }, 0);

    let result = Math.ceil(totalSlices / 8);

    return result;
}

// console.log(getPizzasToOrder([8, 8, 8]));
// console.log(getPizzasToOrder([10, 9, 8, 2, 2, 6, 10]));
// console.log(getPizzasToOrder([1, 2, 3, 4, 5]));
// console.log(getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8]));
// console.log(getPizzasToOrder([9, 9, 6]));
// console.log(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]));