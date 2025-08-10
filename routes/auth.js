const express = require('express');
const passport = require('../config/passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
    // res.redirect('/'); 
    res.redirect('/dashboard');
}); 

module.exports = router; 
