function connectThree(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const directions = [
        [0, 1],   // right
        [1, 0],   // down
        [1, 1],   // diagonal down-right
        [1, -1]   // diagonal down-left
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const player = matrix[r][c];
            if (!player) continue;

            for (const [dr, dc] of directions) {
                const r1 = r + dr;
                const c1 = c + dc;
                const r2 = r + 2 * dr;
                const c2 = c + 2 * dc;

                if (
                    r2 >= 0 && r2 < rows &&
                    c2 >= 0 && c2 < cols &&
                    matrix[r1]?.[c1] === player &&
                    matrix[r2]?.[c2] === player
                ) {
                    return [
                        player,
                        [r, c],
                        [r1, c1],
                        [r2, c2]
                    ];
                }
            }
        }
    }

    return [];
}

// console.log(connectThree([["", "", "", ""], ["", "", "", ""], ["", "Y", "", ""], ["Y", "R", "R", "R"]]));
// console.log(connectThree([["", "", "", ""], ["", "Y", "Y", ""], ["", "Y", "R", "R"], ["", "Y", "R", "R"]]));
// console.log(connectThree([["", "", "Y", "R"], ["", "Y", "R", "Y"], ["", "R", "Y", "R"], ["", "R", "Y", "R"]]));
// console.log(connectThree([["", "Y", "", ""], ["", "Y", "Y", ""], ["", "R", "R", "Y"], ["R", "R", "Y", "R"]]));
// console.log(connectThree([["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"], ["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"]]));