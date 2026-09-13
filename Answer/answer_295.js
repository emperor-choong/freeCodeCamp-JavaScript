function triageBlood(bank, patients) {
    const blood = { O: 0, A: 0, B: 0, AB: 0 };
    const need = { O: 0, A: 0, B: 0, AB: 0 };

    // Count inventory
    for (const type of bank) {
        blood[type]++;
    }

    // Count patients
    for (const type of patients) {
        need[type]++;
    }

    let served = 0;

    // O patients -> O only
    while (need.O > 0 && blood.O > 0) {
        need.O--;
        blood.O--;
        served++;
    }

    // A patients -> A, then O
    while (need.A > 0) {
        if (blood.A > 0) {
            blood.A--;
        } else if (blood.O > 0) {
            blood.O--;
        } else {
            break;
        }
        need.A--;
        served++;
    }

    // B patients -> B, then O
    while (need.B > 0) {
        if (blood.B > 0) {
            blood.B--;
        } else if (blood.O > 0) {
            blood.O--;
        } else {
            break;
        }
        need.B--;
        served++;
    }

    // AB patients -> AB, A, B, O
    while (need.AB > 0) {
        if (blood.AB > 0) {
            blood.AB--;
        } else if (blood.A > 0) {
            blood.A--;
        } else if (blood.B > 0) {
            blood.B--;
        } else if (blood.O > 0) {
            blood.O--;
        } else {
        break;
        }
        need.AB--;
        served++;
    }

    return `${served} of ${patients.length} patients served`;
}

// console.log(triageBlood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"]));
// console.log(triageBlood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"]));
// console.log(triageBlood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"]));
// console.log(triageBlood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"]));
// console.log(triageBlood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"]));
// console.log(triageBlood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"]));