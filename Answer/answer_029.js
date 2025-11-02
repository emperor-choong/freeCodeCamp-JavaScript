function findLandingSpot(matrix) {
    let max = matrix.length-1;
    let min = 0;
    let possibleSpot = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let sum = 0;
            if(matrix[i][j] === 0){
                let left = j-1;
                let right = j+1;
                let top = i-1;
                let bottom = i+1;
                if(left >= min){
                    sum = sum + matrix[i][left];
                }

                if(right <= max){
                    sum = sum + matrix[i][right];
                }

                if(top >= min){
                    sum = sum + matrix[top][j];
                }

                if(bottom <= max){
                    sum = sum + matrix[bottom][j];
                }

                possibleSpot.push([[i, j], sum]);
            }
        }
    }

    let sumOfNeighbors = possibleSpot.map(x => x[1]);
    let minValue = Math.min(...sumOfNeighbors);
    let result = possibleSpot.filter(x => x[1] === minValue);

    return result[0][0];
}

// console.log(findLandingSpot([[1, 0], [2, 0]]));
// console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]));
// console.log(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]));
// console.log(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]));