var fs=require('fs');

fs.unlink('mango.text',function(err) {
	if(err) throw err;
	console.log('File Deleted!');
});