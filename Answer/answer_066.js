function getExtension(filename) {
    let result = filename.split('.');
    if(result.length === 1 || result[result.length-1] === ""){
        return "none";
    }else{
        return result[result.length-1]; 
    }
}

// console.log(getExtension("document.txt"));
// console.log(getExtension("README"));
// console.log(getExtension("image.PNG"));
// console.log(getExtension(".gitignore"));
// console.log(getExtension("archive.tar.gz"));
// console.log(getExtension("final.draft."));