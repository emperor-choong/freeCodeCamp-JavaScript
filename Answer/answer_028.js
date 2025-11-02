function sendMessage(route) {
    let totalDistance = route.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let time = totalDistance / 300000;
    let delay = (route.length + 1 - 2) * 0.5;
    let result = (time + delay).toFixed(4);

    return Number(result);
}

// console.log(sendMessage([300000, 300000]));
// console.log(sendMessage([384400, 384400]));
// console.log(sendMessage([54600000, 54600000]));
// console.log(sendMessage([1000000, 500000000, 1000000]));
// console.log(sendMessage([10000, 21339, 50000, 31243, 10000]));
// console.log(sendMessage([802101, 725994, 112808, 3625770, 481239]));

