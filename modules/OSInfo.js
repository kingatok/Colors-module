var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
		if (type === 'Darwin') {
			type = 'OSX';
		} else if (type === 'Windows_NT') {
			type = 'Windows';
		}
		console.log(('System:'.gray), type);
		console.log(('Release:'.red), release);

		var cpu = os.cpus()[0].model;
		console.log(('CPU model:'.blue), cpu);

		// var uptime = os.uptime();
		// console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
		time.print();

		var userInfo = os.userInfo();
		console.log(('User name:'.yellow), userInfo.username);
		console.log(('Home dir:'.grey), userInfo.homedir);
}

exports.print = getOSinfo;
