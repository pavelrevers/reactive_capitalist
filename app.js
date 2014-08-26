var express = require('express');
var React = require('react');
var Page = require('./build/views/components/page/page.js');

var app = express();

app.use('/static', express.static(__dirname + '/build'));

app.get('/', function (req, res) {
    res.send('<!doctype html>' + React.renderComponentToString(Page()));
});

app.listen(3000, function () {
    console.log('Server on localhost:3000');
})