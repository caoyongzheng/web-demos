const express = require('express')
const path = require('path')
const os = require('os')
const chokidar = require('chokidar')

const app = new express()

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

// const watcher = chokidar.watch('./src', {
//   ignored: /(^|[\/\\])\../,
//   persistent: true
// })
//
// watcher.on('all', function(event, path) {
//   console.log(event, path);
// })
