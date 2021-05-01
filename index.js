const os = require('os')
const http = require('http')
const crp = require('./crypto')
const {url} = require('url')

// const port = process.env.PORT || 5000


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'conent-Type':'text/html'})
    res.end(`Hello ${os.userInfo().username}`,'utf-8')
})

server.on('connect',(req,clientSocket,head)=>{
    const {port,hostname}= new URL(`http://${req.url}`)
    const serverSocket = net.connect(port || 80, hostname,()=>{
        clientSocket.write('HTTP connection Established.')
        serverSocket.write(head)
        serverSocket.pipe(clientSocket)
        clientSocket.pipe(serverSocket)
    })
})

server.listen(port,console.log(`server runing on port : ${port}`))
module.exports = server


