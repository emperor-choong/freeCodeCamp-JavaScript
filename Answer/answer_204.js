function truncateText(str) {
    let totalWidth = 0;
    for(let i = 0; i < str.length; i++){
        totalWidth = totalWidth + getCharacterWidth(str[i]);
    }

    console.log(totalWidth);

    if(totalWidth <= 50){
        return str;
    }else{
        let currentWidth = 0;
        let result = "";
        for(let i = 0; i < str.length; i++){
            let w = getCharacterWidth(str[i]);
            if(currentWidth + w + 3 > 60){
                return result + "...";
            }

            result = result + str[i];
            currentWidth = currentWidth + w;
        }

        return result + "...";
    }
}

function getCharacterWidth(char){
    if("ilI".includes(char) === true){
        console.log(char, 1);
        return 1;
    }else if("fjrt".includes(char) === true){
        console.log(char, 2);
        return 2;
    }else if("abcdeghkmnopqrstuvwxyzJL".includes(char) === true){
        console.log(char, 3);
        return 3;
    }else if("ABCDEFGHKMNOPQRSTUVWXYZ".includes(char) === true){
        console.log(char, 4);
        return 4;
    }else if(char === " "){
        console.log(char, 2);
        return 2;
    }else if(char === "."){
        console.log(char, 1);
        return 1;
    }
}

console.log(truncateText("The quick brown fox"));
// console.log(truncateText("The silky smooth sloth"));
// console.log(truncateText("THE LOUD BRIGHT BIRD"));
// console.log(truncateText("The fast striped zebra"));
// console.log(truncateText("The big black bear"));

