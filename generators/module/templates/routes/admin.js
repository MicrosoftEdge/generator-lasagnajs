'use strict';

var adminRoutes = function (configurator, _, logger) {
	return function (router) {
		logger.log('<%= name %> admin routes set');
		var renderHome = function (req, res) {
			res.render('<%= name %>-admin', {
				layout: 'admin'
			});
		};

		router.get('/', renderHome);
	};
};

module.exports = adminRoutes;