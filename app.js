
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , auth = require('./auth.js')
  , nano = require('nano')('http://jakeschwartz:mandolin@127.0.0.1:6984');

var objkeys = nano.use('objkeys');
var users = nano.use('okr-users');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: "keyboard cat"}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/create', routes.create);
app.get('/view/:id', routes.view);
app.get('/edit', routes.edit);
app.get('/all', routes.all);

app.post('/login-post', function(req, res) {
	console.log(req.body.id);
	users.get(req.body.id, function(e,b,h){
		if (e) {
			console.log("Invalid Login or Password");
		}
		if (req.body.pass == b.pass) {
			req.session.user = b;
			console.log(req.session.user.pass);
			res.redirect('/create');
		}
		else {
			res.redirect('/');
		}
	});
});

app.post('/okr-post', function(req, res) {
	objkeys.insert(req.body, function(e,b,h) {
		if(e) {
			console.log(e);
		}
		else {
			console.log(b);
			console.log("This worked!");
			res.send("/view/" + b.id);
		}
	
	});
	
});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
