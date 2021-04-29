const http = require('http')


const agent = new http.Agent();
agent.maxSockets = 1

let sockets = []

exports.request = (hostname, path, callback) => {
    let options = {
        hostname: hostname,
        path: path,
        agent: agent,
        headers: { 'Connection': 'Keep-alive' }
    }
    let req = http.get(options, (res) => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', (chunk) => {
            body += chunk
        })
        res.on('end', () => {
            callback(null, res, body)
        })
    })
    req.on('error', (e) => {
        return callback(e)
    })
    req.on('socket',(socket)=>{
        if(sockets.indexOf(socket) === -1){
            console.log('new socket created')
            socket.push(socket)
            socket.on('close',()=>{
                console.log('socket has been closed')
            })
        }
    })
}