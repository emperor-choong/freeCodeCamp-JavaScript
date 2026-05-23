function isValidTrick(trickName) {
    let firstWords = ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen", "Polar"];
    let secondWords = ["Twister", "Icequake", "Avalanche", "Vortex", "Snowstorm", "Frostbite", "Blizzard", "Shadow"];

    // Array Destructuring
    let [first, second] = trickName.split(" ");
    if(firstWords.includes(first) === true && secondWords.includes(second) === true){
        return true;
    }else{
        return false;
    }
}

// console.log(isValidTrick("Polar Vortex"));
// console.log(isValidTrick("Solar Icequake"));
// console.log(isValidTrick("Thunder Blizzard"));
// console.log(isValidTrick("Phantom Frostbite"));
// console.log(isValidTrick("Ghost Avalanche"));
// console.log(isValidTrick("Snowstorm Shadow"));
// console.log(isValidTrick("Solar Sky"));