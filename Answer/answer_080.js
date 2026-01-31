function isValidIPv4(ipv4) {
    let array = ipv4.split(".");

    if(array.length === 4){
        let condition1 = array.every(number => {
            return number !== "" && (parseInt(number) >= 0 && parseInt(number) <= 255);
        });

        let hasLeadingZero = array.some(number => {
            return number.length > 1 && number[0] === "0";
        });

        let result = condition1 === true && hasLeadingZero === false;
        return result;
    }else{
        return false;
    }
}

// console.log(isValidIPv4("192.168.1.1"));
// console.log(isValidIPv4("0.0.0.0"));
// console.log(isValidIPv4("255.01.50.111"));
// console.log(isValidIPv4("255.00.50.111"));
// console.log(isValidIPv4("256.101.50.115"));
// console.log(isValidIPv4("192.168.101."));
// console.log(isValidIPv4("192168145213"));