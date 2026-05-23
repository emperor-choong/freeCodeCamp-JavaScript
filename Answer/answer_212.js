function isValidEquation(equation) {
    const [left, right] = equation.split('=').map(s => s.trim());
    const tokens = left.split(' '); // assumes space-separated input

    // Step 1: Handle * and /
    let stack = [Number(tokens[0])];

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const num = Number(tokens[i + 1]);

        if (operator === '*') {
            stack[stack.length - 1] *= num;
        } else if (operator === '/') {
            stack[stack.length - 1] /= num;
        } else {
            stack.push(operator, num);
        }
    }

    // Step 2: Handle + and -
    let result = stack[0];
    for (let i = 1; i < stack.length; i += 2) {
        const operator = stack[i];
        const num = stack[i + 1];

        if (operator === '+') {
            result += num;
        } else if (operator === '-') {
            result -= num;
        }
    }

    return result === Number(right);
}

// console.log(isValidEquation("2 + 2 = 4"));
// console.log(isValidEquation("2 + 3 - 1 = 4"));
// console.log(isValidEquation("8 / 2 = 4"));
// console.log(isValidEquation("10 * 5 = 50"));
// console.log(isValidEquation("2 - 2 = 0"));
// console.log(isValidEquation("2 + 9 / 3 = 5"));
// console.log(isValidEquation("20 - 2 * 3 = 14"));
// console.log(isValidEquation("2 + 5 = 6"));
// console.log(isValidEquation("10 - 2 * 3 = 24"));
// console.log(isValidEquation("3 + 9 / 3 = 4"));