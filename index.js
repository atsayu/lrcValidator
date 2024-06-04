const parse = require('clrc').parse;
const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lrc = [];
    const textLines = data.split("\n");
    textLines.forEach((line, index) => {
        line = line.trim();
        const parsedLine = parse(line);
        parsedLine[0].lineNumber = index;
        lrc.push(parsedLine[0]);
    })
    console.log(lrc);
})
