var express = require('express');

var app = express();
var PORT = 8080;

app.get('/', function(req, res){
    res.send("hello world");
});

app.listen(PORT, () => console.log('listening on port:' + PORT))

//module.exports = app;