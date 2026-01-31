function imageSearch(images, term) {
    let result = [];
    for(let i = 0; i < images.length; i++){
        if(images[i].toLowerCase().includes(term.toLowerCase()) === true){
            result.push(images[i]);
        } 
    }

    return result;
}

// console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"));
// console.log(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"));
// console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
// console.log(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"));