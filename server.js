const express = require('express')
const app = new express()
const os = require('os')

app.use(express.static(__dirname))

app.listen(8000, function(err) {
  const network = os.networkInterfaces()
  const en0 = network.en0
  if (err) {
    console.error(err)
  } else {
    console.log(`Page is running at: http://${en0[1].address}:8000/src`)
  }
})
