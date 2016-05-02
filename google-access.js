var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var google = require('googleapis');
var plus = google.plus('v1');
var OAuth2 = google.auth.OAuth2;

var config = {
    clientID: "635512016728-p93v1e5blliov1immoplr21h24qagvq4.apps.googleusercontent.com",
    clientSecret: "92YXdLlp2c3yAbpfkx08x-9T",
    access_token_key: "<From User>",
    access_token_secret: "<From User>",
    callbackURL: "http://localhost:8081/login/google/callback"
};



var oauth2Client = new OAuth2(config.clientID, config.clientSecret, config.callbackURL);

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
passport.use(new GoogleStrategy({
        clientID:     config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: config.callbackURL,
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
        //console.log("Google plus access token : " + accessToken);
        //console.log("Google plus refreshToken : " + refreshToken);
        request.session.oauth_access_token_google = accessToken;
        //console.log(profile);
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));

var getUserTimeLine = function (req, res) {

    // Retrieve tokens via token exchange explained above or set them:
    oauth2Client.setCredentials({
        access_token: req.session.oauth_access_token_google/*,
         refresh_token: 'REFRESH TOKEN HERE'*/
    });

    //plus.people.get({ userId: 'me', auth: oauth2Client}, callback);
    //plus.people.list({ userId: 'me', collection: "visible", auth: oauth2Client}, callback);
    plus.activities.list({userId: "112532513847101262612", collection: "public", auth: oauth2Client}, callback);
    //plus.comments.list({activityId: '112532513847101262612', auth: oauth2Client}, callback);

    function callback (err, response) {
        // handle err and response
        console.log("err : " + err);
        console.log(response);
        res.send({data: response.items});
    }
};

exports.getUserTimeLine = getUserTimeLine;
exports.passport = passport;