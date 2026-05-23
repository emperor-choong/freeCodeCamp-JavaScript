function canDonate(donor, recipient) {
    let donorBloodType = donor.slice(0, -1);
    let donorRh = donor.slice(-1);
    let recipientBloodType = recipient.slice(0, -1);
    let recipientRh = recipient.slice(-1);

    if(donorBloodType === "O"){
        if(donorRh === "+"){
            if(recipientRh === "+"){
                return true;
            }
        }else if(donorRh === "-"){
            return true;
        }
    }else if(donorBloodType === "A" && (recipientBloodType === "A" || recipientBloodType === "AB")){
        if(donorRh === "+" && recipientRh === "+"){
            return true;
        }else if(donorRh === "-"){
            return true;
        }
    }else if(donorBloodType === "B" && (recipientBloodType === "B" || recipientBloodType === "AB")){
        if(donorRh === "+" && recipientRh === "+"){
            return true;
        }else if(donorRh === "-"){
            return true;
        }
    }else if(donorBloodType === "AB" && recipientBloodType === "AB"){
        if(donorRh === "+" && recipientRh === "+"){
            return true;
        }else if(donorRh === "-"){
            return true;
        }
    }
    
    return false; 
}

// console.log(canDonate("B+", "B+"));
// console.log(canDonate("O-", "AB-"));
// console.log(canDonate("O+", "A-"));
// console.log(canDonate("A+", "AB+"));
// console.log(canDonate("A-", "B-"));
// console.log(canDonate("B-", "AB+"));
// console.log(canDonate("B-", "A+"));
// console.log(canDonate("O-", "O+"));
// console.log(canDonate("O+", "O-"));
// console.log(canDonate("AB+", "AB-"));