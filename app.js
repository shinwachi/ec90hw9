var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send('hello ec90!')
})




app.listen(80, function () {
  console.log('example app listening on port 80!')
})

