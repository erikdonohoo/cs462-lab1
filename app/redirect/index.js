'use strict';

var redirectMap = {
	goog: 'http://google.com',
	face: 'http://facebook.com',
	yahoo: 'http://yahoo.com'
};

function redirect (app) {
	return function (req, res) {

		for (var prop in req.query) {
			if (redirectMap[prop]) {
				res.redirect(redirectMap[prop]);
				return;
			}
		}

		res.send({status: 400, error: 'Must supply valid param'});
	}
}

module.exports = redirect;
