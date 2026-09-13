function getPeriodicSpelling(word) {
    const symbols = new Set(["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"]);

    const s = word.toLowerCase();

    function dfs(i) {
        if (i === s.length) return [];

        // try 1-letter and 2-letter chunks
        for (let len = 1; len <= 2; len++) {
            if (i + len > s.length){
                continue;
            } 

            const chunk = s.slice(i, i + len);
            const formatted = chunk.length === 1 ? chunk.toUpperCase() : chunk[0].toUpperCase() + chunk[1];

            if (symbols.has(formatted)) {
                const result = dfs(i + len);
                if (result) return [formatted, ...result];
            }
        }

        return null;
    }

    return dfs(0) || [];
}

console.log(getPeriodicSpelling("neon"));
console.log(getPeriodicSpelling("rational"));
console.log(getPeriodicSpelling("yarn"));
console.log(getPeriodicSpelling("carbon"));
console.log(getPeriodicSpelling("noisy"));
console.log(getPeriodicSpelling("bicycles"));
console.log(getPeriodicSpelling("optics"));
console.log(getPeriodicSpelling("value"));