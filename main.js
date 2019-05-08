console.log("hello");

let color = ['black', 'red', 'red', 'blue'];

function checker(colorChecker) {
    for (let i = 0; i < colorChecker.length; i++) {
        console.log("current color is " + colorChecker[i]);
        console.log("next color is " + colorChecker[i + 1]);
        if (colorChecker[i] === colorChecker[i + 1]) {
            return true;
        }
    }
    console.log(colorChecker);
    return false;
}
let results = checker(color);
console.log(results);
            
            // (colorChecker[i] !== colorChecker[i+1]){ 
            //     return false;
            // } 
          