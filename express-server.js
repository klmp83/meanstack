// By JunWhan
var express = require('express'); // for server
var app = express(); // variable to use express
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var path = require('path');
var swig = require('swig');// swig engine for change pages

var twitter = require('./twitter-access');
var google = require('./google-access');

var https = require('https');
var fs = require('fs');

// openssl genrsa -out hacksparrow-key.pem 1024
// openssl req -new -key hacksparrow-key.pem -out certrequest.csr
// openssl x509 -req -in certrequest.csr -signkey hacksparrow-key.pem -out hacksparrow-cert.pem

var hskey = fs.readFileSync('app/cert/hacksparrow-key.pem');
var hscert = fs.readFileSync('app/cert/hacksparrow-cert.pem');

var options = {
    key: hskey,
    cert: hscert
};

app.use("/app", express.static(__dirname + "/app"));
app.use(session({
    name: 'server-session-cookie-id',
    secret: 'ASDCxcvLAxcvSJKFL389379&*(*&^%$)ASASasdkbvKLJDF334',
    saveUninitialized: true,
    resave: true,
    store: new FileStore({path: "./app/server/sessions/", useAsync: true})
}));
app.use(google.passport.initialize());
app.use(google.passport.session());

app.engine('html', swig.renderFile); //setting engine as swig
app.set('view engine', 'html'); //view engine as html-swig
app.set('views', path.resolve('./')); //view default (+ .)

https.createServer(options, app).listen(8000);
var server = app.listen(8081, function () { //seting server app to port

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

// 1. index page
app.get('/', function (req, res) { //call / -> index engine
    res.render('index', {
        // user: req.user || null
    });
});

// 2. basic call from client
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

// 3. sns authentication call
// 3.1. Twitter oauth 1.0 authentication
app.get('/login/twitter', function(req, res){
    twitter.authTwitter(req,res);
});
app.get('/login/twitter/access-token', function(req, res){
    var oauth_token = req.query.oauth_token;
    var oauth_verifier = req.query.oauth_verifier;
    console.log(oauth_token + "###########" + oauth_verifier);
    twitter.getAccessTokenTwitter(req, res);
   // twitter.authTwitter(req,res);
});

app.post('/api/sns/timeLine/twitter', function(req, res){
    twitter.getUserTimeLine(req, res);
});

// 3.2. Google Plus oauth 2.0 authentication using passport
app.get('/login/google', google.passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read']
}));
app.get('/login/google/callback',
    google.passport.authenticate('google', {
        successRedirect: '/#/sns-login-callback/google',
        failureRedirect: '/#/fail'
    })
);

app.post('/api/sns/timeLine/google', function(req, res){
    google.getUserTimeLine(req, res);
});
