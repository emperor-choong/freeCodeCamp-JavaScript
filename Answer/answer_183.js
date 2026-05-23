function navigateTrail(map) {
    const grid = map.map(row => row.split(""));
    const rows = grid.length;
    const cols = grid[0].length;

    const dirs = [
        [0, 1, "R"],
        [1, 0, "D"],
        [0, -1, "L"],
        [-1, 0, "U"]
    ];

    let r, c;

    // Find starting position
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "C") {
                r = i;
                c = j;
            }
        }
    }

    let result = "";
    const visited = new Set([`${r},${c}`]);

    while (grid[r][c] !== "G") {
        for (const [dr, dc, move] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                !visited.has(`${nr},${nc}`) &&
                (grid[nr][nc] === "T" || grid[nr][nc] === "G")
            ) {
                result += move;
                r = nr;
                c = nc;
                visited.add(`${r},${c}`);
                break;
            }
        }
    }

  return result;
}

// console.log(navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]));
// console.log(navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]));
// console.log(navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]));
// console.log(navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]));
// console.log(navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]));