const fs = require('fs')

fs.readFile('ct.csv','utf-8',(err,data)=>{
	// file content store in data varibale
	console.log(data)
})
