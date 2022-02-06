const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const validator = require('../middleware/validator');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

router.post('/', [auth.authToken, auth.isAdmin, validator('user')], async function (req, res) {
    models.User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role
    }).then(user => res.status(StatusCodes.CREATED).json(user))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.get('/', async function (req, res) {
    const users = await models.User.findAll();
    res.status(StatusCodes.OK).json({data: users});
});

router.get('/:userId', async function (req, res) {
    await models.User.findByPk(req.params.userId)
        .then(user => {
            if (!user) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'User not found.' });
            } else res.status(StatusCodes.OK).json(user);
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.put('/:userId', [auth.authToken, auth.isAdminOrLoggedIn, validator('user')], async function (req, res) {
    await models.User.findByPk(req.params.userId)
        .then(user => {
            if (!user) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'User not found.' });
            } else {
                user.update({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    role: req.body.role
                }).then(user => res.status(StatusCodes.OK).json(user))
                .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
            }
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.delete('/:userId', [auth.authToken, auth.isAdmin], async function (req, res) {
    await models.User.destroy({
        where: {
            id: req.params.userId
        }
    }).then(user => {
        if (!user) {
            res.status(StatusCodes.NOT_FOUND).send({ message: 'User not found.' });
        } else res.status(StatusCodes.NO_CONTENT).end();
    }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

module.exports = router;
