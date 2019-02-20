// Load modules.
var OAuthStrategy = require('passport-google-oauth1');

// TEMPORARILY remplaced by fork (https://github.com/sportheroes/passport-google-oauth2/commits/master) until PR linked below gets merged and published
// REMOVE the private fork when the PR above (https://github.com/jaredhanson/passport-google-oauth2/pull/51) gets merged and published
// var OAuth2Strategy = require('passport-google-oauth20');
var OAuth2Strategy = require('@sportheroes/passport-google-oauth2');

// Exports.
exports.Strategy =
exports.OAuthStrategy = OAuthStrategy;
exports.OAuth2Strategy = OAuth2Strategy;
