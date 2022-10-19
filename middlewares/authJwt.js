const jwt = require('jsonwebtoken');
const tokenSecret = 'iP8H&H0!ci2z';

const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(403).send({message: 'No token provided!'});
    }

    jwt.verify(token, tokenSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }

        next();
    });
}

const authJwt = {
    verifyToken
};

module.exports = authJwt;
