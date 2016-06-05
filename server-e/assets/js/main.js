/* jshint node: true, strict: true */

"use strict";

var foo = require('./foo.js'),
    bar = require('./bar.js'),
    ham = require('hammerjs'),
    chr = require('chart.js'),
    deb = require('debug');

console.log('server-micro-a:', foo.helloworld());
console.log('server-micro-a:', bar.world() + ' ' + foo.hello());