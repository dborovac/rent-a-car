const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const path = require('path');

router.use(express.static('static'));
router.use(express.json());

router.get('/', (req, res) => {
    res.sendFile('index.html', {root: './static'});
});

router.get('/cars', (req, res) => {
    res.sendFile('cars.html', {root: './static'});
});

module.exports = router;