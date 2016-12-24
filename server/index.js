var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://pender:p3nd@db:5432/pend');
var app = express();

app.get('/', function (req, res) {
    db.query('select * from foo').then(function (data) {
        res.send('Data:' + JSON.stringify(data));
    }).catch(function (error) {
        res.send('Error:' + error);
    });
});
app.post('/', function (req, res) {
    db.query('INSERT INTO foo (bar, baz) VALUES (\'such awesome\', 666);').then(function (data) {
        res.send('Data:' + JSON.stringify(data));
    }).catch(function (error) {
        res.send('Error:' + error);
    });
})

app.listen(3000, function () {
    console.log('hello world from express in docker!');
});