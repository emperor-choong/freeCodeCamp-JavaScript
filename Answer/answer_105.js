function createBoard(dimensions) {
    let row = dimensions[0];
    let column = dimensions[1];

    let result = [];
    for(let i = 0; i < row; i++){
        let x = [];
        for(let j = 0; j < column; j++){
            if(i % 2 === 0){
                if(j % 2 === 0){
                    x.push("X")
                }else{
                    x.push("O");
                }
            }else{
                if(j % 2 === 0){
                    x.push("O")
                }else{
                    x.push("X");
                }
            }
        }

        result.push(x);
    }

    return result;
}

// console.log(createBoard([3, 3]));
// console.log(createBoard([6, 1]));
// console.log(createBoard([2, 10]));
// console.log(createBoard([5, 4]));