function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
    if(videoUnit === "TB"){
        return "Invalid video unit";
    }else if(driveUnit === "B" || driveUnit === "KB" || driveUnit === "MB"){
        return "Invalid drive unit";
    }

    let videoSizeInBytes;
    let driveSizeInBytes;
    if(videoUnit === "KB"){
        videoSizeInBytes = videoSize * 10**3;
    }else if(videoUnit === "MB"){
        videoSizeInBytes = videoSize * 10**6;
    }else if(videoUnit === "GB"){
        videoSizeInBytes = videoSize * 10**9;
    }

    if(driveUnit === "GB"){
        driveSizeInBytes = driveSize * 10**9;
    }else if(driveUnit === "TB"){
        driveSizeInBytes = driveSize * 10**12;
    }

    return Math.floor(driveSizeInBytes/videoSizeInBytes);
}

// console.log(numberOfVideos(500, "MB", 100, "GB"));
// console.log(numberOfVideos(1, "TB", 10, "TB"));
// console.log(numberOfVideos(2000, "MB", 100000, "MB"));
// console.log(numberOfVideos(500000, "KB", 2, "TB"));
// console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));