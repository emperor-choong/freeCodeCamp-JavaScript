function findWord(matrix, word) {
    for(let i = 0; i < matrix.length; i++){
        let leftToRight = "";
        let rightToLeft = "";
        let topToBottom = "";
        let bottomToTop = "";
        let indices1 = [];
        let indices2 = [];
        let indices3 = [];
        let indices4 = [];
        for(let j = 0; j < matrix.length; j++){
            leftToRight = leftToRight + matrix[i][j];
            rightToLeft = rightToLeft + matrix[i][matrix[i].length-1-j];
            topToBottom = topToBottom + matrix[j][i];
            bottomToTop = bottomToTop + matrix[matrix.length-1-j][i];

            indices1.push([i, j]);
            indices2.push([i, matrix[i].length-1-j]);
            indices3.push([j, i]);
            indices4.push([matrix.length-1-j, i]);
        }

        if(leftToRight.includes(word)){
            let start = leftToRight.indexOf(word);
            let end = start + word.length - 1;
            return [indices1[start], indices1[end]]; 
        }else if(rightToLeft.includes(word)){
            let start = rightToLeft.indexOf(word);
            let end = start + word.length - 1;
            return [indices2[start], indices2[end]];
        }else if(topToBottom.includes(word)){
            let start = topToBottom.indexOf(word);
            let end = start + word.length - 1;
            return [indices3[start], indices3[end]];
        }else if(bottomToTop.includes(word)){
            let start = bottomToTop.indexOf(word);
            let end = start + word.length - 1;
            return [indices4[start], indices4[end]];
        }
    }
}

// console.log(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"));
// console.log(findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"));
// console.log(findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish"));
// console.log(findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"));