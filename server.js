const index = require('./index')
const socket = require('./keep-alive')



const run = async () => {
    await socket.request('work.veihub.in','/register',(error,res,body)=>{
        index.server
    })
}

 run()

