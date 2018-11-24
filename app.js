// read text.txt as lines to draw
var fs = require('fs');
var lines = fs.readFileSync('text.txt').toString().split("\n");

// sleep function to slow down line drawing
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// drawing the lines
async function draw(speed) {
    for (var i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        await sleep(speed);
    }
}

// go go
draw(100);