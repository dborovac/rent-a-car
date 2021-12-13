const express = require('express');

const authRouter = require('./routes/auth');

const app = express();

app.use('/', authRouter);

app.listen(65533, () => {
    console.log("Authentication service listening on port 65533...");
});