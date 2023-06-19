const { createReadStream } = require('fs');

const stream = createReadStream ('./content/big.txt');

//default 64kb
//last buffer - remainder
// highWatermark - control size
// const stream = createReadStream ('./content/bit.txt, {highWatrMark: 90000})
// const stream = creatReadStream ('../content/big.txt', {encoding: 'utf8})

stream.on('data', (result) => {
console.log(result);
})