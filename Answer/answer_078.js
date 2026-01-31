function scaleRecipe(ingredients, scale) {
    let array = ingredients.map(item => {
        let x = item.split(" ");
        let quantity = parseFloat(x[0]);
        let newQuantity = quantity*scale;
        x[0] = newQuantity;
        return x.join(" ");
    });

    return array;
}

// console.log(scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2));
// console.log(scaleRecipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5));
// console.log(scaleRecipe(["3 C Milk", "2 C Oats"], 0.5));
// console.log(scaleRecipe(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5));