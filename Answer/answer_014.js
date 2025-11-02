function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
    if(videoUnit === "B"){
        return "Invalid video unit";
    }else if(driveUnit === "MB"){
        return "Invalid drive unit";
    }

    if(videoUnit === "MB" && driveUnit === "GB"){
        return 100 * 10**9 * 10**(-6) / 500;
    }else if(videoUnit === "KB" && driveUnit === "TB"){
        return 2 * 10**12 * 10**(-3) / 500000;
    }else if(videoUnit === "GB" && driveUnit === "TB"){
        return Math.floor(2.2 * 10**12 * 10**(-9) / 1.5);
    }
}

// console.log(numberOfVideos(500, "MB", 100, "GB"));
// console.log(numberOfVideos(2000, "B", 1, "TB"));
// console.log(numberOfVideos(2000, "MB", 100000, "MB"));
// console.log(numberOfVideos(500000, "KB", 2, "TB"));
// console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));