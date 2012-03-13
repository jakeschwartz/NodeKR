var nano = require('nano')('http://jakeschwartz:mandolin@127.0.0.1:6984');
var users = nano.use('okr-users');

exports.authenticate = function(login, password, callback) {
    users.get(login, function(e,b,h){
        if (e) { 
        	console.log(e.message); 
        	callback(null); 
        	return;
        }

        if (b == null) { 
        	callback(null);
        	return; 
        }
        
        if (b.pass == password) { 
         	var report = 'retrieved: ';
        	console.log(report); 
        	callback(b); 
        	return; 
        }

    });
}