function getStreamingBill(cart, subscription) {
    let totalCost = cart.reduce((accumulator, currentValue) => {
        let sum = 0;
        if(currentValue.format === "HD" && currentValue.type === "rent"){
            sum = sum + 3.99;
        }else if(currentValue.format === "HD" && currentValue.type === "buy"){
            sum = sum + 12.99;
        }else if(currentValue.format === "4K" && currentValue.type === "rent"){
            sum = sum + 5.99;
        }else if(currentValue.format === "4K" && currentValue.type === "buy"){
            sum = sum + 19.99;
        }

        return accumulator + sum;
    }, 0);

    let result = totalCost;
    if(subscription === "basic"){
        result = totalCost * 0.90;
    }else if(subscription === "premium"){
        result = totalCost * 0.75;
    }

    console.log(result);

    return `$${result.toFixed(2)}`;
}

console.log(getStreamingBill([{ format: "HD", type: "rent" }], "none"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "premium"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic"));
console.log(getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none"));
console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }, { format: "HD", type: "buy" }], "basic"));