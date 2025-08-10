const router = require("express").Router()


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.user });
    console.log(req.user, "user")
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;