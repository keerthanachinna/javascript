const crypto = require('crypto');
// require('crypto').randomBytes(64).toString('hex')
const randomString = crypto.randomBytes(64).toString('hex');
console.log(randomString);
