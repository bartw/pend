var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello world, you are seeing this from docker!')
})

app.listen(3000, function () {
  console.log('hello world from express in docker!')
})