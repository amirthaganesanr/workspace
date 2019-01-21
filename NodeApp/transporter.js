var nodemailer = require('nodemailer');
exports.myTransporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'amirthaganesanr@hotmail.com',
    pass: 'ganesh567'
  }
});