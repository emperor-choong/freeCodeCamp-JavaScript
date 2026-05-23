function countMedals(winners) {
    let table = {};
    winners.forEach(([gold, silver, bronze]) => {
        // Nullish coalescing assignment (??=)
        table[gold] ??= [0, 0, 0];
        table[silver] ??= [0, 0, 0];
        table[bronze] ??= [0, 0, 0];

        table[gold][0]++;
        table[silver][1]++;
        table[bronze][2]++;
    });

    let array = Object.entries(table).map(([country, medals]) => {
        let total = medals[0] + medals[1] + medals[2];
        return [country, medals[0], medals[1], medals[2], total];
    });

    let sorted = array.sort((a, b) => {
        if(a[1] !== b[1]){
            return b[1] - a[1];
        }else{
            return a[0].localeCompare(b[0]);
        }
    });

    let header = "Country,Gold,Silver,Bronze,Total";
    let csv = sorted.map(x => x.join(","));
    // Spread Operator
    let result = [header, ...csv].join("\n");

    return result;
}

// console.log(countMedals([["USA", "CAN", "NOR"], ["NOR", "USA", "CAN"], ["USA", "NOR", "SWE"]]));
// console.log(countMedals([["NOR","SWE","FIN"]]));
// console.log(countMedals([["ITA", "CHN", "CHN"], ["JPN", "ITA", "JPN"]]));
// console.log(countMedals([["USA","CAN","NOR"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["SWE","FIN","NOR"], ["CAN","USA","SWE"], ["FRA","GER","ITA"]]));
// console.log(countMedals([["ESP","ITA","FRA"], ["ITA","ESP","GER"], ["NOR","SWE","FIN"], ["FIN","NOR","SWE"], ["USA","CAN","MEX"], ["CAN","USA","MEX"], ["JPN","KOR","CHN"], ["CHN","JPN","KOR"]]));
// console.log(countMedals([["USA","CAN","GER"], ["NOR","SWE","FIN"], ["USA","NOR","SWE"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["USA","GER","CAN"], ["SWE","NOR","FIN"], ["CAN","USA","NOR"], ["FRA","GER","ITA"], ["JPN","CHN","KOR"], ["SWE","FIN","NOR"], ["GER","ITA","FRA"]]));