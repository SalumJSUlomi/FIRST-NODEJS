var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abuunuaym2013@gmail.com',
    pass: 'Jabir@son1999'
  }
});
var mailOptions = {
  from: 'abuunuaym2013@gmail.com',
  to: 'salumjsulomi@hotmail.com',
  subject: 'Sending Email Using Node.js',
  text: 'That was easy'
};
transporter.sendMail(mailOptions, (err, info)=> {
  if(err) console.log(err);
  console.log(`Email Sent + ${info.response}`);
})