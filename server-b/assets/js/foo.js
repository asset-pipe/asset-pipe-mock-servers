/* jshint node: true, strict: true */

"use strict";

var bar = require('./bar.js');
var _ = require('lodash');


module.exports.helloworld = function () {
    return 'hello from server-micro-a';
};


module.exports.hello = function () {
    return 'hello';
};
