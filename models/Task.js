const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {};

Task.init({
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoincrement: true,
}, 
name: {
    type: DataTypes.STRING,
    allowNull: false,
    
},
description: {
    type: DataTypes.TEXT,
}, 
user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: "user",
        key: "id",
    },
}
} , {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "task",
});

module.exports = Task;