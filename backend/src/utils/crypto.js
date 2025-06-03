const aes = require('aes-js');

const key = aes.utils.utf8.toBytes(process.env.AES_KEY);

if (key.length !== 32) throw new Error('Invalid key for AES, it most be 32bytes / 256-bit');

function isHex(str) {
    return /^[0-9a-fA-F]+$/.test(str);
}

function encrypt(text) {
    if (!text) return '';
    try {
        const bytesInfo = aes.utils.utf8.toBytes(text);
        const aesCTR = new aes.ModeOfOperation.ctr(key);
        const encryptedBytes = aesCTR.encrypt(bytesInfo);
        return aes.utils.hex.fromBytes(encryptedBytes);
    } catch (error) {
        console.error('Encryption error:', error);
        throw new Error('Failed to encrypt data');
    }
}

function decrypt(encryptedHex) {
    if (!encryptedHex) return '';
    try {
        // Verifica se é uma string hexadecimal válida
        if (!isHex(encryptedHex)) {
            console.error('Invalid hex string:', encryptedHex);
            throw new Error('Invalid encrypted data format');
        }

        const encryptedBytes = aes.utils.hex.toBytes(encryptedHex);
        const aesCTR = new aes.ModeOfOperation.ctr(key);
        const decryptedBytes = aesCTR.decrypt(encryptedBytes);
        return aes.utils.utf8.fromBytes(decryptedBytes);
    } catch (error) {
        console.error('Decryption error:', error);
        throw new Error('Failed to decrypt data');
    }
}

module.exports = {
    encrypt,
    decrypt
};