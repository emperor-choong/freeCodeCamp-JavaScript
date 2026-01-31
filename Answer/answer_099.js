function updateInventory(inventory, shipment) {
    for(let i = 0; i < shipment.length; i++){
        let isExist = false;
        for(let j = 0; j < inventory.length; j++){
            if(shipment[i][1] === inventory[j][1]){
                inventory[j][0] = inventory[j][0] + shipment[i][0];
                isExist = true;
            }
        }

        if(isExist === false){
            inventory.push(shipment[i]);
        }
    }

    return inventory;
}

// console.log(updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]));
// console.log(updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]]));
// console.log(updateInventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]]));
// console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));