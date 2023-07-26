const db = require('../config/connection');

const User = db.sequelize.define('name database',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
//password & email
    })
User.sync();
module.exports = User;