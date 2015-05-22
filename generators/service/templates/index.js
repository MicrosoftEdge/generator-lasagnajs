'use strict';

var init = function (configurator, logger) {
	logger.log('<%= name %> initialized');
	var foo = function () {
		logger.log('foo called');
	};

	return {
		foo: foo
	};
};

module.exports = {
	init: init,
	name: '<%= name %>',
	async: <%= async %>
};