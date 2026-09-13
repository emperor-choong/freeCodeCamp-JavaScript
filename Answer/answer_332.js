function getFoodChain(pairs) {
    let result = pairs[0];
    pairs.splice(0, 1);
    while(true){
        let index = [];
        for(let i = 0; i < pairs.length; i++){
            if(result[result.length-1] === pairs[i][0]){
                result.push(pairs[i][1]);
                index.push(i);
            }

            if(result[0] === pairs[i][1]){
                result.unshift(pairs[i][0]);
                index.push(i);
            }
        }

        console.log(index);

        // Remove the largest index does not affect the earlier element index when the length change
        for(let i = index.length-1; i >= 0; i--){
            pairs.splice(index[i], 1);
        }

        if(pairs.length === 0){
            break;
        }
    }

    return result;
}

// console.log(getFoodChain([["cat", "mouse"]]));
// console.log(getFoodChain([["wolf", "deer"], ["deer", "grass"]]));
// console.log(getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]));
// console.log(getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]));
// console.log(getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]));