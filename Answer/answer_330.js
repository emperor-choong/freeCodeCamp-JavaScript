function decodeMorse(code) {
    let morseToLetter = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z"
    };

    let result = code.split("   ").map(word => {
        return word.split(" ").map(morseCode => morseToLetter[morseCode]).join("");
    }).join(" ");
    
    return result;
}

// console.log(decodeMorse("--.."));
// console.log(decodeMorse("... --- ..."));
// console.log(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--."));
// console.log(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -.."));
// console.log(decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --."));