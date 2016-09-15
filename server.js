var app = require('./app.js');
app.listen(app.get('port'),function () {
	console.log("server up and running on port" ,app.get('port'));
});