function isValidIPv4(ipv4) {
    let array = ipv4.split(".");
    let result = false;
    if(array.length === 4){
        result = array.every((element) => {
            if(element.length > 1 && element[0] === "0"){
                return false;
            }

            return /^\d+$/.test(element) && (Number(element) >= 0 && Number(element) <= 255); 
        });
    }

    return result;
}

// console.log(isValidIPv4("192.168.1.1"));
// console.log(isValidIPv4("0.0.0.0"));
// console.log(isValidIPv4("255.01.50.111"));
// console.log(isValidIPv4("255.00.50.111"));
// console.log(isValidIPv4("256.101.50.115"));
// console.log(isValidIPv4("192.168.101."));
// console.log(isValidIPv4("192168145213"));