var express = require('express');
var router = express.Router();
const { StatusCodes } = require('http-status-codes');
const models = require('../models');

router.get('/', async function (req, res) {
    const cars = await models.Car.findAll();
    res.status(StatusCodes.OK).json({data: cars})
});

module.exports = router;