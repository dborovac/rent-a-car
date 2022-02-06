const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth');

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/auth', authRouter);

app.listen(65533, () => {
    console.log("Authentication service listening on port 65533...");
});