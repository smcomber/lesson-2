const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Good Job')
  res.end()
})

server.on('clientError', (err, socket) => {
  socket.end(`HTTP/1.1 400 Bad Request\r\n\r\n ${err}`)
})
server.listen(8000)
