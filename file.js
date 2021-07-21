const fs = require('fs')
const csv = require('csv-parser')


const result = []


// fs.createReadStream('ct.csv')
// 	.pipe(csv(['City','State']))
// 	.on('data', (data) => result.push(data))
// 	.on('end',()=>{
// 		result.map(i => console.log(i.state))
// 	})


// fs.createReadStream('data.csv')
// 	.pipe(csv())
// 	.on('headers',(header)=>{
// 		console.log(header[0])
// 	})


// *********** Create File ************ 

// fs.createWriteStream('./output.js').write(
// 	`
// 	fs.createReadStream('ct.csv')
// 		.pipe(csv(['City','State']))
// 		.on('data', (data) => result.push(data))
// 		.on('end',()=>{
// 			result.map(i => console.log(i.state))
// 		})


// 	fs.createReadStream('data.csv')
// 		.pipe(csv())
// 		.on('headers',(header)=>{
// 			console.log(header[0])
// 		})
// 	`
// )

// ************append date to exiting file ***************

// let data = `\n const fs = require('fs')
// const csv = require('csv-parser')


// const result = []
// `

// fs.appendFileSync('output.ts', data)

// ************rename exiting file ***************

// fs.rename('./output.js', './output.ts', function (err) {
// 	if (err) console.log('ERROR: ' + err);
// 	console.log('successfull')
// });



// ************creating folder ***************

// fs.mkdir('./NEW_folder',(err)=>{
// 	if(err) throw err
// 	console.log('successfull')
// })
// fs.mkdirSync('./newFolder')



// ************rename folder ***************

// fs.renameSync('./newFolder','./Assets')


// ************opem folder ***************

fs.opendirSync('./Assets')
