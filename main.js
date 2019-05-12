

let color = [
    ['red',   'red',   'red', 'red',    null,    null,    null,    null],
    ['black', 'red',   'black', 'black', 'red',   'red',   'black', 'black'],
    ['red',   'black', 'black', 'black',  null,   'black', 'black', 'red'],
    ['black', 'red',   'red',    null,   'red',   'red',   'red',   'red'],
    ['red',    null,   'red',   'black', 'red',    null,   'black',  null],
    ['black', 'black', 'red',   'black',  null,   'black', 'black', 'black'],
    ['red',   'red',   'black', 'red',   'black', 'black', 'black', 'red'],
    ['black', 'red',   'red',    null,   'red',   'black', 'red',   'red']
];

function hrzChecker(colorChecker) {
    for (let row = 0; row <= 7; row++) {
        for (let col = 0; col <= 4; col++) {
            if (!colorChecker[row][col]) continue;
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
            if (!colorChecker[row][col]) continue;
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
            if (!colorChecker[row][col]) continue;
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
            if (!colorChecker[row][col]) continue;
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

let results = hrzChecker(color);

module.exports = hrzChecker;
// module.export = function hrzChecker(){
//     return true;
// };
// module.export = function vertChecker(){
//     return true;
// };
// module.export = function diagDown(){
//     return true;
// };
// module.export = function diagUp(){
//     return true;
// };