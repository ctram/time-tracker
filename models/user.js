'use strict';

const sequelize = require('../db/index');
const Sequelize = require('Sequelize');

const TimeEntry = require('./time-entry');

class User extends Sequelize.Model {
    createTimeEntry(title) {
        let timeEntry;

        return TimeEntry.create({ title, startTime: new Date(), userId: this.id })
            .then(_timeEntry => {
                timeEntry = _timeEntry;
                return this.update({ runningTimeEntryId: timeEntry.id })
            })
            .then(() => {
                return timeEntry;
            })
    }
};

User.init({
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
    },
    runningTimeEntryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { sequelize, modelName: 'user', tableName: 'Users' });

User.hasMany(TimeEntry);

module.exports = User;
