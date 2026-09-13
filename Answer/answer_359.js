function burnCandles(candles, leftoversNeeded) {
    let burned = candles;
    let leftover = candles;

    while(leftover >= leftoversNeeded){
        let newCandle = Math.floor(leftover / leftoversNeeded);
        leftover = leftover % leftoversNeeded;
        leftover = leftover + newCandle;
        burned = burned + newCandle;
    }

    return burned;
}

// console.log(burnCandles(7, 2));
// console.log(burnCandles(10, 5));
// console.log(burnCandles(20, 3));
// console.log(burnCandles(17, 4));
// console.log(burnCandles(2345, 3));