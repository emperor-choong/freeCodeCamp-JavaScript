function formatDate(dateString) {
    let date = new Date(dateString);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// console.log(formatDate("December 6, 2025"));
// console.log(formatDate("January 1, 2000"));
// console.log(formatDate("November 11, 1111"));
// console.log(formatDate("September 7, 512"));
// console.log(formatDate("May 4, 1950"));
// console.log(formatDate("February 29, 1992"));