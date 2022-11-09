const fs = require('fs');
const path = require('path');
const srcPath = path.join(__dirname,'styles');
const distPath = path.join(__dirname,'project-dist','bundle.css');
let arr = [];
let writeableStrem = fs.createWriteStream(distPath);

fs.readdir(srcPath, {withFileTypes: true}, (error, dirEntryList) => {
    if(!error) {
        dirEntryList.forEach((dirEntry) => {
            if (dirEntry.isFile() && (path.extname(dirEntry.name) === '.css')) {
        arr.push(dirEntry.name)
            }
        });
    } else {
        console.error(error);
    }   
    arr.forEach((file) => {
        let readableStream = fs.createReadStream(path.join(__dirname, 'styles', file), 'utf8');
           readableStream.pipe(writeableStrem, {end: false});
          });
        });