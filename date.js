exports.dateParse = function(string) {
	var date = new Date(string);
	var now = new Date();
	if date < now {
		console.log("past");
	}
	else {
		console.log("future");
	}

};