const csv = require('csv-parser');  
const fs = require('fs');
const input = [];

if(!process.argv[2]) {
    console.log("Please supply an 8x8 board to analyze\nUsage: node main.js [board.csv]");
    process.exit();
} 

function start(filename) {
    fs.createReadStream(filename)  
    .pipe(csv({
        headers: false
    }))
    .on('data', (data) => {
        input.push(data);
    })
    .on('end', () => {
        let results = hrzChecker(input) || vertChecker(input) || diagDown(input) || diagUp(input);
        console.log(results)
            if(results){
                console.log("There was a connect four");
            } else {
                console.log("There wasn't a connect four");
            }
        return results;
    });
}

function hrzChecker(colorChecker) {
    for (let row = 0; row <= 7; row++) {
        for (let col = 0; col <= 4; col++) {
            if (colorChecker[row][col] === 'null') continue;
            if (
                colorChecker[row][col] === colorChecker[row][col + 1] &&
                colorChecker[row][col] === colorChecker[row][col + 2] &&
                colorChecker[row][col] === colorChecker[row][col + 3]) {
                return true;
            }
        }
    }return false;
}

function vertChecker(colorChecker){
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 7; col++) {
            if (colorChecker[row][col] === 'null') continue;
            if (
                colorChecker[row][col] === colorChecker[row + 1][col] &&
                colorChecker[row][col] === colorChecker[row + 2][col] &&
                colorChecker[row][col] === colorChecker[row + 3][col]) {
                return true;
            }
        }
    }return false;
}

function diagDown (colorChecker){
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
            if (colorChecker[row][col] === 'null') continue;
            if (
                colorChecker[row][col] === colorChecker[row + 1][col + 1] &&
                colorChecker[row][col] === colorChecker[row + 2][col + 2] &&
                colorChecker[row][col] === colorChecker[row + 3][col + 3]) {
                return true;
            }
        }
    }return false;
}

function diagUp (colorChecker){
    for (let row = 3; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
            if (colorChecker[row][col] === 'null') continue;
            if (
                colorChecker[row][col] === colorChecker[row - 1][col + 1] &&
                colorChecker[row][col] === colorChecker[row - 2][col + 2] &&
                colorChecker[row][col] === colorChecker[row - 3][col + 3]) {
                return true;
            }
        }
    }
    return false;
}

start(process.argv[2]);


module.exports = {
    hrzChecker, 
    vertChecker, 
    diagDown, 
    diagUp
                };