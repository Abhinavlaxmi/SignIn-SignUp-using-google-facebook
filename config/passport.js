const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const { signUpWithGoogle, signUpWithFacebook } = require('../controllers/user');
const dotenv = require("dotenv");
dotenv.config("../");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Replace this with your database query to retrieve user by ID
    done(null, id);
    // done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET_ID,
    callbackURL: 'http://localhost:4040/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    // Replace this with your database query to store/retrieve user
    // console.log(profile)
    signUpWithGoogle(accessToken, refreshToken, profile)
    // console.log(accessToken, "accessToken")
    // console.log(refreshToken, "refreshToken")
    done(null, profile);
    // done(null, user);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    // clientID: "259998370447518",
    // clientSecret: "78762233cdfde51a13dad15806512e55",
    clientSecret: process.env.FACEBOOK_SECRET_ID,
    callbackURL: 'http://localhost:4040/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'email'], 
    scope: ['email'],
}, (accessToken, refreshToken, profile, done) => {
    // Replace this with your database query to store/retrieve user
    signUpWithFacebook(accessToken, refreshToken, profile)
    // console.log(profile, "profile")
    // console.log(refreshToken, "refreshToken")
    // console.log(accessToken, "accessToken")
    done(null, profile);
    // done(null, user);
}));

module.exports = passport;
 