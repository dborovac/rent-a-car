const Joi = require('joi');

const userSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('Admin', 'Moderator', 'Client').required()
})

module.exports = userSchema;
