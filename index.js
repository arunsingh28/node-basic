const os = require('os')
const http = require('http')
const net = require('net')
const crp = require('./crypto')
const { url } = require('url')

// const port = process.env.PORT || 5000


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'conent-Type': 'text/html' })
    res.end(`Hello ${os.userInfo().username}`, 'utf-8')
})

server.on('connect', (req, clientSocket, head) => {
    const { port, hostname } = new URL(`http://${req.url}`)
    const serverSocket = net.connect(port || 80, hostname, () => {
        clientSocket.write('HTTP connection Established.')
        serverSocket.write(head)
        serverSocket.pipe(clientSocket)
        clientSocket.pipe(serverSocket)
    })
})

server.listen(1337,()=>{
    const req = http.request({port:1337,host:'127.0.0.1',method:'connect',path:'path:80'})
    req.end()
})
module.exports = server


