'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeEntry = sequelize.define('TimeEntry', {
    notes: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  TimeEntry.associate = function(models) {
    // associations can be defined here
  };
  return TimeEntry;
};