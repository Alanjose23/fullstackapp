const express = require('express');
const app = express();
const sequelize = require("./config/connection");
const Model = require("../fullstackapp/models");
const controllers = require("./controllers");

const PORT = 5500;

app.use('/api', controllers);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("server is running"));

});
