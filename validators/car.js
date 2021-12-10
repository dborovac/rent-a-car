const Joi = require('joi');

const carSchema = Joi.object().keys({
    car: {
        manufacturer: Joi.string().min(3).max(30).required(),
        model: Joi.string().min(3).max(50).required(),
        year: Joi.number().integer().required()
    }
})

module.exports = carSchema;