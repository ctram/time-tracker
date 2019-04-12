const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/',
    passport.authenticate('local'),
    (req, res, next) => {
        // TODO: here
    });

module.exports = router;
