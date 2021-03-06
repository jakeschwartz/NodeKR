
var nano = require('nano')(process.env.COUCHDB);

var objkeys = nano.use('objkeys');
/*
 * GET home page.
 */

var title = "Objective.ly";

exports.index = function(req, res){
	res.render('index', {title: title, user: {fullname: "Guest"} });
};


exports.all = function(req, res) {
	if (req.session.user) {
		objkeys.view('OKRs','byOwner', function(e,b,h) {
			if (e) {
				console.log(e)
			}
			else {
				console.log(b.rows);
				res.render('all', {title: 'Objective.ly', user: req.session.user, data: b.rows})
			}
		});
	}
	else {
		res.render('index', {title: title, user: {fullname: "Guest"} });
	}
};

exports.create = function(req, res) {
	if (req.session.user) {
		res.render('create', {
			title: 'Create Your OKRs',
			user: req.session.user
		})
	}
	else {
		res.render('index', {title: title, user: {fullname: "Guest"} });
	}
};

exports.view = function(req, res) {
	if (req.session.user) {
		objkeys.get(req.params.id, function(e,b,h) {
			if (e) {
				console.log(e)
			}
			else {
				console.log(b);
				console.log(req.session.user);
				res.render('view', {title: 'View', user: req.session.user, data: b})
			}
		});
	}
	else {
		res.render('index', {title: title, user: {fullname: "Guest"} });
	}

};

exports.addDates = function(req, res) {
	if (req.session.user) {
		objkeys.get(req.params.id, function(e,b,h) {
			if (e) {
				console.log(e)
			}
			else {
				console.log(b);
				res.render('dates', {title: 'Add Dates', user: req.session.user, data: b})
			}
		});
	}
	else {
		res.render('index', {title: title, user: {fullname: "Guest"} });
	}

};

exports.start = function(req, res) {
	if (req.session.user) {
		res.render('start', {title: 'Objective.ly', user: req.session.user});
	}
	else {
		res.redirect('/');
	}
};

// User admin routes

exports.createUser = function(req, res) {
	res.render('createuser', {title: title, user: {fullname: "Guest"} });
};