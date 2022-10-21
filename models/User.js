const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoincrement: true,
}, 
username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    valdiate: {
        isEmail: true,
    },
}, 
password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [8],
    },
}
} , {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "user",
});

module.exports = User;