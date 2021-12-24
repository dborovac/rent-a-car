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
    res.sendFile('cars.html', {root: './static/cars'});
});

router.get('/cardetails', (req, res) => {
    res.sendFile('cardetails.html', {root: './static/cardetails'});
});

router.get('/reservations', (req, res) => {
    res.sendFile('reservations.html', {root: './static/reservations'});
});

router.get('/users', (req, res) => {
    res.sendFile('users.html', {root: './static/users'});
});

module.exports = router;