'use strict';
module.exports = {<% if(service) { %>
	init: function (Router, configurator, lodash, logger, <%= serviceName %>) {
		var that = this;

		var router = new Router({
			adminRoutes: require('./routes/admin.js')(configurator, lodash, logger, <%= serviceName %>),
			apiRoutes: require('./routes/api.js')(configurator, lodash, logger, <%= serviceName %>),
			baseRoutes: require('./routes/base.js')(configurator, lodash, logger, <%= serviceName %>),
			name: that.name
		});<%} else {%>
	init: function (Router, configurator, lodash, logger) {
		var that = this;

		var router = new Router({
			adminRoutes: require('./routes/admin.js')(configurator, lodash, logger),
			apiRoutes: require('./routes/api.js')(configurator, lodash, logger),
			baseRoutes: require('./routes/base.js')(configurator, lodash, logger),
			name: that.name
		});
<%} %>
		return router;
	},
	name: '<%= name %>'
};