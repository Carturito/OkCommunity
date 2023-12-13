const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rut: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    paternal_lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    maternal_lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(13),
        allowNull: false
    },
    level: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    mobile_number: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
}, {
    tableName: 'Clients',
    timestamps: false // no tiene campos createdAt y updatedAt.
});

module.exports = Client;