'use strict';

var baseRoutes = function (configurator, _, logger) {
	return function (router) {
		logger.log('<%= name %> public routes set');
		var renderHomePage = function(req, res){
			res.render('<%= name %>', {
				header: {
					module: ''
				}
			});
		};
		router.get('/', renderHomePage);
	};
};

module.exports = baseRoutes;