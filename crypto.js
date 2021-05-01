const crypto = require('crypto')
const http = require('http')

exports.crp = () => {

    
    // let key = crypto.createCipher('aes-128-cbc', 'password')
    // let str = key.update('abc', 'utf8', 'hex')
    // console.log(str+=key.final('hex'))

    const hash = crypto.createHash('sha256')


    hash.update('one')
    console.log('Update data one : '+hash.copy().digest('hex'))

    hash.update('one')
    console.log('Update data one : '+hash.copy().digest('hex'))

    hash.update('two')
    console.log('Update data two : '+hash.copy().digest('hex'))

    hash.on('readable',()=>{
        const data = hash.read()
        if(data){
            console.log('Hash intial data : '+data.toString('hex'))
        }
    })

    hash.end()


    
}
