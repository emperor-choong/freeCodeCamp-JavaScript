function validate(email) {
    if(containOneAtSymbol(email) === true){
        let array = email.split("@");
        let localPart = array[0];
        let domainPart = array[1];
        if(localPart[0] === "." || localPart[localPart.length-1] === "."){
            return false;
        }

        let constraint = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-";
        for(let i = 0; i < localPart.length; i++){
            if(constraint.includes(localPart[i]) === false){
                return false;
            }
        }

        if(containAtLeastOneDot(domainPart) === false){
            return false;
        }

        let lastDotIndex = 0;
        for(let i = 0; i < domainPart.length; i++){
            if(domainPart[i] === "."){
                lastDotIndex = i;
            }
        }

        let lastPart = domainPart.slice(lastDotIndex, domainPart.length);
        if(containAtLeastTwoLetter(lastPart) === false){
            return false;
        }

        if(twoDotInARow(localPart) === true || twoDotInARow(domainPart) === true){
            return false;
        }

        return true;
    }else{
        return false;
    }
}

function containOneAtSymbol(email){
    let counter = 0;
    for(let i = 0; i < email.length; i++){
        if(email[i] === "@"){
            counter++;
        }
    }

    if(counter === 1){
        return true;
    }else{
        return false;
    }
}

function containAtLeastOneDot(domainPart){
    let counter = 0;
    for(let i = 0; i < domainPart.length; i++){
        if(domainPart[i] === "."){
            counter++;
        }
    }

    if(counter >= 1){
        return true;
    }else{
        return false;
    }
}

function twoDotInARow(part){
    for(let i = 0; i < part.length-1; i++){
        if(part[i] === "." && part[i+1] === "."){
            return true;
        }
    }

    return false;
}

function containAtLeastTwoLetter(lastPart){
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let counter = 0;
    for(let i = 0; i < lastPart.length; i++){
        for(let j = 0; j < alpha.length; j++){
            if(lastPart[i] === alpha[j]){
                counter++;
            }
        }
    }

    if(counter >= 2){
        return true;
    }else{
        return false;
    }
}

// console.log(validate("a@b.cd"));
// console.log(validate("hell.-w.rld@example.com"));
// console.log(validate(".b@sh.rc"));
// console.log(validate("example@test.c0"));
// console.log(validate("freecodecamp.org"));
// console.log(validate("develop.ment_user@c0D!NG.R.CKS"));
// console.log(validate("hello.@wo.rld"));
// console.log(validate("hello@world..com"));
// console.log(validate("git@commit@push.io"));