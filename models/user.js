'use strict';

const sequelize = require('../db/index');
const Sequelize = require('Sequelize');

const TimeEntry = require('./time-entry');

const User = sequelize.define('User', {
    // attributes
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.hasMany(TimeEntry);

module.exports = User;
