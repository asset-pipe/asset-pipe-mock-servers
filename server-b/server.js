"use strict";

const express = require('express');
const serveStatic = require('serve-static');
const Mid = require('../../asset-pipe-mid');
const app = express();
const mid = new Mid('./assets/js/main.js');

mid.upload((error) => {
    console.log(error);
}, (obj) => {
    console.log(obj);
},'./assets/js/main.js');


app.use('/', mid.router);
app.use('/pub', serveStatic('./public'));

app.listen(process.argv[2], () => {
    console.log('server running at port:', process.argv[2]);
});
