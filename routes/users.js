const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'MissingEmailOrPassword' });
    }

    return User.findAll({ where: { email } })
        .then(users => {
            if (users.length > 1) {
                return Promise.reject({ type: 'UserAlreadyExists', status: 400 });
            }

            return User.create({ email, password });
        })
        .then(user => {
            return res.status(201).json({ user });
        })
        .catch(error => {
            next({ error });
        });
});

router.get('/authenticate', (req, res, next) => {

    if (req.user) {

        let user = {};

        ['email', 'firstName', 'lastName', 'id'].forEach(attr => {
            user[attr] = req.user.dataValues[attr];
        })

        return res.status(200).json({ user });
    }

    res.end();
});

module.exports = router;
