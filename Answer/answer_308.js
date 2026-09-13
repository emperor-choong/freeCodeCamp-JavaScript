function triageIssue(title, labels) {
    if(labels.length === 0){
        if(title.includes("error") || title.includes("bug")){
            labels.push("bug", "needs triage");
        }else if(title.includes("feature") || title.includes("add")){
            labels.push("enhancement", "discussing");
        }
    }else{
        if(labels.includes("needs triage") && (title.includes("simple") || title.includes("easy"))){
            let index = labels.indexOf("needs triage");
            labels.splice(index, 1);
            labels.push("good first issue");
        }else if(labels.includes("discussing") && (title.includes("planned") || title.includes("next"))){
            let index = labels.indexOf("discussing");
            labels.splice(index, 1);
            labels.push("on the roadmap");
        }else if(labels.includes("needs triage")){
            let index = labels.indexOf("needs triage");
            labels.splice(index, 1);
            labels.push("help wanted");
        }else if(labels.includes("discussing")){
            let index = labels.indexOf("discussing");
            labels.splice(index, 1);
            labels.push("help wanted");
        }
    }

    if(title.includes("security")){
        labels.push("critical");
    }

    return labels;
}

// console.log(triageIssue("app crashes with error", []));
// console.log(triageIssue("app crashes with error", ["bug", "needs triage"]));
// console.log(triageIssue("add dark mode", []));
// console.log(triageIssue("add dark mode", ["enhancement", "discussing"]));
// console.log(triageIssue("xss security bug", []));
// console.log(triageIssue("security vulnerability in auth", []));
// console.log(triageIssue("easy a11y fix", ["bug", "needs triage"]));
// console.log(triageIssue("planned api migration", ["enhancement", "discussing"]));
// console.log(triageIssue("improve security", ["enhancement", "discussing"]));