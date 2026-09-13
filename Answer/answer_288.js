function getRentalCost(rented, returned, tier) {
    const rentalDate = new Date(rented);
    const returnDate = new Date(returned);

    // Due date = rental date + tier days at 12:00 UTC
    const dueDate = new Date(Date.UTC(
        rentalDate.getUTCFullYear(),
        rentalDate.getUTCMonth(),
        rentalDate.getUTCDate() + tier,
        12, 0, 0
    ));

    let totalCost;
    if(tier === 1){
        totalCost = 4.99;
    }else if(tier === 3){
        totalCost = 3.99;
    }else if(tier === 7){
        totalCost = 2.99;
    }

    if(returnDate > dueDate){
        const msPerDay = 24 * 60 * 60 * 1000;
        let lateDays = Math.ceil((returnDate - dueDate) / msPerDay);

        if(tier === 1){
            totalCost = totalCost + lateDays * 3.99;
        }else if(tier === 3){
            totalCost = totalCost + lateDays * 2.99;
        }else if(tier === 7){
            totalCost = totalCost + lateDays * 0.99;
        }
    }

    return `$${totalCost.toFixed(2)}`;  
}

console.log(getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1));
console.log(getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1));
console.log(getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3));
console.log(getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3));
console.log(getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7));
console.log(getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7));