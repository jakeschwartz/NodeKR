
var nano = require('nano')('http://jakeschwartz:mandolin@127.0.0.1:6984');

var objkeys = nano.use('objkeys');
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Objective.ly' })
};

exports.all = function(req, res) {
	objkeys.view('OKRs','byOwner', function(e,b,h) {
		if (e) {
			console.log(e)
		}
		else {
			console.log(b.rows);
			res.render('all', {title: 'Objective.ly', data: b.rows})
		}
	});
};

exports.create = function(req, res) {
	res.render('create', {
		title: 'Create Your OKRs', 
		owner: req.session.user._id, 
		ownername: req.session.user.fullname
	})
};

exports.view = function(req, res) {
	objkeys.get(req.params.id, function(e,b,h) {
		if (e) {
			console.log(e)
		}
		else {
			console.log(b);
			res.render('view', {title: 'View', data: b})
		}
	});

};

exports.start = function(req, res) {
	res.render('start', {title: 'Objective.ly'})
};