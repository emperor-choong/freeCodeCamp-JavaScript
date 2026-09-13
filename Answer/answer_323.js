function getLoanSchedule(loanAmount, annualRate, monthlyPayment) {
    let monthlyInterestRate = (annualRate / 100) / 12;
    let balance = loanAmount;

    let result = [loanAmount];

    while(balance > 0){
        balance = balance + (balance * monthlyInterestRate);
        balance = balance - monthlyPayment;
        
        balance = Math.max(0, balance);
        result.push(Math.round(balance));
    }
        
    return result;
}

// console.log(getLoanSchedule(1000, 0, 200));
// console.log(getLoanSchedule(1000, 5, 200));
// console.log(getLoanSchedule(10, 50, 1));
// console.log(getLoanSchedule(5500, 8, 400));
// console.log(getLoanSchedule(50000, 5.2, 1650));