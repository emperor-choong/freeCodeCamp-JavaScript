function decode(message) {
    let key = "VLHCGMDLNH";
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // If it's a space, keep it
        if (char === " ") {
            result = result + " ";
            continue;
        }

        // Get key character (repeat key using modulo)
        let keyChar = key[keyIndex % key.length];

        // Convert key letter to shift value (A=1 ... Z=26)
        let shift = keyChar.charCodeAt(0) - 64;

        // Convert encoded char to 0–25 range
        let encodedVal = char.charCodeAt(0) - 65;

        // Shift backward with wrap-around
        let decodedVal = (encodedVal - shift + 26) % 26;
        console.log(encodedVal - shift + 26);

        // Convert back to letter
        result += String.fromCharCode(decodedVal + 65);

        keyIndex++;
    }

    return result;
}

// console.log(decode("YAVJYNXE"));
// console.log(decode("YALLUT PQUMJP"));
// console.log(decode("UAC DYR EISAKYM"));
// console.log(decode("GQMS NBMZU"));
// console.log(decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB"));