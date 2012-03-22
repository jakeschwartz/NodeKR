var nodekr = require('./nodekr');

nodekr.listen(3000);
console.log("Express server listening on port %d in %s mode", nodekr.address().port, nodekr.settings.env);