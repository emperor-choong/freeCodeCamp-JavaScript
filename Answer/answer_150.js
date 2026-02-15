function digitalDetox(logs) {
    let counts = {};

    for(let log of logs){
        let day = log.slice(0, 10); 

        if(counts[day] === undefined){
            counts[day] = 1;
        }else{
            counts[day]++;
        } 
        
        if(counts[day] > 2){
            return false;
        }
    }

    logs.sort();
    for(let i = 0; i < logs.length-1; i++){
        let x = new Date(logs[i].replace(" ", "T") + "Z");
        let y = new Date(logs[i+1].replace(" ", "T") + "Z");
        let hours = (y - x) / 36e5;

        if(hours < 4){
            return false;
        }  
    }

    return true;
}

// console.log(digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]));
// console.log(digitalDetox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"]));
// console.log(digitalDetox(["2026-01-31 08:21:30", "2026-01-31 14:30:00", "2026-02-01 08:00:00", "2026-02-01 12:30:00"]));
// console.log(digitalDetox(["2026-01-31 10:40:21", "2026-01-31 15:19:41", "2026-01-31 21:49:50", "2026-02-01 09:30:00"]));
// console.log(digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 09:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]));
// console.log(digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]));