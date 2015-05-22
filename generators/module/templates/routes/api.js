'use strict';

var apiRoutes = function (configurator, _, logger) {	
	return function (router) {
		logger.log('<%= name %> api routes set');
		var sendOK = function(req, res){
			res.send('OK');
		};
		
		
		router.get('/', sendOK);
	};
};

module.exports = apiRoutes;