var transporter=require('./transporter');
var nodemailer = require('nodemailer');

var mailOptions = {
  from: 'amirthaganesanr@hotmail.com',
  to: 'amirthaganesanr@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hi Ravindra!'
};

transporter.myTransporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
