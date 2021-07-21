
const fs = require('fs')
const csv = require('csv-parser')


const result = []
fs.createReadStream('ct.csv')
	.pipe(csv(['City', 'State']))
	.on('data', (data) => result.push(data))
	.on('end', () => {
		result.map(i => console.log(i.state))
	})


fs.createReadStream('data.csv')
	.pipe(csv())
	.on('headers', (header) => {
		// console.log(header[0])
	})
    // All data goes here .....  // All data goes here .....	 // All data goes here .....
 // All data goes here .....
 // All data goes here .....

