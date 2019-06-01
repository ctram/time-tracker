'use strict';

const sequelize = require('../db/index');
const Sequelize = require('Sequelize');

const TimeEntry = sequelize.define('TimeEntry', {
  // attributes
  notes: {
    type: Sequelize.STRING
  },
  startTime: {
    type: Sequelize.DATE
  },
  endTime: {
    type: Sequelize.DATE
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = TimeEntry;
