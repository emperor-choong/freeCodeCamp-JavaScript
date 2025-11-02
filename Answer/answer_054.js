function sort(emails) {
    let array = emails.map((email) => {
        let x = email.split("@");
        let y = x[1] + x[0];
        let z = y.toLowerCase();
        return z;
    });

    array.sort();

    for(let i = 0; i < emails.length; i++){
        let x = emails[i].split("@");
        let y = x[1] + x[0];
        let z = y.toLowerCase();

        let index = array.indexOf(z);
        array[index] = emails[i];
    }

    return array;
}

// console.log(sort(["jill@mail.com", "john@example.com", "jane@example.com"]));
// console.log(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]));
// console.log(sort(["user@z.com", "user@y.com", "user@x.com"]));
// console.log(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]));
// console.log(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]));