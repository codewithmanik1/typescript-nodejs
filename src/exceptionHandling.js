var nameJames = '{ "name": "Prabhakar" }';
try {
    var result = JSON.parse(nameJames);
    console.log(result.name);
}
catch (error) {
    if (error instanceof Error) {
        console.log("Invalid JSON");
    }
}
try {
    throw new Error("Network error");
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log("Unknown error");
    }
}
