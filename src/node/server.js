var etherpad = require('etherpad-lite');
var http = require('http');

var server = http.createServer(etherpad.app);
server.listen(process.env.PORT || 9001);