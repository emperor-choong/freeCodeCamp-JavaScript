function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
    if(fileUnit === "B"){
        return Math.floor(driveSizeGb * 10**9 / fileSize);
    }else if(fileUnit === "MB"){
        return Math.floor(driveSizeGb * 10**9 / (fileSize * 10**6));
    }else if(fileUnit === "KB"){
        return Math.floor(driveSizeGb * 10**9 / (fileSize * 10**3));
    }
}

// console.log(numberOfFiles(500, "KB", 1));
// console.log(numberOfFiles(50000, "B", 1));
// console.log(numberOfFiles(5, "MB", 1));
// console.log(numberOfFiles(4096, "B", 1.5));
// console.log(numberOfFiles(220.5, "KB", 100));
// console.log(numberOfFiles(4.5, "MB", 750));