function findSignal(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Find the three towers
    const towers = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] > 0) {
                towers.push({
                    row: r,
                    col: c,
                    dist: grid[r][c]
                });
            }
        }
    }

    // Try every cell as the phone location
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            let valid = true;

            for (const tower of towers) {
                const distance = Math.max(
                    Math.abs(r - tower.row),
                    Math.abs(c - tower.col)
                );

                if (distance !== tower.dist) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                return [r, c];
            }
        }
    }
}

// console.log(findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]));
// console.log(findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]));
// console.log(findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]));
// console.log(findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]));
// console.log(findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]));
