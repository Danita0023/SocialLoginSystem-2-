const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID= "747404474249-nbcthhstg9f7f56e8hfe4h7aqgbnc09n.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET= "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";

const GITHUB_CLIENT_ID= "acda245876e8c88eff2b";
const GITHUB_CLIENT_SECRET= "72bcf61e8032dd28728dd8de0bdb845de5400325";

const FACEBOOK_APP_ID= "620631186770733";
const FACEBOOK_APP_SECRET= "b7fd78d948064b4e5a27141d5bfbb370";


passport.use
  (new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
  }
));


passport.use
  (new GithubStrategy(
  {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
  }
));

passport.use
  (new FacebookStrategy(
  {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
  }
));



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});