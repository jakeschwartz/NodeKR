var nodekr = require('./nodekr');

nodekr.listen(process.env.PORT);
console.log("Express server listening on port %d in %s mode", nodekr.address().port, nodekr.settings.env);