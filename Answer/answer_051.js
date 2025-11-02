function format(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;

    let ss = s.toString().padStart(2, "0");
    let mm = m.toString().padStart(2, "0");

    if(h === 0 && m !== 0){
        return `${m}:${ss}`;
    }else if(h === 0 && m === 0){
        return `0:${ss}`;
    }else{
        return `${h}:${mm}:${ss}`;
    }
}

// console.log(format(500));
// console.log(format(4000));
// console.log(format(1));
// console.log(format(5555));
// console.log(format(99999));

