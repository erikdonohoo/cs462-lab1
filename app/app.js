var express = require('express'),
	app = express();

app.set('view engine', 'html');
app.use(express.bodyParser());

app.listen(3000);

// Return what you get
app.get('/mirror.cgi', require('./mirror')(app));
app.post('/mirror.cgi', require('./mirror')(app));

// Redirect
app.get('/redirect.cgi', require('./redirect')(app));
