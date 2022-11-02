const fs = require('fs');
const path = require('path');
const readLine = require('readline');
const writeStream = fs.createWriteStream(path.join(__dirname,'text2.txt'))
let rl = readLine.createInterface(
    {
      input: process.stdin,
      output: process.stdout
    }
);
console.log('Type your text, please...');
rl.on('line', (input) => {
    if(input === 'exit') {
        console.clear()
        console.log('Bye...!');
        rl.close()
    } else {
    writeStream.write(input);
    console.log('...complete...')
    };
})