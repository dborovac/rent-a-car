const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const history = require('connect-history-api-fallback');

const carRouter = require('./routes/car');
const reservationRouter = require('./routes/reservation');
const detailsRouter = require('./routes/cardetails');
const usersRouter = require('./routes/users');

const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],
//         credentials: true
//     },
//     allowEIO3: true
// });

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/cars', carRouter);
app.use('/api/reservations', reservationRouter);
app.use('/api/cardetails', detailsRouter);
app.use('/api/users', usersRouter);

// io.on('connection', socket => {
//     socket.on('review', msg => {
//         console.log(msg);
//     })
// })

app.listen(65535, async () => {
    await sequelize.authenticate();
    console.log("Rent-a-car service listening on port 65535...");
});
