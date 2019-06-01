'use strict';

const sequelize = require('../db/index');
const Sequelize = require('Sequelize');
const Model = Sequelize.Model;

const User = require('./user');

class TimeEntry extends Model { }

TimeEntry.init(
  {
    // attributes
    notes: {
      type: Sequelize.STRING
    },
    startTime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endTime: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize, modelName: 'time-entry'
  }
);

TimeEntry.hasOne(User);

module.exports = TimeEntry;
