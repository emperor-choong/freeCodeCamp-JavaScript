function getSemifinalMatchups(teams) {
    let array = teams.map(x => {
        let y = x.split(": ");
        let record = y[1].split("-").map(num => Number(num));
        let [W, OTW, OTL, L] = record;
        let points = W*3 + OTW*2 + OTL*1 + L*0;
        return {key: y[0], value: points};
    });

    let sorted = array.sort((a, b) => b.value - a.value);
    let result = `The semi-final games will be ${sorted[0].key} vs ${sorted[3].key} and ${sorted[1].key} vs ${sorted[2].key}.`;
    return result;
}

// console.log(getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]));
// console.log(getSemifinalMatchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"]));
// console.log(getSemifinalMatchups(["CAN: 3-2-0-0", "CZE: 2-1-2-0", "LAT: 0-0-1-4", "ITA: 1-1-1-2", "DEN: 1-0-0-4", "USA: 3-1-1-0"]));
// console.log(getSemifinalMatchups(["AUT: 2-2-1-0", "DEN: 1-0-0-4", "ITA: 1-1-1-2", "JPN: 3-2-0-0", "KOR: 2-1-2-0", "LAT: 0-0-1-4"]));