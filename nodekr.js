var express = require('express')
  , routes = require('./routes')
  , nano = require('nano')('http://127.0.0.1:5984');

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
app.get('/dates/:id', routes.addDates);
app.get('/start', routes.start);

app.post('/login-post', function(req, res) {
  console.log(req.body.id);
  users.get(req.body.id, function(e,b,h){
    if (e) {
      console.log("Invalid Login or Password");
    }
    if (req.body.pass == b.pass) {
      req.session.user = b;
      res.redirect('/start');
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

app.post('/view-post', function(req, res) {
  var i = req.body.address[0];
  var j = req.body.address[1];
  objkeys.get(req.body.doc, function(e, b, h){
    if (e) {
      console.log(e);
    }
    else {
      if (b.okr[i][j].depend) {
        b.okr[i][j].depend.push(req.body.user);
      }
      else {
        b.okr[i][j].depend = [];
        b.okr[i][j].depend.push(req.body.user);
      }
      objkeys.insert(b, function(e, b, h) {
        if (e) {
          console.log(e)
        }
        else {
          console.log(b)
        }
      });
    }
  });
});

app.post('/comment-post',function(req, res) {
	var date = new Date();
	var i = req.body.address[0];
	objkeys.get(req.body.doc, function(e, b, h) {
		if (e) {
			console.log(e)
		}
		else {
			if (b.okr[i].comments) {
				b.okr[i].comments.push({"user": req.body.user,"userfullname": req.session.user.fullname,"comment": req.body.text, "date": date});
				console.log(b.okr[i].comments);
			}
	
			else {
				b.okr[i].comments = [];
				console.log(req.session.user.fullname);
				b.okr[i].comments.push({"user": req.body.user, "userfullname": req.session.user.fullname, "comment": req.body.text});
			}
			objkeys.insert(b, function(e, b, h) {
				if (e) {
					console.log(e)
				}
				else {
					console.log(b)
				}
			});
		}	
	});
});


//User admin routes

app.get('/createuser', routes.createUser);
app.get('/edituser', routes.editUser);

app.post('/user-post', function(req, res){
  users.insert(req.body, function(e,b,h) {
    if(e) {
      console.log(e);
    }
    else {
      console.log(b);
      console.log("This worked!");
      res.redirect('/start');
    }

  });
});

app.post('/user-edit-post', function(req, res) {

});
