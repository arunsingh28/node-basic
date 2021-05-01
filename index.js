const os = require('os')
const http = require('http')
const crp = require('./crypto')
const port = process.env.PORT || 5000


const exports.server = http.createServer((req,res)=>{
    res.writeHead(200,{'conent-Type':'text/html'})
    res.end(`Hello ${os.userInfo().username}`,'utf-8')

    

})


server.listen(port,console.log(`server runing on port : ${port}`))

