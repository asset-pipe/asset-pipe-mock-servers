/* jshint node: true, strict: true */

"use strict";

var foo = require('./foo.js'),
    bar = require('./bar.js'),
    mom = require('moment');

module.exports = function () {
	console.log('server-micro-b:', foo.helloworld());
	console.log('server-micro-b:', bar.world() + ' ' + foo.hello());
	console.log('server-micro-b:', mom);
};
