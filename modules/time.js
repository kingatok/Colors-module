var os = require('os');

function formatTime() {
	var uptime = os.uptime();
	var hours = (uptime / 3600).toFixed(0);
	var minutes = ((uptime % 360)/60).toFixed(0);
	var seconds = ((uptime % 360) % 60); 

	console.log(('Uptime: '.green), hours, 'hours', minutes, 'minutes', seconds, 'seconds');
}

exports.print = formatTime;