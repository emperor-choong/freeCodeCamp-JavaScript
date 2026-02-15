function getRelativeResults(results) {
    let fastest = convertToSeconds(results[0]);
    let array = results.slice(1);
     
    let result = array.map(x => {
        let current = convertToSeconds(x);
        let diff = current - fastest;
        let minutes = Math.floor(diff / 60);
        let seconds = diff % 60;
        return `+${minutes}:${String(seconds).padStart(2, "0")}`;
    });

    return ["0", ...result];
}

function convertToSeconds(time){
    let [hour, minute, second] = time.split(":").map(x => Number(x));
    let result = hour*3600 + minute*60 + second;
    return result;
}

// console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
// console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]));
// console.log(getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]));
// console.log(getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]));
// console.log(getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]));