function triageIssue(ms, message) {
    let days = ms / 1000 / 60 / 60 / 24;
    let isContainsBump = /bump/i.test(message);

    if(days < 7){
        return "leave it";
    }else if(days >= 7 && isContainsBump === true){
        return "close it";
    }else{
        return "bump it";
    }
}

// console.log(triageIssue(86400000, "Lets fix it"));
// console.log(triageIssue(1209600000, "still waiting"));
// console.log(triageIssue(864000000, "bump"));
// console.log(triageIssue(604800000, "Do we still want this?"));
// console.log(triageIssue(604800000, "Bumping this"));
// console.log(triageIssue(345600000, "I'll make a PR"));