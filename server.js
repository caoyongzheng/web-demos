const express = require('express')

const app = new express()

app.use(express.static(__dirname))

app.listen(8000, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.log('Page is running at: http://localhost:8000')
  }
})
