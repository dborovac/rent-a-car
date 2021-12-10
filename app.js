const express = require('express');

const carRouter = require('./routes/car');
const reservationRouter = require('./routes/reservation');

const app = express();

app.use(express.json());
app.use('/api/cars', carRouter);
app.use('/api/reservations', reservationRouter);

app.listen(8080);
