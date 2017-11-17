const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://sree:9963447141@ds155674.mlab.com:55674/angular2', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'angular2' // Database name
}
