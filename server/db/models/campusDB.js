const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT, 
        defaultValue: '/Users/ethangould/FULLSTACK /FinalProject/junior-phase-final-project/public/fullstackimg.png'
    },
    address: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true 
        }
    },
    description: { 
        type: Sequelize.TEXT 
    }
})
