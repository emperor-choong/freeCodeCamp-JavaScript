function stripTags(html) {
    let result = [];
    let isStart = false;
    let start = 0;
    for(let i = 0; i < html.length; i++){
        if(html[i] === ">"){
            start = i+1;
            isStart = true;
        }

        if(html[i] === "<" && isStart === true){
            let content = html.slice(start, i);
            isStart = false;
            result.push(content);
        }
    }

    return result.join("");
}

// console.log(stripTags('<a href="#">Click here</a>'));
// console.log(stripTags('<p class="center">Hello <b>World</b>!</p>'));
// console.log(stripTags('<img src="cat.jpg" alt="Cat">'));
// console.log(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'));