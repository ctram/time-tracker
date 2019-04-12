const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const sequelize = require('./db/index');

const User = require('./models/user');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    (username, password, done) => {
        const email = username;

        User.findOne({ where: { email } })
            .then(user => {


                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (user.password !== password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user);
            })
            .catch(err => {


                return done(err);
            });
    }
));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// if request path does not match any routes, then catch as a
// 404 error and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    let error = err.error || err;

    // set locals, only providing error in development
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    // render the error page
    res.status(error.status || 500);
    res.json({ error: { message: error.message, type: error.type } });
});

module.exports = app;
