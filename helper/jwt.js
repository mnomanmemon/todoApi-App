const jwt = require("jsonwebtoken");
const config = require('../config/general');
const crypto = require('../helper/crypto');

function getIdFromToken(token) {
    var decoded = jwt.verify(token, config.jwtSecret);
    if (decoded) {
        var decrypted = crypto.decrypt(decoded.a);
        if (decoded.sub == decrypted) {
            return decrypted;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function verifyOwnToken(id, token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            console.log('not matched');
            return false;
        } else {
            if (decoded.sub == crypto.decrypt(decoded.a) && id == crypto.decrypt(decoded.a)) {
                console.log('matched');
            } else {
                console.log('not matched');
            }
        }
    });
}

exports.getIdFromToken = getIdFromToken;
exports.verifyOwnToken = verifyOwnToken;