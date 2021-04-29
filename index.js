const os = require('os')
const http = require('http')
const port = process.env.PORT || 5000

http.createServer((req,res)=>{
    res.writeHead(200,{'conent-Type':'text/html'})
    res.end(`Hello ${os.userInfo().username}`,'utf-8')
}).listen(port,console.log(`server runing on port : ${port}`))
