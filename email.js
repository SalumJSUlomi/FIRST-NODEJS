var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'salumjsulomi@hotmail.com',
    pass: 'jabir@son1999'
  }
});
var mailOptions = {
  from: 'salumjsulomi@hotmail.com',
  to: 'abuunuaym2013@gmail.com',
  subject: 'Sending Email Using Node.js',
  text: 'That was easy'
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err);
  console.log(`Email Sent + ${info.response}`);
})