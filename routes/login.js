const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/', passport.authenticate('local'), (req, res, next) => {
    res.status(201).json({ user: req.user });
});

module.exports = router;