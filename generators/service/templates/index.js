'use strict';
<%if(async) {%>
var init = function (configurator, database, logger) {
	var start = Date.now();
	var db;

	return database.getInstance('<%= name %>')
		.then(function(instance){
			db = instance;
			return db.getAllDocumentsAsync();
		})
		.then(function(documents){
			logger.log('Service <%= name %> loaded in ' + (Date.now - start)/1000);
			return {
				foo: function(){
					return documents.length;
				}
			}
		});
};
<%} else {%>
var init = function (configurator, logger) {
	logger.log('<%= name %> initialized');
	var foo = function () {
		logger.log('foo called');
	};

	return {
		foo: foo
	};
};
<% } %>
module.exports = {
	init: init,
	name: '<%= name %>',
	async: <%= async %>
};