var hrzChecker = require('../main.js');
var vertChecker = require('../main.js');
var diaDown = require('../main.js');
var diagUp = require('../main.js');
var expect = require('chai').expect;

describe('Checkers test', () => {
   it('should check if 2d array has four in a row checking horzontally', () => {
        expect(hrzChecker([['red',   'red',   'red', 'red']])).to.be.true;
    });
    it('should check if 2d array has four in a row checking vertically', () => {
        expect(vertChecker([['black', 'black', 'black', 'black']])).to.be.true;
    });
    it('should check if 2d array has four in a row checking diagonally down', () => {
        expect(diaDown([['black', 'black', 'black', 'black']])).to.be.true;
    });
    it('should check if 2d array has four in a row checking diagonally up', () => {
        expect(diagUp([['red',   'red',   'red', 'red']])).to.be.true;
    });
    it('should return null if there is an empty space', () => {
        expect(null).to.be.a('null');
    })
});

