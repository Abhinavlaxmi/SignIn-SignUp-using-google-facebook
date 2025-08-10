const express = require('express');
const passport = require('./config/passport');
const session = require('express-session');
// const mysql = require('mysql2/promise');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// const pool = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/', userRoutes)

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/dashboard', isAuthenticated, (req, res) => {
//     res.render('dashboard', { user: req.user });
// });

// app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });

// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// }

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
