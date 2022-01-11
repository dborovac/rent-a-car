const express = require('express');
const router = express.Router();
const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();
const cors = require('cors');
const validator = require('../middleware/validator');

const corsOptions = {
    origin: 'http://127.0.0.1:65535',
    optionsSuccessStatus: 200
};

router.use(express.json());
router.use(cors(corsOptions));

router.post('/register', validator('user'), (req, res) => {
    models.User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role
    }).then(user => {
        const usr = {
            userId: user.id,
            email: user.email,
            role: user.role
        }
        const token = jwt.sign(usr, "mys3cretjs0nw3bt0ken");
        res.status(StatusCodes.CREATED).json({token: token});
    }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.post('/login', (req, res) => {
    models.User.findOne({where: {email: req.body.email}})
        .then(user => {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const usr = {
                    userId: user.id,
                    email: user.email,
                    role: user.role
                }
                const token = jwt.sign(usr, "mys3cretjs0nw3bt0ken");
                res.status(StatusCodes.OK).json({token: token});
            } else {
                res.status(StatusCodes.NOT_FOUND).json({msg: "Invalid credentials."});
            }
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

module.exports = router;