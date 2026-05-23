function mongoIdToDate(id) {
    // First 8 hex characters = Unix timestamp (seconds)
    const timestampHex = id.slice(0, 8);

    // Convert hex to decimal seconds
    const timestamp = parseInt(timestampHex, 16);

    // Convert to ISO 8601 string
    return new Date(timestamp * 1000).toISOString();
}

// console.log(mongoIdToDate("6a094b50bcf86cd799439011"));
// console.log(mongoIdToDate("695344eb1f4a4c1123042128"));
// console.log(mongoIdToDate("386da62df34123ac54617e56"));
// console.log(mongoIdToDate("69f571c3d7711807afd3dd55"));
// console.log(mongoIdToDate("68adce01c0e1144d0a90295a"));