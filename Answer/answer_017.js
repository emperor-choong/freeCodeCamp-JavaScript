function isPerfectSquare(n) {
    if(n < 0){
        return false;
    }else{
        let result = Math.sqrt(n);
        if(Math.floor(result) === result){
            return true;
        }else{
            return false;
        }
    }
}

// console.log(isPerfectSquare(9));
// console.log(isPerfectSquare(49));
// console.log(isPerfectSquare(1));
// console.log(isPerfectSquare(2));
// console.log(isPerfectSquare(99));
// console.log(isPerfectSquare(-9));
// console.log(isPerfectSquare(0));
// console.log(isPerfectSquare(25281));