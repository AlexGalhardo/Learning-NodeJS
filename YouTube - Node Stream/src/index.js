const fs = require('fs')

const filename = './src/input.txt';

const result1 = fs.readFileSync(filename, 'utf-8');
console.log(result1)

const result2 = fs.createReadStream(filename, 'utf-8');
result2.on('error', error => {
    console.log('Error: ', error)
})
let lastChunk = "";
result2.on('data', chunk => {

    if(lastChunk) {
        const lastChunkSplit = lastChunk.split('\n')
        const last = lastChunkSplit[lastChunkSplit.length - 1];
        const penultimate = lastChunkSplit[lastChunkSplit.length - 2];
        if(penultimate.split(' ').length !== last.split(' ').length) {
            chunk = last + chunk
        }
    }
    lastChunk = chunk

    let newChunk = chunk

    if(newChunk.split('\n').length >= 2) {
        const newChunkSplit = newChunk.split('\n')
        const first = newChunkSplit[0];
        const last = newChunkSplit[newChunkSplit.length - 1];
        if(first.split(' ').length !== last.split(' ').length) {
            newChunk = newChunkSplit.slice(0, newChunkSplit.length - 1).join('\n')
        }
    }

    console.log(newChunk)
})
result2.on('end', () => {
    console.log('Finalizou');
})
