const aes = require('aes-js');

const key = aes.utils.utf8.toBytes(process.env.AES_KEY);

if (key.length !== 32) throw new Error('Invalid key for AES, it most be 32bytes / 256-bit ');

function encrypt (text){
    const bytesInfo = aes.utils.utf8.toBytes(text);
    const aesCTR = new aes.ModeOfOperation.ctr(key);
    const encryptedBytes = aesCTR.encrypt(bytesInfo);
    return aes.utils.hex.fromBytes(encryptedBytes);
     
}
function decrypt (encryptedHex){
    const encryptedBytes = aes.utils.hex.toBytes(encryptedHex);
    const aesCTR = new aes.ModeOfOperation.ctr(key);
    const decryptedBytes = aesCTR.decrypt(encryptedBytes);
    const text = aes.utils.utf8.fromBytes(decryptedBytes);
    return text;

    
}

 module.exports = {
    encrypt,
    decrypt

 }