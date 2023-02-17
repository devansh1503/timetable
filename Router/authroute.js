const express = require('express')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const app = express()
const AuthRoute = express.Router()
var details = ""
const cookieSession = require('cookie-session')
const { remember, setRem } = require('../Controllers/Remember')

const config = {
    CLIENT_ID: '209254839977-va1o2e2le8hm8vsvrjifa56lnvuu4qet.apps.googleusercontent.com',
    CLIENT_SECRET: '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',
}
const AUTH_OPTIONS = {           
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
    details = profile
    done(null, profile);
}
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


AuthRoute.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }))



AuthRoute.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: 'http://localhost:3000/',
        session: true
    }),
    (req, res) => {
        console.log('connected')
    })

AuthRoute.get('/auth/logout', (req, res) => {
    req.logout()
    return res.redirect('http://localhost:3000/')
})

AuthRoute.get('/profileDetails', (req, res)=>{
    const det = req.user
    res.json(details)
})


module.exports = {
    AuthRoute,
}