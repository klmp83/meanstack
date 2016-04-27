var express = require('express'); // for server
var app = express(); // variable to use express
var path = require('path'); //
var swig = require('swig');// swig engine for change pages

var server = app.listen(8081, function () { //seting server app to port

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});

console.log(path);
app.engine('html', swig.renderFile); //setting engine as swig
app.set('view engine', 'html'); //view engine as html-swig
app.set('views', path.resolve('.')); //view default (+ .)


app.get('/', function (req, res) { //call / -> index engine
    res.render('index', {
        // user: req.user || null
    });
})
app.use(express.static(__dirname));

app.get('/api', function (req, res) {
    res.send({id: 3, name: "Yu", age: 18}); //sending data
})
