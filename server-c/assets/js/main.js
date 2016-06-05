/* jshint node: true, strict: true */

"use strict";

var foo = require('./foo.js'),
    bar = require('./bar.js'),
    d3 = require('d3'),
    bb = require('bluebird');

console.log('server-micro-a:', foo.helloworld());
console.log('server-micro-a:', bar.world() + ' ' + foo.hello());
console.log(d3);
console.log(bb);