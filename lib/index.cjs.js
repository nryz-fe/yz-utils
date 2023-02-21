'use strict';

var lodashEs = require('lodash-es');

var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, total) { return total + prev; }, 0);
};
console.log(0 /* Numbers.Zero */ + 1 /* Numbers.One */);

var testSum = lodashEs.concat([1, 2], 3, 4, [5]);

exports.sum = sum;
exports.testSum = testSum;
