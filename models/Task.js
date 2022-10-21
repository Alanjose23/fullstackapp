const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {};

Task.init({
id: {
    type: Datatypes.INT,
    allowNull: false,
    primaryKey: true,
    autoincrement: true,
}, 
name: {
    type: Datatypes.String,
    allowNull: false,
    
},
description: {
    type: Datatypes.TEXT,
}, 
user_id: {
    type: Datatypes.INT,
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