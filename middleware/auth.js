const jwt = require('jsonwebtoken');
require('dotenv').config();

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ msg: 'Not authorized.' });
    }

    jwt.verify(token, "mys3cretjs0nw3bt0ken", (err, user) => {
        if (err) return res.status(403).json({ msg: err });
        req.user = user;
        next();
    });
}

function isAdmin(req, res, next) {
    if (req.user.role !== 'Admin') {
        return res.status(401).json({ msg: 'Not authorized.' });
    }
    next();
}

function isAdminOrLoggedIn(req, res, next) {
    if (!(req.user.role === 'Admin' || req.user.userId === req.body.userId)) {
        return res.status(401).json({ msg: 'Not authorized.' });
    }
    next();
}

function isModOrAdmin(req, res, next) {
    if (!(req.user.role === 'Admin' || req.user.role === 'Moderator')) {
        return res.status(401).json({ msg: 'Not authorized.' });
    }
    next();
}

function isModOrAdminOrLoggedIn(req, res, next) {
    console.log(req.body);
    console.log(req.user);
    if (!(req.user.role === 'Admin' || req.user.role === 'Moderator' || req.user.userId === req.body.userId)) {
        return res.status(401).json({ msg: 'Not authorized.' });
    }
    next();
}

module.exports = { authToken, isAdmin, isAdminOrLoggedIn, isModOrAdmin, isModOrAdminOrLoggedIn };
