const crypto = require('crypto');
const config = require('../config/general');
const IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text) {

    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(config.cryptoKeyAlgo, Buffer.from(config.cryptoKey), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {

    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(config.cryptoKeyAlgo, Buffer.from(config.cryptoKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;