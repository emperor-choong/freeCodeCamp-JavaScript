function getNextLocation(matrix) {
    let one;
    let two;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 1){
                one = [i, j];
            }else if(matrix[i][j] === 2){
                two = [i, j];
            }
        }
    }

    let rows = matrix.length;
    let columns = matrix[0].length;

    let y = two[0] - one[0]; // if +ve means moving down, -ve moving up
    let x = two[1] - one[1]; // if +ve means moving right, -ve moving left 

    let nextY = two[0] + y;
    let nextX = two[1] + x;

    // Reverse direction when hitting walls
    if(nextY < 0 || nextY >= rows){
        y = y * (-1);
    } 

    if(nextX < 0 || nextX >= columns){
        x = x * (-1);
    } 

    return [two[0] + y, two[1] + x];
}

// console.log(getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]));
// console.log(getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]));
// console.log(getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]));
// console.log(getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]));
// console.log(getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]));

// [[0,0,0,0],   [2, 1] => [2, 2] : [2, 3]
//  [0,0,0,0], 
//  [0,1,2,0], 
//  [0,0,0,0]]

// [[0,0,0,0],   [1, 2] => [2, 1] : [3, 0] 
//  [0,0,1,0], 
//  [0,2,0,0], 
//  [0,0,0,0]]

// [[0,2,0,0],   [1, 0] => [0, 1] : [1, 2] 
//  [1,0,0,0], 
//  [0,0,0,0], 
//  [0,0,0,0]]

// [[0,0,0,0],   [3, 1] => [2, 0] : [1, 1]  
//  [0,0,0,0], 
//  [2,0,0,0], 
//  [0,1,0,0]]

// [[0,0,0,0],   [2, 2] => [3, 3] : [2, 2] 
//  [0,0,0,0], 
//  [0,0,1,0], 
//  [0,0,0,2]]