const jwtSecret = require('../../common/config/env.config.js').jwt_secret,
    jwt = require('jsonwebtoken');
const crypto = require('crypto');
const uuid = require('uuid');

exports.login = (req, res) => {
    try {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(req.body.userId + jwtSecret).digest("base64");
        let b = Buffer.from(hash);
        let refresh_token = salt + '.' + b.toString('base64');
        let token = jwt.sign({
            userId: req.body.userId,
            email: req.body.email,
            permissionLevel: req.body.permissionLevel,
            provider: req.body.provider,
            name: req.body.name,
        }, jwtSecret, {expiresIn: 36000});
        res.status(201).send({accessToken: token, refreshToken: refresh_token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};

exports.refresh_token = (req, res) => {
    try {
        let token = jwt.sign({
            userId: req.jwt.userId,
            email: req.jwt.email,
            permissionLevel: req.jwt.permissionLevel,
            provider: req.jwt.provider,
            name: req.jwt.name,
        }, jwtSecret, {expiresIn: 36000});
        res.status(201).send({id: token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};
