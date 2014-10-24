// Location: /config/passport.js
var passport    = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    crypto = require('crypto');

passport.serializeUser(function(user, done) {
    console.log(user,"We are here inside the passport.serializeUser");
    done(null, user.username);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use("localauth",new LocalStrategy({

        usernameField: 'user_name',
        passwordField: 'pass_word' }, function(user_name, pass_word, next) {

        sails.log(user_name,pass_word , "We are here in /config/passport.js");

        var salt = "!@#$06Rt$5^",
            pass = crypto.createHash('md5').update(pass_word + salt).digest('hex');

        User.findOne({ username: user_name }, function (err, user) {

            sails.log(user.password);
            sails.log(pass);

            if (err) { return next(err.message); }

            if (!user) {

                sails.log("Incorrect Username");

                return next(null, false, { message: 'Incorrect username.' });
            }

            if (user.password != pass) {

                sails.log("Incorrect Password");

                return next(null, false, { message: 'Incorrect password.' });
            }

            sails.log(user);

            return next(null, user);
        });

    }
));

module.exports = {
    express: {
        customMiddleware: function(app){
            console.log('express midleware for passport');
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};