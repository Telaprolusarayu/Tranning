var fs=require('fs');

fs.rename('apple.txt','mango.text',function(err) {
	if(err) throw err;
	console.log('File Rename!');
});