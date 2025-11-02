function favoriteSongs(playlist) {
    let array = playlist.map((obj) => obj.plays);
    array.sort((a, b) => b - a);
    let first = array[0];
    let second = array[1];

    let result1 = playlist.filter((obj) => obj.plays === first);
    let result2 = playlist.filter((obj) => obj.plays === second);


    return [result1[0].title, result2[0].title];
}

// console.log(favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2}]));
// console.log(favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100}]));
// console.log(favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75}]));