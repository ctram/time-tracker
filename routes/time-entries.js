const express = require('express');
const router = express.Router();
const User = require('../models/user');
const TimeEntry = require('../models/time-entry');

router.get('/running', (req, res, next) => {
    console.log('called from /running')
});

router.post('/', (req, res, next) => {
    const {title, userId } = req.body;

    return User.findAll({ where: { id: userId } })
        .then(res => {
            user = res[0];

            if (!user) {
                throw('User not found.')
            }


            if (user.dataValues.runningTimeEntryId) {
                return res.status(400).json({ type: 'UserAlreadyHasRunningTimeEntry' });
            }

            return user.createTimeEntry(title);
        })
        .then(timeEntry => {

            return res.status(201).json({ timeEntry })
        })
        .catch(error => {

            next({ error });
        });
});

module.exports = router;
