var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.listen(4200, function(req, res){
    console.log("listening on 4200");
})