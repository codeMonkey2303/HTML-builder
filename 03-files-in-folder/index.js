const fs = require('fs');
const path = require('path');
let absPath = path.join(__dirname,'secret-folder');

fs.readdir(absPath, {withFileTypes: true}, (error, dirEntryList) => {
    if(!error) {
        dirEntryList.forEach((dirEntry) => {
            if (dirEntry.isFile()) {
         console.log(dirEntry.name.replace(/\.[^/.]+$/, "")+' - '+ path.extname(dirEntry.name)+' - '+fs.statSync(path.join(__dirname, 'secret-folder', dirEntry.name)).size/1000 + 'kb')
            }
        });
    } else {
        console.error(error);
    }
});