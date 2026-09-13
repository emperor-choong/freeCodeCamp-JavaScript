function detectMutations(strand1, strand2) {
    let result = [];
    for(let i = 0; i < strand1.length; i++){
        if(strand1[i] !== strand2[i]){
            result.push(i);
        }
    }

    return result;
}

// console.log(detectMutations("ATCG", "ATGG"));
// console.log(detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC"));
// console.log(detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG"));
// console.log(detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG"));
// console.log(detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT"));