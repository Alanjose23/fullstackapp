const { Model,Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
id: {
    type: Datatypes.INT,
    allowNull: false,
    primaryKey: true,
    autoincrement: true,
}, 
username: {
    type: Datatypes.String,
    unique: true,
    allowNull: false,
    
},
email: {
    type: Datatypes.String,
    allowNull: false,
    valdiate: {
        isEmail: true,
    },
}, 
password: {
    type: Datatypes.String,
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