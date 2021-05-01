exports.Console = (crpto) => {

    // creating new type of error
    console.error(new Error('whoops, something happend'))

    console.clear()
    console.log('server is starting....')
    setTimeout(() => {
        console.clear()
        console.table([
            { 'Hostname': 'http://localhost', 'Port': 5000 }
        ])
        console.log('\nhttps://usename-find.herokuapp.com/')
    }, 10000)

    
}