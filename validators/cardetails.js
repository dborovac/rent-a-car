const Joi = require('joi');

const carSchema = Joi.object().keys({
    doors: Joi.number().integer().min(1).max(10).required(),
    fuel: Joi.string().max(20).required(),
    transmission: Joi.string().max(20).required()
})

module.exports = carSchema;