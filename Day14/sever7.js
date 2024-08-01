var fs=require('fs');

fs.writeFile('apple.txt','I am apple',function(err,file) {
	if(err) throw err;
	console.log('Saved!');
});