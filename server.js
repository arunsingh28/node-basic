const index = require('./index')
const socket = require('./keep-alive')
const Console = require('./console')
const crpto = require('./crypto')



const run = async () => {


    /*  For Keep-Connection Alive */

    // socket.request('work.veihub.in','/register',(error,res,body)=>{
    //     index.server
    // })

    await Console.Console()
    await console.log(crpto.crp())

}

 run()

