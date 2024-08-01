var express = require('express')
var  app = express();
router.get('/:id',(req,res){
	res.send('The id you specifide is'+req.params.id);
});
app.listen(3000);
