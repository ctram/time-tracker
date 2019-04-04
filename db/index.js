const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('time_tracker_development', '', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
