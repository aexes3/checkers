console.log("hello");

let color = [
    ['red',   'red',   'black', 'red',    null,    null,     null,    null],
    ['black', 'black',  null,   'black', 'red',   'red',    'black', 'black'],
    ['red',   'red',   'black', 'black',  null,   'black',   null,   'red'],
    ['black', 'black', 'red',   'red',   'black', 'black',  'red',   'red'],
    ['red',    null,   'red',   'red',   'black', 'black',  'black',  null],
    ['black', 'black', 'black',  null,   'red',   'black',   'black', 'black'],
    ['red',   'red',    null,   'red',   'black',  'black', 'black', 'red'],
    ['black', 'red',   'red',    null,   'red',    'black', 'red',   'red']
];
//  console.log(color);

function checker(colorChecker) {
    for (let row = 0; row <= 4; row++) {
        for (let col = 0; col <= 7; col++) {
            if (!colorChecker[col][row] || !colorChecker[col][row + 1]) continue;

            // console.log(color)
            console.log("----------------------------------------------------")
            console.log(`current horizontal color is: ${colorChecker[col][row]}`);
            console.log("next horizontalcolor is " + colorChecker[col][row + 1]);
            console.log(`col = ${col}, row = ${row}`)

            if (
                colorChecker[col][row] === colorChecker[col][row + 1] &&
                colorChecker[col][row] === colorChecker[col][row + 2] &&
                colorChecker[col][row] === colorChecker[col][row + 3]) {
                return true;
            }
        }
    }
    for (let row = 0; row <= 7; row++) {
        for (let col = 0; col <= 4; col++) {
            if (!colorChecker[col][row] || !colorChecker[col][row + 1]) continue;

            // console.log(color)
            console.log("----------------------------------------------------")
            console.log(`current horizontal color is: ${colorChecker[col][row]}`);
            console.log("next horizontalcolor is " + colorChecker[col][row + 1]);
            console.log(`col = ${col}, row = ${row}`)

            if (
                colorChecker[col][row] === colorChecker[col + 1][row] &&
                colorChecker[col][row] === colorChecker[col + 2][row] &&
                colorChecker[col][row] === colorChecker[col + 3][row]) {
                return true;
            }
        }
    }
    return false;
}
let results = checker(color);
console.log(results);




    // colorChecker[col][row] === colorChecker[col + 1][row] &&
    // colorChecker[col][row] === colorChecker[col + 2][row] &&
    // colorChecker[col][row] === colorChecker[col + 3][row]) 

    // console.log("----------------------------------------------------")
    // console.log("current vertical color is " + colorChecker[row][col])
    // console.log("next vertical color is " + colorChecker[row][col + 1])
    // console.log(`row = ${row}, col = ${col}`)
    // console.log("----------------------------------------------------")

    // if (colorChecker[i] !== colorChecker[i+1]){ 
        //     return false;
