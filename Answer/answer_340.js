function bucketFill(grid, targetColor) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Convert grid to a string so we can store states in a Set.
    const serialize = grid => grid.map(row => row.join("")).join("|");

    const isComplete = grid => {
        return grid.every(row =>
            row.every(color => color === targetColor)
        );
    };

    // Find the region containing (startRow, startCol)
    function getRegion(grid, startRow, startCol) {
        const color = grid[startRow][startCol];
        const region = [];
        const visited = new Set();

        const queue = [[startRow, startCol]];
        visited.add(`${startRow},${startCol}`);

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            region.push([r, c]);

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                const key = `${nr},${nc}`;

                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    !visited.has(key) &&
                    grid[nr][nc] === color
                ) {
                    visited.add(key);
                    queue.push([nr, nc]);
                }
            }
        }

        return region;
    }

    // Get all regions in the grid
    function getRegions(grid) {
        const regions = [];
        const visited = new Set();

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = `${r},${c}`;

                if (visited.has(key)) continue;

                const color = grid[r][c];
                const region = [];
                const queue = [[r, c]];

                visited.add(key);

                while (queue.length > 0) {
                    const [cr, cc] = queue.shift();
                    region.push([cr, cc]);

                    const directions = [
                        [-1, 0],
                        [1, 0],
                        [0, -1],
                        [0, 1]
                    ];

                    for (const [dr, dc] of directions) {
                        const nr = cr + dr;
                        const nc = cc + dc;
                        const nextKey = `${nr},${nc}`;

                        if (
                            nr >= 0 &&
                            nr < rows &&
                            nc >= 0 &&
                            nc < cols &&
                            !visited.has(nextKey) &&
                            grid[nr][nc] === color
                        ) {
                            visited.add(nextKey);
                            queue.push([nr, nc]);
                        }
                    }
                }

                regions.push({
                    color,
                    cells: region
                });
            }
        }

        return regions;
    }

    if (isComplete(grid)) {
        return 0;
    }

    const colors = [
        ...new Set(grid.flat())
    ];

    // Target color must be available as a possible click color.
    if (!colors.includes(targetColor)) {
        colors.push(targetColor);
    }

    const start = grid.map(row => [...row]);

    const queue = [
        {
            grid: start,
            clicks: 0
        }
    ];

    const visitedStates = new Set();
    visitedStates.add(serialize(start));

    while (queue.length > 0) {
        const { grid: current, clicks } = queue.shift();

        const regions = getRegions(current);

        for (const region of regions) {

            // Clicking the region with its current color does nothing.
            for (const newColor of colors) {
                if (newColor === region.color) {
                    continue;
                }

                const next = current.map(row => [...row]);

                // Recolor the entire region.
                for (const [r, c] of region.cells) {
                    next[r][c] = newColor;
                }

                const state = serialize(next);

                if (visitedStates.has(state)) {
                    continue;
                }

                if (isComplete(next)) {
                    return clicks + 1;
                }

                visitedStates.add(state);

                queue.push({
                    grid: next,
                    clicks: clicks + 1
                });
            }
        }
    }

    return -1;
}

// console.log(bucketFill([["B", "B"], ["B", "B"]], "R"));
// console.log(bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G"));
// console.log(bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O"));
// console.log(bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R"));
// console.log(bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P"));
// console.log(bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y"));




