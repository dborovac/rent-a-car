const express = require('express');

const authRouter = require('./routes/auth');

const app = express();

app.use(express.json());
app.use('/', authRouter);

app.listen(3000, () => {
    console.log("Authentication service listening on port 3000...");
});