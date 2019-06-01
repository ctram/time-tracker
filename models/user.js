'use strict';

const sequelize = require('../db/index');
const Sequelize = require('Sequelize');
const Model = Sequelize.Model;

class User extends Model {}
User.init(
    {
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
    },
    {
        sequelize, modelName: 'user'
    }
);

module.exports = User;
