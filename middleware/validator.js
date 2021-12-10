const createHttpError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const Validators = require('../validators');

module.exports = function(validator) {
    if (!Validators.hasOwnProperty(validator)) {
        throw new Error(`'${validator}' validator does not exist.`);
    }
    return async function(req, res, next) {
        try {
            const validated = await Validators[validator].validateAsync(req.body);
            req.body = validated;
            next();
        } catch (err) {
            if (err.isJoi) {
                res.status(StatusCodes.BAD_REQUEST).json(err);
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
            }
        }
    }
}