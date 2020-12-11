const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt");
const writeStream = fs.createWriteStream("./readme3Copy.txt");
readStream.pipe(writeStream);
