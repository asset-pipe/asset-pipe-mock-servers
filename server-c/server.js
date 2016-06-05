"use strict";

const express = require('express');
const serveStatic = require('serve-static');
const mid = require('../../asset-pipe-mid');
const app = express();

app.use('/js', mid.js('./assets/js/main.js'));
app.use('/pub', serveStatic('./public'));

app.listen(process.argv[2], () => {
	console.log('server running at port:', process.argv[2]);
});
