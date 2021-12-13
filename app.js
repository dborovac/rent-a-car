const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');

const carRouter = require('./routes/car');
const reservationRouter = require('./routes/reservation');

const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:65534',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/cars', carRouter);
app.use('/api/reservations', reservationRouter);

app.listen(65535, async () => {
    await sequelize.authenticate();
    console.log("Rent-a-car service listening on port 65535...");
});
