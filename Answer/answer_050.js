function complementaryDNA(strand) {
    let sum = "";
    for(let i = 0; i < strand.length; i++){
        if(strand[i] === "A"){
            sum = sum + "T";
        }else if(strand[i] === "T"){
            sum = sum + "A";
        }else if(strand[i] === "C"){
            sum = sum + "G";
        }else if(strand[i] === "G"){
            sum = sum + "C";
        }
    }

    return sum;
}

// console.log(complementaryDNA("ACGT"));
// console.log(complementaryDNA("ATGCGTACGTTAGC"));
// console.log(complementaryDNA("GGCTTACGATCGAAG"));
// console.log(complementaryDNA("GATCTAGCTAGGCTAGCTAG"));
