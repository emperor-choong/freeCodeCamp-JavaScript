function generateSnowflake(crystals) {
    let array = crystals.split('\n');
    let result = array.map(line => line + line.split("").reverse().join(""));

    return result.join('\n');
}

// console.log(generateSnowflake("* \n *\n* "));
// console.log(generateSnowflake("X=~"));
// console.log(generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  "));
// console.log(generateSnowflake("*   *\n * * \n* * *\n * * \n*   *"));
// console.log(generateSnowflake("*  -\n * -\n*  -"));