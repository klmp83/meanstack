var Twitter = require('twitter');
var https = require('https');
var OAuth= require('oauth').OAuth;

// twitter app should be made - https://apps.twitter.com/
// App-only authentication	https://api.twitter.com/oauth2/token
// Request token URL	    https://api.twitter.com/oauth/request_token
// Authorize URL	        https://api.twitter.com/oauth/authorize
// Access token URL	        https://api.twitter.com/oauth/access_token
var config = {
    consumer_key: "i7olunIh6nPPRnQj8SNjWgBcz",
    consumer_secret: "b7kzTb5vAFPFgqCqPqwRhynaoXsBte05L4SwI9mNRVcr4nYRUX",
    access_token_key: "<From User>",
    access_token_secret: "<From User>"
};

var oa = new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    config.consumer_key,
    config.consumer_secret,
    "1.0",
    "http://localhost:8081/login/twitter/access-token",
    "HMAC-SHA1"
);

// Step 1. Get oauth verifier
var authTwitter = function (req, res) {

    oa.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
        if (error) {
            console.log(error);
            res.send("yeah no. didn't work. - getOAuthRequestToken")
        }
        else {
            console.log(results);
            console.log(req.session);
            /*req.session.oauth = {};
            req.session.oauth.token = oauth_token;
            console.log('oauth.token: ' + req.session.oauth.token);
            req.session.oauth.token_secret = oauth_token_secret;
            console.log('oauth.token_secret: ' + req.session.oauth.token_secret);*/
            res.redirect('https://twitter.com/oauth/authenticate?oauth_token='+oauth_token)
        }
    });
};

// Step 2. get oauth access token and oauth access token secret
var getAccessTokenTwitter = function (req, res) {
    oa.getOAuthAccessToken(req.query.oauth_token, null, req.query.oauth_verifier,
            function(error, oauth_access_token, oauth_access_token_secret, results){
        if (error) {
            console.log(error);
            res.send("yeah no. didn't work. - getOAuthAccessToken")
        }
        else {
            console.log(results);
            console.log(req.session);
            console.log(oauth_access_token);
            console.log(oauth_access_token_secret, oauth_access_token_secret);

            req.session.oauth_access_token = oauth_access_token;
            req.session.oauth_access_token_secret = oauth_access_token_secret;

            res.redirect('http://localhost:8081/#/sns-login-callback/twitter');
            //res.redirect('https://twitter.com/oauth/authenticate?oauth_access_token='+oauth_access_token)
        }
    });
};

// Step 3. After making sure user authentication, get user time line from tweeter.
var getUserTimeLine = function (req, res) {
    console.log(req.session.oauth_access_token);
    var client = new Twitter({
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token_key: req.session.oauth_access_token,
        access_token_secret: req.session.oauth_access_token_secret
    });
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error) {
            res.send({data: tweets});
            console.log("tweets count : " + tweets.length);
        } else {
            console.log(error);
        }
    });
    console.log("after client.get()");
}

exports.authTwitter = authTwitter;
exports.getAccessTokenTwitter = getAccessTokenTwitter;
exports.getUserTimeLine = getUserTimeLine;