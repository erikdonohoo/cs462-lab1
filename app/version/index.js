'use strict';

var versionregex = /\.(v[0-9]*)\+json$/;

function version (app) {
	return function (req, res) {
		if (!req.headers.Accept) {
			res.send(400, {status: 400, message: 'Must send Accept Header'});
			return;
		}

		var match;
		if (match = versionregex.exec(req.headers.Accept)) {
			res.json({
				version: match[0]
			});
		} else {
			res.send(400, {status: 400, message: 'Must send Accept Header with version'});
		}
	}
}

module.exports = version;
