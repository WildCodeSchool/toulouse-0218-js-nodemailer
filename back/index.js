const nodemailer = require('nodemailer')
const credentials = require('./credentials.json')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: credentials
})

const mailOptions = {
  from: credentials.user, // sender address
  to: 'benoit.hubert@wildcodeschool.fr', // list of receivers
  subject: 'Test nodemailer', // Subject line
  html: '<p>Your html here</p>'// plain text body
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log('OK', info)
  }
})

