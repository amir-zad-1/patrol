const express = require('express')
const router = express.Router()
const Authentication = require('../auth')

router.post('/auth', function (req, res) {
  const body = req.body
  if (body && body.email && body.password)
    Authentication.authenticate(body.email, body.password, function (err, authResult) {
      if (err) return res.json({ok: false})
      res.json(authResult)
    })
  else
    res.json({ok: false})
})

module.exports = router