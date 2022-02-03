const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', authRouter);

app.listen(65533, () => {
    console.log("Authentication service listening on port 65533...");
});