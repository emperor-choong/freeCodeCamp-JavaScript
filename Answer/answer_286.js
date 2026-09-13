function cast(spells) {
    let cast = {
        f: {
            name: "Fire",
            category: "Destruction",
            baseScore: 3
        },

        l: {
            name: "Lightning",
            category: "Destruction",
            baseScore: 3
        },

        i: {
            name: "Ice",
            category: "Control",
            baseScore: 2
        },

        w: {
            name: "Wind",
            category: "Control",
            baseScore: 2
        },

        h: {
            name: "Heal",
            category: "Restoration",
            baseScore: 1
        },

        s: {
            name: "Shield",
            category: "Restoration",
            baseScore: 1
        }
    }

    let array = spells.split("");
    let multiplier = 1;
    let score = 0;
    for(let i = 0; i < array.length; i++){
        let spell = cast[array[i]];
        if(i > 0){
            let previousSpell = cast[array[i-1]];
            if(spell.category === previousSpell.category){
                multiplier = 1;
            }else{
                multiplier++;
            }
        }

        score = score + spell.baseScore * multiplier;
    }

    return score;
}

// console.log(cast("fihwl"));
// console.log(cast("lwswfi"));
// console.log(cast("wislhfl"));
// console.log(cast("sihwlih"));
// console.log(cast("wishlfihwslwifihl"));