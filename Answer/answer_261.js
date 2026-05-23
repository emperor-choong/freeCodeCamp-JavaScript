function getOpenIssues(issues, prs) {
    let result = [];

    for (let issue of issues) {
        let closed = false;

        for (let pr of prs) {
            if (issue === pr) {
                continue;
            }

            if (isRotation(issue, pr)) {
                closed = true;
                break;
            }
        }

        if (!closed) {
            result.push(issue);
        }
    }

    return result;
}

function isRotation(a, b) {
    let sa = String(a);
    let sb = String(b);

    const maxLen = Math.max(sa.length, sb.length);

    sa = sa.padStart(maxLen, "0");
    sb = sb.padStart(maxLen, "0");

    // If a string is a rotation of another string, it will always appear inside the doubled string.
    return (sa + sa).includes(sb) && sa !== sb;
}

// console.log(getOpenIssues([123, 234], [231]));
// console.log(getOpenIssues([123, 345, 16], [345, 231]));
// console.log(getOpenIssues([456, 332, 12, 15], [201, 945, 180]));
// console.log(getOpenIssues([12, 115, 296, 170, 24], [17, 18, 19, 20, 21]));
// console.log(getOpenIssues([19, 95, 422, 395, 754, 102, 296, 709, 237, 4400, 1802], [395, 440, 9001, 95, 242, 21, 287, 169, 14]));



