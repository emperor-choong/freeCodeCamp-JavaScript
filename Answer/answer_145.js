function oddOrEvenDay(timestamp) {
    let date = new Date(timestamp);
    let day = date.getUTCDate();
    if(day % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}

// console.log(oddOrEvenDay(1769472000000));
// console.log(oddOrEvenDay(1769444440000));
// console.log(oddOrEvenDay(6739456780000));
// console.log(oddOrEvenDay(1));
// console.log(oddOrEvenDay(86400000));