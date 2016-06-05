/* jshint node: true, strict: true */

"use strict";

var foo = require('./foo.js'),
    bar = require('./bar.js'),
    _ = require('lodash'),
    $ = require('jquery');

console.log('server-micro-a:', foo.helloworld());
console.log('server-micro-a:', bar.world() + ' ' + foo.hello());