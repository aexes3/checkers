var main = require('../main.js');
var expect = require('chai').expect;

describe('Checkers test', () => {
    it('should check if 2d array has four in a row checking horzontally', () => {
        expect(main.hrzChecker([['red', 'red', 'red', 'red']])).to.be.true;
    });
    it('should check if 2d array has four in a row checking vertically', () => {
        expect(main.vertChecker(
            [   
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null]
            ])).to.be.true;
    });
    it('should check if 2d array has four in a row checking diagonally down', () => {
        expect(main.diagDown(
            [   
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', 'red', null, 'black', 'black', null, null],
                ['red', 'red', null, 'red', 'black', 'black', 'black', null],
                ['red', 'red', null, null, 'black', 'black', null, 'black']
            ])).to.be.true;
    });
    it('should check if 2d array has four in a row checking diagonally up', () => {
        expect(main.diagUp(
            [   
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null],
                ['red', 'red', null, 'black', 'black', 'black', null, null],
                ['red', 'red', 'black', null, 'black', 'black', null, null],
                ['red', 'red', null, null, 'black', 'black', null, null]
            ])).to.be.true;
    });
    it('should return null if there is an empty space', () => {
        expect(main.hrzChecker([['red','red','null','null']])).to.be.true;
    });
});

