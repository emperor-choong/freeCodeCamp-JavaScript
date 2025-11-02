function dive(map, coordinates) {
    let counter = 0;
    for(let i = 0; i < map.length; i++){
        let array = map[i].filter((treasure) => treasure === "O");
        counter = counter + array.length;
    }

    let row = coordinates[0];
    let column = coordinates[1];

    if(map[row][column] === "-"){
        return "Empty";
    }else if(map[row][column] === "X"){
        return "Found";
    }else{
        if(counter > 1){
            return "Found";
        }else if(counter === 1){
            return "Recovered";
        }
    }
}

// console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]));
// console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]));
// console.log(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]));
// console.log(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]));
// console.log(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]));
// console.log(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]));