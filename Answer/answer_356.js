function decode(s) {
    const stack = [""];
    
    for (const char of s) {
        if (char === "(") {
            stack.push("");
        } else if (char === ")") {
            const reversed = stack.pop().split("").reverse().join("");
            stack[stack.length - 1] += reversed;
        } else {
            stack[stack.length - 1] += char;
        }
    }

    return stack[0];
}

// console.log(decode("(f(b(dc)e)a)"));
// console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));
// console.log(decode("f(Ce(re))o((e(aC)m)d)p"));