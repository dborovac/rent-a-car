const express = require('express');

const adminRouter = require('./routes/admin');

const app = express();

app.use('/admin', adminRouter);

app.listen(65534, () => {
    console.log("Admin service listening on port 65534...");
});