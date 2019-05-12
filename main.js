console.log("hello");

let color = [
    ['red',   'red',   'black', 'red',    null,    null,    null,    null],
    ['black', 'red',   'black', 'black', 'red',   'red',   'black', 'black'],
    ['red',   'black', 'black', 'black',  null,   'black', 'black', 'red'],
    ['black', 'red',   'red',    null,   'red',   'red', 'red',   'red'],
    ['red',    null,   'red',   'black', 'red',  null,   'black',  null],
    ['black', 'black', 'red',   'black',  null,   'black', 'black', 'black'],
    ['red',   'red',   'black', 'red',   'black', 'black', 'black', 'red'],
    ['black', 'red',   'red',    null,   'red',   'black', 'red',   'red']
];
//  console.log(color);

function checker(colorChecker) {
    //horizontal
    for (let row = 0; row <= 7; row++) {
        for (let col = 0; col <= 4; col++) {
            if (!colorChecker[row][col]) continue;

            // console.log(color)
            console.log("----------------------------------------------------")
            console.log(`current horizontal color is: ${colorChecker[row][col]}`);
            console.log("next horizontal color is " + colorChecker[row][col + 1]);
            console.log(`row = ${row}, col = ${col}`)

            if (
                colorChecker[row][col] === colorChecker[row][col + 1] &&
                colorChecker[row][col] === colorChecker[row][col + 2] &&
                colorChecker[row][col] === colorChecker[row][col + 3]) {
                return true;
            }
        }
    }
        //vertical
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 7; col++) {
            if (!colorChecker[row][col]) continue;

            // console.log(color)
            console.log("----------------------------------------------------")
            console.log(`current vertical color is: ${colorChecker[row][col]}`);
            console.log("next vertical color is " + colorChecker[row + 1][col]);
            // console.log(`col = ${col}, row = ${row + 1}`)

            if (
                colorChecker[row][col] === colorChecker[row + 1][col] &&
                colorChecker[row][col] === colorChecker[row + 2][col] &&
                colorChecker[row][col] === colorChecker[row + 3][col]) {
                return true;
            }
        }
    }
    //diagonal down
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
            if (!colorChecker[row][col]) continue;

            // console.log(color)
            console.log("----------------------------------------------------")
            console.log(`current diagonal down color is: ${colorChecker[row][col]}`);
            console.log("next diagonal down color is " + colorChecker[row +1][col + 1]);

            if (
                colorChecker[row][col] === colorChecker[row + 1][col + 1] &&
                colorChecker[row][col] === colorChecker[row + 2][col + 2] &&
                colorChecker[row][col] === colorChecker[row + 3][col + 3]) {
                return true;
            }
        }
    }
    //diagonal up
    for (let row = 3; row <= 4; row++) {
        for (let col = 0; col <= 4; col++) {
            if (!colorChecker[row][col]) continue;

            // console.log(color)
            console.log("----------------------------------------------------")
            console.log(`current diagonal up color is: ${colorChecker[row][col]}`);
            console.log("next diagonal  color is " + colorChecker[row - 1][col + 1]);


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
let results = checker(color);
console.log(results);
