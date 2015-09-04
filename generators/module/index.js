'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.NamedBase.extend({
	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the ' + chalk.red('LasagnaJS') + ' generator for modules!'
		));

		var prompts = [];
		if(!this.name){
			prompts.push({
				type: 'string',
				name: 'name',
				message: 'What will be the name of the module?'
			});
		}

		prompts.push({
			type: 'confirm',
			name: 'service',
			message: 'Does your module need a service?',
			default: true
		});

		this.prompt(prompts, function (props) {
			this.props = props;
			// To access props later use this.props.someOption;

			done();
		}.bind(this));
	},
	writing: function () {
		console.log(this.name);
		var name = this.name || this.props.name;
		var service = this.props.service;

		var context = {
			name: name,
			service: service,
			serviceName: name + 'svc'
		};

		var destination = 'modules/' + name + '/';

		var files = ['routes/admin.js',
			'routes/api.js',
			'routes/base.js',
			'index.js'];

		var filesToRename = ['public/scripts/index.js',
			'public/styles/index.css',
			'views/index.handlebars',
			'views/index-admin.handlebars'];

		for (var i = 0; i < files.length; i++) {
			this.fs.copyTpl(
				this.templatePath(files[i]),
				this.destinationPath(destination + files[i]),
				context);
		}

		for (var i = 0; i < filesToRename.length; i++) {
			this.fs.copyTpl(
				this.templatePath(filesToRename[i]),
				this.destinationPath((destination + filesToRename[i]).replace('index', name)),
				context);
		}

		if (context.service) {
			this.composeWith('lasagnajs:service', {args: [name + 'svc'], options: {name: name + 'svc', async: true}});
			//var route = path.resolve(__dirname, '../service/index.js');
			//console.log(route);
			//var serviceGenerator = require(route);
			//serviceGenerator.writing.call({
			//	name: name + 'svc',
			//	prop: {async: true}
			//});
		}
	}
});