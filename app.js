const express = require('express');
const { sequelize, Car } = require('./models');

const carRouter = require('./routes/car');

const app = express();

app.use(express.json());
app.use('/api', carRouter);

app.listen(8080);
