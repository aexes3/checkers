# Checkers

## Getting Started
* Takes as input 8*8 checkerboard (grid) from a csv file. Each square can have either a black, red, or null checker on it. There is no specific order they need to be placed and do not follow the rules of checkers, you may decide the format.
* Board will check true if there are four of a color in any direction you place your checkers and will skip over any empty spaces. 
### Prerequisites
* You will need to use the .csv file provided or create your own 8*8 using red, black, or null throughout and upload as a board.csv
* Have node.js installed
------
## Running Tests
* You will need to use ```npm intall``` to download Mocha, Chai, fs, babel-present-env, babel-register, csv-parser & require.
* Once installed you can use commands ```node main.js board.js``` to run the board to see the results you've put in from the cvs file are true or false(there are four in a row in any direction)
* For Mocha Chai tests: run the comman ```npm run test```
------
## Built With
* Javascript
* Node
* Mocha/Chai