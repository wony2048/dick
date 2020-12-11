const fs = require("fs");

fs.readFile("file/readFile.js", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
