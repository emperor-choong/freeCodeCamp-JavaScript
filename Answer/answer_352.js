function decode(message, shift) {
    return message
        .split("")
        .map(char => {
            if (char >= "A" && char <= "Z") {
                return String.fromCharCode(
                    (char.charCodeAt(0) - 65 - shift + 26) % 26 + 65
                );
            }

            if (char >= "a" && char <= "z") {
                return String.fromCharCode(
                    (char.charCodeAt(0) - 97 - shift + 26) % 26 + 97
                );
            }

            return char;
        })
        .join("");
}

// console.log(decode("Xlmw mw e wigvix qiwweki.", 4));
// console.log(decode("Byffi Qilfx!", 20));
// console.log(decode("Zqd xnt njzx?", -1));
// console.log(decode("oannLxmnLjvy", 9));