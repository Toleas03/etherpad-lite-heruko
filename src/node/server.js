var etherpad = require('etherpad-lite');
etherpad.settings.port = process.env.PORT || 9001;
etherpad.start();