const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', function (req, res, next) {
    const { email, password } = req.body;

    User.create({ email, password })
        .then(user => {
            res.status(201).json({ user });
        })
        .catch(err => {
            next({ message: err });
        });
});

module.exports = router;
