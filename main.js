console.log("hello");

let color = [
    ['red', 'red', 'black', 'red', 'black', 'red', 'black', 'black'],
    ['null', 'black', 'black', 'black', 'red', 'red', 'black', 'black'],
    ['red', 'red', 'black', 'black', 'null', 'black', 'black', 'red'],
    ['black', 'black', 'red', 'red', 'black', 'black', 'red', 'red'],
    ['red', 'null', 'red', 'red', 'black', 'black', 'black', 'null'],
    ['black', 'black', 'black', 'null', 'red', 'red', 'black', 'black'],
    ['red', 'red', 'black', 'black', 'black', 'null', 'black', 'red'],
    ['black', 'black', 'red', 'red', 'black', 'black', 'red', 'red']
];
//  console.log(color);

function checker(colorChecker) {
    for (let i = 0; i < colorChecker.length; i++) {
        for (let j = 0; j < colorChecker[i].length; j++) {

            console.log(colorChecker[i][j])
            console.log(`current color is: ${colorChecker[i][j]}`);
            console.log("next color is " + colorChecker[i][j + 1]);
            console.log(`i = ${i}, j = ${j}`)

            if (colorChecker[i][j] === colorChecker[i][j + 1] &&
                colorChecker[i][j] === colorChecker[i][j + 2] &&
                colorChecker[i][j] === colorChecker[i][j + 3]) {
                return true;
            }
        }
    }
    // console.log(colorChecker);
    return false;
}
let results = checker(color);
console.log(results);