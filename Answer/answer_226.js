function findSum(arr, target) {
    let result = null;

    // Depth-First Search (DFS) Algorithm
    function dfs(start, path, sum) {
        // stop immediately if found
        if (result) return;

        // valid subset (2+ numbers only)
        if (path.length >= 2 && sum === target) {
            result = [...path];
            return;
        }

        for (let i = start; i < arr.length; i++) {
            dfs(i + 1, [...path, arr[i]], sum + arr[i]);
        }
    }

    dfs(0, [], 0);

    return result || "Sum not found";
}



// console.log(findSum([1, 3, 5, 7], 6));
// console.log(findSum([1, 2, 3, 4, 5], 5));
// console.log(findSum([1, 2, 3, 4, 5], 6));
// console.log(findSum([-1, -2, 3, 4], 1));
// console.log(findSum([3, 1, 4, 1, 5, 9, 2, 6], 10));
// console.log(findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20));
// console.log(findSum([7, 9, 4, 2, 5], 10));