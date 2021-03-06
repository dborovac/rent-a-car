const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
require('dotenv').config();

const adminRouter = require('./routes/admin');

const app = express();

app.use('/admin', adminRouter);

const staticMdl = express.static(path.join(__dirname, 'dist'));
app.use(staticMdl);
app.use(history({ index: '/index.html' }));
app.use(staticMdl);

app.listen({ port: process.env.PORT || 65534 }, () => {
    console.log("Admin service listening on port 65534...");
});
