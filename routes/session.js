const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/', passport.authenticate('local'), (req, res, next) => {
    let user = {};

    ['email', 'firstName', 'lastName', 'id'].forEach(attr => {
        user[attr] = req.user.dataValues[attr];
    })

    res.status(200).json({ user });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
