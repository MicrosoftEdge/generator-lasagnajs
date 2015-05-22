'use strict';
module.exports = {
	init: function (Router, configurator, lodash, logger) {
		var that = this;

		var router = new Router({
			adminRoutes: require('./routes/admin.js')(configurator, lodash, logger),
			apiRoutes: require('./routes/api.js')(configurator, lodash, logger),
			baseRoutes: require('./routes/base.js')(configurator, lodash, logger),
			name: that.name
		});

		return router;

	},
	name: '<%= name %>',
	async: <%= async %>
};