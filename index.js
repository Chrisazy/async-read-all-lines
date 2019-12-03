const readline = require('readline');
const fs = require('fs');

async function readLines(filename) {
    return new Promise((resolve, reject) => {
        var lineReader = readline.createInterface({
            input: fs.createReadStream(filename)
        });
        const lines = [];
        lineReader
            .on('line', line => lines.push(line))
            .on('close', () => resolve(lines))
            .on('error', reject);
    });
}

module.exports = readLines;