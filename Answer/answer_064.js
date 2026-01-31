function canPost(message) {
    if(message.length <= 40){
        return "short post";
    }else if(message.length > 40 && message.length <= 80){
        return "long post";
    }else if(message.length > 80){
        return "invalid post";
    }
}

// console.log(canPost("Hello world"));
// console.log(canPost("This is a longer message but still under eighty characters."));
// console.log(canPost("This message is too long to fit into either of the character limits for a social media post."));
