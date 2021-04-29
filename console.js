exports.Console = () => {
    console.error(new Error('whoops, something happend'))

    console.count()
    console.clear()
    console.log('server is starting....')
    setTimeout(() => {
        console.clear()
        console.table([
            { 'Hostname': 'http://localhost', 'Port': 5000 }
        ])
        console.log('\nhttps://usename-find.herokuapp.com/')
    }, 2000)

    console.time('10-elements')

    for (let i = 0; i < 5; i++) {
        var output = '';
        for (let j = 0; j < 5; j++) output += '';
        for (let k = 0; k <= i; k++) output += '*';
        console.log(output);
    }

    console.timeEnd()
}