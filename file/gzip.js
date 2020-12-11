const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme3Copy.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./readme3Copy.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
