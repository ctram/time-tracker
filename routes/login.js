const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', function (req, res, next) {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.status(200).json({ user });
                }
            }

            return Promise.reject({ type: 'IncorrectCredentials', status: 401 });
        })
        .catch(error => {
            next({ error })
        })
});

module.exports = router;
