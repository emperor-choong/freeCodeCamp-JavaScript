function spookify(boo) {
    let sum = "";
    let isBig = true;
    for(let i = 0; i < boo.length; i++){
        if(boo[i] === "_" || boo[i] === "-"){
            sum = sum + "~";
            continue;
        }

        if(isBig === true){
            sum = sum + boo[i].toUpperCase();
            isBig = false;
        }else{
            sum = sum + boo[i].toLowerCase();
            isBig = true;
        }
    }

    return sum;
}

// console.log(spookify("hello_world"));
// console.log(spookify("Spooky_Case"));
// console.log(spookify("TRICK-or-TREAT"));
// console.log(spookify("c_a-n_d-y_-b-o_w_l"));
// console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"));