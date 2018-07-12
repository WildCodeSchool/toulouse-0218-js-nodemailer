const express = require('express')
const bodyParser = require('body-parser')
const sendEmail = require('./sendEmail')
const app = express()

app.use(bodyParser.json())

app.post('/send-email', (req, res) => {
  const { subject, content } = req.body

  sendEmail(subject, content, (err, info) => {
    if (err) {
      console.log('ERROR', err)
      return res.status(500).json({
        error: err.message
      })
    }
    console.log('OK', info)

    res.json({
      success: true,
      info: info
    })
  })
})

app.listen(5000)
