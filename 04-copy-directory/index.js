const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

(async () => {
    await fsPromises.mkdir(path.join(__dirname,'files-copy'), { recursive: true })
    
    await fs.readdir(path.join(__dirname,'files'), (error, dir) => {
        dir.forEach(file => {
            fsPromises.copyFile(path.join(__dirname,'files', file), path.join(__dirname,'files-copy', file));
        })
    })
}

)()