// By JunWhan
var express = require('express'); // for server
var app = express(); // variable to use express
var path = require('path'); //
var swig = require('swig');// swig engine for change pages

app.engine('html', swig.renderFile); //setting engine as swig
app.set('view engine', 'html'); //view engine as html-swig
app.set('views', path.resolve('.')); //view default (+ .)
app.use("/app", express.static(__dirname + "/app"));

var server = app.listen(8081, function () { //seting server app to port

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

app.get('/', function (req, res) { //call / -> index engine
    res.render('index', {
        // user: req.user || null
    });
});

app.get('/api', function (req, res) {
    res.send({id: 3, name: "Yu", age: 18}); //sending data
});

app.post('/api/heroes', function (req, res) {
    res.send({data: [
        {"id": 11, "name": "Mr. Nice"},
        {"id": 12, "name": "Narco"},
        {"id": 13, "name": "Bombasto"},
        {"id": 14, "name": "Celeritas"},
        {"id": 15, "name": "Magneta"},
        {"id": 16, "name": "RubberMan"},
        {"id": 17, "name": "Dynama"},
        {"id": 18, "name": "Dr IQ"},
        {"id": 19, "name": "Magma"},
        {"id": 20, "name": "Tornado"}
    ]}); //sending data
});