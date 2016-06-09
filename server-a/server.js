"use strict";

const express = require('express');
const serveStatic = require('serve-static');
const Mid = require('../../asset-pipe-mid');
const app = express();
const mid = new Mid();

mid.upload((error) => {
    console.log(error);
}, (obj) => {
    console.log(obj);
}, './assets/js/main.js');


setTimeout(() => {

    mid.build((error) => {
        console.log(error);
    }, (obj) => {
        console.log(obj);
    }, [
        '597933117d403ca73a0b5b8e92e57a619fb95ee6.json',
        'd627ee31b6575fd398f34e994acd8872817071bd.json'
    ]);

}, 5000);

app.use('/', mid.router);
app.use('/pub', serveStatic('./public'));

app.listen(process.argv[2], () => {
    console.log('server running at port:', process.argv[2]);
});
