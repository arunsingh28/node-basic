const fs = require('fs')

fs.readFile('ct.csv','utf-8',(err,data)=>{
	// file content store in data varibale


	// show file 
	// console.log(data)



	// create new file with data of that file


	fs.writeFile('newCT.txt',data,(err)=>{
		// if err occour
		if(err) throw err

		console.log('File Created Successfully.')
	})
})
