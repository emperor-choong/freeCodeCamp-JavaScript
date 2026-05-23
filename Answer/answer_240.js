function getDeepestBrackets(str) {
    const open = "([{";
    const close = ")]}";
    const match = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    let stack = [];
    let maxDepth = 0;
    let result = "";
    let startIndex = -1;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (open.includes(char)) {
            stack.push(char);

            if (stack.length > maxDepth) {
                maxDepth = stack.length;
                startIndex = i + 1; // start after this bracket
            }
        } else if (close.includes(char)) {
            if (stack[stack.length - 1] === match[char]) {
                if (stack.length === maxDepth) {
                    result = str.slice(startIndex, i);
                }
                stack.pop();
            }
        }
    }

    return result;
}

// console.log(getDeepestBrackets("(hello (world))"));
// console.log(getDeepestBrackets("[outer [inner] outer]"));
// console.log(getDeepestBrackets("{a{b}c{d{e}f}g}"));
// console.log(getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]"));
// console.log(getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p"));