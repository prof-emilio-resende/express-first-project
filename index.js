var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function (req, res, next) {
    console.log("Start");
    next();
});

app.get('/hello', function (req, res) {
    res.send("Hello world!");
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/'!\n");
});

app.get('/hello/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});

app.use(express.static('public'));

app.listen(3000);