const os = require('os')
const http = require('http')
const url = require('path')


// const port = process.env.PORT || 5000

const server = () => {
    http.createServer(onRequest_a).listen(9001)
    http.createServer(onRequest_b).listen(9002)

    function onRequest_a(req, res) {
        
        if(req.method !== 'GET'){
            res.write(`{'error':"${http.STATUS_CODES[405]}"}`)
        }else{
            if(req.url === '/'){
                res.write(`<h1>Hello World from PORT:9001</h1>`)
                // for close server write
                /* res.send() */    /* but this will crash server IDK why ... so don't write it.*/
            }
            if(req.url === '/path'){
                res.write(`<h1>Hello World from path url PORT:9001</h1>`)
            }
        }
        res.write(`{'error':"${http.STATUS_CODES[405]}"}`)
    }


    function onRequest_b(req, res) {
        if(req.method !== 'GET'){
            res.write(`{'error':"${http.STATUS_CODES[405]}"}`)
        }else{
            if(req.url === '/'){
                res.write(`<h1>Hello World from PORT:9002</h1>`)
                // for close server write
                /* res.send() */    /* but this will crash server IDK why ... so don't write it.*/
            }
            if(req.url === '/path'){
                res.write(`<h1>Hello World from path url PORT:9002</h1>`)
            }
        }
        res.write(`{'error':"${http.STATUS_CODES[405]}"}`)
    }
}

module.exports = server


